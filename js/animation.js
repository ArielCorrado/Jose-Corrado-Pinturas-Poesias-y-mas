//Animación Encabezado entrada

document.getElementById("encabezado__back").animate([               //aL COMIENZO se "lanza" la animación  del encabezado             
    {opacity:"0"},
    {opacity:"1"}
    ], {
    duration: 1000,      //Duración en ms
    iterations: 1,
    easing: "linear"
    });

    

//Animación scaleY 100% Titulos

let titulos = document.getElementsByClassName("animationScaleY");

for (let titulo of titulos) {
    if (titulo.getAttribute("animate") == "on") {            //Solo animamos si el atributo "animate" es "on"
        titulo.style.transform = "scaleY(0)";               //Valor inicial scaleY = 0 para los titulos que queremos animar
        titulo.style.transitionProperty = "all"
        titulo.style.transitionDuration = "1s";
        //titulo.style.transformOrigin = "top";
    }
}  
                                                                            //Chequeamos que Titulos estan visibles al cargar la página
for (let titulo of titulos) {                                               //Si el elemento esta visible al recargar la página lo animamos aunque no hagamos scroll (siempre que el atributo "animate" sea "on")
    if (titulo.getBoundingClientRect().top < window.innerHeight) {          //titulo.getBoundingClientRect().top devuelve la distancia en px del borde superior del elemento
        titulo.style.transform = "scaleY(100%)";                            //"titulo" al borde superior del viewport
        //window.scrollTo(0,titulo.getBoundingClientRect().y + window.pageYOffset);   //Acá evitamos el auto scroll cuando el elemento de agranda
    }                                                                                 //posicionando el scroll en el elemento
}                                                                                     //window.pageYOffset devuelve lo que le falta al viewport en px para llegar al borde superior de la página

window.addEventListener("scroll", scroleamos) 
function scroleamos () {
    for (let titulo of titulos) {
        if (titulo.getBoundingClientRect().top < window.innerHeight) {
            titulo.style.transform = "scaleY(100%)";
        }    
    }    
}