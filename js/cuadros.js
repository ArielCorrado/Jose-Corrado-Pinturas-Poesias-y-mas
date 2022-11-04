//Efectos Hover y Click sobre cuadros

var contCuadros = document.getElementsByClassName("contCuadros");   //Cargamos estilos a los contenedores de los cuadros
for (let cuad of contCuadros) {
    cuad.style = "position:relative; overflow:hidden;"

    let tapaParrafo = document.createElement("div");                //Creamos Div transparente sobre la imagen para tapar el texto y que no se salda del hover al pasar por arriba de estos
    tapaParrafo.id = "tapaParrafo";
    tapaParrafo.style = "position:absolute; height:100%; width:100%; z-index:100; top:0; cursor:pointer;";
    cuad.appendChild(tapaParrafo);
    
    cuad.firstChild.style.filter = "grayscale(50%) contrast(150%)";     //Cargamos estilos de las imagenes de los cuadros
}

let evento = document.getElementsByClassName("contCuadros");            //Cargamos "escuchadores" de eventos en "contCuadors"
for (let even of evento) {
    even.addEventListener ("mouseover", hoverIn);
    even.addEventListener ("click", click);
    even.addEventListener ("mouseout", hoverOut);
}


function hoverIn () {
        
    title = (this.getAttribute("tituloCuadro"));  //"Tomamos" el atributo "tituloCuadros" del cuadro donde se hizo hover (this)
        
    let p = document.createElement("p");          //creamos un parrafo (pero todavía no lo insertamos en el documento)  
    p.setAttribute("id", "parrafo");              //Le seteamos una "id" con valor "parrafo"  
        
    let textp = document.createTextNode(title);   //Cremos un "nodo de texto" con el contenido del atributo "tituloCuadros"
    if (title == null) textp = document.createTextNode("");    //Esto es para que en los cuadros no aparezca "null" como titulo cuando NO hay asignado un atributo "tituloCuadros" 
    
    p.appendChild(textp);                       //Insertamos el texto del titulo del cuadro en el parrafo creado anteriomente
    p.style.position = "absolute";              //Estilo de Texto emergente
    p.style.zIndex = "10";
    p.style.color = "white"
    p.style.fontSize = "20px";
    p.style.bottom = 0;
    p.style.left = 0;
    p.style.fontFamily = "'PT Sans Narrow', sans-serif";
    p.style.fontStyle = "oblique";
    
    this.appendChild(p);        //Agrega el parrafo "p" al elemento "this" (Al final de su lista de hijos) this es el div que representa al cuadro sobre el que se hizo hover (contCuadros)
    
    document.getElementById("parrafo").animate([          //Hacemos una transición con el texto de los cuadros
    { opacity: 0 },
    { opacity: "1"}
    ], {
    duration: 500,
    iterations: 1 
    });

    this.firstChild.style.filter = "grayscale(0) contrast(150%)";  //Al hacer hover aumentamos el contraste y sacamos grayscale
      
}

function click () {
    cerrar_menu();
    
    let heightImg = "90%"                          //Altura máxima que va a ocupar la imagen emergente 
    let posyCont = window.pageYOffset;             //window.pageYOffset devuelve lo que le falta al viewport en px para llegar al borde superior de la página 
    let heightCont = window.innerHeight;
    let widthCont = "100%";
    let src = this.firstChild.src;                             //this sería el elemento sobre el cual se hizo click y llamó a la función "seHizoClick"
    let closeWidth = "50";
    let closeHeight = "50";
    
    let fondo = document.createElement("div");                 //Fondo oscuro de la imagen emergente (ocupa toto el viewport) 
    fondo.id = "fondo";                                        //Le ssignamos la "id" "fondo"
    fondo.style = `position:absolute; width:100%; height:100%; background-color:rgba(0,0,0,0.9); top:0; z-index:110;`;          
    document.body.appendChild(fondo);       

    let contImgE = document.createElement("div");              //Contenedor de la imagen emergente (ocupa todo el viewport) 
    contImgE.id = "contImgE";
    contImgE.style = `display:flex; justify-content:center; align-items:center; position:absolute;  
    width:${widthCont}; height:${heightCont}px; top:${posyCont}px;`; 
    document.body.appendChild(contImgE); 

    let imgEmerge = document.createElement("img");            //Imagen emergente  
    imgEmerge.id = "imgEmerge"
    imgEmerge.src = src;
    imgEmerge.style = `max-height:${heightImg}; outline:2px solid white; max-width:90%; z-index:120;`;
    document.getElementById("contImgE").appendChild(imgEmerge);
    
    let close = document.createElement("img");              //Icono de cerrar
    close.id = "close";
    close.src = rutaImagenes + "close.png";                //Ver archivo "ruta_images.js"
    close.style = `width:${closeWidth}px; height:${closeHeight}px; position:absolute;
    right:20px; top:20px; cursor:pointer; z-index:120;`;
    document.getElementById("contImgE").appendChild(close);    
                   
    document.getElementById("imgEmerge").animate([          //Animamos la imagen emergente
    { transform: 'scale(0)' },
    { transform: 'scale(100%)'}
    ], {
    duration: 500,
    iterations: 1 
    });
                                                                                            //NO HACE FALTA CERRAR close ya que esta adentro de contImgE
    //document.getElementById("close").onclick = function remove () { remover(); };        //Si hacemos click en la cruz o en otro lugar
    document.getElementById("contImgE").onclick = function remove () { remover(); };       // cerramos
    document.getElementById("fondo").onclick = function remove () { remover(); };
    
    function remover () {      
        document.getElementById("imgEmerge").remove();          //Removemos los elemento creados
        document.getElementById("contImgE").remove();
        document.getElementById("fondo").remove();
        //document.getElementById("close").remove();            //NO HACE FALTA CERRAR close ya que esta adentro de contImgE
    }

}


function hoverOut () {                                          //Al salir del hover sacamos el parrafo emergente
    document.getElementById("parrafo").remove();
    this.firstChild.style.filter = "grayscale(50%) contrast(150%)";  //Sacamos el filtro
}


    

   
        
       

         
         
    

