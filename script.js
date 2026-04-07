function alternarTema() {
  document.body.classList.toggle('claro');

  const botao = document.querySelector('.btn-tema');

  if (document.body.classList.contains('claro')) {
    botao.textContent = '🌙';
    localStorage.setItem('tema', 'claro');
  } else {
    botao.textContent = '☀️';
    localStorage.setItem('tema', 'escuro');
  }
}

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'claro') {
  document.body.classList.add('claro');
  document.querySelector('.btn-tema').textContent = '🌙';
}