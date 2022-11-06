// mensagem de erro
class Conta {
  numero: String;
  saldo: number;

  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): void {
    // condicinal com mensagem de erro
    if (this.saldo - valor > 0) {
      this.saldo = this.saldo - valor;
    } else {
      console.log("saldo insuficiente para o saque!");
    }
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): void {
    // condicinal com mensagem de erro
    if (this.saldo - valor > 0) {
      this.sacar(valor);
      contaDestino.depositar(valor);
    } else {
      console.log("saldo insuficiente para a transferencia!");
    }
  }
}

let c1: Conta = new Conta("2", 2000);
c1.sacar(3000);
