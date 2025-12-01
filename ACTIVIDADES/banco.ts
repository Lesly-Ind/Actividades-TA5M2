class Banco {  //se crea una plantilla llamada banco.
    depositar(saldo: number, monto: number): number{ // se genera el metodo. 
        return monto + saldo; //suma el monto y lo retorna o devuelve.  
    }
    retirar(saldo:number, monto: number): number{ // se crea ottor metodo esta denominado como retirar.
        if (monto > saldo){ // condicional en verdadero
            throw new Error("fondos insuficientes")  // se muestra a no cumplir la condicional esta seria la condiconal en falso.
        }
        return saldo - monto ; // se genera al haber suficiente saldo.
    }
    transferir(saldoorigen: number, monto: number): number{ // Se crea este metodo. 
        if (monto >  saldoorigen){ //valida si cumpple la condicion dada.
            throw new Error("No se puede transferir más del saldo disponible") // se presenta cuando la condicion anterior no se cumple.
        }
        return saldoorigen - monto; // funcion segun la funcion que realize el metodo, es decir solo la condicon verdadera.
    }
}

let banco = new Banco(); // crea un nuevo objeto 

// lo visible en la consola 
console.log("-----BANCO-----");
console.log("Deposito:", banco.depositar(389,20000));
console.log("Retiro:", banco.retirar(690,20389));
console.log("Transferencia:", banco.transferir(57,20000));

