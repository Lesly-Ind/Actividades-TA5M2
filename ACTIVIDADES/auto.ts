class Auto{
    acelerar(velocidadactual: number, incremento: number): number{
        return incremento + velocidadactual;
    }
    frenar(velocidadactual: number, decremento: number): number{
        return decremento - velocidadactual;
    }
    recorrer(distancia:number, tiempo: number): number{
        return distancia / tiempo;
    }
}

let auto = new Auto();

console.log("-----AUTO-----");
console.log("Aceleración:", auto.acelerar(60,30));
console.log("Perdida de potencia:", auto.frenar(50,20));
console.log("Recorre:", auto.recorrer(120,2));

