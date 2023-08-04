//  let nombre = prompt("ingrese su nombre");
//  let apellido = prompt("ingrese su apellido");
//  alert(`Hola ${nombre} ${apellido}`); 

//   alert("Su nota tiene que tener un promedio de 12 para estar aprobado caso contrario el alumno tendra que recursar la materia");

// let total = 0

//   function examen(){ 
//  for(let i=0; i < 1; i++){

//     let nota1 = parseInt(prompt("Ingresa la nota de tu examen"));
//     let nota2 = parseInt(prompt("Ingresa la nota de tu examen"));
//     let nota3 = parseInt(prompt("Ingresa la nota de tu examen"));

//     total = nota1 + nota2 + nota3
//     alert("Tu puntaje es de " + total);

 
// }

// if (total >= 21){

//     alert("usted promociono la materia");

// }else if (total >= 12 && total <= 20.5){

//      alert("Usted se encuentra aprobado pero debera rendir una instancia final para promocionar la materia");

// }else {

//     alert("Usted no cuenta con la nota suficiente para aprobar, tendra que recursar la materia");

// }

// }

// examen();


// let nombre = prompt("ingrese su nombre");
// let apellido = prompt("ingrese su apellido");
// alert(`Hola ${nombre} ${apellido}`);

// alert("Su nota tiene que tener un promedio de 12 para estar aprobado caso contrario el alumno tendra que recursar la materia");

// // se define la variable por fuera para que se puede usar en cualquier lado
// let total = 0

// function examen(){
//     // al usar for podemos hacer que el mismo codigo que se ejecute varias veces
// for(let i=0; i < 3; i++){

// let nota = parseInt(prompt("Ingresa la nota de tu examen"));
// total += nota

// }

 

// alert("Tu puntaje es de " + total);


// if (total >= 21){

// alert("usted promociono la materia");

// }else if (total >= 12 && total <= 20.5){

// alert("Usted se encuentra aprobado pero debera rendir una instancia final para promocionar la materia");

// }else {

// alert("Usted no cuenta con la nota suficiente para aprobar, tendra que recursar la materia");

// }



// }

// examen();

// let propiedad =prompt("Ingrese la propiedad que desea saber")

// const datos = {nombre: "Juan Cruz",
// direccion: "rivera 961",
// dni: 40132406,
// sexo: "masculino"

// };

// console.log(datos[propiedad]);

// const producto = [
//     { nombre: 'Producto 1', precio: 10000 },
//     { nombre: 'Producto 2', precio: 15000 },
//     { nombre: 'Producto 3', precio: 12000 },
//     { nombre: 'Producto 4', precio: 7000 },
// ];

// function ver(){

//     for(let i =0; i<producto.length; i++){

//         console.log(producto[i]);

//     }

// }

// ver();

// let nombre = prompt("ingrese su nombre");
// let edad = prompt("ingrese su edad");
// let direccion = prompt("ingrese su direccion");

// function Persona (nombre, edad, direccion){
// this.nombre = nombre;
// this.edad = edad;
// this.direccion = direccion;

// }

// let persona1 = new Persona(nombre, edad, direccion);

// console.log(persona1);

class Producto{
constructor(nombre,precio,imagen,cantidad){
this.nombre = nombre;
this.precio = precio;
this.imagen = imagen;
this.cantidad = cantidad;
}

vender(){

   this.cantidad = this.cantidad - 1

if(this.cantidad == 0){

    alert("se vendieron todos los productos")

}        

    

}

}

const producto1 = new Producto ("Camisa", 100, "fto", 5);

console.log(producto1);

producto1.vender();

console.log(producto1);

producto1.vender();

console.log(producto1);

producto1.vender();

console.log(producto1);
producto1.vender();

console.log(producto1);
producto1.vender();

console.log(producto1);