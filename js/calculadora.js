function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
  
  
  let soma = numero1 + numero2
  
  
  document.getElementById("resultadoSoma").innerHTML = soma;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
  
  
  let subtraçao = numero1 - numero2
  
  
  document.getElementById("resultadoSub").innerHTML = subtraçao;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
  
  
  let multiplicaçao = numero1 * numero2
  
  
  document.getElementById("resultadoMult").innerHTML = multiplicaçao;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
 
  
  let divisao = numero1 / numero2
  
  
  document.getElementById("resultadoDiv").innerHTML = divisao;
}
