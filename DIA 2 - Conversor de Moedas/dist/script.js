function converterReal() {
  var valor = document.getElementById("valor").value;
  var valorEmDolarNumerico = parseFloat(valor);
  // valor do dólar em reais em 08/03/2022: R$5,09
  var valorEmReal = (valorEmDolarNumerico * 5.09).toFixed(2);
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  // valor do dólar em BTC em 08/03/2022: 0,000026 BTC
  var valorEmBTC = valorEmDolarNumerico * 0.000026;
  var elementoValorBTC = document.getElementById("valorEmBTC");
  var valorConvertidoBTC = "O valor em bitcoins é " + valorEmBTC + " BTC";
  elementoValorBTC.innerHTML = valorConvertidoBTC;
}

function converterEuro() {
  var valor = document.getElementById("valor").value;
  var valorEmDolarNumerico = parseFloat(valor);
  // valor do dólar em euros em 08/03/2022: 0,92 €
  var valorEmEuro = (valorEmDolarNumerico * 0.92).toFixed(2);
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em euro é " + valorEmEuro + " €";
  elementoValorConvertido.innerHTML = valorConvertido;

  // valor do dólar em BTC em 08/03/2022: 0,000026 BTC
  var valorEmBTC = valorEmDolarNumerico * 0.000026;
  var elementoValorBTC = document.getElementById("valorEmBTC");
  var valorConvertidoBTC = "O valor em bitcoins é " + valorEmBTC + " BTC";
  elementoValorBTC.innerHTML = valorConvertidoBTC;
}

function converterKM() {
  var valor = document.getElementById("valorKM").value;
  var valorEmKM = parseFloat(valor);
  // valor de 1 quilômetro em ano-luz: 9.460.800.000.000 anos luz
  var valorEmAnosLuz = valorEmKM * 9460800000000;
  console.log(valorEmAnosLuz);

  var elementoValorConvertido = document.getElementById("valorAnosLuz");
  var valorConvertido =
    valorEmKM +
    " km equivale à aproximadamente " +
    valorEmAnosLuz +
    " anos-luz";
  elementoValorConvertido.innerHTML = valorConvertido;
}