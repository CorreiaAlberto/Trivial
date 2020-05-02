//Preguntas
const preguntas = [{
    pregunta: "¿Que cocktail popularizó la pelicula El gran Lebowsky?",
    a: "Cosmopolitan",
    b: "Old fashioned",
    c: "Mojito",
    correcta: "White russian",
    img: "./imgs/Ruso-blanco.jpg.",
  },
  {
    pregunta: "¿Cual de los siguientes ingredientes NO lleva un bloody mary?",
    a: "Salsa Worcester",
    b: "Zumo de tomate",
    c: "Tabasco",
    correcta: "Ginebra",
    img: "./imgs/bloody mary.jpg",
  },
  {
    pregunta: "¿Que cocktail hizo aparición durante la segunda parte de El padrino?",
    a: "Dry martini",
    b: "Tom Collins",
    c: "Negroni",
    correcta: "Banana daiquiri",
    img: "./imgs/el padrino.jpg",
  },
];
// Aplico un shuffle para poder pasar orden de preguntas distinto cada vez
function shuffle(arr) {
  var i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
let preguntasMezcladas = shuffle(preguntas);

//Constructor Player
class Player {
  constructor(nombre) {
    this.nombre = nombre;
    this.score = 0;
  }
}

//Constructor de partida
class Partida {
  constructor() {
    this.preguntas = preguntasMezcladas;
    this.indice = 0;
    this.preguntaActual = this.preguntas[this.indice];
    this.preguntasRealizadas = [];
  }
  //Comprobar respuesta ganadora
  // respuestaCorrecta(respuestaUsuario) {
  //  if (respuestaUsuario == preguntas[this.indice].correcta) {
  //  return true;
  // }
  //}
  //Actualizar Score
  actualizarScore() {
    if (this.respuestaCorrecta) {
      score = score + 5;
    }
  }

  //Metodo para siguiente pregunta
  siguientePregunta() {

    //Mostrar 1 pregunta
    document.getElementById("pregunta").innerHTML = this.preguntas[this.indice].pregunta;
    //Mostrar 1 imagen
    document.getElementById("imagen").src = this.preguntas[this.indice].img;
    //shuffle respuestas
    let opciones = ["a", "b", "c", "correcta"]


    opciones = shuffle(opciones)

    //Mostrar opciones respuesta
    document.getElementById("a").innerHTML = this.preguntas[this.indice].a;
    document.getElementById("b").innerHTML = this.preguntas[this.indice].b;
    document.getElementById("c").innerHTML = this.preguntas[this.indice].c;
    document.getElementById("correcta").innerHTML = this.preguntas[this.indice].correcta;
    const botones = document.getElementsByClassName("op")
    Array.from(botones).forEach(function (boton) {
      boton.style.backgroundColor = "#DDD"
    })
    this.indice++;
  }
}
class Board {
  constructor() {
    this.splash = document.getElementById("splash");

    this.heroImg = document.getElementById("hero");
    this.player1Score = document.getElementById("score1");
    this.player2Score = document.getElementById("score2");
    this.opcionA = document.getElementById("a");
    this.opcionB = document.getElementById("b");
    this.opcionC = document.getElementById("c");
    this.opcionD = document.getElementById("d");
  }
}
let board = new Board();
let player1 = new Player("alberto");
let partida = new Partida()

//Cambio Splash
document.getElementById("inicio").onclick = (evento) => {
  //esconder splash
  document.getElementById("splash").style.display = "none";
  //Mostrar pregunta
  document.getElementById("preguntas").style.display = "inline";
  //Mostrar player 1
  document.getElementById("player1").style.display = "inline";
  // document.getElementById("player").innerHTML =
  // boton siguiente pregunta
  document.getElementById("siguiente").onclick = (evento) => {
    partida.siguientePregunta()
  }

  //inicio partida
  partida.siguientePregunta()
};
// Colorear respuestas
const respuestaValida = document.getElementById("d")
const respuestaInvalida = document.querySelectorAll("#a,#b,#c")


respuestaValida.addEventListener("click", event => {
  respuestaValida.style.backgroundColor = "green"
})

Array.from(respuestaInvalida).forEach(function (elemento) {
  elemento.addEventListener("click", event => {
    event.target.style.backgroundColor = "red"
  })
})



/* clase partida ()
constructor ()
preguntas
preguntaSeleccionada = 1
indice = 0
function siguientePregunta() {
indice ++
this.preguntaSeleccionada= this.preguntas[this.indice]
}
const partidaNueva = new partida () 
partidaNueva.siguientePregunta() 
partidaNueva.partidaSeleccionada*/