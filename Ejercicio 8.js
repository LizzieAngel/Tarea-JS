/*Crear una Fuction para calcular el descuento en viajes turísticos tomando en 
cuenta lo siguiente: Si el usuario introduce como origen la ciudad de Palma y 
como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco 
el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.*/

function viajes_turisticos(costo_viaje, ciudad_origen, ciudad_destino){
    
    if(ciudad_origen == "Palma"){
        
        switch(ciudad_destino){
            case "Panchimalco":
                var descuento
                descuento = costo_viaje - (costo_viaje*0.10)
            console.log("El cliente es de : "+ciudad_origen)
            console.log("El cliente se dirige : "+ciudad_destino)
            console.log("Este destino posee descuento del 10%, su total a pagar es de $" +  descuento)
            break;

            case "Triunfo":
                var descuento
                descuento = costo_viaje - (costo_viaje*0.15)
            console.log("El cliente es de : "+ciudad_origen)
            console.log("El cliente se dirige : "+ciudad_destino)
            console.log("Este destino posee descuento del 15%, su total a pagar es de $" +  descuento)
            break;

            case "Costa del sol":
                var descuento
                descuento = costo_viaje - (costo_viaje*0.05)
            console.log("El cliente es de : "+ciudad_origen)
            console.log("El cliente se dirige : "+ciudad_destino)
            console.log("Este destino posee descuento del 5%, su total a pagar es de $" +  descuento)
            break

            default:
                console.log("Actualmente no tenemos ese destino en nuestros servicios" )
            break;
        }

       
    }else{
        console.log("Actualmente no tenemos ese destino en nuestros servicios" )
    }
}

viajes_turisticos(60, "Palma", "Triunfo")