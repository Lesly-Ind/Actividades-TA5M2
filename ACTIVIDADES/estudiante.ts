class Estudiantes { // se crea un molde nombrado estudiante.
    agregarnota(promedio: number, nuevanota: number): number{ // se declara el meto y : number devuelve el numero. 
        return (promedio + nuevanota) / 2; // devuelve la formula par tener un nuevo objeto. 
    }
    aprobar(nota: number, minima: number): boolean{ // se define el metodo apronbar.
        return nota >= minima; // retorna la comparacion que fue prederterminada con ayuda del boolean.
    }
    calcularfaltas(faltaactuales: number, nuevas: number): number{ //Se declara el método calcularfaltas.
        return faltaactuales + nuevas; //retorma la suma de de las faltas
    }
}

let estudiantes = new Estudiantes (); // se crea un objeto nuevo a partir de la clase

 // Se muestra en la consola
console.log("-----ESTUDIANTE-----");
console.log("Promedio:", estudiantes.agregarnota(9,7));
console.log("¿APROBO?", estudiantes.aprobar(6,8));
console.log("Faltas:", estudiantes.calcularfaltas(2,1));

