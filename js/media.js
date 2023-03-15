

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";

  let somaNotas = nota1 + nota2 + nota3 + nota4;
  let media = somaNotas/4;
 
if (media === 0) {
  console.log (mensagem = 'Infelizmente você zerou a prova');
}
else if (media >= 0.1 && media <= 3) {
  console.log (mensagem = 'Caramba, deu ruim, você obteve média ' + media + '! Estude mais e tente novamente!');
}
else if (media >= 3.1 && media <= 5.9) {
  console.log(mensagem = 'Você obteve média ' + media + '! Falta pouco para a média');
}
else if (media >= 6 && media <= 7) {
  console.log (mensagem = 'Você está na média com a nota ' + media + '!');
}
else if (media >= 7.1 && media <= 9.9) {
  console.log (mensagem = 'Notão! Sua média é ' + media + '!');
}
else if (media === 10) {
  console.log(mensagem = 'Hoje é seu aniversário? Porque você está de parabéns! 10 de média' );
}

  document.getElementById("situacaoAluno").innerHTML = mensagem;
}
