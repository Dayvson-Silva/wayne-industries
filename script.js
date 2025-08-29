const btnGerente = document.getElementById("gerente");
const btnAdm = document.getElementById("adm");
const btnFunc = document.getElementById("funcionario");
const containerGerente = document.getElementById("container-gerente");
const containerAdm = document.getElementById("container-adm");
const containerFunc = document.getElementById("container-func");

// "banco de dados" de usuários
const listaDeUsuarios = [
  // Gerente
  { nome: "Dayvson Silva", senha: "3030", cargo: "Gerente" },

  // Administrador
  { nome: "Ryan Nalberth", senha: "4040", cargo: "Administrativo" },

  // Funcionários
  { nome: "João Silva", senha: "5050", cargo: "Manobrista" },
  { nome: "Ana Pereira", senha: "5050", cargo: "Operador" },
  { nome: "Victor Brayner", senha: "5050", cargo: "Eletricista" },
  { nome: "Thomas Gustavo", senha: "5050", cargo: "Ajudante" },
];

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

    const nomeDigitado = nomeInput.value.trim();
    const senhaDigitada = senhaInput.value;

    const usuarioEncontrado = listaDeUsuarios.find((usuario) => {
      return (
        usuario.nome.toLowerCase() === nomeDigitado.toLowerCase() &&
        usuario.senha === senhaDigitada &&
        usuario.cargo !== "Administrativo" &&
        usuario.cargo !== "Funcionario"
      );
    });

    if (usuarioEncontrado) {
      localStorage.setItem("nome", usuarioEncontrado.nome);
      window.location.href = "./painelGerente/painel.html";
    } else {
      alert("Nome de usuário ou senha inválidos.");
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

    const nomeDigitado = nomeInput.value.trim();
    const senhaDigitada = senhaInput.value;

    const usuarioEncontrado = listaDeUsuarios.find((usuario) => {
      return (
        usuario.nome.toLowerCase() === nomeDigitado.toLowerCase() &&
        usuario.senha === senhaDigitada &&
        usuario.cargo !== "Gerente" &&
        usuario.cargo !== "Funcionario"
      );
    });

    if (usuarioEncontrado) {
      localStorage.setItem("nome", usuarioEncontrado.nome);
      window.location.href = "./gestaoDeRecursos/gestao.html";
    } else {
      alert("Nome de usuário ou senha inválidos.");
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
  const nomeInput = document.querySelector(".nome");
  const form = containerFunc.querySelector(".func-form");
  const senhaInput = document.querySelector(".senha");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeDigitado = nomeInput.value.trim();
    const senhaDigitada = senhaInput.value;

    const usuarioEncontrado = listaDeUsuarios.find((usuario) => {
      return (
        usuario.nome.toLowerCase() === nomeDigitado.toLowerCase() &&
        usuario.senha === senhaDigitada &&
        usuario.cargo !== "Gerente" &&
        usuario.cargo !== "Administrativo"
      );
    });

    if (usuarioEncontrado) {
      alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);
      localStorage.setItem("nome", usuarioEncontrado.nome);
      window.location.href = "wayne-industries/painelFunc/func.html";
    } else {
      alert("Nome de usuário ou senha inválidos.");
    }
  });
});
