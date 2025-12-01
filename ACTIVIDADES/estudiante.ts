class Estudiante {
    agregarnota(promedio: number, nuevanota: number): number{
        return (promedio + nuevanota) / 2;
    }
    aprobar(nota: number, minima: number): boolean{
        return nota >= minima;
    }
    calcularfaltas(faltaactuales: number, nuevas: number): number{
        return faltaactuales + nuevas;
    }
}

let estudiante = new Estudiante();
 
console.log("-----ESTUDIANTE-----");
console.log("Promedio:", estudiante.agregarnota(9,7));
console.log("¿APROBO?", estudiante.aprobar(6,8));
console.log("Faltas:", estudiante.calcularfaltas(2,1));

