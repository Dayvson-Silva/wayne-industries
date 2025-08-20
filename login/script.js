const btnGerente = document.getElementById("gerente");
const btnAdm = document.getElementById("adm");
const btnFunc = document.getElementById("funcionario");
const containerGerente = document.getElementById("container-gerente");
const containerAdm = document.getElementById("container-adm");
const containerFunc = document.getElementById("container-func");    

function limparContainers() {
    containerGerente.innerHTML = "";
    containerAdm.innerHTML = "";
    containerFunc.innerHTML = "";
}


btnGerente.addEventListener("click", () => {

    limparContainers();
    containerGerente.innerHTML = `
        <div class="gerente-login">
            <h3>SENHA: 3030</h3>
            <form class="gerente-form">
                <input type="text" class="nome" placeholder="Nome">
                <input type="text" class="senha" placeholder="Senha">
                <button type="submit" class="enviar">Entrar</button>
            </form>
        </div>
    `;


    const form = document.querySelector(".gerente-form"); 
    const senhaInput = document.querySelector(".senha");
    const nomeInput = document.querySelector(".nome");

    // peguei o formulario e add o evento de enviar
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        if (senhaInput.value == 3030) {
            localStorage.setItem("nome", nomeInput.value)
            window.location.href = "/painelGerente/painel.html";
        } else {
            alert("Senha inválida");
        }
    });
});


btnAdm.addEventListener("click", () => {

    limparContainers();
    containerAdm.innerHTML = `
        <div class="adm-login">
            <h3>SENHA: 4040</h3>
            <form class="adm-form">
                <input type="text" class="nome" placeholder="Nome">
                <input type="text" class="senha" placeholder="Senha">
                <button type="submit" class="enviar">Entrar</button>
            </form>
        </div>
    `;

    const form = document.querySelector(".adm-form"); 
    const senhaInput = document.querySelector(".senha");
    const nomeInput = document.querySelector(".nome");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        if (senhaInput.value == 4040 ) {
            localStorage.setItem("nome", nomeInput.value);
            window.location.href = "/gestaoDeRecursos/gestao.html";
        } else {
            alert("Senha inválida");
        }
    });
});
btnFunc.addEventListener("click", () => {

    limparContainers();
    containerFunc.innerHTML = `
        <div class="func-login">
            <h3>SENHA: 5050</h3>
            <form class="func-form">
                <input type="text" class="nome" placeholder="Nome">
                <input type="text" class="senha" placeholder="Senha">
                <button type="submit" class="enviar">Entrar</button>
            </form>
        </div>
    `;

    const form = document.querySelector(".func-form"); 
    const senhaInput = document.querySelector(".senha");

    // peguei o formulario e add o evento de enviar
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        if (senhaInput.value == 5050) {
            window.location.href = "/painelGerente/painel.html";
        } else {
            alert("Senha inválida");
        }
    });
});