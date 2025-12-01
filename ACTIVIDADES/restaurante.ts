class Restaurante {
    calculartotal(precio: number, cantidad: number): number{
        return precio * cantidad;
    }
    aplicardescuento(total: number, descuento: number): number{
        return total - (total * descuento / 100);
    }
    calcularpropina(total: number, porcentaje:  number): number{
        return total * (porcentaje / 100);
    }
}

let restaurante = new Restaurante();

console.log("-----RESTAURANTE-----");
console.log("Compra total:", restaurante.calculartotal(45,6));
console.log("Descuento aplicado:", restaurante.aplicardescuento(100,10));
console.log("Propinas obtenidas:", restaurante.calcularpropina(200,15));

