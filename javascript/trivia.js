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
  }
  getName(nombre) {
    this.nombre = document.getElementById("nombreUsuario").value
    let nombreUsuario = document.getElementById("playerName")
    nombreUsuario.innerText = this.nombre
  }
}
//Constructor de partida
class Partida {
  constructor() {
    this.preguntas = preguntasMezcladas;
    this.indice = 0;
    this.preguntaActual = this.preguntas[this.indice];
    this.score = 0;
  }
  //Comprobar respuesta ganadora  

  respuestaCorrecta(respuestaUsuario) {
    let respuestaCorrecta = null;
    for (let i = 0; i < this.preguntas[this.indice].respuestas.length; i++) {
      if (this.preguntas[this.indice].respuestas[i].correcta) {
        respuestaCorrecta = this.preguntas[this.indice].respuestas[i].resp;
      }
    }
    if (respuestaUsuario == respuestaCorrecta) {
      this.actualizarScore()
      return true;
    }
    return false;
  }
  //Actualizar Score
  actualizarScore() {
    this.score = this.score + 5;
    const scoreCounter = document.querySelector(".score1")
    scoreCounter.innerText = `Score = ${this.score}`
  }

  //Comprobar si ha acabado la partida al llegar a 10 rondas
  gameOver() {
    if (this.indice >= 10) {
      //mostrar splash game over
      document.getElementById("titulo").style.display = "none";
      document.getElementById("hero").style.display = "none";
      document.getElementById("cuadro-jugadores").style.display = "none";
      document.getElementById("preguntas").style.display = "none";
      document.getElementById("siguiente").style.display = "none";
      document.getElementById("gameOver").style.display = "inline";

      //score final
      document.getElementById("puntuacionFinal").innerHTML =
        ` ${player.nombre} tu puntuacion final es de ${this.score}!!!`

      //Poner cancion game over
      let song = document.getElementById("song");

      function playSong() {
        song.play();
      }
      playSong();
    }
  }



  //Metodo para siguiente pregunta
  mostrarPregunta() {
    //Mostrar 1 pregunta
    document.getElementById("pregunta").innerHTML = this.preguntas[
      this.indice
    ].pregunta;

    //Mostrar 1 imagen
    document.getElementById("imagen").src = this.preguntas[this.indice].img;

    //shuffle respuestas
    let opRespuestas = shuffle(this.preguntas[this.indice].respuestas);

    //Mostrar opciones respuesta

    document.getElementById("a").innerHTML = opRespuestas[0].resp;
    document.getElementById("b").innerHTML = opRespuestas[1].resp;
    document.getElementById("c").innerHTML = opRespuestas[2].resp;
    document.getElementById("d").innerHTML = opRespuestas[3].resp;

    //Mostrar score
    document.getElementsByClassName("score1").innerHTML = "Score = " + this.score;

    //Reseteo color opciones respuesta
    const botones = document.getElementsByClassName("op");
    Array.from(botones).forEach(function (boton) {
      boton.style.backgroundColor = "#DDD";
    });


  }
  iniciarJuego() {
    this.mostrarPregunta()
    //Icremento indice
    this.indice = 0
    // Check game over
    this.gameOver();
  }
  siguiente() {
    //Icremento indice
    this.indice += 1
    this.mostrarPregunta()
    // Check game over
    this.gameOver();
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
let player = new Player();
let board = new Board();
let partida = new Partida();

//Cambio Splash
document.getElementById("inicio").onclick = (evento) => {
  //esconder splash
  document.getElementById("splash").style.display = "none";
  //Mostrar pregunta
  document.getElementById("preguntas").style.display = "inline";
  //Mostrar player 1
  document.getElementById("player1").style.display = "inline";
  //Mostrar boton siguiente pregunta
  document.getElementById("siguiente").style.display = "inline";
  // boton siguiente pregunta
  document.getElementById("siguiente").onclick = (evento) => {
    player.getName();
    partida.siguiente();


  };
  player.getName()


  //inicio partida
  partida.iniciarJuego();
};
// Colorear respuestas/Sonidos respuesta

const respuestasClick = document.querySelectorAll("#a,#b,#c,#d");
let aplauso = document.getElementById("aplauso");
let fail = document.getElementById("fail");

Array.from(respuestasClick).forEach(function (elemento) {
  elemento.addEventListener("click", (event) => {
    if (partida.respuestaCorrecta(event.target.innerHTML)) {
      event.target.style.backgroundColor = "green";
      aplauso.play();
    } else {
      event.target.style.backgroundColor = "red";
      fail.play();
    }
  });
});