let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox.png') {
      minhaImagem.setAttribute('src', 'imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute('src', 'imagens/firefox.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('name', meuNome);
    meuCabecalho.innerHTML = 'Mozzila é legal, ' + meuNome;
  }
}

if(!localStorage.getItem('name')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('name');
  meuCabecalho.innerHTML = 'Mozzila é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario(); 
}

