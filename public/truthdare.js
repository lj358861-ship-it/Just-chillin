/* ================================================
   ACTION OU VÉRITÉ — script.js
   v2.0 — Game Modes + Dynamic Themes
   ================================================ */

/* ==============================
   GAME MODES DEFINITION
   ============================== */
const GAME_MODES = {
  hardcore: {
    id: "hardcore",
    label: "Hardcore 🔞",
    emoji: "🔞",
    description: "Questions et gages torrides réservés aux adultes",
    color: "#ff2d6e",
    gradient: "linear-gradient(135deg,#ff0050,#c800ff)",
    bg1: "#1a0008",
    bg2: "#200010",
    glow1: "rgba(255,0,80,0.25)",
    glow2: "rgba(200,0,255,0.18)",
    particleColor: "255,0,80",
    cardResultBg:
      "linear-gradient(145deg,rgba(255,0,80,.3),rgba(200,0,255,.2))",
    cardResultBorder: "rgba(255,0,80,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(200,0,255,.25),rgba(255,0,80,.15))",
    cardQuestionBorder: "rgba(200,0,255,.4)",
    spinBtnBg: "linear-gradient(135deg,#ff0050,#c800ff)",
    truths: [
      "C'est quoi le fantasme le plus tabou que tu n'as jamais avoué ?",
      "Décris en détail ta pire expérience sexuelle.",
      "Tu as déjà eu des pensées sur quelqu'un dans cette pièce ? Sois honnête.",
      "Quel est l'endroit le plus insolite où tu as fait l'amour ?",
      "T'as déjà regardé les photos de l'ex de ton partenaire ? Avoue.",
      "Quel est le message le plus hot que tu aies jamais envoyé ?",
      "Décris ton type physique idéal sans filtre.",
      "Tu préfères être dominant(e) ou soumis(e) ? Explique.",
      "T'as déjà fait semblant pendant… tu sais quoi ? Avec qui ?",
      "Montre le dernier message que tu n'oserais pas lire à voix haute.",
      "T'as déjà eu un crush sur un(e) ami(e) de tes parents ? Lequel/laquelle ?",
      "Raconte le rêve érotique le plus bizarre que tu te rappelles.",
      "Quel est le truc le plus fou que tu ferais pour une nuit parfaite ?",
      "T'as déjà été en couple et flashé sur quelqu'un d'autre fort ? Qui ?",
      "Décris ta technique de séduction préférée sans mentir.",
    ],
    dares: [
      "Fais un massage des épaules à la personne à ta gauche pendant 30 secondes.",
      "Envoie un message flirty au dernier numéro de ton historique d'appels.",
      "Fais 20 secondes de danse lap dance improvisée pour le groupe.",
      "Montre le dernier meme ou photo que tu as envoyé.",
      "Prends la main de quelqu'un dans le groupe et ne la lâche pas pendant 2 tours.",
      "Fais une déclaration osée à la personne de ton choix dans le groupe.",
      "Lis à voix haute le dernier message que tu as reçu de quelqu'un qui te plaît.",
      "Imite comment tu te comportes quand tu flirtes — en exagérant.",
      "Dis à chaque personne du groupe quelque chose que tu trouves sexy chez elle.",
      "Fais semblant d'embrasser ta main pendant 10 secondes avec passion.",
      "Envoie un vocal à quelqu'un en dehors du groupe en disant 'je pense à toi'.",
      "Laisse le groupe vérifier tes stories Instagram des 7 derniers jours.",
      "Décris de façon très détaillée ton crush actuel au groupe.",
      "Change ta bio Instagram pour 'je cherche l'amour' pendant 5 minutes.",
      "Fais une dédicace romantique exagérée à la personne à ta droite.",
    ],
  },

  party: {
    id: "party",
    label: "Out with Friends 🥂",
    emoji: "🥂",
    description: "Gages boisson, shots et délires de soirée",
    color: "#ffb800",
    gradient: "linear-gradient(135deg,#ff8c00,#ffb800)",
    bg1: "#120800",
    bg2: "#1a0f00",
    glow1: "rgba(255,184,0,0.22)",
    glow2: "rgba(255,100,0,0.15)",
    particleColor: "255,184,0",
    cardResultBg:
      "linear-gradient(145deg,rgba(255,140,0,.3),rgba(255,184,0,.15))",
    cardResultBorder: "rgba(255,184,0,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(255,100,0,.25),rgba(255,184,0,.12))",
    cardQuestionBorder: "rgba(255,140,0,.4)",
    spinBtnBg: "linear-gradient(135deg,#ff8c00,#ffb800)",
    truths: [
      "Qui dans ce groupe t'a déjà saoulé(e) le plus profondément dans ta vie ?",
      "T'as déjà vomi sur quelqu'un lors d'une soirée ? Raconte.",
      "Quel est le shot le plus dégueulasse que tu as avalé pour faire plaisir ?",
      "T'as déjà flirté avec quelqu'un uniquement parce que tu étais bourré(e) ?",
      "Raconte ta plus grosse boulette en soirée que tu regretterais encore.",
      "T'as déjà menti pour pas payer ta tournée ? Avoue.",
      "Quelle est la chose la plus gênante que tu aies faite après trop bu ?",
      "T'as déjà bt quelqu'un dans cette salle ? Dis qui si oui.",
      "C'est quoi ton code secret pour dire 'je veux partir' en soirée ?",
      "T'as déjà fake un coup de fil pour échapper à quelqu'un lors d'une sortie ?",
      "T'as déjà pris un Uber en étant tellement chargé(e) que tu sais plus comment t'es rentré(e) ?",
      "Quelle soirée tu n'aurais jamais dû finir comme elle a fini ?",
      "Tu bois quoi quand tu veux impressionner vs quand t'es entre potes ?",
      "T'as déjà snitch quelqu'un après une soirée ? Qu'est-ce t'as dit ?",
      "Ton pire memory blackout — qu'est-ce que les autres t'ont raconté le lendemain ?",
    ],
    dares: [
      "Bois 2 gorgées de ton verre sans t'arrêter.",
      "Fais un blind taste : bois sans regarder ce que quelqu'un te prépare.",
      "Appelle quelqu'un que t'as pas appelé depuis plus de 6 mois. Maintenant.",
      "Fais le tour de la pièce en dansant avec chaque personne pendant 10 secondes.",
      "Bois à la santé de quelqu'un en faisant un discours d'1 minute minimum.",
      "Envoie une story 'bonne soirée à tous' à tes contacts. Screenshot pour prouver.",
      "Invente un cocktail avec ce qu'il y a là et fais le boire à quelqu'un.",
      "Joue 'je n'ai jamais' solo : dis 3 trucs que t'as jamais faits, si quelqu'un l'a fait il boit.",
      "Tu dois finir ton verre si tu échoues à faire rire quelqu'un dans les 30 prochaines secondes.",
      "Prends un selfie avec la tête la plus ugly du groupe et poste-le en story.",
      "Dis 'santé' dans 5 langues différentes sinon tu bois.",
      "Fais le défi : avale ce shot d'une façon originale que personne n'a encore faite ce soir.",
      "Sers une tournée à tout le monde et dis pourquoi chaque personne mérite de boire.",
      "Mime une scène de film célèbre complètement bourré. Le groupe devine, sinon tu rebois.",
      "Fais le karaoké du refrain d'une chanson imposée par le groupe, sans hésiter.",
    ],
  },

  knowme: {
    id: "knowme",
    label: "Who Knows Best? 🧠",
    emoji: "🧠",
    description: "Qui te connaît vraiment ? Questions sur l'autre",
    color: "#00d4ff",
    gradient: "linear-gradient(135deg,#0050c8,#00d4ff)",
    bg1: "#000d1a",
    bg2: "#001020",
    glow1: "rgba(0,212,255,0.2)",
    glow2: "rgba(0,80,200,0.15)",
    particleColor: "0,212,255",
    cardResultBg:
      "linear-gradient(145deg,rgba(0,80,200,.3),rgba(0,212,255,.15))",
    cardResultBorder: "rgba(0,212,255,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(0,50,180,.25),rgba(0,212,255,.12))",
    cardQuestionBorder: "rgba(0,150,255,.4)",
    spinBtnBg: "linear-gradient(135deg,#0050c8,#00d4ff)",
    truths: [
      "Dis la couleur préférée de la personne désignée. Elle confirme ou infirme.",
      "Quel est le plus grand rêve de [joueur] selon toi ? Il/elle dit si t'as raison.",
      "Cite 3 qualités que [joueur] se donne lui/elle-même. Vrai ou faux ?",
      "Quel est le plus grand défaut de [joueur] que lui/elle reconnaîtrait lui/elle-même ?",
      "Quelle est la chose que [joueur] ferait en premier avec 1 million d'euros ?",
      "Quel film ou série représente le mieux la personnalité de [joueur] ?",
      "Décris comment [joueur] réagit quand il/elle est stressé(e) au max.",
      "Quel est le souvenir d'enfance qui a le plus marqué [joueur] selon toi ?",
      "Si [joueur] devait changer une chose dans sa vie maintenant, ce serait quoi ?",
      "Quel est le talent caché de [joueur] que la plupart des gens ignorent ?",
      "Quel est le plat préféré de [joueur] et pourquoi il/elle l'aime autant ?",
      "Quelle est la peur secrète de [joueur] selon toi ?",
      "Qu'est-ce que [joueur] cherche vraiment dans une amitié ?",
      "Raconte un moment où [joueur] t'a rendu(e) vraiment fier/fière de lui/elle.",
      "Si [joueur] était un animal, lequel serait-il/elle et pourquoi ?",
    ],
    dares: [
      "Imite [joueur] aussi fidèlement que possible pendant 30 secondes.",
      "Écris 3 mots sur un bout de papier qui définissent [joueur]. Il/elle commente chacun.",
      "Raconte à voix haute ton plus beau souvenir avec [joueur] — sans tricher.",
      "Dis à [joueur] quelque chose que tu n'as jamais pris le temps de lui/elle dire.",
      "Prends une photo qui représente la personnalité de [joueur] avec ce que t'as autour de toi.",
      "Invente un surnom original pour [joueur] et justifie-le.",
      "Présente [joueur] à un inconnu imaginaire en 30 secondes comme si c'était la personne la plus incroyable au monde.",
      "Devine ce que [joueur] pense EN CE MOMENT PRÉCIS et dis-le à voix haute.",
      "Fais une blague privée que seul(e) [joueur] comprendrait.",
      "Chante un bout d'une chanson qui rappelle [joueur] et explique pourquoi.",
      "Montre une photo de toi avec [joueur] que t'as sur ton téléphone.",
      "Dis à [joueur] ce que tu changerais dans votre amitié si tu pouvais.",
      "Décris la scène de film qui colle le plus à [joueur] dans la vraie vie.",
      "Fais la liste des 5 mots que [joueur] utilise le plus souvent, il/elle juge si c'est exact.",
      "Dessine un portrait de [joueur] en 60 secondes. Il/elle le note sur 10.",
    ],
  },

  wild: {
    id: "wild",
    label: "Wild Card 🃏",
    emoji: "🃏",
    description: "Mix explosif : questions folles, gages absurdes, chaos total",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg,#7c3aed,#ec4899)",
    bg1: "#0d0015",
    bg2: "#130020",
    glow1: "rgba(124,58,237,0.22)",
    glow2: "rgba(236,72,153,0.15)",
    particleColor: "124,58,237",
    cardResultBg:
      "linear-gradient(145deg,rgba(124,58,237,.3),rgba(236,72,153,.15))",
    cardResultBorder: "rgba(124,58,237,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(100,20,220,.25),rgba(236,72,153,.12))",
    cardQuestionBorder: "rgba(150,50,255,.4)",
    spinBtnBg: "linear-gradient(135deg,#7c3aed,#ec4899)",
    truths: [
      "Si t'avais le pouvoir d'effacer un souvenir, lequel tu effacerais ?",
      "Quel est le pire mensonge que tu aies jamais dit et dont tu es fier(ère) ?",
      "Si tu pouvais lire dans les pensées d'une personne dans cette salle, qui ce serait ?",
      "T'as déjà fait quelque chose d'illégal sans te faire prendre ? Kess t'as fait ?",
      "Quel est le truc le plus absurde pour lequel t'as déjà pleuré ?",
      "Si ta vie était un film, quel acteur jouerait le rôle du vilain ?",
      "T'as déjà eu des pensées étranges à un enterrement ou un mariage ? Lesquelles ?",
      "Si t'avais 24h à vivre, qu'est-ce tu ferais en PREMIER ?",
      "Quelle est la chose la plus stupide pour laquelle t'as dépensé de l'argent ?",
      "Si t'étais invisible pendant une heure, qu'est-ce tu ferais VRAIMENT ?",
      "T'as déjà prétendu pas recevoir un message pour éviter quelqu'un ? Qui ?",
      "Quelle est ta théorie du complot secrète que t'oses pas avouer ?",
      "Si tu pouvais changer une règle de la société, ce serait laquelle ?",
      "Quel pouvoir de super-héros choisirais-tu si tu pouvais pas voler ?",
      "T'as déjà eu peur d'un truc complètement irationnel ? Quoi ?",
    ],
    dares: [
      "Fais 60 secondes de stand-up sur la personne à ta gauche. Elle peut pas se défendre.",
      "Change ton fond d'écran pour une photo imposée par le groupe pendant 1h.",
      "Parle uniquement en rap pendant les 3 prochains tours.",
      "Appelle ta mère et dis-lui que t'as un tatouage. Réaction en direct.",
      "Mange quelque chose de dégoûtant que le groupe prépare avec ce qui est disponible.",
      "Fais 1 minute de méditation à voix haute avec les yeux ouverts et un visage sérieux.",
      "Envoie le dernier meme de ta galerie à ta grand-mère ou à un parent.",
      "Joue un personnage de dessin animé pour les 5 prochaines minutes. Complètement.",
      "Fais une battle de freestyle contre la personne de ton choix, 30 secondes chacun.",
      "Révèle le contenu de ta liste de lecture YouTube ou Spotify sans skip.",
      "Imite chaque personne du groupe en 10 secondes max. Elles peuvent protester.",
      "Ecris un poème de 4 vers sur la personne désignée. Maintenant. À voix haute.",
      "Mets un statut WhatsApp gênant imposé par le groupe, visible 10 minutes.",
      "Fais l'interview d'une plante ou d'un objet dans la pièce comme si c'était une célébrité.",
      "Fais un défi d'équilibre imposé par le groupe : ils choisissent la position, tu tiens 30s.",
    ],
  },

  spicy: {
    id: "spicy",
    label: "Spicy Roast 🌶️",
    emoji: "🌶️",
    description: "Vérités piquantes, gages humiliants, aucune pitié",
    color: "#ef4444",
    gradient: "linear-gradient(135deg,#ef4444,#f97316)",
    bg1: "#110500",
    bg2: "#1a0800",
    glow1: "rgba(239,68,68,0.22)",
    glow2: "rgba(249,115,22,0.15)",
    particleColor: "239,68,68",
    cardResultBg:
      "linear-gradient(145deg,rgba(239,68,68,.3),rgba(249,115,22,.15))",
    cardResultBorder: "rgba(239,68,68,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(200,40,0,.25),rgba(249,115,22,.12))",
    cardQuestionBorder: "rgba(239,68,68,.4)",
    spinBtnBg: "linear-gradient(135deg,#ef4444,#f97316)",
    truths: [
      "Qui dans ce groupe t'énerve le plus souvent et pourquoi — sois honnête.",
      "Quel est le défaut que t'as et que tout le monde voit sauf toi ?",
      "T'as déjà critiqué quelqu'un derrière son dos alors qu'il/elle te souriait ?",
      "Quelle personne dans ce groupe tu décrirais comme 'trop dans ses histoires' ?",
      "C'est quoi le truc le plus pathétique que tu aies fait pour attirer l'attention ?",
      "T'as déjà recopié/plagié quelque chose et prétendu que c'était toi ? Quoi ?",
      "Si chaque personne ici devait donner une note sur 10 à ta personnalité, t'aurais combien selon toi ?",
      "Quel est le pire conseil que t'aies jamais donné et suivi ?",
      "T'as déjà menti sur ton niveau dans quelque chose pour impressionner ? Quoi ?",
      "Quelle est ta plus grande immaturité que t'arrives pas à corriger ?",
      "Quel est le truc le plus raté que t'as tenté d'apprendre sans jamais y arriver ?",
      "Si quelqu'un ici devait jouer le rôle de 'la personne toxique' dans un film, qui ce serait ?",
      "T'as déjà fait semblant d'aimer quelque chose juste pour appartenir à un groupe ?",
      "Quelle décision dans ta vie tu t'expliques pas encore toi-même ?",
      "Dis à la personne en face de toi son pire défaut — en un mot. Direct.",
    ],
    dares: [
      "Le groupe choisit ton prochain fond d'écran. T'as pas le droit de refuser.",
      "Lis à voix haute ta galerie d'images : le groupe choisit quelle photo tu commentes.",
      "Reçois un roast de 1 minute de chaque personne du groupe sans rien dire.",
      "Fais une imitation de toi-même qui se plante — exagère au max.",
      "Le groupe vote ta pire habitude. T'es d'accord ou tu débats en 30 secondes.",
      "Envoie un audio de toi qui chante à quelqu'un au hasard dans tes contacts.",
      "Le groupe choisit un surnom humiliant que tu gardes pour le reste de la soirée.",
      "Lis à voix haute les notifications que t'as ignorées aujourd'hui.",
      "Fais un discours de 45 secondes pour te défendre des 3 pires critiques que le groupe pourrait te faire.",
      "Imite quelqu'un du groupe qui te critique. La personne confirme si c'est exact.",
      "Laisse quelqu'un envoyer un message à quelqu'un de ton choix — il/elle rédige le texte.",
      "Fais une liste de tes 3 gros défauts devant tout le monde sans sourire.",
      "Reçois une critique constructive de chaque joueur et tu dois dire 'merci, t'as raison'.",
      "Le groupe note ta tenue ce soir sur 10. T'as 30 secondes pour la défendre.",
      "Fais une démonstration de ton talent le plus nul devant tout le monde.",
    ],
  },

  lovers: {
    id: "lovers",
    label: "Lovers 💕",
    emoji: "💕",
    description: "Questions tendres et complices pour couples",
    color: "#f472b6",
    bg1: "#180010",
    bg2: "#200018",
    glow1: "rgba(244,114,182,0.22)",
    glow2: "rgba(219,39,119,0.15)",
    particleColor: "244,114,182",
    cardResultBg:
      "linear-gradient(145deg,rgba(219,39,119,.3),rgba(244,114,182,.15))",
    cardResultBorder: "rgba(244,114,182,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(160,20,100,.25),rgba(244,114,182,.12))",
    cardQuestionBorder: "rgba(244,114,182,.4)",
    spinBtnBg: "linear-gradient(135deg,#db2777,#f472b6)",
    truths: [
      "Quel est le moment exact où tu as su que tu étais amoureux(se) de moi ?",
      "Qu'est-ce qui te rend fier(ère) de moi que tu ne me dis pas assez souvent ?",
      "Décris notre première rencontre de ton point de vue — sans rien cacher.",
      "Quel est ton souvenir préféré qu'on partage depuis qu'on est ensemble ?",
      "Quelle habitude chez moi te fait sourire même quand tu ne veux pas ?",
      "Si tu pouvais changer une chose dans notre couple, ce serait quoi ?",
      "Qu'est-ce qui te manque le plus quand on est séparés longtemps ?",
      "Raconte un moment où tu as été jaloux(se) mais tu ne l'as pas montré.",
      "Qu'est-ce que je fais qui te fait encore avoir des papillons après tout ce temps ?",
      "Quel est le rêve qu'on a ensemble que tu veux absolument qu'on réalise ?",
      "Qu'est-ce que tu n'as jamais osé me demander mais tu veux savoir ?",
      "Comment tu m'aurais abordé(e) si on s'était rencontrés dans un contexte totalement différent ?",
      "Quelle est la chose que je t'ai dite ou faite qui t'a le plus touché(e) ?",
      "Qu'est-ce que les gens ne savent pas sur nous deux que toi tu chéris ?",
      "Si tu pouvais revivre une journée avec moi, laquelle ce serait et pourquoi ?",
    ],
    dares: [
      "Dis-moi trois choses que tu aimes chez moi que tu ne m'as jamais dites.",
      "Prends une photo de nous deux maintenant et mets-la en fond d'écran.",
      "Écris-moi un message que tu n'aurais jamais osé envoyer — maintenant tu dois.",
      "Fais-moi un compliment sincère sur quelque chose que je fais souvent et que tu remarques.",
      "Chante le premier refrain de la chanson qui te fait penser à nous.",
      "Raconte à voix haute le moment où tu étais le plus impressionné(e) par moi.",
      "Fais-moi un bisou là où tu n'en fais jamais d'habitude.",
      "Décris comment tu me présenterais à quelqu'un qui ne me connaît pas du tout.",
      "Envoie à un(e) ami(e) un message qui dit simplement 'je suis avec la meilleure personne du monde'.",
      "Donne-moi un surnom affectueux que tu n'as jamais utilisé et explique pourquoi ce mot.",
      "Ferme les yeux et décris à voix haute ce que tu vois quand tu penses à notre futur.",
      "Dis-moi quelque chose que tu es content(e) qu'on n'ait jamais fait ensemble, et pourquoi.",
      "Fais une promesse concrète et vérifiable que tu peux tenir avant la fin de la semaine.",
      "Imite comment je réagis quand je suis de mauvaise humeur — avec bienveillance.",
      "Prépare-moi notre prochain date parfait : lieu, ambiance, menu — en 60 secondes.",
    ],
  },

  hardcouple: {
    id: "hardcouple",
    label: "Hardcore Couple 🔥",
    emoji: "🔥",
    description: "Version adults-only pour couples sans filtre",
    color: "#ff4d6d",
    bg1: "#180008",
    bg2: "#200010",
    glow1: "rgba(255,77,109,0.28)",
    glow2: "rgba(201,24,74,0.2)",
    particleColor: "255,77,109",
    cardResultBg:
      "linear-gradient(145deg,rgba(201,24,74,.35),rgba(255,77,109,.2))",
    cardResultBorder: "rgba(255,77,109,.6)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(150,10,50,.3),rgba(255,77,109,.15))",
    cardQuestionBorder: "rgba(255,77,109,.5)",
    spinBtnBg: "linear-gradient(135deg,#c9184a,#ff4d6d)",
    truths: [
      "Quel est le fantasme qu'on n'a pas encore réalisé ensemble et que tu veux vraiment vivre ?",
      "Y'a un endroit insolite où tu veux qu'on fasse l'amour qu'on n'a jamais essayé ?",
      "T'as jamais osé me dire ce que tu voulais vraiment en dehors de notre routine — dis-le maintenant.",
      "C'est quoi la chose que je fais qui te met le plus dans l'ambiance, sans que tu me l'aies dit ?",
      "Décris en détail ta scène préférée de notre vie intime depuis qu'on est ensemble.",
      "Y'a quelque chose que t'as vu ou lu et que tu veux qu'on essaie ? Dis exactement quoi.",
      "Qu'est-ce que tu aimerais que je fasse plus souvent sans que tu aies à demander ?",
      "Si tu pouvais choisir le décor idéal pour une nuit parfaite avec moi, ce serait où et comment ?",
      "T'as déjà fait semblant de pas être d'humeur alors que t'avais envie ? C'était quand ?",
      "Qu'est-ce que tu n'oserais jamais demander à voix haute mais tu rêves d'essayer ?",
      "Décris la tenue qui me rendrait irrésistible selon toi — sois précis(e).",
      "Si t'avais une soirée entière juste pour nous deux, pas de limites, qu'est-ce tu planifierais ?",
      "Raconte la fois où le désir était le plus fort entre nous — qu'est-ce qui l'avait déclenché ?",
      "Y'a un rôle ou un scénario imaginaire que tu voudrais jouer avec moi ? Lequel ?",
      "Qu'est-ce qui te ferait craquer instantanément si je le faisais maintenant ?",
    ],
    dares: [
      "Envoie-moi un message vocal d'1 minute qui dit tout ce que tu veux sans te censurer.",
      "Ecris sur un papier quelque chose qu'on doit faire avant la fin du mois. Je lis. On garde le papier.",
      "Fais-moi le regard le plus séducteur que t'es capable de faire. Tiens-le 10 secondes.",
      "Chuchote-moi quelque chose à l'oreille que tu n'oserais pas dire à voix haute.",
      "Choisis dans mes vêtements ce que tu préfères me voir porter et dis pourquoi.",
      "Montre-moi un geste qui signifie 'j'ai envie de toi' qu'on utilisera comme code désormais.",
      "Envoie-moi un message qui commence par 'La prochaine fois qu'on est seuls...'",
      "Dis-moi exactement où j'ai le droit de t'embrasser là maintenant.",
      "Fais-moi un massage de 2 minutes sans parler, juste les mains.",
      "Lis à voix haute le dernier message flirty qu'on s'est envoyés.",
      "Décris en 60 secondes ta scène de film romantique/sensuel préférée et pourquoi elle te parle.",
      "Dis-moi 3 choses que tu trouves physiquement irrésistibles chez moi. Précise.",
      "Improvise 30 secondes de slow sans musique. Juste toi et moi.",
      "Envoie à tes contacts un statut ambigu qui nous fait rire.",
      "Dis-moi la prochaine chose concrète qu'on va faire ensemble. Donne une date. C'est un engagement.",
    ],
  },

  faraway: {
    id: "faraway",
    label: "Far Away Love 🌍",
    emoji: "🌍",
    description: "Pour les couples à distance — connexion profonde",
    color: "#60a5fa",
    bg1: "#00080f",
    bg2: "#000d18",
    glow1: "rgba(96,165,250,0.2)",
    glow2: "rgba(29,78,216,0.15)",
    particleColor: "96,165,250",
    cardResultBg:
      "linear-gradient(145deg,rgba(29,78,216,.3),rgba(96,165,250,.15))",
    cardResultBorder: "rgba(96,165,250,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(15,50,180,.25),rgba(96,165,250,.12))",
    cardQuestionBorder: "rgba(96,165,250,.4)",
    spinBtnBg: "linear-gradient(135deg,#1d4ed8,#60a5fa)",
    truths: [
      "Quelle heure de la journée est la pire pour toi à cause de la distance ? Pourquoi ?",
      "C'est quoi la première chose qu'on va faire quand on se retrouve ?",
      "T'as déjà eu une soirée où la distance t'a tellement pesé que tu voulais tout plaquer ? Dis-moi.",
      "Quel objet chez toi te fait penser à moi immédiatement quand tu le vois ?",
      "Qu'est-ce que tu fais quand tu veux me sentir proche mais que t'arrives pas à m'appeler ?",
      "Raconte le dernier rêve que t'as fait avec moi dedans.",
      "Qu'est-ce qui te pèse le plus dans notre relation à distance que tu minimises d'habitude ?",
      "Si tu pouvais me téléporter chez toi pour juste 2 heures, qu'est-ce on ferait exactement ?",
      "C'est quoi la chose que tu ne m'as pas dite parce que t'avais peur que ça m'inquiète ?",
      "Comment tu tiens les jours où la distance semble insurmontable ?",
      "Y'a un endroit dans ta ville où tu t'imagines m'emmener pour la première fois ?",
      "Qu'est-ce qui te manque le plus — la présence physique, la routine quotidienne, ou autre chose ?",
      "Dis-moi quelque chose que tu aurais dit à voix haute si t'avais été là au lieu d'un message.",
      "Quelle chanson t'écoutes quand tu penses à moi et tu veux rester dans cet état ?",
      "Comment tu imagines notre vie dans 3 ans — une ville, une maison, un quotidien précis ?",
    ],
    dares: [
      "Envoie-moi une photo de ta vue depuis ta fenêtre là maintenant. Sans mise en scène.",
      "Mets le même morceau de musique qu'on va écouter simultanément pendant 3 minutes sans parler.",
      "Fais-moi une visite guidée de ta chambre en 60 secondes.",
      "Écris-moi une lettre de 5 phrases comme si c'était 1950 et tu n'avais qu'une feuille.",
      "Dis-moi 3 choses que tu veux qu'on fasse dans les 30 prochains jours ensemble.",
      "Prends un screenshot de notre dernier échange qui t'a le plus touché(e) et dis pourquoi.",
      "Montre-moi quelque chose dans ton espace qui me représente ou me rappelle à toi.",
      "Mets ton oreiller de la même façon qu'on met souvent les nôtres et prends une photo.",
      "Dis-moi l'heure exacte de notre prochain appel et bloque-le dans ton agenda. Devant moi.",
      "Lis à voix haute le premier message qu'on s'est jamais envoyé si tu peux le retrouver.",
      "Commande-moi quelque chose en ligne à livrer chez moi — même un truc symbolique.",
      "Filme 15 secondes de ta journée là maintenant sans filtre et envoie.",
      "Décris l'appartement idéal qu'on partagerait si on était dans la même ville.",
      "Donne-moi un jour précis dans les 6 prochains mois où on se retrouve. Une date fixe.",
      "Envoie-moi un vocal en chuchotant quelque chose que tu voudrais me dire si j'étais là.",
    ],
  },

  newlove: {
    id: "newlove",
    label: "Fresh Crush 🦋",
    emoji: "🦋",
    description: "Début de relation, premier flirt, découverte de l'autre",
    color: "#a78bfa",
    bg1: "#08001a",
    bg2: "#0f0020",
    glow1: "rgba(167,139,250,0.2)",
    glow2: "rgba(124,58,237,0.15)",
    particleColor: "167,139,250",
    cardResultBg:
      "linear-gradient(145deg,rgba(124,58,237,.3),rgba(167,139,250,.15))",
    cardResultBorder: "rgba(167,139,250,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(80,20,200,.25),rgba(167,139,250,.12))",
    cardQuestionBorder: "rgba(167,139,250,.4)",
    spinBtnBg: "linear-gradient(135deg,#7c3aed,#a78bfa)",
    truths: [
      "C'était quoi la toute première chose que t'as remarquée chez moi ?",
      "T'as eu peur de rater ta chance avec moi à un moment ? Lequel ?",
      "Qu'est-ce que tu faisais quand j'ai envoyé mon premier message ? Tu t'en rappelles ?",
      "C'est quoi le moment où t'as réalisé que tu voulais vraiment me connaître mieux ?",
      "T'as déjà cherché mon nom ou mon compte quelque part avant qu'on se parle vraiment ?",
      "Quelle est la question que tu voudrais me poser depuis le début mais t'as jamais osé ?",
      "Comment t'aurais réagi si je t'avais abordé(e) de façon directe dès le début ?",
      "Qu'est-ce qui t'attire chez moi au-delà du physique, là maintenant ?",
      "T'en as parlé à quelqu'un de moi ? Qu'est-ce que t'as dit ?",
      "T'as déjà imaginé comment serait un premier rendez-vous avec moi ?",
      "C'est quoi la chose chez moi qui te surprend le plus par rapport à ce que t'imaginais ?",
      "Comment tu me décrirais en 3 mots à quelqu'un qui ne me connaît pas ?",
      "T'as peur de quelque chose dans ce qui pourrait se passer entre nous ?",
      "Si tu pouvais savoir une seule chose sur moi maintenant, ce serait quoi ?",
      "Qu'est-ce qui te ferait vouloir aller plus loin entre nous ?",
    ],
    dares: [
      "Envoie-moi un compliment sincère que tu n'aurais jamais dit en temps normal.",
      "Dis-moi une chose qu'on a en commun que t'as découvert récemment et qui t'a surpris(e).",
      "Fais-moi écouter la chanson qui représente le mieux l'état dans lequel je te mets.",
      "Montre-moi ta photo préférée de toi — pas la plus belle pour les autres, celle qui te représente.",
      "Dis-moi quelque chose que tu fais tout seul(e) que tu n'as encore jamais partagé.",
      "Envoie un message à un(e) ami(e) en disant 'j'ai rencontré quelqu'un d'intéressant'.",
      "Choisis une activité qu'on pourrait faire ensemble et propose une date concrète.",
      "Dis-moi quel emoji te fait penser à moi et pourquoi celui-là précisément.",
      "Montre-moi ton fond d'écran actuel et raconte ce qu'il représente pour toi.",
      "Lis n'importe quoi à voix haute 30 secondes — je veux entendre ta voix naturelle.",
      "Dis-moi 1 qualité et 1 défaut que tu penses avoir en relation. Honnêtement.",
      "Pose-moi la vraie question que tu voulais me poser depuis le début.",
      "Envoie-moi ta recommandation préférée — film, série, musique, peu importe.",
      "Imite comment tu te comportes quand quelqu'un te plaît vraiment. Exagère pas.",
      "Dis-moi si t'es du genre à faire le premier pas ou à attendre — et pourquoi.",
    ],
  },

  custom: {
    id: "custom",
    label: "Personnalisé ✏️",
    emoji: "✏️",
    description: "Crée tes propres questions et gages",
    color: "#a3e635",
    gradient: "linear-gradient(135deg,#16a34a,#a3e635)",
    bg1: "#030d00",
    bg2: "#071200",
    glow1: "rgba(163,230,53,0.18)",
    glow2: "rgba(22,163,74,0.12)",
    particleColor: "163,230,53",
    cardResultBg:
      "linear-gradient(145deg,rgba(22,163,74,.3),rgba(163,230,53,.15))",
    cardResultBorder: "rgba(163,230,53,.5)",
    cardQuestionBg:
      "linear-gradient(145deg,rgba(10,100,30,.25),rgba(163,230,53,.12))",
    cardQuestionBorder: "rgba(100,200,50,.4)",
    spinBtnBg: "linear-gradient(135deg,#16a34a,#a3e635)",
    truths: [],
    dares: [],
  },
};

/* ==============================
   STATE
   ============================== */

/* ── GLOBAL STATE ───────────────────────── */
let currentMode = null;
let pendingDestination = null;
let players = [];
let currentRotation = 0;
let isOnline = false;
let onlinePlayers = [];
let currentRoom = null;
const ROOM_INACTIVITY_TIMEOUT = 5 * 60 * 1000;
let roomActivityTimers = {};

const AVATARS = [
  "😈",
  "👿",
  "🤡",
  "💀",
  "👻",
  "🎭",
  "🔥",
  "⚡",
  "🌙",
  "🎃",
  "🦊",
  "🐺",
  "🦁",
  "🐯",
  "🦋",
  "🌺",
  "🍭",
  "🎲",
  "🃏",
  "🍾",
  "🥂",
  "🎸",
  "🎤",
  "👑",
  "🤴",
  "🧙",
  "🧛",
  "🧜",
  "🧝",
];

/* ── JUST CHILLIN INTEGRATION ───────────── */
function loadPlayersFromJustChillin() {
  try {
    const jcUser = localStorage.getItem("jc_user");
    const jcFriends = localStorage.getItem("jc_friends");
    if (!jcUser) return null;
    const user = JSON.parse(jcUser);
    const friends = jcFriends ? JSON.parse(jcFriends) : [];
    const playersFromJC = [];
    playersFromJC.push({
      name: user.name || user.username,
      avatar: user.emoji || "🎭",
      truths: [],
      dares: [],
      fromJustChillin: true,
    });
    if (friends && Array.isArray(friends)) {
      friends
        .filter((f) => f.status === "online" || f.status === "away")
        .forEach((friend) => {
          playersFromJC.push({
            name: friend.name,
            avatar: friend.emoji || "🎭",
            truths: [],
            dares: [],
            fromJustChillin: true,
          });
        });
    }
    return playersFromJC.length > 0 ? playersFromJC : null;
  } catch (e) {
    return null;
  }
}

/* ── PROFILE ────────────────────────────── */
let deviceProfile = null;
let selectedAvatar = null;

function generateDeviceId() {
  return (
    "dev_" +
    Math.random().toString(36).substr(2, 9) +
    "_" +
    Date.now().toString(36)
  );
}

function loadProfile() {
  try {
    const raw = localStorage.getItem("wud_profile");
    if (raw) {
      deviceProfile = JSON.parse(raw);
      return true;
    }
  } catch (e) {}
  return false;
}

function saveProfile() {
  const nameEl = document.getElementById("profileNameInput");
  const name = nameEl.value.trim();
  if (!name) {
    nameEl.focus();
    return;
  }
  if (!selectedAvatar) {
    alert("Choisis un avatar !");
    return;
  }

  const existingProfile = localStorage.getItem("wud_profile");
  const sessionLocked = sessionStorage.getItem("wud_session_locked");

  let id;
  if (existingProfile && sessionLocked) {
    id = JSON.parse(existingProfile).id;
  } else {
    id = generateDeviceId();
  }

  deviceProfile = { id, name, avatar: selectedAvatar };
  localStorage.setItem("wud_profile", JSON.stringify(deviceProfile));
  sessionStorage.setItem("wud_session_locked", "true");
  showMenu();
}

function editProfile() {
  if (deviceProfile) {
    document.getElementById("profileNameInput").value = deviceProfile.name;
    selectedAvatar = deviceProfile.avatar;
    highlightSelectedAvatar();
  }
  showDiv("profileCreate");
}

function showMenu() {
  if (!deviceProfile) return;
  document.getElementById("menuAvatar").textContent = deviceProfile.avatar;
  document.getElementById("menuName").textContent = deviceProfile.name;
  document.getElementById("menuId").textContent =
    "ID: " + deviceProfile.id.split("_")[1];
  showDiv("menu");
}

function buildAvatarGrid() {
  const grid = document.getElementById("avatarGrid");
  grid.innerHTML = "";
  AVATARS.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.className = "avatar-cell";
    btn.textContent = emoji;
    btn.onclick = () => selectAvatar(emoji, btn);
    grid.appendChild(btn);
  });
}

function selectAvatar(emoji, btn) {
  selectedAvatar = emoji;
  document.getElementById("avatarPreviewEmoji").textContent = emoji;
  document.getElementById("avatarPreview").classList.add("has-avatar");
  highlightSelectedAvatar();
}

function highlightSelectedAvatar() {
  document.querySelectorAll(".avatar-cell").forEach((btn) => {
    btn.classList.toggle("selected", btn.textContent === selectedAvatar);
  });
}

/* ── SOUNDS ─────────────────────────────── */
let soundEnabled = true;

function makeAudio(path) {
  const a = new Audio(path);
  a.onerror = () => {};
  return a;
}

const clickSound = makeAudio("506054__mellau__button-click-1.wav");
const spinSound = makeAudio("445854__jchiledred__spinning-bottle.wav");
const suspenseSound = makeAudio(
  "139112__afleetingspeck__suspense-bass-drum-bd-pattern.wav",
);
const bgMusic = makeAudio("atlasaudio-chill-chill-music-507815.mp3");
const tick = makeAudio("487733__lilmati__ticking-timer-45-sec.wav");

bgMusic.loop = true;
bgMusic.volume = 0.4;

document.addEventListener(
  "click",
  () => {
    if (soundEnabled) bgMusic.play().catch(() => {});
  },
  { once: true },
);

function playSound(s) {
  if (!soundEnabled) return;
  s.currentTime = 0;
  s.play().catch(() => {});
}

function stopAllSounds() {
  bgMusic.pause();
  bgMusic.currentTime = 0;
  tick.pause();
  tick.currentTime = 0;
  clickSound.pause();
  clickSound.currentTime = 0;
  spinSound.pause();
  spinSound.currentTime = 0;
  suspenseSound.pause();
  suspenseSound.currentTime = 0;
  speechSynthesis.cancel();
}

window.addEventListener("beforeunload", stopAllSounds);
window.addEventListener("visibilitychange", () => {
  if (document.hidden) stopAllSounds();
  else if (soundEnabled) bgMusic.play().catch(() => {});
});
window.addEventListener("pagehide", stopAllSounds);

/* ── NAVIGATION ─────────────────────────── */
function showDiv(id) {
  document
    .querySelectorAll(".section")
    .forEach((d) => (d.style.display = "none"));
  document.getElementById(id).style.display = "flex";
}
window.showDiv = showDiv;

function addJournalEntry(message) {
  const journal = document.getElementById("journalEntries");
  if (!journal) return;
  const entry = document.createElement("div");
  entry.className = "journal-entry";
  entry.textContent = message;
  journal.prepend(entry);
  while (journal.children.length > 6) journal.removeChild(journal.lastChild);
}

function renderJournalEntries(entries) {
  const journal = document.getElementById("journalEntries");
  if (!journal) return;
  journal.innerHTML = "";
  const items = Object.values(entries || {}).sort(
    (a, b) => (a.createdAt || 0) - (b.createdAt || 0),
  );
  if (items.length === 0) {
    const hint = document.createElement("div");
    hint.className = "journal-entry";
    hint.textContent =
      "Le journal est prêt. Chaque action est enregistrée ici.";
    journal.appendChild(hint);
    return;
  }
  items.slice(-6).forEach((item) => {
    const entry = document.createElement("div");
    entry.className = "journal-entry";
    entry.textContent = item.message || "Action enregistrée";
    journal.appendChild(entry);
  });
}

function logGameAction(message) {
  if (isOnline && currentRoom && typeof db !== "undefined") {
    db.ref("rooms/" + currentRoom + "/journal")
      .push({ message, createdAt: Date.now() })
      .catch(() => {});
    return;
  }
  addJournalEntry(message);
}

function cleanupOnlineListeners() {
  if (!currentRoom || typeof db === "undefined") return;
  db.ref("rooms/" + currentRoom + "/players").off();
  db.ref("rooms/" + currentRoom + "/game").off();
  db.ref("rooms/" + currentRoom + "/result").off();
  db.ref("rooms/" + currentRoom + "/journal").off();
}

function setupJournalSync() {
  if (!currentRoom || typeof db === "undefined") return;
  db.ref("rooms/" + currentRoom + "/journal")
    .limitToLast(6)
    .on("value", (snap) => renderJournalEntries(snap.val()));
}

/* ── THEME ENGINE ───────────────────────── */
function applyTheme(modeId) {
  const root = document.documentElement;
  const body = document.body;
  if (!modeId || !GAME_MODES[modeId]) {
    root.style.setProperty("--col-bg1", "#0a0010");
    root.style.setProperty("--col-bg2", "#120020");
    root.style.setProperty("--col-accent", "#ff2d6e");
    root.style.setProperty("--col-accent2", "#ffb800");
    root.style.setProperty("--col-truth", "#00d4ff");
    root.style.setProperty("--col-dare", "#ff2d6e");
    root.style.setProperty("--mode-glow1", "rgba(255,45,110,0.18)");
    root.style.setProperty("--mode-glow2", "rgba(0,212,255,0.12)");
    root.style.setProperty("--mode-particle", "255,255,255");
    root.style.setProperty(
      "--mode-spin-btn",
      "linear-gradient(135deg,#ffb800,#ff2d6e)",
    );
    root.style.setProperty(
      "--mode-card-result-bg",
      "linear-gradient(145deg,rgba(255,20,100,.25),rgba(200,0,255,.15))",
    );
    root.style.setProperty("--mode-card-result-border", "rgba(255,45,110,.4)");
    root.style.setProperty(
      "--mode-card-q-bg",
      "linear-gradient(145deg,rgba(0,80,200,.25),rgba(0,212,255,.12))",
    );
    root.style.setProperty("--mode-card-q-border", "rgba(0,212,255,.35)");
    body.dataset.mode = "default";
    updateParticleColor("255,255,255");
    return;
  }
  const m = GAME_MODES[modeId];
  root.style.setProperty("--col-bg1", m.bg1);
  root.style.setProperty("--col-bg2", m.bg2);
  root.style.setProperty("--col-accent", m.color);
  root.style.setProperty("--col-accent2", m.color);
  root.style.setProperty("--col-truth", m.color);
  root.style.setProperty("--col-dare", m.color);
  root.style.setProperty("--mode-glow1", m.glow1);
  root.style.setProperty("--mode-glow2", m.glow2);
  root.style.setProperty("--mode-particle", m.particleColor);
  root.style.setProperty("--mode-spin-btn", m.spinBtnBg);
  root.style.setProperty("--mode-card-result-bg", m.cardResultBg);
  root.style.setProperty("--mode-card-result-border", m.cardResultBorder);
  root.style.setProperty("--mode-card-q-bg", m.cardQuestionBg);
  root.style.setProperty("--mode-card-q-border", m.cardQuestionBorder);
  body.dataset.mode = modeId;
  updateParticleColor(m.particleColor);
}

let currentParticleColor = "255,255,255";
function updateParticleColor(color) {
  currentParticleColor = color;
}

/* ── MODE SELECT ────────────────────────── */
function buildModesGrid() {
  const grid = document.getElementById("modesGrid");
  grid.innerHTML = "";
  Object.values(GAME_MODES).forEach((mode) => {
    const card = document.createElement("button");
    card.className = "mode-card";
    card.style.setProperty("--mode-color", mode.color);
    card.innerHTML = `<div class="mode-card-emoji">${mode.emoji}</div>
      <div class="mode-card-label">${mode.label}</div>
      <div class="mode-card-desc">${mode.description}</div>`;
    card.onclick = () => selectMode(mode.id);
    grid.appendChild(card);
  });
}

function showModeSelect(destination) {
  pendingDestination = destination;
  showDiv("modeSelect");
}

function selectMode(modeId) {
  currentMode = modeId;
  applyTheme(modeId);
  playSound(clickSound);
  if (pendingDestination === "online") {
    const badge = document.getElementById("lobbyModeBadge");
    badge.innerHTML = buildModeBadgeHTML(modeId);
    listenRooms();
    showDiv("onlineLobby");
  } else {
    const badge = document.getElementById("setupModeBadge");
    badge.innerHTML = buildModeBadgeHTML(modeId);
    showDiv("setup");
  }
}

function buildModeBadgeHTML(modeId) {
  const m = GAME_MODES[modeId];
  return `<span class="mode-badge" style="--mode-color:${m.color}">${m.emoji} ${m.label}</span>`;
}

/* ── RIPPLE ─────────────────────────────── */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (
    !btn ||
    btn.classList.contains("avatar-cell") ||
    btn.classList.contains("btn-edit-profile") ||
    btn.classList.contains("mode-card")
  )
    return;
  playSound(clickSound);
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;position:absolute;border-radius:50%;background:rgba(255,255,255,.25);transform:scale(0);animation:rippleAnim .55s ease-out forwards;pointer-events:none`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

/* ── OFFLINE SETUP ──────────────────────── */
function goToNames() {
  const jcPlayers = loadPlayersFromJustChillin();
  if (jcPlayers && jcPlayers.length > 0) {
    players = jcPlayers;
    const container = document.getElementById("namesContainer");
    container.innerHTML = `<div class="notification-box" style="background:rgba(109,228,255,0.1);border:1px solid rgba(109,228,255,0.3);border-radius:12px;padding:14px;margin-bottom:16px">
      <strong style="color:#6de4ff">✓ Joueurs importés de Just Chillin !</strong>
      <p style="font-size:13px;color:#aaa;margin-top:6px">Joueurs: <strong>${jcPlayers.map((p) => p.name).join(", ")}</strong></p>
    </div>`;
    jcPlayers.forEach((player) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.className = "playerName";
      input.value = player.name;
      container.appendChild(input);
    });
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  } else {
    const count = parseInt(document.getElementById("playerCount").value);
    const container = document.getElementById("namesContainer");
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
      container.innerHTML += `<input type="text" class="input-field playerName" placeholder="Prénom joueur ${i + 1}">`;
    }
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  }
}

function goToQuestions() {
  const nameInputs = document.querySelectorAll(".playerName");
  const container = document.getElementById("questionsContainer");
  players = [];
  container.innerHTML = "";
  const isPredefined =
    currentMode &&
    currentMode !== "custom" &&
    GAME_MODES[currentMode].truths.length > 0;

  if (isPredefined) {
    nameInputs.forEach((input, index) => {
      const name = input.value.trim() || "Joueur " + (index + 1);
      players[index] = { name, truths: [], dares: [], avatar: "🎭" };
    });
    const notice = document.getElementById("predefinedModeNotice");
    const m = GAME_MODES[currentMode];
    notice.innerHTML = `<div class="mode-notice-inner">
      <span style="font-size:32px">${m.emoji}</span>
      <div><strong style="color:${m.color}">${m.label}</strong>
      <p style="font-size:12px;opacity:.7;margin-top:4px">${m.truths.length + m.dares.length} questions prédéfinies !</p></div>
    </div>`;
    notice.style.display = "block";
    document.getElementById("step3Title").textContent =
      "Étape 3 — C'est parti !";
  } else {
    document.getElementById("predefinedModeNotice").style.display = "none";
    document.getElementById("step3Title").textContent =
      "Étape 3 — Questions & Gages";
    nameInputs.forEach((input, index) => {
      const name = input.value.trim() || "Joueur " + (index + 1);
      players[index] = { name, truths: [], dares: [], avatar: "🎭" };
      container.innerHTML += `<div class="playerBlock">
        <h4>${name}</h4>
        <p class="sub-title">Vérités :</p>
        ${[1, 2, 3, 4, 5].map((n) => `<input type="text" class="input-field truth-${index}" placeholder="Vérité ${n}">`).join("")}
        <p class="sub-title">Gages :</p>
        ${[1, 2, 3, 4, 5].map((n) => `<input type="text" class="input-field dare-${index}" placeholder="Gage ${n}">`).join("")}
      </div>`;
    });
  }
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
}

function startGame() {
  const isPredefined =
    currentMode &&
    currentMode !== "custom" &&
    GAME_MODES[currentMode].truths.length > 0;
  if (!isPredefined) {
    players.forEach((player, index) => {
      player.truths = Array.from(document.querySelectorAll(`.truth-${index}`))
        .map((i) => i.value.trim())
        .filter((v) => v !== "");
      player.dares = Array.from(document.querySelectorAll(`.dare-${index}`))
        .map((i) => i.value.trim())
        .filter((v) => v !== "");
    });
  }
  showDiv("container");
  document.getElementById("roomTitle").innerText = "";
  updateModeIndicator(currentMode);
  resetCards();
}

/* ── MODE INDICATOR ─────────────────────── */
function updateModeIndicator(modeId) {
  const el = document.getElementById("modeIndicator");
  if (!modeId || !GAME_MODES[modeId]) {
    el.innerHTML = "";
    return;
  }
  const m = GAME_MODES[modeId];
  el.innerHTML = `<span class="mode-badge small" style="--mode-color:${m.color}">${m.emoji} ${m.label}</span>`;
}

/* ── QUESTION POOL ──────────────────────── */
function pickQuestion(player, isTruth, allPlayers) {
  const mode = GAME_MODES[currentMode];
  if (!mode) return "Improvise ! 😅";
  const isPredefined = currentMode !== "custom" && mode.truths.length > 0;
  if (isPredefined) {
    const pool = isTruth ? mode.truths : mode.dares;
    if (pool.length === 0) return "Improvise ! 😅";
    let q = pool[Math.floor(Math.random() * pool.length)];
    if (currentMode === "knowme") {
      const others = allPlayers.filter((p) => p !== player);
      const other =
        others.length > 0
          ? others[Math.floor(Math.random() * others.length)]
          : player;
      q = q.replace(/\[joueur\]/g, other.name || other);
    }
    return q;
  }
  const otherPlayers = allPlayers.filter((p) => p !== player);
  const questionOwner =
    otherPlayers.length > 0
      ? otherPlayers[Math.floor(Math.random() * otherPlayers.length)]
      : player;
  const list = isTruth ? questionOwner.truths || [] : questionOwner.dares || [];
  return list.length > 0
    ? list[Math.floor(Math.random() * list.length)]
    : "Aucune question — improvise ! 😅";
}

/* ── CARD SYSTEM ────────────────────────── */
let timerInterval = null;
let timerEndTime = null;

function showCard(id) {
  ["cardIdle", "cardResult", "cardQuestion"].forEach((cid) => {
    const el = document.getElementById(cid);
    el.style.display = cid === id ? "flex" : "none";
    if (cid === id) {
      el.style.animation = "none";
      el.offsetHeight;
      el.style.animation = "";
    }
  });
}

function resetCards() {
  stopTimer();
  showCard("cardIdle");
}
window.resetCards = resetCards;

function revealQuestion(syncFromNetwork = false) {
  if (!syncFromNetwork && isOnline && currentRoom) {
    db.ref("rooms/" + currentRoom + "/result")
      .update({ revealed: true })
      .catch(() => {});
  }
  showCard("cardQuestion");
  playSound(suspenseSound);
  if (window._pendingTimer) {
    let duration = 10;
    const question = document.getElementById("questionText").textContent;
    const secMatch = question.match(/(\d+)\s*(?:prochaines?\s*)?(secondes?)/i);
    if (secMatch) duration = parseInt(secMatch[1]);
    const minMatch = question.match(/(\d+)\s*(?:prochaines?\s*)?(minutes?)/i);
    if (minMatch) duration = parseInt(minMatch[1]) * 60;
    startTimer(duration);
  }
  if (!syncFromNetwork) {
    logGameAction(
      "Question révélée: " +
        document.getElementById("questionText").textContent,
    );
  }
}

/* ── SPIN BOTTLE (offline) ──────────────── */
function spinBottle() {
  if (players.length < 2) {
    alert("Ajoute au moins 2 joueurs !");
    return;
  }
  resetCards();
  playSound(spinSound);
  const bottle = document.getElementById("bottle");
  const randomRotation = Math.floor(Math.random() * 360) + 720;
  currentRotation += randomRotation;
  bottle.style.transform = `rotate(${currentRotation}deg)`;
  const selectedPlayer = players[Math.floor(Math.random() * players.length)];
  const isTruth = Math.random() < 0.5;
  setTimeout(() => {
    const question = pickQuestion(selectedPlayer, isTruth, players);
    const hasTime = /(\d+)\s*(?:prochaines?\s*)?(secondes?|minutes?)/i.test(
      question,
    );
    window._pendingTimer = hasTime;
    const tag = document.getElementById("resultTag");
    tag.textContent = isTruth ? "VÉRITÉ" : "ACTION";
    tag.className = "result-tag " + (isTruth ? "truth" : "dare");
    document.getElementById("resultAvatar").textContent =
      selectedPlayer.avatar || "🎭";
    document.getElementById("resultPlayer").textContent = selectedPlayer.name;
    document.getElementById("resultEmoji").textContent = isTruth ? "😏" : "👿";
    const qTag = document.getElementById("questionTag");
    qTag.textContent = isTruth ? "LA VÉRITÉ" : "LE GAGE";
    qTag.className = "question-tag " + (isTruth ? "" : "dare-tag");
    document.getElementById("questionText").textContent = question;
    document.getElementById("btnReveal").onclick = revealQuestion;
    showCard("cardResult");
    if (navigator.vibrate) navigator.vibrate(150);
    speak(selectedPlayer.name, isTruth);
    logGameAction(
      `${selectedPlayer.name} a été choisi·e pour ${isTruth ? "Vérité" : "Action"}`,
    );
  }, 2200);
}

/* ── TIMER ──────────────────────────────── */
function stopTick() {
  if (!tick.paused) {
    tick.pause();
    tick.currentTime = 0;
  }
}
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerEndTime = null;
  stopTick();
  const el = document.getElementById("timerBox");
  if (el) el.style.display = "none";
}
function startTimer(duration = 10) {
  stopTimer();
  timerEndTime = Date.now() + duration * 1000;
  const el = document.getElementById("timerBox");
  el.style.display = "block";
  el.innerText = duration;
  let lastValue = duration;
  timerInterval = setInterval(() => {
    const remaining = Math.max(
      0,
      Math.ceil((timerEndTime - Date.now()) / 1000),
    );
    if (remaining !== lastValue) {
      el.innerText = remaining;
      if (remaining <= 10 && remaining > 0) playSound(tick);
      lastValue = remaining;
    }
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      stopTick();
      setTimeout(() => {
        el.style.display = "none";
      }, 2000);
    }
  }, 200);
}

/* ── STOP GAME ──────────────────────────── */
function stopBgMusic() {
  if (!bgMusic.paused) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
}

function leaveRoom() {
  if (currentRoom && deviceProfile) {
    db.ref("rooms/" + currentRoom + "/players/" + deviceProfile.id)
      .remove()
      .catch(() => {});
  }
  stopGame();
}

function stopGame() {
  stopAllSounds();
  if (currentRoom) {
    cleanupOnlineListeners();
    if (roomActivityTimers[currentRoom]) {
      clearTimeout(roomActivityTimers[currentRoom]);
      delete roomActivityTimers[currentRoom];
    }
  }
  isOnline = false;
  currentRoom = null;
  resetCards();
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "none";
  players = [];
  applyTheme(null);
  showDiv("menu");
}
window.stopGame = stopGame;
window.editProfile = editProfile;
window.leaveRoom = leaveRoom;
window.reconnectToRoom = reconnectToRoom;

/* ── SPEAK ──────────────────────────────── */
function speak(text, isTruth) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.pitch = isTruth ? 1.5 : 0.8;
  u.rate = 1;
  speechSynthesis.speak(u);
}

/* ── PARTICLES ──────────────────────────── */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
const particlesArray = Array.from({ length: 60 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2 + 0.5,
  speedX: (Math.random() - 0.5) * 0.4,
  speedY: (Math.random() - 0.5) * 0.4,
  opacity: Math.random() * 0.5 + 0.1,
}));
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((p) => {
    p.x = (p.x + p.speedX + canvas.width) % canvas.width;
    p.y = (p.y + p.speedY + canvas.height) % canvas.height;
    ctx.fillStyle = `rgba(${currentParticleColor},${p.opacity})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ── CONNECTION STATUS ──────────────────── */
let isConnected = true;

function checkConnection() {
  return navigator.onLine && isConnected;
}

function initConnectionListener() {
  window.addEventListener("online", () => {
    isConnected = true;
    updateConnectionStatus();
  });
  window.addEventListener("offline", () => {
    isConnected = false;
    updateConnectionStatus();
    if (isOnline) showOfflineError();
  });
  // Firebase connection check
  try {
    db.ref(".info/connected").on("value", (snap) => {
      isConnected = snap.val() === true;
      updateConnectionStatus();
      if (!isConnected && isOnline) showOfflineError();
    });
  } catch (e) {}
}

function updateConnectionStatus() {
  const indicator = document.getElementById("connectionStatus");
  if (indicator) {
    indicator.className =
      "connection-status " + (isConnected ? "online" : "offline");
    indicator.title = isConnected ? "Connecté" : "Hors-ligne";
  }
}

function showOfflineError() {
  isOnline = false;
  stopBgMusic();
  resetCards();
  showDiv("offlineError");
}

function reconnectToRoom() {
  if (!currentRoom) {
    showDiv("menu");
    return;
  }
  if (!checkConnection()) {
    alert("⚠️ Toujours pas de connexion Internet.");
    return;
  }
  db.ref("rooms/" + currentRoom).once("value", (snap) => {
    if (!snap.exists()) {
      alert("⚠️ Cette salle n'existe plus.");
      currentRoom = null;
      showDiv("menu");
      return;
    }
    const roomData = snap.val();
    if (roomData.players && roomData.players[deviceProfile.id]) {
      isOnline = true;
      setupRoomActivityMonitoring(currentRoom);
      updateRoomActivity(currentRoom);
      listenPlayers();
      showDiv("container");
      document.getElementById("roomTitle").innerText =
        "Salle : " + roomData.name;
    } else {
      showDiv("onlineLobby");
      listenRooms();
    }
  });
}

/* ── ONLINE MODE ────────────────────────── */
function createRoom() {
  if (!deviceProfile) return;
  if (!checkConnection()) {
    showDiv("offlineError");
    return;
  }
  const name = document.getElementById("roomName").value.trim();
  const pass = document.getElementById("roomPassword").value.trim();
  const max = parseInt(document.getElementById("maxPlayers").value) || 4;
  if (!name) {
    document.getElementById("roomName").focus();
    return;
  }

  const rid = "room_" + Date.now();
  const roomData = {
    name,
    password: pass || "",
    maxPlayers: max,
    players: {},
    createdAt: Date.now(),
    lastActivity: Date.now(),
    creatorId: deviceProfile.id,
    mode: currentMode || "custom",
  };

  db.ref("rooms/" + rid)
    .set(roomData)
    .catch((err) => {
      alert("❌ Erreur de création de salle. Vérifie ta connexion.");
    });

  currentRoom = rid;
  setupRoomActivityMonitoring(rid);
  openPlayerSetup();
}

function setupRoomActivityMonitoring(roomId) {
  if (roomActivityTimers[roomId]) clearTimeout(roomActivityTimers[roomId]);
  roomActivityTimers[roomId] = setTimeout(() => {
    db.ref("rooms/" + roomId).once("value", (snap) => {
      if (snap.exists()) {
        const roomData = snap.val();
        const timeSinceActivity =
          Date.now() - (roomData.lastActivity || roomData.createdAt);
        const playerCount = Object.keys(roomData.players || {}).length;
        if (timeSinceActivity > ROOM_INACTIVITY_TIMEOUT || playerCount === 0)
          deleteRoom(roomId);
      }
    });
  }, ROOM_INACTIVITY_TIMEOUT);
}

function deleteRoom(roomId) {
  db.ref("rooms/" + roomId)
    .remove()
    .then(() => {
      if (currentRoom === roomId) {
        isOnline = false;
        currentRoom = null;
        showDiv("menu");
        alert("⚠️ Salle supprimée (inactivité).");
      }
    })
    .catch(() => {});
}

function openPlayerSetup(roomModeOverride) {
  if (!deviceProfile) return;
  document.getElementById("setupAvatar").textContent = deviceProfile.avatar;
  document.getElementById("setupName").textContent = deviceProfile.name;
  document.getElementById("setupId").textContent =
    "ID: " + deviceProfile.id.split("_")[1];
  document.getElementById("joinError").style.display = "none";

  if (roomModeOverride && GAME_MODES[roomModeOverride]) {
    currentMode = roomModeOverride;
    applyTheme(currentMode);
  }

  const isPredefined =
    currentMode &&
    currentMode !== "custom" &&
    GAME_MODES[currentMode]?.truths.length > 0;
  const customForm = document.getElementById("customQuestionsForm");
  const predefinedInfo = document.getElementById("predefinedModeInfo");

  if (isPredefined) {
    customForm.style.display = "none";
    const m = GAME_MODES[currentMode];
    predefinedInfo.innerHTML = `<div class="mode-notice-inner">
      <span style="font-size:32px">${m.emoji}</span>
      <div><strong style="color:${m.color}">${m.label}</strong>
      <p style="font-size:12px;opacity:.7;margin-top:4px">${m.truths.length + m.dares.length} questions prédéfinies. Rejoins directement !</p></div>
    </div>`;
    predefinedInfo.style.display = "block";
  } else {
    customForm.style.display = "block";
    predefinedInfo.style.display = "none";
  }
  showDiv("playerSetup");
}

async function joinRoom() {
  if (!deviceProfile) return;
  if (!checkConnection()) {
    showDiv("offlineError");
    return;
  }

  const errorEl = document.getElementById("joinError");
  errorEl.style.display = "none";

  let roomData;
  try {
    const snap = await db.ref("rooms/" + currentRoom).once("value");
    roomData = snap.val();
  } catch (e) {
    errorEl.textContent = "❌ Erreur de connexion à Firebase.";
    errorEl.style.display = "block";
    return;
  }

  if (!roomData) {
    errorEl.textContent = "⚠️ Salle introuvable.";
    errorEl.style.display = "block";
    return;
  }

  const currentCount = Object.keys(roomData.players || {}).length;
  if (currentCount >= roomData.maxPlayers) {
    errorEl.textContent = "⚠️ La salle est pleine !";
    errorEl.style.display = "block";
    return;
  }

  const isPredefined =
    currentMode &&
    currentMode !== "custom" &&
    GAME_MODES[currentMode]?.truths.length > 0;
  let truths = [],
    dares = [];
  if (!isPredefined) {
    truths = Array.from(document.querySelectorAll(".truth"))
      .map((i) => i.value)
      .filter((v) => v);
    dares = Array.from(document.querySelectorAll(".dare"))
      .map((i) => i.value)
      .filter((v) => v);
  }

  if (roomData.mode && roomData.mode !== currentMode) {
    currentMode = roomData.mode;
    applyTheme(currentMode);
  }

  const playerData = {
    name: deviceProfile.name,
    avatar: deviceProfile.avatar,
    id: deviceProfile.id,
    truths,
    dares,
    joinedAt: Date.now(),
    syncTimestamp: Date.now(),
  };

  try {
    await db
      .ref("rooms/" + currentRoom + "/players/" + deviceProfile.id)
      .set(playerData);
  } catch (e) {
    errorEl.textContent = "❌ Erreur de synchronisation. Réessaye.";
    errorEl.style.display = "block";
    return;
  }

  isOnline = true;
  setupRoomActivityMonitoring(currentRoom);
  updateRoomActivity(currentRoom);
  listenPlayers();
  setupJournalSync();
  showDiv("container");
  updateModeIndicator(currentMode);

  const title = document.getElementById("roomTitle");
  title.innerHTML = `Salle : ${roomData.name}`;

  if (roomData.creatorId === deviceProfile.id) {
    // Remove old delete btn if any
    const oldBtn = document.querySelector(".btn-delete-room");
    if (oldBtn) oldBtn.remove();
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete-room";
    deleteBtn.innerHTML = "🗑️ Supprimer la salle";
    deleteBtn.onclick = () => {
      if (confirm("Supprimer cette salle ?")) {
        deleteRoom(currentRoom);
        stopGame();
      }
    };
    title.parentElement.insertBefore(deleteBtn, title.nextSibling);
  }

  // Listen for game state changes (bottle spin)
  db.ref("rooms/" + currentRoom + "/game").on("value", (snap) => {
    const data = snap.val();
    if (!data) return;
    updateRoomActivity(currentRoom);
    const bottle = document.getElementById("bottle");
    currentRotation += data.rotation;
    bottle.style.transform = `rotate(${currentRotation}deg)`;
  });

  // Listen for result
  db.ref("rooms/" + currentRoom + "/result").on("value", (snap) => {
    const data = snap.val();
    if (!data) return;
    const isTruth = data.type === "truth";
    const tag = document.getElementById("resultTag");
    tag.textContent = isTruth ? "VÉRITÉ" : "ACTION";
    tag.className = "result-tag " + (isTruth ? "truth" : "dare");
    document.getElementById("resultAvatar").textContent =
      data.player.avatar || "🎭";
    document.getElementById("resultPlayer").textContent = data.player.name;
    document.getElementById("resultEmoji").textContent = isTruth ? "😏" : "👿";
    const qTag = document.getElementById("questionTag");
    qTag.textContent = isTruth ? "LA VÉRITÉ" : "LE GAGE";
    qTag.className = "question-tag " + (isTruth ? "" : "dare-tag");
    document.getElementById("questionText").textContent = data.question;
    const hasTime = /(\d+)\s*(?:prochaines?\s*)?(secondes?|minutes?)/i.test(
      data.question,
    );
    window._pendingTimer = hasTime;
    document.getElementById("btnReveal").onclick = revealQuestion;
    if (data.revealed) {
      revealQuestion(true);
    } else {
      showCard("cardResult");
    }
    playSound(suspenseSound);
    if (navigator.vibrate) navigator.vibrate(150);
    speak(data.player.name, isTruth);
  });
}

function listenPlayers() {
  db.ref("rooms/" + currentRoom + "/players").on("value", (snap) => {
    const playersData = snap.val() || {};
    const list = document.getElementById("playersList");
    list.innerHTML = "";
    for (let id in playersData) {
      const p = playersData[id];
      const div = document.createElement("div");
      div.className =
        "player-chip" + (id === deviceProfile?.id ? " player-chip-me" : "");
      div.innerHTML = `<span>${p.avatar || "🎭"}</span><span>${p.name}</span>`;
      list.appendChild(div);
    }
    onlinePlayers = Object.values(playersData);
  });
}

function updateRoomActivity(roomId) {
  db.ref("rooms/" + roomId)
    .update({ lastActivity: Date.now() })
    .catch(() => {});
}

function spinBottleOnline() {
  if (onlinePlayers.length < 2) {
    alert("Il faut au moins 2 joueurs !");
    return;
  }
  resetCards();
  playSound(spinSound);
  updateRoomActivity(currentRoom);

  const randomRotation = Math.floor(Math.random() * 360) + 720;
  db.ref("rooms/" + currentRoom + "/game").set({
    rotation: randomRotation,
    timestamp: Date.now(),
  });

  const selectedPlayer =
    onlinePlayers[Math.floor(Math.random() * onlinePlayers.length)];
  const isTruth = Math.random() < 0.5;
  const question = pickQuestion(selectedPlayer, isTruth, onlinePlayers);

  setTimeout(() => {
    const resultData = {
      player: selectedPlayer,
      type: isTruth ? "truth" : "dare",
      question,
      revealed: false,
      timestamp: Date.now(),
    };
    db.ref("rooms/" + currentRoom + "/result").set(resultData);
    logGameAction(
      `${selectedPlayer.name} a été choisi·e pour ${isTruth ? "Vérité" : "Action"}`,
    );
  }, 2200);
}

function listenRooms() {
  if (!checkConnection()) {
    showDiv("offlineError");
    return;
  }
  db.ref("rooms").on(
    "value",
    (snap) => {
      const data = snap.val();
      const list = document.getElementById("roomsList");
      list.innerHTML = "";
      if (!data) {
        list.innerHTML =
          "<p style='opacity:.4;font-size:13px;text-align:center;padding:12px'>Aucune salle disponible</p>";
        return;
      }
      const now = Date.now();
      const FIVE_MIN = 5 * 60 * 1000;
      for (let id in data) {
        const room = data[id];
        const playerCount = Object.keys(room.players || {}).length;
        const lastActivity = room.lastActivity || room.createdAt || 0;
        const age = now - lastActivity;
        if ((playerCount === 0 && age > FIVE_MIN) || age > FIVE_MIN) {
          db.ref("rooms/" + id)
            .remove()
            .catch(() => {});
          continue;
        }
        const isFull = playerCount >= room.maxPlayers;
        const hasPassword = room.password && room.password.length > 0;
        const alreadyIn = room.players && room.players[deviceProfile?.id];
        const isCreator = room.creatorId === deviceProfile?.id;
        const roomMode = room.mode || "custom";
        const modeInfo = GAME_MODES[roomMode];
        const div = document.createElement("div");
        div.className =
          "room-item" +
          (isFull ? " room-full" : "") +
          (alreadyIn ? " room-joined" : "");
        div.innerHTML = `<span class="room-item-name">${hasPassword ? "🔒 " : ""}${room.name}</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="room-mode-tag" style="--mode-color:${modeInfo?.color || "#fff"}">${modeInfo?.emoji || "🎮"}</span>
          <span class="room-item-badge">${alreadyIn ? "🔄 Rejoindre" : isFull ? "Complet" : playerCount + "/" + room.maxPlayers}</span>
        </div>`;

        let pressTimer,
          isLongPress = false;
        const startPress = () => {
          isLongPress = false;
          pressTimer = setTimeout(() => {
            isLongPress = true;
            div.classList.add("long-press");
            if (isCreator) {
              if (confirm(`Supprimer la salle "${room.name}" ?`))
                deleteRoom(id);
            } else
              alert("⚠️ Seuls les créateurs peuvent supprimer leur salle.");
            div.classList.remove("long-press");
          }, 800);
        };
        const endPress = () => {
          clearTimeout(pressTimer);
          if (!isLongPress) {
            if (!isFull) {
              currentRoom = id;
              if (hasPassword) showPasswordPrompt(id, room.name, roomMode);
              else openPlayerSetup(roomMode);
            }
          }
        };
        div.onmousedown = startPress;
        div.onmouseup = endPress;
        div.onmouseleave = endPress;
        div.ontouchstart = (e) => {
          e.preventDefault();
          startPress();
        };
        div.ontouchend = (e) => {
          e.preventDefault();
          endPress();
        };
        list.appendChild(div);
      }
    },
    (err) => {
      console.error("Erreur Firebase:", err);
      showDiv("offlineError");
    },
  );
}

function showPasswordPrompt(roomId, roomName, roomMode) {
  const password = prompt(
    `🔐 La salle "${roomName}" est protégée.\n\nEntre le mot de passe:`,
  );
  if (password === null) {
    currentRoom = null;
    return;
  }
  db.ref("rooms/" + roomId).once("value", (snap) => {
    const roomData = snap.val();
    if (roomData && roomData.password === password) {
      currentRoom = roomId;
      openPlayerSetup(roomMode);
    } else {
      alert("❌ Mot de passe incorrect.");
      currentRoom = null;
    }
  });
}

/* ── PURGE DEAD ROOMS ───────────────────── */
function purgeDeadRooms() {
  db.ref("rooms")
    .once("value", (snap) => {
      if (!snap.exists()) return;
      const data = snap.val();
      const now = Date.now();
      const FIVE_MIN = 5 * 60 * 1000;
      for (let id in data) {
        const room = data[id];
        const playerCount = Object.keys(room.players || {}).length;
        const lastActivity = room.lastActivity || room.createdAt || 0;
        if (
          (playerCount === 0 && now - lastActivity > FIVE_MIN) ||
          now - lastActivity > FIVE_MIN
        ) {
          db.ref("rooms/" + id)
            .remove()
            .catch(() => {});
        }
      }
    })
    .catch(() => {});
}

/* ── SOUND SETTINGS ─────────────────────── */
document.getElementById("soundToggle").addEventListener("change", (e) => {
  soundEnabled = e.target.checked;
  if (!soundEnabled) bgMusic.pause();
  else bgMusic.play().catch(() => {});
});

/* ── SPIN BUTTON ────────────────────────── */
document.getElementById("startBtn").addEventListener("click", () => {
  if (isOnline) spinBottleOnline();
  else spinBottle();
});

/* ── BOOT ───────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {
  buildAvatarGrid();
  buildModesGrid();
  applyTheme(null);

  // Wait for Firebase to be ready, then init
  const tryInit = () => {
    if (typeof db !== "undefined") {
      initConnectionListener();
      purgeDeadRooms();
    } else {
      setTimeout(tryInit, 100);
    }
  };
  tryInit();

  if (loadProfile()) {
    showMenu();
  } else {
    showDiv("profileCreate");
  }
});
