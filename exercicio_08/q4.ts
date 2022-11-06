class Conta {
  private _numero: String;
  private _saldo: number;

  constructor(numero: String, saldo: number) {
    this._numero = numero;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor: number): void {
    if (this._saldo < valor) {
      throw new Error("Saldo insuficiente.");
    }

    this._saldo = this._saldo - valor;
  }

  depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  consultarSaldo(): number {
    return this._saldo;
  }

  transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
  }
}

let c1: Conta = new Conta("1", 2000);
let c2: Conta = new Conta("2", 3000);
c1.transferir(c2, 3000);

/* Ao tentar realizar a transferencia, o método "transferir" chama "sacar" para
  debitar de c1 que acaba entrando na exceção já que c1 nao possui saldo suficiente.
  A partir da exceção, nada mais é executado e a transferencia não é realizada. */
