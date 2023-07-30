 let nombre = prompt("ingrese su nombre");
 let apellido = prompt("ingrese su apellido");
 alert(`Hola ${nombre} ${apellido}`); 

  alert("Su nota tiene que tener un promedio de 12 para estar aprobado caso contrario el alumno tendra que recursar la materia");

  function examen(){ 
 for(let i=0; i < 1; i++){

    let nota1 = parseInt(prompt("Ingresa la nota de tu examen"));
    let nota2 = parseInt(prompt("Ingresa la nota de tu examen"));
    let nota3 = parseInt(prompt("Ingresa la nota de tu examen"));

    let total = nota1 + nota2 + nota3
    alert("Tu puntaje es de " + total);
 

 if (total >= 21){

    alert("usted promociono la materia");

}else if (total >= 12 && total <= 20.5){

     alert("Usted se encuentra aprobado pero debera rendir una instancia final para promocionar la materia");

}else {

    alert("Usted no cuenta con la nota suficiente para aprobar, tendra que recursar la materia");

}

 
}

}

examen();
