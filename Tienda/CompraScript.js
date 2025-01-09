//funcion para el cambio de imagen grande
    //variables para guardar el ID de cada img Pequeña y Grande
    var imgP1 = document.getElementById("imgP1");
    var imgP2 = document.getElementById("imgP2");
    var imgP3 = document.getElementById("imgP3");
    var imgP4 = document.getElementById("imgP4");

    var imgG = document.getElementById("imgG");
 
    function cambio1(){
        //funcion para cambiar la direccion de la img
        imgG.src = imgP1.src
        //cambio de opacidad de las img pequeñas
        imgP1.style.opacity = 0.8;
        imgP2.style.opacity = 1;
        imgP3.style.opacity = 1;
        imgP4.style.opacity = 1;
        //repetir en el resto de funciones
    }
    function cambio2(){
        imgG.src = imgP2.src
        imgP1.style.opacity = 1;
        imgP2.style.opacity = 0.8;
        imgP3.style.opacity = 1;
        imgP4.style.opacity = 1;
    }
    function cambio3(){
        imgG.src = imgP3.src
        imgP1.style.opacity = 1;
        imgP2.style.opacity = 1;
        imgP3.style.opacity = 0.8;
        imgP4.style.opacity = 1;
    }
    function cambio4(){
        imgG.src = imgP4.src
        imgP1.style.opacity = 1;
        imgP2.style.opacity = 1;
        imgP3.style.opacity = 1;
        imgP4.style.opacity = 0.8;
    }

//Boton compra 
function comprar() {
    //cambia la opacidad de la pagina y el display de el Cuadro del Pedido
    document.getElementById("contenedor").style.opacity=0.75;
    document.getElementById("CuadroPedido").style.display= "block";
    
}
//Funciones para mostrar el color elegido
function color1(){
    var valor = document.getElementById("color1").value;
    document.getElementById("colorM").innerHTML = Object(valor);
}
function color2(){
    var valor = document.getElementById("color2").value;
    document.getElementById("colorM").innerHTML = Object(valor);
}
function color3(){
    var valor = document.getElementById("color3").value;
    document.getElementById("colorM").innerHTML = Object(valor);
}

//funcion para mostrar la Talla escogida
function talla_select(){
    var valorT = document.getElementById("talla_select").value;
    var mostrar_tallas = ["Seleccione una talla", "S", "M", "L"]
    document.getElementById("talla").innerHTML = mostrar_tallas[valorT];
}

//Cerrar Cuadro del Pedido
function cerrar(){
    document.getElementById("contenedor").style.opacity=1;
    document.getElementById("CuadroPedido").style.display= "none";
}