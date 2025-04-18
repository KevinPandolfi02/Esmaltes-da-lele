const esmaltes = [
  {
    nome: "Rosa Chiclete",
    tom: "Vibrante",
    imagem: "https://via.placeholder.com/300x200/FF69B4/ffffff?text=Rosa+Chiclete",
    ultimaVez: "2025-03-20"
  },
  {
    nome: "Azul Serenity",
    tom: "Pastel",
    imagem: "https://via.placeholder.com/300x200/87CEFA/ffffff?text=Azul+Serenity",
    ultimaVez: "2025-04-10"
  },
  {
    nome: "Vermelho Paixão",
    tom: "Intenso",
    imagem: "https://via.placeholder.com/300x200/FF0000/ffffff?text=Vermelho+Paixao",
    ultimaVez: "2025-02-14"
  },
  {
    nome: "Lilás Sonhador",
    tom: "Suave",
    imagem: "https://via.placeholder.com/300x200/D8BFD8/000000?text=Lilas+Sonhador",
    ultimaVez: "2025-03-05"
  }
];

const desejos = [
  {
    nome: "Nude Elegante",
    tom: "Neutro",
    imagem: "https://via.placeholder.com/300x200/F5DEB3/000000?text=Nude+Elegante"
  },
  {
    nome: "Verde Menta",
    tom: "Pastel",
    imagem: "https://via.placeholder.com/300x200/98FB98/000000?text=Verde+Menta"
  },
  {
    nome: "Glitter Rose",
    tom: "Brilhante",
    imagem: "https://via.placeholder.com/300x200/FFD1DC/000000?text=Glitter+Rose"
  }
];

function filtrarEsmaltes() {
  const termo = document.getElementById('searchInput').value.toLowerCase();
  const container = document.getElementById('catalogoEsmaltes');
  container.innerHTML = "";

  const filtrados = esmaltes.filter(esmalte =>
    esmalte.nome.toLowerCase().includes(termo)
  );

  if (filtrados.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Nenhuma cor encontrada 😢</p>";
    return;
  }

  filtrados.forEach(esmalte => {
    const card = `
      <div class="card">
        <img src="${esmalte.imagem}" alt="${esmalte.nome}">
        <div class="color-name">${esmalte.nome}</div>
        <div class="tone">Tom: ${esmalte.tom}</div>
        <div class="last-used">Último uso: ${formatarData(esmalte.ultimaVez)}</div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function mostrarDesejos() {
  const container = document.getElementById('listaDesejos');
  container.innerHTML = "";

  desejos.forEach(item => {
    const card = `
      <div class="card">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="color-name">${item.nome}</div>
        <div class="tone">Tom: ${item.tom}</div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function formatarData(data) {
  const opcoes = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(data).toLocaleDateString('pt-BR', opcoes);
}

function mostrarAba(qual) {
  const catalogo = document.getElementById('aba-catalogo');
  const desejos = document.getElementById('aba-desejos');

  if (qual === 'catalogo') {
    catalogo.classList.remove('hidden');
    desejos.classList.add('hidden');
  } else {
    catalogo.classList.add('hidden');
    desejos.classList.remove('hidden');
    mostrarDesejos();
  }
}

window.onload = filtrarEsmaltes;
