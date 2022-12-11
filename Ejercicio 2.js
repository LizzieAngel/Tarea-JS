//Crear 3 Fuctions que calcule 2 números enteros y muestre en consola el resultado de la suma, resta,
//multiplicación y división. Puede utilizar parámetros o variables locales para asignar valores a los
//números.

function suma(a, b){
    let suma = a + b;
    console.log("el resultado de la suma es:" + suma);
}

function resta(a, b){
    let resta = a - b;
    console.log("el resultado de la resta es:" + Math.abs(resta));
}

function multiplicar(a,b){
    let multiplicar = a * b;
    console.log("el resultado de la multiplicacion es:" + multiplicar);
}

function division(a, b){
    let division = a / b;
    console.log("el resultado de la division es:" + division.toFixed(2));
}

    //Math.abs = obtiene el valor absoluto de un numero//
    //toFixed == es para dar solo numero enteros


suma(8,4);
resta(8,12);
multiplicar(2,5)
division(123,345)