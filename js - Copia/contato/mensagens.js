const textarea = document.getElementById("mensagem");
const contador = document.getElementById("contador");

const maxCaracteres = textarea.maxLength;

contador.textContent = maxCaracteres;

textarea.addEventListener("input", () => {
  const restante = maxCaracteres - textarea.value.length;
  contador.textContent = restante;
});
