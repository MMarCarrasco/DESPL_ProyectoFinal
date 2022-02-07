$(document).ready(function(){

    //Cambiar el numero de productos de la cesta
    $("#shopping-cart span").html(elementos);

    //Scroll
    $(document).scroll(function() {
        if($(this).scrollTop() > 50){ 
          $('#totop').fadeIn(500);
    
        }else{
          $('#totop').fadeOut(500);
        }
    });
    
    $('#totop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    }); 

    //Eliminar productos
    $(".lista").on('click', '.eliminar', function(){
        $(this).closest('li').remove();
        
        $("#shopping-cart span").html(elementos());

        if(productos == 0){
            $(".vacio p").html("No hay productos en la cesta");

        }

    })

    $(".precio span").each(function(){
        var precio = $(".precio span#precio").text();
        console.log(precio);
        var res = precio.split(" ");
        var precioN = parseFloat(precio);
        var precioNn = parseFloat(res);
        console.log(res);
        console.log(precioN);
        var total =  precioN;
        console.log(total);
    })


    /*var precio1 = $(".precio span#precio1").text();
    var precioN1 = parseFloat(precio1);
    var precio2 = $(".precio span#precio2").text();
    var precioN2 = parseFloat(precio2);

    var total = precioN1 + precioN2;
    console.log(total);*/



  
})

//Contador de productos de la lista
function elementos(){
    var productos = document.getElementsByClassName("producto").length;
    return productos;
}

