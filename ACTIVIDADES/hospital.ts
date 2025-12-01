class Hospital{ // se crea una estructura.
    calculardosis(peso: number, mgporkg: number): number{ // declara un metodo. 
        return peso * mgporkg; // realiza la funcion llama al metodo. 
    }
    calcularIMC(peso: number, altura: number): number{ // se utilaza orto metodo.
        return peso / (altura * altura); // aplica la formula de IMC y devuelve el nuemero.
    }
    registrarvisitas(visitasactuales: number, nuevas: number): number{ // metodo nombrado registrarvisita.
        return visitasactuales + nuevas; //suma las visitas y retorna un numero.
    }
}

let hospital = new Hospital(); // se genera  un nuevo objeto ,asi mismo se lo define.

// Visible en la consola.
console.log("-----HOSPITAL-----");
console.log("Dosis:", hospital.calculardosis(70,3));
console.log("Indice de masa corporal:", hospital.calcularIMC(55,165));
console.log("Visitas registradas:", hospital.registrarvisitas(2,4))

