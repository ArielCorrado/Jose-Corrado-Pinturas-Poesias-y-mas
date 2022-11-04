//Elegimos la ruta a /images segun el html donde nos encontremos 
 
let rutaImagenes = "";
var rutaPaginaActual = this.location.href;  //Esto devuelve un string con la direccion del archivo html actual que esta corriendo este archivo js
if (rutaPaginaActual.indexOf("index.html") == -1) {   //Si "index.html" esta dentro del string, la funcion "indexOf" nos devuelve el número de caracter donde empieza "index.html". Si no devuelve -1
     rutaImagenes = "../images/";                     //Si devuelve -1 No estamos en index.html
} else rutaImagenes = "./images/";                    //Si devuelve otro numero ESTAMOS en index.html 