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
  {
    pregunta: "¿Cual es el nombre del cocktail favorito de James Bond?",
    a: "Vodka Martini",
    b: "Coco loco",
    c: "Bondtini",
    correcta: "Vesper Martini",
    img: "./imgs/james bond.jpg"
  },
  {
    pregunta: "¿Cual es el nombre del cocktail que vemos preparar en la imagen a Jerry Thomas? ",
    a: "Blue lagoon",
    b: "Manhattan",
    c: "Mint julep",
    correcta: "Blue blazer",
    img: "./imgs/Jerry-Thomas.jpg"
  },
  {
    pregunta: "¿Que establecimiento cubano comercilizó por primerar vez el popular mojito?",
    a: "La floridita",
    b: "El bribón de la havana",
    c: "La cantina del Malecón",
    correcta: "La bodedguita de en medio",
    img: "./imgs/mojito.jpg"

  },
  {
    pregunta: "¿Cual es la bebida favorita de Don Draper, protagonista de Mad men?",
    a: "Negroni",
    b: "Long island ice tea",
    c: "Agua con gas",
    correcta: "Old fashioned",
    img: "./imgs/madmen.jpg"
  },
  {
    pregunta: "¿Cual es la base alcoholica predominante en la coctelería Tiki?",
    a: "Vodka",
    b: "Whisky",
    c: "Ginebra",
    correcta: "Ron",
    img: "./imgs/tiki.jpg"
  },
  {
    pregunta: "¿Cual de estos ingredientes lleva el Long Island ice tea?",
    a: "Ginebra",
    b: "Vodka",
    c: "Tequila",
    correcta: "Todas las opciones son correctas",
    img: "./imgs/long-island.jpg"
  },
  {
    pregunta: "¿Cual era la bebida favorita de las  chicas de Sexo en Nueva York?",
    a: "Bramble",
    b: "Gin-tonic",
    c: "Margarita",
    correcta: "Cosmopolitan",
    img: "./imgs/sexoNY.jpg"
  },
  {
    pregunta: "¿Que coctelería inglesa se mantuvo durante 3 años consecutivos en el numero 1 de 50 world best bars?",
    a: "Nigthjar",
    b: "Happines Forgets",
    c: "Dandelyan",
    correcta: "The Artesian",
    img: "./imgs/Artesian1.jpg"
  },
  {
    pregunta: "¿Que tres ingredientes lleva un Margarita?",
    a: "Pisco, triple seco y zumo de lima",
    b: "Tequila, ázucar y zumo de lima",
    c: "Tequila, triple seco y ázucar",
    correcta: "Tequila, triple seco y zumo de lima",
    img: "./imgs/margarita.jpg"
  },
  {
    pregunta: "¿Que se conoce como Speakeasy?",
    a: "Un licor",
    b: "Un tipo de cerveza",
    c: "Una bebida tradicional checa",
    correcta: "Un bar oculto",
    img: "./imgs/speak.jpg"
  },
  {
    pregunta: "¿Que día acabó la ley seca en EEUU?",
    a: "4 de Junio 1935",
    b: "22 de Enero 1928",
    c: "7 de Noviembre 1932",
    correcta: "5 de Diciembre de 1933",
    img: "./imgs/leyseca.jpg"
  }
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
  respuestaCorrecta(respuestaUsuario) {
    if (respuestaUsuario == preguntas[this.indice].correcta) {
      return true;
    }
  }
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
    //let opciones = ["a", "b", "c", "correcta"]
    //opciones = shuffle(opciones)

    //Mostrar opciones respuesta

    document.getElementById("a").innerHTML = this.preguntas[this.indice].a
    document.getElementById("b").innerHTML = this.preguntas[this.indice].b
    document.getElementById("c").innerHTML = this.preguntas[this.indice].c
    document.getElementById("correcta").innerHTML = this.preguntas[this.indice].correcta
    const botones = document.getElementsByClassName("op")
    Array.from(botones).forEach(function (boton) {
      boton.style.backgroundColor = "#DDD"
    })
    this.indice++;
  }
  //Comprobar si ha acabado la partida
  gameOver() {
    if (this.indice >= 10) {
      //mostrar splash game over
      document.getElementById("titulo").style.display = "none"
      document.getElementById("hero").style.display = "none"
      document.getElementById("cuadro-jugadores").style.display = "none"
      document.getElementById("gameOver").style.display = "inline"
      //Poner cancion game over
    }
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
const respuestaValida = document.getElementById("correcta")
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