
const usuario = JSON.parse(localStorage.getItem('usuario'))
const nomeDisplay = document.querySelector('.nome-funcionario').innerHTML= `${usuario.nome}`
const cargo = document.querySelector('.cargo-funcionario').innerHTML= `${usuario.cargo}`

const btnSairPainel = document.querySelector('.btn-sair');




btnSairPainel.addEventListener('click', () => {
history.back();
})


