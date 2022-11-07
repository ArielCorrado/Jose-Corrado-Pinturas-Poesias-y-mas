//MENU

let menu = document.createElement("img");                              //Insertamos icono MENU
menu.id = "menu_icon";
menu.src = rutaImagenes + "menu.png";                                 //Ver archivo "ruta_images.js"      
menu.style = "position:fixed; right:20px; top:12px; height:50px; display:none; cursor:pointer;"
document.body.appendChild(menu);

var alturaMenu = 50;            //Variable que va a almacenar la altura del menú para hacer las animación correctamente

var vistaDesktop = true;        //Carga de Pagina desktop

if (window.innerWidth < 1200) {                                         //Carga de página mobile. Si cargamos la página en mobile (width<1200px) cerramos menu
    document.getElementById("menu").style.display = "none";             //Menu cerrado  
    document.getElementById("menu_icon").style.display = "block"
    document.getElementById("cancel_icon").style.display = "none";
    vistaDesktop = false;           //Si esta en false indica que estamos en version mobile (width<1200px)
}

document.getElementById("menu_icon").addEventListener("click", abrir_menu);         //Agregamos "escuchadores" de eventos
document.getElementById("cancel_icon").addEventListener("click", cerrar_menu);      //en esta linea si se produce el evento vamos a la funcion "cerrar_menu"
window.addEventListener("resize", resize);

function resize () {                                    
    if ((window.innerWidth < 1200) && (vistaDesktop)) {            //Si hacemos un Resize del viewport y pasamo de desktop a movile...
        document.getElementById("menu").style.display = "none";     //Menu Cerrado
        document.getElementById("menu_icon").style.display = "block";
        document.getElementById("cancel_icon").style.display = "none";
        vistaDesktop = false;           //pasamos indicador a false indicando que estmos en version mobile (width<1200px)
    }

    if ((window.innerWidth >= 1200) && (!vistaDesktop)) {           //Resize de movile a desktop
        abrir_menu();
        vistaDesktop = true;                //Indicador en true "estamos en desktop"
    }    
}

function abrir_menu () { 

    document.getElementById("menu").style.display = "grid";         //Menu abierto
    document.getElementById("menu_icon").style.display = "none";
    document.getElementById("cancel_icon").style.display = "block";
       
    let menu = document.getElementById("menu");         //Leemos la altura el menu  para hacer la animación
    alturaMenu = getComputedStyle(menu).height;
    
    
    document.getElementById("menu").animate([           //Animacion abrir menú
    { top: `-${alturaMenu}`, opacity:"0" },             //La animación empieza con el menu elevado tanto como su altura (inicialmente oculto)    
    { top: "0", opacity:"1"}
    ], {
    duration: 250,      //Duración en ms
    iterations: 1,
    easing: "linear"
    });
    document.getElementById("menu").style.top = 0;      //Al final de la animación el menu vuelve a estar arriba del body (top: -alturaDelMenu). Lo ponemos manualmente en "top 0"
   
}


function cerrar_menu () {                           //Cerramos menu   

    let menu = document.getElementById("menu");     //Leemos la altura el menu  para hacer la animación
    alturaMenu = getComputedStyle(menu).height;
        
    document.getElementById("menu").animate([      //Animación cerrar menú        
    { top: "0", opacity:"1" },
    { top: `-${alturaMenu}`, opacity:"0"}
    ], {
    duration: 250,      //Duración en ms
    iterations: 1,
    easing: "linear"
    });

    setTimeout(reposicionado,200);          //El programa sigue corriendo pero en 200ms (un toque entes de que termine la animación) entramos a la función "reposicionado"
    function reposicionado () { 
        document.getElementById("menu").style.top = `-${alturaMenu}px`;         //Al terminar la animación el menu vuelve a "top 0". Pero ponemos manualmente arriba del body para ocultarlo para evitar un efecto "parpadeo"
        document.getElementById("menu").style.display = "none";                 //Cerramos menu
        document.getElementById("menu_icon").style.display = "block";
        document.getElementById("cancel_icon").style.display = "none";
    }
  
}