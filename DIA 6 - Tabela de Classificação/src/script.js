var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var jogadores = [rafa];

function calculaPontos(jogador) {
  return jogador.vitorias * 3 + jogador.empates;
}

calculaPontos(rafa);
console.log(rafa);

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
