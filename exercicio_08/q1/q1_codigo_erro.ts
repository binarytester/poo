// código de erro
class Conta {
  numero: String;
  saldo: number;

  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): boolean {
    // codigo de erro
    if (this.saldo - valor > 0) {
      this.saldo = this.saldo - valor;
      return true;
    }
    return false;
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): boolean {
    let sacou: boolean = this.sacar(valor);
    if (sacou) {
      contaDestino.depositar(valor);
      return true;
    } else {
      return false;
    }
  }
}

let c1: Conta = new Conta("2", 2000);
c1.sacar(3000);
