var jogadores = [];
var mensagem = document.getElementById("mensagem");

function calculaPontos(jogador) {
  return parseInt(jogador.vitorias) * 3 + parseInt(jogador.empates);
}

function adicionaJogador() {
  mensagem.innerHTML = "";
  var jogador = {imagem: "", nome: "", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
  jogador.nome = document.getElementById("nome").value;
  jogador.imagem = document.getElementById("imagem").value;
  var found = false;
  for (let i=0; i < jogadores.length; i++) {
    if (Object.values(jogadores[i]).includes(jogador.nome) || Object.values(jogadores[i]).includes(jogador.imagem)) {
      mensagem.innerHTML = "<h1>Adicione um(a) nome/imagem diferente!</h1>"
      var found = true;
    }
  } 
  if (found == false) {
    if (jogador.imagem !== "" && (jogador.imagem.endsWith(".png") || jogador.imagem.endsWith(".jpg"))) {
      jogadores.push(jogador);
    } else {
      mensagem.innerHTML = "<h1>Adicione uma imagem válida!</h1>"
    } 
  }
  exibeJogadoresNaTela(jogadores);
  document.getElementById("nome").value = "";
  document.getElementById("imagem").value = "";
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (let i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calculaPontos(jogadores[i]);
    elemento += `<tr><td><img src="${jogadores[i].imagem}" height="100px" width="100px"/></td>`;
    elemento += `<td id="nome${i}">${jogadores[i].nome}</td>`;
    elemento += `<td>${jogadores[i].vitorias}</td>`;
    elemento += `<td>${jogadores[i].empates}</td>`;
    elemento += `<td>${jogadores[i].derrotas}</td>`;
    elemento += `<td>${jogadores[i].pontos}</td>`;
    elemento += `<td><button onClick="adicionarVitoria(${i})">Vitória</button></td>`;
    elemento += `<td><button onClick="adicionarEmpate(${i})">Empate</button></td>`;
    elemento += `<td><button onClick="adicionarDerrota(${i})">Derrota</button></td></tr>`;
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
  verificaLider(jogadores);
}

function verificaLider(jogadores) {
  var count = 0;
  var lider = 0;
  for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].pontos >= lider) {
      var lider = jogadores[i].pontos;
      var count = i;
    }
  }
  var nome = document.getElementById(`nome${count}`);
  nome.innerHTML = `<td id="nome${count}">${jogadores[count].nome} 🏆</td>`;
}

function deletaJogadores() {
  var table = document.getElementById("tabelaJogadores");
  table.innerHTML = "";
  jogadores.splice(0, jogadores.length);
  document.getElementById("nome").value = "";
  document.getElementById("imagem").value = "";
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  if ((jogador.vitorias + 1) >= jogadores.length) {
    mensagem.innerHTML = "<h1>Não é possível fazer essa operação</h1>";
  } else {
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    if (jogadores.indexOf(jogadores[i]) === (jogadores.length - 1) && jogadores.indexOf(jogadores[i]) !== 0) {
      jogadores[0].derrotas++;
    } else {
      jogadores[i + 1].derrotas++;
    }
    exibeJogadoresNaTela(jogadores);
  }
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  if ((jogador.empates + 1) >= jogadores.length) {
    mensagem.innerHTML = "<h1>Não é possível fazer essa operação</h1>";
  } else {
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    if (jogadores.indexOf(jogadores[i]) === (jogadores.length - 1) && jogadores.indexOf(jogadores[i]) !== 0) {
      jogadores[0].empates++;
    } else {
      jogadores[i + 1].empates++;
    }
    exibeJogadoresNaTela(jogadores);
  }
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  if ((jogador.derrotas + 1) >= jogadores.length) {
    mensagem.innerHTML = "<h1>Não é possível fazer essa operação</h1>";
  } else {
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    if (jogadores.indexOf(jogadores[i]) === (jogadores.length - 1) && jogadores.indexOf(jogadores[i]) !== 0) {
      jogadores[0].vitorias++;
    } else {
      jogadores[i + 1].vitorias++;
    }
    exibeJogadoresNaTela(jogadores);
  }
}