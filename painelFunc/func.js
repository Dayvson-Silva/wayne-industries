

// Espera o conteúdo da página ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    const nomeDoFuncionario = localStorage.getItem('nome');

    const nomeDisplay = document.querySelector('.nome-funcionario');

    if (nomeDoFuncionario && nomeDisplay) {
        nomeDisplay.textContent = nomeDoFuncionario;
    } else {
        nomeDisplay.textContent = "Funcionário";
        console.warn("Nome do funcionário não encontrado no localStorage.");
    }
});