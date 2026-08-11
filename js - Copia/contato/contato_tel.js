const telInput = document.getElementById("telnumber");

telInput.addEventListener("input", () => {
  let value = telInput.value.replace(/\D/g, "");

  // limita a 11 números
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length >= 2) {
    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  }
  if (value.length >= 4) {
    value = `${value.slice(0, 6)}-${value.slice(6)}`;
  }
  if (value.length >= 8) {
    value = `${value.slice(0, 11)}-${value.slice(11)}`;
  }

  telInput.value = value;
});

function validarTelefone() {
  const regex = /^\(\d{2}\) \d-\d{4}-\d{4}$/;
  return regex.test(telInput.value);
}
