# Cocktail Trivia

## Descripcion:

El usuario podrá recolectar puntos mediante la respuesta de preguntas de temática cocktail y comparar
su puntuacion con otros usuarios para saber quien es el que mas sabe de cocktails!

## Estados y reglas:

- El usuario empieza con un score de 0 puntos
- Las respuestas pueden tener distinto grado de aceptabilidad, dando distinto numero de puntos a una respuesta
  parcialmente correcta y a una totalmente correcta.
  -El usuario con mayor puntuación gana la partida.

## MVP:

- El usuario podrá introducir su nombre
- El usuario respondera preguntas
- El usuario obtendrá puntos por preguntas acertadas, que almacenará en su "score"
- El juego acabará en "x" preguntas.

## Back-log:

- Multijugador
- El usuario podrá comparar su score al adversario y 1 resultará vencedor
- El usuario tendrá un tiempo limitado para responder a las preguntas
- El usuario podrá elegir idioma (Español, Ingles,Italiano)
- Display de imagenes ilustrativas, que refuercen el concepto y sean memorables para el usuario

Estructura de datos:
-DOM

- Constructor Clase player (Nombre)
- Metodo Pregunta () ===> selecciona una pregunta aleatoria almacenada en una variable.
- Metodo primeraVez () ===> Evalua si es la primera vez que la pregunta es escogida, en caso negativo selecciona otra.
- Metodo shuffleAnswers () ===> Hace un display ramdon de las opciones de respuesta
- Metodo respestaCorrecta () ===> valora si la respuesta es correcta y los puntos segun grado de aceptabilidad de la respuesta.
- Metodo score() ===> evalua preguntaCorrecta(), y suma tu puntuacion al marcador.
- Metodo gameOver() ===> pasadas "x" rondas, devuelve el score y para el juego.
- Metodo ganador //para multijugador () ===> Compara el metodo score() de ambos jugadores y retorna el ganador.

## Links

- Repositorio ===> https://github.com/CorreiaAlberto/proyecto-Juego

## Git

## Slides

## Kanban

https://trello.com/b/4cBRj5X8/proyecto-cocktail-trivia
