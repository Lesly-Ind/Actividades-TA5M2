class Hospital{
    calculardosis(peso: number, mgporkg: number): number{
        return peso * mgporkg;
    }
    calcularIMC(peso: number, altura: number): number{
        return peso / (altura + altura);
    }
    registrarvisitas(visitasactuales: number, nuevas: number): number{
        return visitasactuales + nuevas;
    }
}

let hospital = new Hospital();

console.log("-----HOSPITAL-----");
console.log("Dosis:", hospital.calculardosis(70,3));
console.log("Indice de masa corporal:", hospital.calcularIMC(55,165));
console.log("Visitas registradas:", hospital.registrarvisitas(2,4))

