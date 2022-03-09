var nome = prompt("Qual seu nome?")

var notaDoPrimeiroBimestre = parseFloat(prompt("Nota do Primeiro Bimestre", "0"))
var notaDoSegundoBimestre = parseFloat(prompt("Nota do Segundo Bimestre", "0"))
var notaDoTerceiroBimestre = parseFloat(prompt("Nota do Terceiro Bimestre", "0"))
var notaDoQuartoBimestre = parseFloat(prompt("Nota do Quarto Bimestre", "0"))

var somaNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre
var notaFinal =  somaNotas/4

var notaFixada = notaFinal.toFixed(2)

console.log("Sua média foi " + ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4).toFixed(2))

if (notaFixada >= 7.0) {
 document.getElementById("texto").innerText = `Bem vindo(a), ${nome}! Sua média foi ${notaFixada} e você foi aprovado(a)!`
} else {
 document.getElementById("texto").innerText = `Bem vindo(a), ${nome}! Sua média foi ${notaFixada} e você foi reprovado(a)!`
}
// isso é um comentário 

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação