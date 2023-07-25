let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
alert(`Hola ${nombre} ${apellido}`); 

let nota = parseInt(prompt("Ingrese su nota, de caso contrario vuelva a ingresar su nombre"));

// while(nota!="ESC"){

//     switch(nota) {

// case "perfecto":

// if(nota >=8 && nota<=10){

//     alert("Usted aprobo su examen con una nota perfecto");

// }

// break;

// case "regular":

// if(nota >= 6 && nota<= 7){

//     alert("Su examen se aprobo con una nota regular");

// }

// break;

// case "desaprobado":

// if(nota <= 5){

//     alert("Su examen fue desaprobado");

// }

// break;

// default:

// alert("Usted no se presento a rendir");

// break;
//     }

// }

function examen(){

    if (nota >=8){

        alert("Su examen obtiene una nota de excelente");

    } else if(nota === 6 || nota === 7){

        alert("Su examen se encuentra aprobado")

    } else if(nota <=5){

        alert("Su examen se encuentra desaprobado");

    }else{

        alert("Usted tiene una nota de ausente en el examen");

    }

}

examen();