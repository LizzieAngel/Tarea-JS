/*Determinar la nota final de un alumno, la cual depende de lo siguiente: Examen =20% , tareas 40%,
asistencia =10% e investigación =30% , al final deberá mostrar los datos del alumno , nombre , carnet
y nota final. Para este ejercicio deberá de utilizar una fuction y asignar parámetros para llenar los
valores.*/

    function promedio_alumno(nombre,carnet,tarea,examen, asistencia, investigacion){
            let promedio = 0;

            examen = examen * 0.20;
            tarea = tarea * 0.40;
            investigacion = investigacion * 0.30;
            asistencia= asistencia * 0.10;

            promedio = examen + tarea + asistencia + investigacion;
            if(promedio > 6){
                console.log(
                    " Estudiante "  + nombre  +  " carnet: " + "\n" + carnet +  " su prommedio es de: " + promedio + " has aprobado " + 
                    " Felicidades "
                );
            }else{
                console.log(
                    " Estudiante " + nombre + " carnet: " + carnet + " reprobado " +  " su promedio es: " + promedio
                )
                }
    }

    promedio_alumno("Oscar Lemus", "0234-22", 9,8,7,8);
    promedio_alumno(" Sarai","0345-22", 5,6,3,6 )







