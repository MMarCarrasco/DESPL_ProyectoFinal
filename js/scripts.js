var total =0;
var envio = 3.00;
var totalEnvio = 0;
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

        total = 0;
        $(".producto .precio span.precio").each(function (){
        
            var precio = parseFloat($(this).text());  
            //console.log(precio);        
            total = total + precio;   
            console.log(total); 
            totalEnvio = total + envio; 
            $(".ptotal p").html("Total: " + totalEnvio + " €"); 
            
        }) 

        if(elementos() == 0){
            $(".vacio ").html("No hay productos en la cesta");
            totalEnvio = 0;
    
            $(".ptotal p").html("Total: " + totalEnvio + " €");

        }
    })

    $(".producto .precio span.precio").each(function precioT(){
        
        var precio = parseFloat($(this).text());  
        //console.log(precio);        
        total = total + precio;   
        console.log(total); 
        
        totalEnvio = total + envio;

        $(".ptotal p").html("Total: " + totalEnvio + " €");
        
    }) 
      
    
  
})

//Contador de productos de la lista
function elementos(){
    var productos = document.getElementsByClassName("producto").length;
    return productos;
}

