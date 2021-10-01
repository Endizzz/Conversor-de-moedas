function ConverterDolar() {
  var inserirEmDolar = document.getElementById("valorDolar");
  var valor = inserirEmDolar.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var convertidoReal = valorEmDolarNumerico * 5.25;
  console.log(convertidoReal);
  var elementoValorConvertido = document.getElementById("valorConvertidoReal");
  var convertido =
    "O resultado da conversão de Dolar para real é R$ " + convertidoReal;
  elementoValorConvertido.innerHTML = convertido;
}

function ConverterReal() {
  var inserirEmReal = document.getElementById("valorReal");
  var valor2 = inserirEmReal.value;
  var valorEmRealNumerico = parseFloat(valor2);

  var convertidoDolar = (valorEmRealNumerico / 5.25).toFixed(2);
  console.log(convertidoDolar);
  var elementoValorConvertido2 = document.getElementById(
    "valorConvertidoDolar"
  );
  var convertido2 =
    "O resultado da conversão de Real para Dolar é US$ " + convertidoDolar;
  elementoValorConvertido2.innerHTML = convertido2;
}