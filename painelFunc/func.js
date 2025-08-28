
const nomeDoFuncionario = localStorage.getItem('nome');
const nomeDisplay = document.querySelector('.nome-funcionario').innerHTML= `${nomeDoFuncionario}`

const btnSairPainel = document.querySelector('.btn-sair');




btnSairPainel.addEventListener('click', () => {
history.back();
})


