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

const formes = document.getElementById("formes");
const popoverOverlay = document.getElementById("popoverOverlay");

const btnAbrirEstadoCivil = document.getElementById("btnAbrirEstadoCivil");
const popoverEstadoCivil = document.getElementById("popoverEstadoCivil");
const estadoCivilSelecionado = document.getElementById(
  "estadoCivilSelecionado"
);
const estadoCivilValor = document.getElementById("estadoCivilValor");

const btnAbrirEstado = document.getElementById("btnAbrirEstado");
const popoverEstado = document.getElementById("popoverEstado");
const listaEstados = popoverEstado.querySelector(".popover__lista");
const estadoSelecionado = document.getElementById("estadoSelecionado");
const estadoValor = document.getElementById("estadoValor");

const popovers = [
  { btn: btnAbrirEstadoCivil, popover: popoverEstadoCivil },
  { btn: btnAbrirEstado, popover: popoverEstado },
];

function fecharPopovers() {
  popovers.forEach(({ popover }) => popover.classList.remove("aberto"));
  popoverOverlay.classList.remove("ativo");
}

function abrirPopover(popover) {
  fecharPopovers();
  popover.classList.add("aberto");
  popoverOverlay.classList.add("ativo");
}

popovers.forEach(({ btn, popover }) => {
  btn.addEventListener("click", () => {
    const estaAberto = popover.classList.contains("aberto");
    estaAberto ? fecharPopovers() : abrirPopover(popover);
  });
});

popoverOverlay.addEventListener("click", fecharPopovers);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") fecharPopovers();
});

// preenche as opções do popover de estado civil (já existentes no HTML)
popoverEstadoCivil.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    estadoCivilValor.value = item.dataset.value;
    estadoCivilSelecionado.textContent = item.textContent;
    fecharPopovers();
  });
});

// gera as opções do popover de estado a partir da lista de estados
estados.forEach((estado) => {
  const item = document.createElement("li");
  item.dataset.value = estado.sigla;
  item.textContent = `${estado.sigla} - ${estado.nome}`;

  item.addEventListener("click", () => {
    estadoValor.value = estado.sigla;
    estadoSelecionado.textContent = item.textContent;
    btnAbrirEstado.classList.remove("erro");
    fecharPopovers();
  });

  listaEstados.appendChild(item);
});

formes.addEventListener("submit", (event) => {
  if (!estadoValor.value) {
    event.preventDefault();
    btnAbrirEstado.classList.add("erro");
    abrirPopover(popoverEstado);
  }
});
