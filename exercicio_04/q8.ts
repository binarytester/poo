class Conta {
  numero: String;
  saldo: number;

  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): boolean {
    if (this.saldo - valor < 0) {
      return false;
    } else {
      this.saldo = this.saldo - valor;
      return true;
    }
  }
  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }
  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): boolean {
    if (this.sacar(valor) === true) {
      this.sacar(valor);
      contaDestino.depositar(valor);
      return true;
    } else {
      return false;
    }
  }
}

let c1 = new Conta("1", 1000);
let c2 = new Conta("2", 2000);
c1.depositar(3000);
c1.transferir(c2, 3000);
console.log(`Novo saldo: ${c2.consultarSaldo()}`);
