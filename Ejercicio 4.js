//Calcular el aumento de trabajador tomando en cuenta la
//tabla de categorías de aumento. Para este ejercicio
//deberá de asignar las siguientes variables: Nombre,
//Salario, categoría y aumento. Deberá demostrar en
//consola los datos del empleado y el aumento salarial.

let categoria = "B";
let salario = 1200;

    if(categoria == "A"){
        salario = (salario * 0.15) + salario;
        console.log("salario total: $" + salario);
    } else if (categoria == "B"){
        salario = (salario * 0.30) + salario;
        console.log("salario total: $" + salario);
    } else if (categoria == "C"){
        salario = (salario * 0.10) + salario;
        console.log("salario total: $" + salario);
    }else if (categoria == "D"){
        salario = (salario * 0.20) + salario;
        console.log("salario total: $" + salario);
    } else {
        console.log("categoria incorrecta");
    }