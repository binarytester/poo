class Conta {
  private _numero: String;
  private _saldo: number;

  constructor(numero: String, saldo: number) {
    this._numero = numero;
    this._saldo = saldo;
  }

  get_numero(): String {
    return this._numero;
  }

  get_saldo(): number {
    return this._saldo;
  }

  sacar(valor: number): void {
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

  get_contas(): Conta[] {
    return this.contas;
  }

  // inserir contas no Banco
  public inserir(c: Conta): boolean {
    for (let i = 0; i < this.contas.length; i++) {
      if (c.get_numero() == this.contas[i].get_numero()) {
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
      if (c.get_numero() == numero) {
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
      if (this.contas[i].get_numero() == numero) {
        indice = i;
        break;
      }
    }
    return indice;
  }

  // alterar indice da conta
  public alterar(c: Conta): void {
    let indice = this.consultarIndice(c.get_numero());

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
      soma_total += this.contas[i].get_saldo();
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
let a: Banco = new Banco();
a.inserir(new Conta("1", 600));
a.inserir(new Conta("2", 300));

a.depositar("2", 200); // deposita 200 em "2"
console.log("Conta 2: ", a.consultar("2")); // mostra a conta "2"
console.log(`Quantidade de contas: ${a.quantidade_contas()}`); // 2
console.log(`Total depositado nas contas: ${a.total_depositado_contas()}`); // 1100
console.log(`Media saldo das contas: ${a.media_saldo_contas()}`); // 550
a.transferir("1", "2", 200); // transferir 100 de "1" para "2"
a.sacar("1", 200); // sacar 200 de "1"
a.excluir("1"); // apagar conta "1"
