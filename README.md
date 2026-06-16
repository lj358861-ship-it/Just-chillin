# Just Chillin — prêt pour Railway

Hub de jeux (ColorShow, Loup-Garou, Action ou Vérité, Metropoly) servi par un
petit serveur Express. Firebase Realtime Database reste exactement comme
avant — uniquement côté client, rien ne change de ce côté.

## Ce qui a été corrigé : le bug de séquençage du Loup-Garou

**La cause racine.** Pendant la nuit, le client "coordinateur" planifiait
l'avancement de phase avec `setTimeout(..., 30000)` — *30 secondes à partir
de l'instant de l'appel*, pas à partir du vrai début de phase. Le souci :
ce timer était re-planifié à **chaque** changement Firebase, y compris un
ping `lastActivity` que le coordinateur réécrivait lui-même à chaque
snapshot — ce qui redéclenchait immédiatement un nouveau snapshot, qui
réécrivait `lastActivity`, etc. Une boucle auto-entretenue.

Conséquences concrètes :
- Le minuteur "officiel" de phase n'atteignait quasiment jamais son
  échéance réelle (sans cesse repoussé), donc une bonne partie de la
  fiabilité reposait sur un second minuteur local de secours — d'où des
  phases qui pouvaient sembler tourner en double, des rôles sautés, ou la
  nuit qui ne se débloquait pas toujours au bon moment.
- Chaque ping relançait `startNightTimer`, qui redémarrait le son du
  tic-tac depuis zéro → le bégaiement audio que tu entendais pendant la
  nuit.

**Le correctif (4 changements ciblés dans `werewolf.html`) :**
1. `lastActivity` est maintenant écrit par un `setInterval` dédié (toutes
   les 20s), complètement détaché du listener Firebase → plus de boucle
   auto-déclenchée.
2. `scheduleNightPhaseTimeout` est maintenant **ancré** sur
   `nightPhaseStart` (l'échéance réelle ne bouge plus jamais, peu importe
   combien de fois la fonction est rappelée) et **idempotent** (un appel
   redondant pour la même étape ne touche plus à rien).
3. Avant de faire avancer une phase, on revérifie que l'étape n'a pas déjà
   changé entre-temps (garde anti-doublon) — impossible de sauter un rôle
   même en cas de double déclenchement.
4. Le minuteur local (son + barre de progression) ne se relance plus s'il
   tourne déjà pour la phase en cours → plus de bégaiement audio.

J'ai vérifié ce comportement avec une simulation isolée (la planification
résiste à des écritures toutes les 150ms sans jamais sauter ni se bloquer)
et un contrôle de syntaxe JS complet du fichier. Les phases jour/défense
n'avaient pas ce problème (elles étaient déjà protégées par construction),
donc je les ai laissées intactes.

J'ai aussi remplacé les liens de partage codés en dur vers
`just-chillin4.netlify.app` (dans `werewolf.html`, `colorshow.html` et
`index.html`) par `window.location.origin` — comme ça les liens d'invitation
pointeront automatiquement vers ton domaine Railway une fois déployé, sans
rien à changer.

## Structure du projet

```
.
├── server.js          ← petit serveur Express (sert les fichiers statiques)
├── package.json
├── .gitignore
└── public/
    ├── index.html      (ex index_.html — le hub)
    ├── truthdare.html
    ├── truthdare.css
    ├── truthdare.js
    ├── werewolf.html   (corrigé)
    ├── colorshow.html
    └── metropoly.html  ← à ajouter toi-même (voir ci-dessous)
```

**Important :** `metropoly.html` n'est pas inclus dans ce paquet (il n'a
pas été modifié et fait 40 Mo). Copie ton fichier original directement
dans `public/metropoly.html` avant de déployer. Pareil pour toutes les
images/sons utilisés par les jeux (`01_villager_1.png`, `MOPN9382.png`,
`cardback.png`, `game_over_werewolf.mp3`, etc.) — mets-les tous à côté des
fichiers `.html` correspondants dans `public/`, exactement comme c'était
organisé sur Netlify.

## Tester en local

```bash
npm install
npm start
```
Puis ouvre `http://localhost:3000`.

## Déployer sur Railway

1. **Mets le projet sur GitHub** (Railway déploie depuis un repo Git) :
   ```bash
   git init
   git add .
   git commit -m "Just Chillin - ready for Railway"
   git remote add origin https://github.com/TON_USER/TON_REPO.git
   git push -u origin main
   ```

2. **Crée le projet Railway** : va sur [railway.com/new](https://railway.com/new),
   connecte-toi avec GitHub, clique **"Deploy from GitHub repo"**, choisis
   ton repo. Railway détecte automatiquement que c'est du Node.js (grâce à
   `package.json`) et lance `npm install` puis `npm start` — aucune
   configuration supplémentaire n'est nécessaire.

3. **Génère un domaine public** : une fois le déploiement terminé, ouvre le
   service → onglet **Settings** → section **Networking** → **Generate
   Domain**. Tu obtiens une URL du style `https://ton-app.up.railway.app`.

4. **(Optionnel) Healthcheck** : dans Settings → Deploy, tu peux renseigner
   `/health` comme Healthcheck Path — le serveur répond déjà à cette route.

5. **Firebase** : rien à configurer côté Railway. Le SDK Firebase tourne
   entièrement dans le navigateur avec la config publique déjà présente
   dans chaque fichier HTML (c'est normal et sans risque — la sécurité de
   Firebase Realtime Database se gère via les règles de sécurité côté
   Firebase, pas en cachant la clé d'API). Si tu n'as pas encore verrouillé
   tes règles de sécurité Firebase RTDB, c'est le bon moment d'y jeter un
   œil dans la console Firebase.

À partir de là, chaque `git push` sur la branche connectée redéploiera
automatiquement (CI/CD intégré). Railway facture à l'usage (temps de calcul
actif), pas un forfait gratuit illimité — regarde leur page tarifs si tu
veux les détails exacts.
