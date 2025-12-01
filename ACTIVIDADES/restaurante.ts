class Restaurante { // se crea una pantilla o molde.
    calculartotal(precio: number, cantidad: number): number{ // metodo que recibe un precio unitario y devuelve el valor.
        return precio * cantidad; // realiza la funcion de multiplicar. 
    }
    aplicardescuento(total: number, descuento: number): number{ // metodo encargado de  obtener el descuento. 
        return total - (total * descuento / 100); // calcula el descuesto , el total y retorna el valor.
    }
    calcularpropina(total: number, porcentaje:  number): number{ // nuevo metodo 
        return total * (porcentaje / 100);  //calcula la funcion asigna y retorna el valor. 
    }
}

let restaurante = new Restaurante(); // nuevo objeto con ayuda de la clases.

// se muestra en la consola al ejecutarse.
console.log("-----RESTAURANTE-----");
console.log("Compra total:", restaurante.calculartotal(45,6));
console.log("Descuento aplicado:", restaurante.aplicardescuento(100,10));
console.log("Propinas obtenidas:", restaurante.calcularpropina(200,15));

