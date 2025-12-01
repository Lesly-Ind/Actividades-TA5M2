class Banco {
    depositar(saldo: number, monto: number): number{
        return monto + saldo;
    }
    retirar(saldo:number, monto: number): number{
        if (monto > saldo){
            throw new Error("fondos insuficientes")  
        }
        return monto - saldo ;
    }
    transferir(saldoorigen: number, monto: number): number{
        if (monto >  saldoorigen){
            throw new Error("No se puede transferir más del saldo disponible")
        }
        return monto - saldoorigen;
    }
}

let banco = new Banco();

console.log("-----BANCO-----");
console.log("Deposito:", banco.depositar(389,20000));
console.log("Retiro:", banco.retirar(690,20389));
console.log("Transferencia:", banco.transferir(57,20000));

