var carta1 = {
    nome: "Agumon",
    imagem: "https://i.imgur.com/dp0rRmT.jpg",
    descricao: "A Reptile Digimon with an appearance resembling a small dinosaur, it has grown and become able to walk on two legs.",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Tailmon",
    imagem: "https://i.imgur.com/nxIe5QW.png",
    descricao: "Although its body is small, it's a precious Holy-species Digimon, and its appearance doesn't match its true strength.",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
    
};

var carta3 = {
    nome: "Patamon",
    imagem: "https://i.imgur.com/LJw0IGJ.jpg",
    descricao: "A Mammal Digimon characterized by its large ears. It is able to fly through the air by using them as large wings.",
    atributos: {
        ataque: 4,
        defesa: 7,
        magia: 10
    }
};

var cartas = [carta1, carta2];
var cartaMaquina;
var cartaJogador;

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    for (var i in cartaJogador.atributos) {
        if (i === Object.keys(cartaJogador.atributos)[0]) {
            opcoesTexto += `<input type="radio" name="atributo" value="${i}" checked>` + i + ` `;
        } else {
            opcoesTexto += `<input type="radio" name="atributo" value="${i}">` + i + ` `;
        }   
    }
    opcoes.innerHTML = opcoesTexto;
}

function sortearCarta() {
    var numMaquina = parseInt(Math.random()*(cartas.length));
    cartaMaquina = cartas[numMaquina];

    var numJogador = parseInt(Math.random()*(cartas.length));
    while (numMaquina == numJogador) {
        numJogador = parseInt(Math.random()*(cartas.length));
    }
    cartaJogador = cartas[numJogador];
    
    document.getElementById("btnSortear").disabled = true; 
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
    mostrarCarta();
}

function mostrarCarta() {
    var campoCarta = document.getElementById("carta");
    campoCarta.innerHTML = (
        `<div class="carta"><h1>${cartaJogador.nome}</h1>
        <img src="${cartaJogador.imagem}" height="320px" width="320px" >
        <p>${cartaJogador.descricao}</p>
        <p>Ataque: ${cartaJogador.atributos.ataque}</p>
        <p>Defesa: ${cartaJogador.atributos.defesa}</p>
        <p>Magia: ${cartaJogador.atributos.magia}</p><div>`
    );
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;   
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elemento = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elemento.innerHTML = `<h2>Você venceu ${cartaMaquina.nome} que possui ${valorCartaMaquina} de ${atributoSelecionado}!</h2>`
    } else if (valorCartaMaquina > valorCartaJogador) {
        elemento.innerHTML = `<h2>Você perdeu para ${cartaMaquina.nome} que possui ${valorCartaMaquina} de ${atributoSelecionado}!</h2>`
    } else {
        elemento.innerHTML = `<h2>Empatou com ${cartaMaquina.nome} que possui ${valorCartaMaquina} de ${atributoSelecionado}!</h2>`
    }
    document.getElementById("btnJogar").disabled = true;
}