var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BMzNhZDNiMWItYmQzZC00YjBkLTk1MDMtYTExYTU3ODg3NzA0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
  "https://i.ytimg.com/vi/WwLOfj8s1BQ/movieposter_en.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81zeqn6hofL.jpg",
  "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/36/26/19874715.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/d/d0/Tonari_no_Totoro_p%C3%B4ster.png",
  "https://www.movieguide.org/wp-content/uploads/2019/01/p15702051_v_v8_aa.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTlmYTJmMWEtNDRhNy00ODc1LTg2OTMtMjk2ODJhNTA4YTE1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/b/bb/Kimetsu_no_Yaiba_Season_2_Key_Visual_2.png"
];
var mensagem = document.getElementById("mensagem");

function atualizarLista() {
  var temp = [];
  var filmes = document.getElementById("filmes");
  for (var i = 0; i < listaFilmes.length; i++) {
    temp.push(`<img src="${listaFilmes[i]}" />`);
  }
  filmes.innerHTML = temp;
}

function enviarFilme() {
  var filme = document.getElementById("input").value;
  if (listaFilmes.includes(filme)) {
    mensagem.innerHTML = "<h2>Este filme já existe no catálogo!</h2>";
  } else if (
    filme !== "" &&
    (filme.endsWith(".jpg") || filme.endsWith(".png"))
  ) {
    listaFilmes.push(filme);
    atualizarLista();
  }
}

atualizarLista();