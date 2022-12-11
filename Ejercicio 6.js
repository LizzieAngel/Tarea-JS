//Realizar una fuction para una tienda de coches en donde se deberá calcular: Si el coche a la venta es
//un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD
//FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Deberá de
//usar un parámetro que permita identificar el tipo de coche y la fuction deberá demostrar el coche
//seleccionado.

function coche(tipo){
    if(tipo == "FORD FIESTA"){
        let precio = 9810;
        let descuento = precio - (precio * 0.05);
        console.log(
            "Coche: FORD FIESTA" + "\n" +
            "Descuento del 5%" + "\n" +
            "Total de la compra: $" + descuento
        );
    }else if(tipo == "FORD FOCUS"){
        let precio = 7100;
        let descuento = precio - (precio * 0.10);
        console.log(
            "Coche: FORD FOCUS" + "\n" +
            "Descuento del 10%" + "\n" +
            "Total de la compra: $" + descuento
        );
    }else if(tipo == "FORD ESCAPE"){
        let precio = 8000;
        let descuento = precio - (precio * 0.20);
        console.log(
            "Coche: FORD ESCAPE" + "\n" +
            "Descuento del 20%" + "\n" +
            "Total de la compra: $" + descuento
        );
    }else{
        console.log("El tipo de coche no esta en inventario");
    }
}
coche("FORD FIESTA");
