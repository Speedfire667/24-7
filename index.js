// index.js
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Lista de URLs que você quer manter acordadas
const urls = [
  'https://server-1-vgt1.onrender.com',
  'https://two4-5.onrender.com'
];

// Função que acessa as URLs
function pingUrls() {
  const agora = new Date().toISOString();
  console.log(`[${agora}] Cutucando as URLs...`);

  urls.forEach(async (url) => {
    try {
      const res = await fetch(url);
      console.log(`✅ [${url}] - Status: ${res.status}`);
    } catch (err) {
      console.log(`❌ [${url}] - Erro: ${err.message}`);
    }
  });
}

// Executa agora
pingUrls();

// Repete a cada 5 minutos (5 * 60 * 1000 ms)
setInterval(pingUrls, 5 * 60 * 1000);
