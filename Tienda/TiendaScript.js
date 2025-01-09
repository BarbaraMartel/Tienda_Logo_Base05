function cate_select(){

    //guardar value
    var valor = document.getElementById("categorias").value;

    if(valor==1){
        //recarga de página
        location.reload();

    }else if(valor==2){
        //Cambiando el display de los div hacemos que se muestre o no, dependiendo de la categoria seleccionada
        document.getElementById("Abrigo1").style.display= "block";
        document.getElementById("Abrigo2").style.display= "block";

        document.getElementById("Parka1").style.display= "block";
        document.getElementById("Parka2").style.display= "block";
        document.getElementById("Parka3").style.display= "block";
        document.getElementById("Parka4").style.display= "block";
        
        document.getElementById("Camisa1").style.display= "none";
        document.getElementById("Camisa2").style.display= "none";
        document.getElementById("Camisa3").style.display= "none";

        document.getElementById("Pantalon1").style.display= "none";
        document.getElementById("Pantalon2").style.display= "none";
        document.getElementById("Pantalon3").style.display= "none";
        document.getElementById("Pantalon4").style.display= "none";

    }else if(valor==3){
        document.getElementById("Abrigo1").style.display= "none";
        document.getElementById("Abrigo2").style.display= "none";

        document.getElementById("Parka1").style.display= "none";
        document.getElementById("Parka2").style.display= "none";
        document.getElementById("Parka3").style.display= "none";
        document.getElementById("Parka4").style.display= "none";
        
        document.getElementById("Camisa1").style.display= "block";
        document.getElementById("Camisa2").style.display= "block";
        document.getElementById("Camisa3").style.display= "block";

        document.getElementById("Pantalon1").style.display= "none";
        document.getElementById("Pantalon2").style.display= "none";
        document.getElementById("Pantalon3").style.display= "none";
        document.getElementById("Pantalon4").style.display= "none";
    }else if(valor==4){
        document.getElementById("Abrigo1").style.display= "none";
        document.getElementById("Abrigo2").style.display= "none";

        document.getElementById("Parka1").style.display= "none";
        document.getElementById("Parka2").style.display= "none";
        document.getElementById("Parka3").style.display= "none";
        document.getElementById("Parka4").style.display= "none";
        
        document.getElementById("Camisa1").style.display= "none";
        document.getElementById("Camisa2").style.display= "none";
        document.getElementById("Camisa3").style.display= "none";

        document.getElementById("Pantalon1").style.display= "block";
        document.getElementById("Pantalon2").style.display= "block";
        document.getElementById("Pantalon3").style.display= "block";
        document.getElementById("Pantalon4").style.display= "block";
    }
}


