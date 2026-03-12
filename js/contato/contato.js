document.getElementById("forms").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão

  const dados = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    nascimento: document.getElementById("nascimento").value,
    assunto: document.getElementById("assunto").value,
    mensagem: document.getElementById("mensagem").value,
  };

  // Mostra o popup com alerta
  alert(" Sua mensagem foi enviada com sucesso.\n Obrigado por entrar em contato.");

  // Limpa os campos
  this.reset();
});
