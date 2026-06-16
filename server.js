const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// Healthcheck — utile pour le "Healthcheck Path" de Railway (Settings > Deploy)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Sert tous les fichiers statiques (html, css, js, images, sons...) du dossier public/
// `extensions:['html']` permet d'écrire /werewolf au lieu de /werewolf.html si besoin
app.use(express.static(PUBLIC_DIR, { extensions: ['html'] }));

// Toute route inconnue retombe sur le hub (évite un 404 brut sur un lien mal formé)
app.use((req, res) => {
  res.status(404).sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Just Chillin tourne sur le port ${PORT}`);
});
