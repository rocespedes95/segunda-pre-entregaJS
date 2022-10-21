//simulador de compra de 1 Producto en este caso perfumes femeninos

//Bienvenida a usuarios 
let usuario = prompt("Ingrese su Nombre de Usuario");
    console.log("Bienvenido al la Tienda:", usuario)
   
   


class Perfume {
   constructor(nombre ,precio , stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock =stock;



   }

   get_datos(){
    console.log();
    console.log("Nombre", this.nombre);
    console.log("Precio", this.precio);
    console.log();
   }
}

function buscador_de_productos (producto){
    return producto.nombre== compra_del_usuario
}

let listado_de_perfumes =[];

/* Productos a ingresar
  Producto_1
  nombre: Fragancia Mugler Alien
  precio : 40000
  stock : 15
  Producto_2
  nombre: Fragancia Hugo Boss Alive
  precio : 27000
  stock : 20
  Producto_3
  nombre: Fragancia Armani Si Intense
  precio : 30000
  stock : 18
  Producto 4    
  nombre: Gabrielle Chanel
  precio : 35000
  stock : 12
*/
for( let i=0 ; i < 4 ; i++){
    let nombre = prompt("Ingrese el Nombre del Producto");
    let precio = prompt("Ingrese el Precio del Producto");
    let stock = prompt("Ingrese el stock del Producto");
    let producto = new Perfume (nombre , precio , stock); 
    
    listado_de_perfumes.push(producto);
}

    
//visualizcion de Perfumes
console.log(listado_de_perfumes);

for ( let producto of listado_de_perfumes){
    producto.get_datos();

}
//simulacion de una sola del usuario
 let compra_del_usuario = prompt("Ingrese el Nombre del Producto que quiere comprar");
 
 let resultado_find = listado_de_perfumes.find(buscador_de_productos);
 console.log ("Usted eligio:")
 console.log(resultado_find);