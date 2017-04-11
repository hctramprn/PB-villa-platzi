//Importa el elemento del canvas desde el HTML mediante el ID "villaPlatzi"
var vp = document.getElementById("villaPlatzi");
//Asigna un contexto en 2d al elemento vp y lo guarda en lienzo
var lienzo = vp.getContext("2d");

//Se declaran los objetos para asignarles una ruta y por defecto se les asigna un estado false a su carga
var fondo = {
  url: "imagenes/tile.png",
  cargaOK: false
};

var vaca = {
  url: "imagenes/vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "imagenes/cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "imagenes/pollo.png",
  cargaOK: false
};

//Se le agregan las imagenes a cada uno de los objetos
fondo.imagen = new Image();
//Se les asigna una ruta a cada una de esas imagenes
fondo.imagen.src = fondo.url;
//Se le agrega un escuchador de eventos para que en el momento en el que cargue la imagen ejecute la función cargar
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
//Se les asigna una ruta a cada una de esas imagenes
vaca.imagen.src = vaca.url;
//Se le agrega un escuchador de eventos para que en el momento en el que cargue la imagen ejecute la función cargar
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
//Se les asigna una ruta a cada una de esas imagenes
cerdo.imagen.src = cerdo.url;
//Se le agrega un escuchador de eventos para que en el momento en el que cargue la imagen ejecute la función cargar
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
//Se les asigna una ruta a cada una de esas imagenes
pollo.imagen.src = pollo.url;
//Se le agrega un escuchador de eventos para que en el momento en el que cargue la imagen ejecute la función cargar
pollo.imagen.addEventListener("load", cargarPollos);

//Determina la cantidad de cada tipo de animal que habrá en cada recarga del código
var cantidadVacas = aleatorio(0, 10);
var cantidadCerdos = aleatorio(0, 10);
var cantidadPollos = aleatorio(0, 10);

/*Son las funciones ejecutadas con anterioridad que terminan por cambiar el estado de cargaOK a true
y ejecutan la función dibujar*/
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
};


/*Función encargada de comprobar que cada una de las imagenes haya cargado.
la función se va a ejecutar cada vez que una imagen haya cargado y en el momento
en el que las 4 imagenes hayan cargado, las dibujará en el canvas en el orden
fondo -> vacas -> cerdos -> pollos*/
function dibujar() {
  //dibuja el fondo
  if (fondo.cargaOK) {
    lienzo.drawImage(fondo.imagen, 0, 0);
  }
  //dibuja las vacas
  if (vaca.cargaOK) {
    //manda la cantidad de vacas arrojada por la función de aleatoriedad a la consola
    console.log("Vacas = " + cantidadVacas);
    //Ciclo que dibuja las vacas tantas veces arrojada por la función
    for (var i = 0; i < cantidadVacas; i++) {
      //Determina la posición en x y en y para cada una de las vacas de forma aleatoria
      var x = aleatorio(420, 0);
      var y = aleatorio(0, 420);
      //Dibuja la vaca en la posición seleccionada
      lienzo.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOK) {
    console.log("Cerdos = " + cantidadCerdos);
    for (var i = 0; i < cantidadCerdos; i++) {
      var x = aleatorio(420, 0);
      var y = aleatorio(0, 420);
      lienzo.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOK) {
    console.log("Pollos = " + cantidadPollos);
    for (var i = 0; i < cantidadPollos; i++) {
      var x = aleatorio(420, 0);
      var y = aleatorio(0, 420);
      lienzo.drawImage(pollo.imagen, x, y)
    }
  }

//Código que mueve el cerdo con las teclas
  if (cerdo2.cargaOK) {
    //console.log("El cerdo aparece");
    lienzo.drawImage(cerdo2.imagen, posx, posy);
  }
}


//funcion de aleatoriedad
function aleatorio(min, max) {
  var resultado = Math.floor(Math.random() * ((max - min) + 1)) + min;
  return resultado;
}


//El cerdo que se moverá
var cerdo2 = {
  cargaOK: false
};

//Mismo código que con los otros animales
cerdo2.imagen = new Image();
cerdo2.imagen.src = "imagenes/cerdo.png";
cerdo2.imagen.addEventListener("load", cargarCerdo2);

function cargarCerdo2() {
  cerdo2.cargaOK = true;
  dibujar()
};

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//La posición en la que empezará el cerdo2
var posx = (vp.width/2) - 40;
var posy = (vp.width/2) - 40;
var movimiento = 10;

//Evento que dispara la función que mueve el cerdo al pulsar una tecla
document.addEventListener("keydown", moverCerdo);

//Case que modifica las posiciones de X y Y dependiendo de la tecla de flechas que se pulse
function moverCerdo(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      posy = posy - movimiento;
      dibujar();
      break;
    case teclas.DOWN:
      posy = posy + movimiento;
      dibujar();
      break;
    case teclas.LEFT:
      posx = posx - movimiento;
      dibujar();
      break;
    case teclas.RIGHT:
      posx = posx + movimiento;
      dibujar();
      break;
    default:
      console.log("Se pulsó otra tecla");
  }
}
