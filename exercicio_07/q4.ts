class Conta {
  private _numero: string;
  private _saldo: number;

  constructor(numero: string, saldo: number) {
    this._numero = numero;
    this._saldo = saldo;
  }

  get_numero(): string {
    return this._numero;
  }

  get_saldo(): number {
    return this._saldo;
  }

  // sacar valor da conta
  sacar(valor: number): void {
    this._saldo = this._saldo - valor;
  }

  // depositar valor da conta
  depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  // consultar valor da conta
  consultarSaldo(): number {
    return this._saldo;
  }

  // transferir valor entre contas
  transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
  }
}

class Poupanca extends Conta {
  private _taxaJuros: number;

  constructor(numero: string, saldo: number, taxaJuros: number) {
    super(numero, saldo);
    this._taxaJuros = taxaJuros;
  }

  // render juros
  public renderJuros(): void {
    this.depositar((this.get_saldo() * this._taxaJuros) / 100);
  }

  get taxaJuros(): number {
    return this._taxaJuros;
  }
}

class ContaImposto extends Conta {
  private _taxaDesconto: number;

  constructor(numero: string, saldo: number, taxaDeDesconto: number) {
    super(numero, saldo);
    this._taxaDesconto = taxaDeDesconto;
  }

  debitar(valor: number): void {
    let total = valor + valor * (this._taxaDesconto / 100);
    super.sacar(total);
  }
}

class Banco {
  private _contas: Conta[] = [];

  // inserir conta no Banco
  inserir(conta: Conta): void {
    let contaConsultada = this.consultar(conta.get_numero());
    if (contaConsultada == null) {
      this._contas.push(conta);
    }
  }

  // render juros
  renderJuros(numeroPoupanca: string) {
    for (let c of this._contas) {
      if (c.get_numero() == numeroPoupanca) {
        if (c instanceof Poupanca) {
          this.renderJuros(numeroPoupanca);
          return true;
        }
        break;
      }
    }
    return false;
  }

  // consultar alguma conta
  consultar(numero: String): Conta {
    let contaProcurada!: Conta;
    for (let c of this._contas) {
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
    for (let i: number = 0; i < this._contas.length; i++) {
      if (this._contas[i].get_numero() == numero) {
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
      this._contas[indice] = c;
    }
  }

  // excluir conta
  public excluir(numero: String): void {
    let indice: number = this.consultarIndice(numero);
    if (indice != -1) {
      for (let i: number = indice; i < this._contas.length; i++) {
        this._contas[i] = this._contas[i + 1];
      }
      this._contas.pop();
    }
  }

  // sacar valor de uma determinada conta
  public sacar(numero: string, valor: number): void {
    let num_conta: number = this.consultarIndice(numero);
    this._contas[num_conta].sacar(valor);
  }

  // transferir valor entre contas
  public transferir(
    numeroCredito: string,
    numeroDebito: string,
    valor: number
  ) {
    let conta_origem: number = this.consultarIndice(numeroCredito);
    let conta_destino: number = this.consultarIndice(numeroDebito);
    this._contas[conta_origem].transferir(this._contas[conta_destino], valor);
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
    return this._contas.length;
  }

  // retorna o total depositado no Banco
  public total_depositado_contas(): number {
    let soma_total: number = 0;
    for (let i = 0; i < this._contas.length; i++) {
      soma_total += this._contas[i].get_saldo();
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
