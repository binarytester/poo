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

  get numero() {
    return this._numero;
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

class Banco {
  private contas: Conta[] = [];

  // inserir contas no Banco
  public inserir(c: Conta): boolean {
    for (let i = 0; i < this.contas.length; i++) {
      if (c.numero == this.contas[i].numero) {
        return false;
      }
    }
    this.contas.push(c);
    return true;
  }

  // consultar alguma conta
  consultar(numero: String): Conta {
    let contaProcurada!: Conta;
    for (let c of this.contas) {
      if (c.numero == numero) {
        contaProcurada = c;
        break;
      }
    }
    return contaProcurada;
  }

  // consultar indice da conta
  private consultarIndice(numero: String): number {
    let indice: number = -1;
    for (let i: number = 0; i < this.contas.length; i++) {
      if (this.contas[i].numero == numero) {
        indice = i;
        break;
      }
    }
    return indice;
  }

  // alterar indice da conta
  public alterar(c: Conta): void {
    let indice = this.consultarIndice(c.numero);

    if (indice != -1) {
      this.contas[indice] = c;
    }
  }

  // excluir conta
  public excluir(numero: String): void {
    let indice: number = this.consultarIndice(numero);
    if (indice != -1) {
      for (let i: number = indice; i < this.contas.length; i++) {
        this.contas[i] = this.contas[i + 1];
      }
      this.contas.pop();
    }
  }

  // sacar valor de uma determinada conta
  public sacar(numero: string, valor: number): void {
    let num_conta: number = this.consultarIndice(numero);
    this.contas[num_conta].sacar(valor);
  }

  // transferir valor entre contas
  public transferir(
    numeroCredito: string,
    numeroDebito: string,
    valor: number
  ) {
    let conta_origem: number = this.consultarIndice(numeroCredito);
    let conta_destino: number = this.consultarIndice(numeroDebito);
    this.contas[conta_origem].transferir(this.contas[conta_destino], valor);
  }

  // depositar em uma conta
  public depositar(numero: String, valor: number) {
    let conta: Conta = this.consultar(numero);
    if (conta != null) {
      conta.depositar(valor);
    }
  }

  // retorna quantidade de contas do Banco
  quantidade_contas(): number {
    return this.contas.length;
  }

  // retorna o total depositado no Banco
  public total_depositado_contas(): number {
    let soma_total: number = 0;
    for (let i = 0; i < this.contas.length; i++) {
      soma_total += this.contas[i].saldo;
    }
    return soma_total;
  }

  // retorna media do saldo das contas desse Banco
  public media_saldo_contas(): number {
    const soma: number = this.total_depositado_contas();
    const qtd_contas: number = this.quantidade_contas();
    return soma / qtd_contas;
  }
}

/*
Sim, pois assim como na classe Conta, não foi possivel realizar
o saque devido a falta de saldo (ação necessaria para a transferencia).
No entanto, o mais adequado seria criar uma exceção no método transferir
já que o erro ocorreu ao tentar realizar essa operação.
*/

let b1: Banco = new Banco();
b1.inserir(new Conta("1", 2000));
b1.inserir(new Conta("2", 3000));
b1.transferir("1", "2", 5000);
