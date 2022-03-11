var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var numTentativas = document.getElementById("tentativas");
numTentativas.innerHTML = "O número de tentativas restantes é " + tentativas;

function Chutar() {
  var resultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);

  if (chute === numeroSecreto) {
    resultado.innerHTML = "Acertou!";
    document.getElementById("valor").disabled = true;
    numTentativas.innerHTML = "";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 10!";
    tentativas--;
    numTentativas.innerHTML =
      "O número de tentativas restantes é " + tentativas;
  } else {
    if (numeroSecreto > chute) {
      resultado.innerHTML = `Errou, o número secreto é maior do que ${chute}!`;
      tentativas--;
      numTentativas.innerHTML =
        "O número de tentativas restantes é " + tentativas;
    } else {
      resultado.innerHTML = `Errou, o número secreto é menor do que ${chute}!`;
      tentativas--;
      numTentativas.innerHTML =
        "O número de tentativas restantes é " + tentativas;
    }
  }

  if (tentativas === 0) {
    document.getElementById("valor").disabled = true;
    resultado.innerHTML = `Errou, o número secreto era ${numeroSecreto}!`;
    numTentativas.innerHTML =
      "O número de tentativas restantes é " + tentativas;
  }
}
