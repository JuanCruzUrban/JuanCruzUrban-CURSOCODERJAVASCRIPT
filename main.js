
let carro =  [];
let total = 0;

let body = document.getElementById("body");
let contenedor = document.getElementById("cajaContenedora")


let carrito = document.createElement("section");

fetch('./data.json').then((response) => response.json())
.then((data) => data.forEach(item => {
    let div = document.createElement("div");
  let id = document.createElement("h2")
  let nombre = document.createElement("h3")
  let precio = document.createElement("p")
  let botonAgregar =document.createElement("button")
  let botonRestar = document.createElement("button")
  botonAgregar.innerHTML = "Agregar al carrito";
  botonRestar.innerHTML = "Sacar del carrito";
  
  
  id.innerHTML = `Id : ${item.id}`
  nombre.innerHTML = `nombre del instrumento: ${item.nombre}`
  precio.innerHTML = `precio: ${item.precio} `
  
  contenedor.append(div)
  div.append(id);
  div.append(nombre);
  div.append(precio);
  div.append(botonAgregar);
  div.append(botonRestar);
  
  botonAgregar.addEventListener("click", () =>{
  

    Swal.fire(
            '¡  Bien hecho!',
            'El Producto se agrego al carrito!',
            
          )
  carro.push({id: item.id, nombre: item.nombre})
  
  total = total + item.precio
  localStorage.setItem("carro", JSON.stringify(carro))
  localStorage.setItem("total:", total)
  console.log(carro)
  console.log(total)
  
  
  carrito.innerHTML = `<p>Debera pagar por su instrumento o instrumentos $ ${total} `
  
  contenedor.append(carrito)
  capturarItem()
  
  })
  
  
  botonRestar.addEventListener("click", () =>{

    Swal.fire({
        title: '¿Estas seguro que deseas borrar el producto del carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
           
          ) 
        }
      }) 

      
 carro.pop()
  total = total - item.precio
  localStorage.setItem("carro", JSON.stringify(carro))
  localStorage.removeItem("total")
  if(total ===0 || total < 0){
    total = 0
    console.log("su carrito se encuentra vacio")
  }
  console.log(carro)
  console.log(total)
  carrito.innerHTML = `<p>Debera pagar por su instrumento o instrumentos $ ${total} `
  
  contenedor.append(carrito)
  capturarItem()
  
  })
  }) 
);

function capturarItem(){  
    carro.forEach(item =>{
      let h3 = document.createElement("h3")
      h3.innerHTML = `Su (s) instrumento (s) son: ${item.nombre}`
      carrito.append(h3)   
    })
  }