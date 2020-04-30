//Preguntas
const preguntas = [{
        pregunta: "¿Que cocktail popularizó la pelicula El gran Lebowsky",
        a: "Cosmopolitan",
        b: "Old fashioned",
        c: "Mojito",
        correcta: "White russian",
        img: "../imgs/Ruso-blanco.jpg"
    },
    {
        pregunta: "¿Cual de los siguientes ingredientes NO lleva un bloody mary?",
        a: "Salsa Worcester",
        b: "Zumo de tomate",
        c: "Tabasco",
        correcta: "Ginebra",
        img: "../imgs/bloody mary.jpg"
    },
    {
        pregunta: "¿Que cocktail hizo aparición durante la segunda parte de El padrino?",
        a: "Dry martini",
        b: "Tom Collins",
        c: "Negroni",
        correcta: "Banana daiquiri",
        img: "../imgs/el padrino.jpg"
    }
]
// Variables de acceso
let preguntaActual = document.getElementById("pregunta")
let heroImg = document.getElementById("hero")
let player1Score = document.getElementById("score1")
let player2Score = document.getElementById("score2")
let OpcionA = document.getElementById("a")
let OpcionB = document.getElementById("b")
let OpcionC = document.getElementById("c")
let OpcionD = document.getElementById("d")




//Constructor Player
class Player {
    constructor(nombre) {
        this.nombre = nombre
        this.score = 0
    }
}

//Constructor de Ronda
class Ronda {
    constructor(pregunta) {
        this.preguntas = preguntas
        pregunta = this.seleccionPregunta
        this.preguntasRealizadas = []


    }
    //Seleccion pregunta
    seleccionPregunta() {
        return this.preguntas[Math.floor(Math.random() * this.preguntas.length)]
    }
    //Comprobamos si es la primera vez que hacemos la pregunta
    primeraVez() {
        if (this.pregunta.indexOf(this.preguntasRealizadas) == -1) {
            return true
        } else {
            this.seleccionPregunta()
        }
    }
    //Evaluamos si la respuesta es correcta y añadimos score
    respuestaCorrecta(respuestaUsuario) {
        if (respuestaUsuario === this.pregunta.correcta) {
            Player.score = Player.score + 5
        }


    }
}