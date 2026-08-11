const estados = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
];

const dialogEstado = document.getElementById("dialogEstado");
const btnAbrirEstado = document.getElementById("btnAbrirEstado");
const btnFecharEstado = document.getElementById("btnFecharEstado");
const listaEstados = document.getElementById("listaEstados");
const estadoSelecionado = document.getElementById("estadoSelecionado");
const estadoValor = document.getElementById("estadoValor");
const formes = document.getElementById("formes");

estados.forEach((estado) => {
  const item = document.createElement("button");
  item.type = "button";
  item.className = "item__estado";
  item.textContent = `${estado.sigla} - ${estado.nome}`;

  item.addEventListener("click", () => {
    estadoValor.value = estado.sigla;
    estadoSelecionado.textContent = `${estado.sigla} - ${estado.nome}`;
    btnAbrirEstado.classList.remove("erro");
    dialogEstado.close();
  });

  listaEstados.appendChild(item);
});

btnAbrirEstado.addEventListener("click", () => {
  dialogEstado.showModal();
});

btnFecharEstado.addEventListener("click", () => {
  dialogEstado.close();
});

dialogEstado.addEventListener("click", (event) => {
  if (event.target === dialogEstado) {
    dialogEstado.close();
  }
});

formes.addEventListener("submit", (event) => {
  if (!estadoValor.value) {
    event.preventDefault();
    btnAbrirEstado.classList.add("erro");
    dialogEstado.showModal();
  }
});
