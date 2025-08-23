const datHora = document.querySelector(".hora-data");
const telaPrincipal = document.querySelector(".tela-principal");
const todosOsItens = document.querySelectorAll(".item-menu");
const telasContainer = document.querySelector(".telas");
const telaDashboardInicial = document.querySelector(".principal-tela");
const btnSairPainel = document.querySelector(".btn-sair-painel");

const nomeUsuario = localStorage.getItem("nome");
const gerente = (document.getElementById("gerente").innerHTML = `Gerente: ${nomeUsuario}`);

btnSairPainel.addEventListener("click", () => {
  history.back();
});

const seguranca = document.getElementById("seguranca");
const dashboard = document.getElementById("dashboard");
const recursos = document.getElementById("recursos");
const atividades = document.getElementById("atividades");
const config = document.getElementById("configuracoes");

todosOsItens.forEach((item) => {
  item.addEventListener("click", handleMenuClick);
});

function handleMenuClick(event) {
  // Impede que o link recarregue a página
  event.preventDefault();

  // Remove a classe "ativo" de todos os itens para limpar o estado
  todosOsItens.forEach((item) => {
    item.classList.remove("ativo");
  });

  // Adiciona a classe "ativo" apenas ao item que foi clicado
  const itemClicado = event.currentTarget;
  itemClicado.classList.add("ativo");

  // Chama a outra função, passando o ID do item clicado para que ela decida o que mostrar
  renderizarTela(itemClicado.id);
}

function renderizarTela(idDaTela) {
  let conteudoHTML = ""; // Variável que vai guardar o HTML a ser exibido

  // Usamos um "switch" em vez de "if/else if". É muito mais limpo para múltiplos casos.
  switch (idDaTela) {
    case "dashboard":
      conteudoHTML = telaDashboardInicial.outerHTML;
      break;

    case "seguranca":
      conteudoHTML = `
                <div id="style-seguranca">
                    <h2>Monitor de Segurança</h2>
                    <div class="info-seguranca">
                        <p>Perímetro principal<span>ATIVO</span></p>
                        <p>Laboratório R&D<span>ATIVO</span></p>
                        <p>Setor Industrial<span class="yellow">MANUTENÇÃO</span></p>
                        <p>Data Center<span>ATIVO</span></p>
                    </div>
                </div>`;
      break;

    case "recursos":
      conteudoHTML = `
                <div id="style-recursos">
                    <h2>Uso de Recursos</h2>
                    <div class="info-recursos">
                        <p>CPU <span class="blue">67%</span></p>
                        <progress value="67" max="100" class="progress-recursos"></progress>
                        <p>Memória <span class="violet">45%</span></p>
                        <progress value="45" max="100" class="progress-memoria"></progress>
                        <p>Armazenamento <span class="yellow">82%</span></p>
                        <progress value="82" max="100" class="progress-armazenamento"></progress>
                        <p>Redes <span class="green">34%</span></p>
                        <progress value="34" max="100" class="progress-redes"></progress>
                    </div>
                </div>`;
      break;

    case "atividades":
      conteudoHTML = `
                <div id="style-atividades">
                    <h2>Atividades Recentes</h2>
                    <div class="info-atividades">
                        <div class="info"><p>Acesso ao servidor principal.</p><span class="atividade">1 minuto</span></div>
                        <div class="info"><p>Ajuste de Perímetro.</p><span class="atividade">2 minutos</span></div>
                        <div class="info"><p>Setor Industrial - Manutenção.</p><span class="atividade">9 minutos</span></div>
                        <div class="info"><p>Setor Produção - Verificação.</p><span class="atividade">5 minutos</span></div>
                        <div class="info"><p>Armazenamento - Limpeza.</p><span class="atividade">3 minutos</span></div>
                    </div>
                </div>`;
      break;

    default:
      conteudoHTML = `<h2>Página não encontrada</h2>`; // Caso um ID não corresponda a nada
  }

  // Finalmente, insere o HTML escolhido no container da tela
  telasContainer.innerHTML = conteudoHTML;
}

function atualizarHora() {
  const data = new Date();
  datHora.innerHTML = `${data.toLocaleDateString(
    "pt-BR"
  )} - ${data.toLocaleTimeString("pt-BR")}`;
}
atualizarHora();
setInterval(atualizarHora, 1000);
