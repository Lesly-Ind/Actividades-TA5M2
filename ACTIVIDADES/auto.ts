class Auto{ // molde nombrado auto.
    acelerar(velocidadactual: number, incremento: number): number{ // Definir un metodo . 
        return incremento + velocidadactual; // suma y retorna el valor. 
    }
    frenar(velocidadactual: number, decremento: number): number{ // nuevo metodo llamdo frenar.
        return velocidadactual - decremento; // devuelve el valor y cumple la funcion de restar. 
    }
    recorrer(distancia:number, tiempo: number): number{ // Se asigna un metodo. 
        return distancia / tiempo; //calcula la velocidad promedio 
    }
}

let auto = new Auto(); // se crea un nuevo objeto llamado auto.

// lo que se ve en la consola.
console.log("-----AUTO-----");
console.log("Aceleración:", auto.acelerar(60,30));
console.log("Perdida de potencia:", auto.frenar(50,20));
console.log("Recorre:", auto.recorrer(120,2));

