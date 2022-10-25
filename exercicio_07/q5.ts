class Produto {
  private _identificador: number;
  private _descricao: string;
  private _quantidadeProdutos: number;
  private _valorUnitario: number;

  constructor(
    identificador: number,
    descricao: string,
    quantidadeProdutos: number,
    valorUnitario: number
  ) {
    this._descricao = descricao;
    this._identificador = identificador;
    this._quantidadeProdutos = quantidadeProdutos;
    this._valorUnitario = valorUnitario;
  }

  get descricao(): string {
    return this._descricao;
  }

  get identificador(): number {
    return this._identificador;
  }

  get getQtdProdutos() {
    return this._quantidadeProdutos;
  }

  set setQtdProdutos(num: number) {
    this._quantidadeProdutos = num;
  }

  // repor produto
  repor(quantidade: number) {
    this._quantidadeProdutos += quantidade;
  }

  // dar baixa em produto
  darBaixa(quantidade: number) {
    this._quantidadeProdutos -= quantidade;
  }
}

class ProdutoPerecivel extends Produto {
  dataValidade: Date;

  constructor(
    identificador: number,
    descricao: string,
    quantidadeProdutos: number,
    valorUnitario: number,
    dataValidade: string
  ) {
    super(identificador, descricao, quantidadeProdutos, valorUnitario);
    this.dataValidade = new Date(dataValidade);
  }

  get validadeProduto(): Date {
    return this.dataValidade;
  }

  // verifica se produto esta dentro da validade
  produtoValido(): boolean {
    let dataAtual: Date = new Date();
    if (this.dataValidade.getTime() < dataAtual.getTime()) {
      return false;
    } else {
      return true;
    }
  }

  // repor produto
  repor(quantidade: number) {
    if (this.produtoValido()) super.repor(quantidade);
  }

  // dar baixa em produto
  darBaixa(quantidade: number) {
    if (this.produtoValido()) super.darBaixa(quantidade);
  }
}

class Estoque {
  private produtos: Produto[] = [];

  // inserir novo produto
  inserir(p: Produto) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (
        p.identificador == this.produtos[i].identificador ||
        p.descricao == this.produtos[i].descricao
      ) {
        return false;
      }
    }
    this.produtos.push(p);
    return true;
  }

  // consultar produto por id
  consultar(id: number): Produto {
    let produtoProcurado!: Produto;
    for (let p of this.produtos) {
      if (p.identificador == id) {
        produtoProcurado = p;
        break;
      }
    }

    return produtoProcurado;
  }

  // excluir produto do estoque
  excluir(id: number) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtoExiste(id) && id == this.produtos[i].identificador) {
        this.produtos[i] = this.produtos[i + 1];
      }
    }
    this.produtos.pop();
  }

  // repor algum produto do estoque
  repor(id: number, quantidade: number) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtoExiste(id) && id == this.produtos[i].identificador) {
        this.produtos[i].repor(quantidade);
        break;
      }
    }
  }

  // dar baixa algum produto do estoque
  darBaixa(id: number, quantidade: number) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtoExiste(id) && id == this.produtos[i].identificador) {
        this.produtos[i].darBaixa(quantidade);
        break;
      }
    }
  }

  // verifica se produto existe no estoque
  produtoExiste(id: number): boolean {
    for (let p of this.produtos) {
      if (p.identificador == id) {
        return true;
      }
    }
    return false;
  }

  // lista os produtos vencidos
  listarVencidos(): void {
    for (let produto of this.produtos) {
      if (produto instanceof ProdutoPerecivel && !produto.produtoValido()) {
        console.log(produto);
      }
    }
  }
}
