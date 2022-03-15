var listaDeFilmes = [];
var listaDeNomes = [];
var count = 0;
var mensagem = document.getElementById("mensagem");

function listarFilmesNaTela(filme, nome) {
  listaDeFilmes.push(filme);
  listaDeNomes.push(nome.toLowerCase());
  var filmeFavorito = `<img src="${filme}" id="index${count}" title="${nome}"/>`;
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + filmeFavorito;
}

function adicionarFilme() {
  var nome = document.getElementById("nome").value;
  var filme = document.getElementById("filme").value;

  if (nome == "") {
    mensagem.innerHTML = "Insira o nome do filme!";
  } else {
    if (
      listaDeFilmes.includes(filme) ||
      listaDeNomes.includes(nome.toLowerCase())
    ) {
      mensagem.innerHTML = "Este filme já se encontra no catálogo!";
    } else if (
      filme !== "" &&
      (filme.endsWith(".jpg") || filme.endsWith(".png"))
    ) {
      mensagem.innerHTML = "";
      listarFilmesNaTela(filme, nome);
    } else {
      mensagem.innerHTML = "Endereço de filme inválido!";
    }
  }
  document.getElementById("nome").value = "";
  document.getElementById("filme").value = "";
}

function removerElemento(lista, elemento, j) {
  for (var i = 0; i < lista.length; i++) {
    if (elemento === lista[i]) {
      var temp = document.getElementById(`index${i}`);
      temp.remove();
      lista.splice(i, 1);
      j++;
    }
  }
}

function removerFilme() {
  var nomeRemovido = document.getElementById("nome").value.toLowerCase();
  var filmeRemovido = document.getElementById("filme").value;
  var found = false;
  var j = 0;
  if (
    nomeRemovido === "" &&
    filmeRemovido === "" &&
    (listaDeNomes.length === 0 || listaDeFilmes.length === 0)
  ) {
    alert("Coloque um nome ou endereço para remover!");
  } else if (nomeRemovido === "" && filmeRemovido !== "") {
    removerElemento(listaDeFilmes, filmeRemovido, j);
    var found = true;
    listaDeNomes.splice(j, 1);
  } else if (nomeRemovido !== "" && filmeRemovido === "") {
    removerElemento(listaDeNomes, nomeRemovido, j);
    var found = true;
    listaDeFilmes.splice(j, 1);
  } else {
    removerElemento(listaDeFilmes, filmeRemovido, j);
    removerElemento(listaDeNomes, nomeRemovido, j);
    var found = true;
  }

  if (found === false) {
    mensagem.innerHTML =
      "O filme que você quer remover não existe na listagem!";
  } else {
    mensagem.innerHTML = "";
  }
  document.getElementById("nome").value = "";
  document.getElementById("filme").value = "";
}
