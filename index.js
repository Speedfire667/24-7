// app.js
const fetch = require('node-fetch');

// Lista de URLs que você quer "cutucar"
const urls = [
  'https://server-1-vgt1.onrender.com',
  'https://24_5.onrender.com',
];

// Função que acessa as URLs
function pingUrls() {
  console.log(`[${new Date().toISOString()}] Cutucando as URLs...`);

  urls.forEach(async (url) => {
    try {
      const res = await fetch(url);
      console.log(`✅ ${url} - Status: ${res.status}`);
    } catch (err) {
      console.log(`❌ ${url} - Erro: ${err.message}`);
    }
  });
}

// Executa agora e depois a cada 5 minutos
pingUrls();
setInterval(pingUrls, 5 * 60 * 1000);
