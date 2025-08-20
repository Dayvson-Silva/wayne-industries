let recursos = [
  { id: 1, nome: "Batmovel", tipo: "Veículo" },
  { id: 2, nome: "Cinto de Utilidades", tipo: "Equipamento" },
  { id: 3, nome: "Câmera de Segurança - Setor 5", tipo: "Dispositivo" },
  { id: 4, nome: "Lançador de Gancho", tipo: "Equipamento" },
  { id: 5, nome: "Batarangue", tipo: "Equipamento" },
  { id: 6, nome: "Batwing", tipo: "Veículo" },
];
let proximoId = 7;
//  Variável para guardar o filtro ativo
let filtroAtual = "Todos";

const nomeUsuario = localStorage.getItem("nome");

const adm = document.getElementById("cargo").innerHTML = `adm: ${nomeUsuario}`
const totalRecursos = document.getElementById("total-recursos");
const formularioRecurso = document.getElementById("formulario-recurso");
const corpoTabelaRecursos = document.querySelector("#tabela-recursos tbody");



function atualizarPainel(listaRecursos) {
  const recursoTotal = listaRecursos.length;
  totalRecursos.textContent = ` Total de recursos: ${recursoTotal}`;
}

function renderizarRecursos(recursosParaRenderizar) {
  corpoTabelaRecursos.innerHTML = "";
  recursosParaRenderizar.forEach((recurso) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
            <td>${recurso.nome}</td>
            <td>${recurso.tipo}</td>
            <td>
              <button class="botao-acao btn-editar" onclick="editarRecurso(${recurso.id})">Editar</button>
              <button class="botao-acao btn-excluir" onclick="excluirRecurso(${recurso.id})">Excluir</button>
            </td>
            `;
    corpoTabelaRecursos.appendChild(linha);
  });
  atualizarPainel(recursosParaRenderizar);
}

//  Uma função central para aplicar o filtro e renderizar a tabela
function aplicarFiltroERenderizar() {
  let recursosFiltrados;

  if (filtroAtual === "Todos") {
    recursosFiltrados = recursos;
  } else {
    recursosFiltrados = recursos.filter(
      (recurso) => recurso.tipo === filtroAtual
    );
  }
  renderizarRecursos(recursosFiltrados);
}

formularioRecurso.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.getElementById("recurso-id").value;
  const nome = document.getElementById("recurso-nome").value;
  const tipo = document.getElementById("recurso-tipo").value;

  if (id) {
    const recurso = recursos.find((r) => r.id == id);
    recurso.nome = nome;
    recurso.tipo = tipo;
  } else {
    recursos.push({ id: proximoId++, nome, tipo });
  }

  formularioRecurso.reset();
  document.getElementById("recurso-id").value = "";
  
  aplicarFiltroERenderizar();
});

function editarRecurso(id) {
  const recurso = recursos.find((r) => r.id === id);
  document.getElementById("recurso-id").value = recurso.id;
  document.getElementById("recurso-nome").value = recurso.nome;
  document.getElementById("recurso-tipo").value = recurso.tipo;
}

function excluirRecurso(id) {
  if (confirm("Tem certeza que deseja excluir este recurso?")) {
    recursos = recursos.filter((r) => r.id !== id);
    aplicarFiltroERenderizar();
  }
}

const btnSair = document.querySelector(".btn-sair");

btnSair.addEventListener("click", () => {
    history.back();
});

const todosOsItens = document.querySelectorAll(".item");

todosOsItens.forEach((itemClicado) => {
  itemClicado.addEventListener("click", () => {
    todosOsItens.forEach((item) => {
      item.classList.remove("ativo");
    });
    itemClicado.classList.add("ativo");

    filtroAtual = itemClicado.dataset.tipo;

    aplicarFiltroERenderizar();
  });
});

document.addEventListener("DOMContentLoaded", () => {
    aplicarFiltroERenderizar();
});