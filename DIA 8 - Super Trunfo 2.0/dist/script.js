var carta1 = {
  nome: "Agumon",
  imagem: "https://i.imgur.com/m9sL3fK.png",
  atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
  }
};

var carta2 = {
  nome: "Tailmon",
  imagem: "https://i.imgur.com/nxIe5QW.png",
  atributos: {
      ataque: 6,
      defesa: 8,
      magia: 2
  }
  
};

var carta3 = {
  nome: "Patamon",
  imagem: "https://i.imgur.com/UpR0t5m.png",
  atributos: {
      ataque: 4,
      defesa: 7,
      magia: 8
  }
};

var carta4 = {
  nome: "Gabumon",
  imagem: "https://i.imgur.com/9gJYzTd.png",
  atributos: {
      ataque: 8,
      defesa: 2,
      magia: 3
  }
};

var carta5 = {
  nome: "Koromon",
  imagem: "https://i.imgur.com/qDwV7qV.png",
  atributos: {
      ataque: 6,
      defesa: 5,
      magia: 8
  }
};

var carta6 = {
  nome: "Palmon",
  imagem: "https://i.imgur.com/RQxyX70.png",
  atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
  }
};

var carta7 = {
  nome: "Piyomon",
  imagem: "https://i.imgur.com/pNRx8HB.png",
  atributos: {
      ataque: 8,
      defesa: 10,
      magia: 1
  }
};

var carta8 = {
  nome: "Tentomon",
  imagem: "https://i.imgur.com/cLMOLzQ.png",
  atributos: {
      ataque: 9,
      defesa: 5,
      magia: 6
  }
};

var cartaMaquina;
var cartaJogador;
var listaOriginal = [
  carta1, carta2, carta3, carta4,
  carta5, carta6, carta7, carta8
];
lista = listaOriginal.sort(() => Math.random() - 0.5);
var cartasDoJogador = [lista[0], lista[1], lista[2], lista[3]];
var cartasDaMaquina = [lista[4], lista[5], lista[6], lista[7]];
var feedback = document.getElementById("feedback");
var elemento = document.getElementById("resultado");
var divCartaMaquina = document.getElementById("carta-maquina");

function sortearCarta() {
  feedback.innerHTML = "";
  elemento.innerHTML = "";
  divCartaMaquina.innerHTML = "";
  divCartaMaquina.style.backgroundImage = "none";
  if (cartasDaMaquina.length !== 0 && cartasDoJogador.length !== 0) {
    var numeroCartaMaquina = parseInt(Math.random() * cartasDaMaquina.length);
    cartaMaquina = cartasDaMaquina[numeroCartaMaquina];
    var numeroCartaJogador = parseInt(Math.random() * cartasDoJogador.length);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * cartasDoJogador.length);
    }
    cartaJogador = cartasDoJogador[numeroCartaJogador];
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  } else {
    checaListas(cartasDaMaquina, cartasDoJogador);
  }
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function checaListas(lista1, lista2) {
  if (lista1.length === 0) {
    elemento.innerHTML = `<h2 style="color: green;">Acabou, você pegou todas as cartas da máquina!</h2>`
    feedback.innerHTML = `<img src="https://c.tenor.com/Dh-eyxQ-PckAAAAC/ashita-ashita-no-joe.gif">`
    document.getElementById("btnSortear").disabled = true;
  } 
  if (lista2.length === 0) {
    elemento.innerHTML = `<h2 style="color: red;">Acabou, a máquina pegou todas as suas cartas!</h2>`
    feedback.innerHTML = `<img src="https://super.abril.com.br/wp-content/uploads/2016/10/super_imggif_pokemon_estrada_0.gif">`
    document.getElementById("btnSortear").disabled = true;
  }
}
function sortLista(lista) {
  var temp = [];
  for (var i = 0; i < lista.length; i++) {
    temp.push(lista[i].nome);
  }
  return temp;
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  var listaJogador = sortLista(cartasDoJogador);
  var listaMaquina = sortLista(cartasDaMaquina);

  if (listaMaquina.length !== 0 && listaJogador.length !== 0) {
    if (valorCartaJogador > valorCartaMaquina) {
      var indexMaquina = cartasDaMaquina.indexOf(cartaMaquina);
      var indexListaMaquina = listaMaquina.indexOf(cartaMaquina.nome);
      cartasDoJogador.push(cartaMaquina);
      listaJogador.push(cartaMaquina.nome);
      cartasDaMaquina.splice(indexMaquina, 1);
      listaMaquina.splice(indexListaMaquina, 1);
      elemento.innerHTML = `<h2 style="color: green;">Você venceu ${cartaMaquina.nome} que possui ${valorCartaMaquina} de ${atributoSelecionado}!</h2>`
    } else if (valorCartaMaquina > valorCartaJogador) {
      var indexJogador = cartasDoJogador.indexOf(cartaJogador);
      var indexListaJogador = listaJogador.indexOf(cartaJogador.nome);
      cartasDaMaquina.push(cartaJogador);
      listaMaquina.push(cartaJogador.nome);
      cartasDoJogador.splice(indexJogador, 1);
      listaJogador.splice(indexListaJogador, 1);
      elemento.innerHTML = `<h2 style="color: red;">Você perdeu para ${cartaMaquina.nome} que possui ${valorCartaMaquina} de ${atributoSelecionado}!</h2>`
    } else {
      elemento.innerHTML = `<h2 style="color: yellow;">Empatou com ${cartaMaquina.nome} que possui ${valorCartaMaquina} de ${atributoSelecionado}!</h2>`
    }
    feedback.innerHTML = `<h2>Suas cartas restantes: ${listaJogador}<br>Cartas da Máquina restantes: ${listaMaquina}`;
  } else {
    checaListas(listaJogador, listaMaquina);
  }
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura = `<img src="https://i.imgur.com/SSEk22f.png"
  style=" width: inherit; height: inherit; position: absolute;">`
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">` + atributo + ` ${cartaJogador.atributos[atributo]}<br>`;
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura = `<img src="https://i.imgur.com/SSEk22f.png"
  style=" width: inherit; height: inherit; position: absolute;">`
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p name="atributo" value="${atributo}">` + atributo + ` ${cartaMaquina.atributos[atributo]}</p>`;
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}