const datHora = document.querySelector(".hora-data");
const telaPrincipal = document.querySelector(".tela-principal");
const todosOsItens = document.querySelectorAll(".item-menu");
const telasContainer = document.querySelector(".telas");
const telaDashboardInicial = document.querySelector(".principal-tela");
const btnSairPainel = document.querySelector(".btn-sair-painel");


const nomeUsuario = localStorage.getItem("nome");
const gerente = document.getElementById("gerente").innerHTML = `Gerente:${nomeUsuario}`

btnSairPainel.addEventListener("click", () => {
  history.back();
});

// variaveis para as telas
const seguranca = document.getElementById("seguranca");
const dashboard = document.getElementById("dashboard");
const recursos = document.getElementById("recursos");
const atividades = document.getElementById("atividades");
const config = document.getElementById("configuracoes");

function handleMenuClick(e) {
  e.preventDefault();

  todosOsItens.forEach((itemClicavel) => {
    itemClicavel.addEventListener("click", (e) => {
      e.preventDefault();

      todosOsItens.forEach((item) => {
        item.classList.remove("ativo");
      });

      // e.target é o elemento exato que recebeu o clique.
      e.target.classList.add("ativo");

      // --- Lógica para mostrar a tela correta ---
      // Pega o ID do item clicado (ex: "seguranca")
      const clickedId = e.currentTarget.id;

      telasContainer.innerHTML = "";

      if (clickedId === "dashboard") {
        //   .outerHTML para pegar o elemento <article> inteiro
        telasContainer.innerHTML = telaDashboardInicial.outerHTML;
      } else if (clickedId === "seguranca") {
        telasContainer.innerHTML = `
                <div id="style-seguranca">
                    <h2>Monitor de Segurança</h2>
                  <div class="info-seguranca">
                    <p>Perímetro principal<span>ATIVO</span></p>
                    <p>Laboratório R&D<span>ATIVO</span></p>
                    <p>Setor Industrial<span class="yellow">MANUTENÇÃO</span></p>
                    <p>Data Center<span>ATIVO</span></p>
                </div>
            `;
      } else if (clickedId === "recursos") {
        telasContainer.innerHTML = `
                <div id="style-recursos">
                    <h2>Uso de Recursos</h2>
                    <div class="info-recursos">
                        <p>CPU <span class="blue">67%</span></p>
                        <progress value="67" max="100" class="progress-recursos"></progress>
                    </div>
                    <div class="info-recursos">
                        <p>Memória <span class="violet">45%</span></p>
                        <progress value="45" max="100" class="progress-memoria" ></progress>
                    </div>
                    <div class="info-recursos">
                        <p>Armazenameto <span class="yellow">82%</span></p>
                        <progress value="82" max="100" class="progress-armazenamento"></progress>
                    </div>
                    <div class="info-recursos">
                        <p>Redes <span class="green">34%</span></p>
                        <progress value="34" max="100" class="progress-redes"></progress>
                    </div>
                </div>
            `;
      } else if (clickedId === "atividades") {
        telasContainer.innerHTML = `
                <div id="style-atividades">
                    <h2>Atividades Recentes</h2>
                    <div class="info-atividades">
                    <div class="info">
                    <p>Conteúdo da tela de Atividades.</p>
                    <span class="atividade">5 minutos</span>
                    </div>
                    <div class="info">
                    <p>Conteúdo da tela de Atividades.</p>
                    <span class="atividade">5 minutos</span>
                    </div>
                    <div class="info">
                    <p>Conteúdo da tela de Atividades.</p>
                    <span class="atividade">5 minutos</span>
                    </div>
                    <div class="info">
                    <p>Conteúdo da tela de Atividades.</p>
                    <span class="atividade">5 minutos</span>
                    </div>
                    <div class="info">
                    <p>Conteúdo da tela de Atividades.</p>
                    <span class="atividade">5 minutos</span>
                    </div>
                    </div>
                </div>
            `;
      }
    });
  });
}

todosOsItens.forEach((item) => {
  item.addEventListener("click", handleMenuClick);
});

function atualizarHora() {
  const data = new Date();
  datHora.innerHTML = `${data.toLocaleDateString(
    "pt-BR"
  )} - ${data.toLocaleTimeString("pt-BR")}`;
}
atualizarHora();
setInterval(atualizarHora, 1000);
