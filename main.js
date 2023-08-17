


let nombre = prompt("Ingrese su nombre por favor");

alert(`Bienvenido ${nombre}  a la tienda de Lutheria Urbancaster, ¿que instrumento de cuerda desea comprar?`);



let instrumentosDeCuerdas = [ 

{nombre: "guitarra", precio: 5000, stock: 5},
{nombre: "charango", precio: 4000, stock: 5},
{nombre: "violin", precio: 3000, stock: 5},
{nombre: "bajo", precio: 2000, stock:5}

];

let carrito = [];

let consulta = prompt("que instrumento desea comprar");

while(consulta != "esc" ){ 

let prodEncontrado = instrumentosDeCuerdas.find(i => i.nombre ==consulta.toLocaleLowerCase())




   if(prodEncontrado !== undefined && prodEncontrado.stock > 0){
 
    prodEncontrado.stock = prodEncontrado.stock - 1;
    carrito.push({nombre: prodEncontrado.nombre, precio: prodEncontrado.precio, stock: prodEncontrado.stock})

    consulta = prompt("que instrumento desea comprar");

alert(`Usted debera pagar ${prodEncontrado.precio} por el instrumento ${prodEncontrado.nombre}`)

   }else if(prodEncontrado.stock < 1){

alert("Lo Siento, no me queda en stock ese articulo")

consulta = prompt("que instrumento desea comprar");

   }else{

    alert("ese instrumento no lo tenemos")

    consulta = prompt("que instrumento desea comprar");
   }


}


console.log(carrito)