class Postagem {
  id: number;
  texto: string;
  quantidadeCurtidas: number;

  constructor(id: number, texto: string, quantidadeCurtidas: number) {
    this.id = id;
    this.texto = texto;
    this.quantidadeCurtidas = quantidadeCurtidas;
  }

  // (b) incrementa a quantidade curtidas;
  curtir(): void {
    this.quantidadeCurtidas++;
  }
  // (c) retorna a concatenação da postagem com a quantidade de curtidas
  toString(): string {
    return this.texto + this.quantidadeCurtidas;
  }
}

class Microblog {
  postagens: Postagem[] = [];

  // (b) método de inserir uma postagem
  inserir_postagem(post: Postagem): void {
    this.postagens.push(post);
  }

  localizar_post(id: number): number {
    let numero: number = -1;
    for (let i = 0; i < this.postagens.length; i++) {
      if (this.postagens[i].id == id) {
        numero = i;
        break;
      }
    }
    return numero;
  }

  // (c) método de excluir uma postagem
  excluir_postagem(id: number) {
    let id_postagem: number = this.localizar_post(id);
    if (id_postagem != -1) {
      for (let i: number = id_postagem; i < this.postagens.length; i++) {
        this.postagens[i] = this.postagens[i + 1];
      }
      this.postagens.pop();
    }
  }

  // (d) método que retorna um array com a postagem mais curtida.
  postagem_mais_curtida(): Postagem {
    let id_mais_curtido: number = 0;
    for (let i = 0; i < this.postagens.length; i++) {
      if (
        this.postagens[i].quantidadeCurtidas >=
        this.postagens[id_mais_curtido].quantidadeCurtidas
      ) {
        id_mais_curtido = i;
      }
    }
    return this.postagens[id_mais_curtido];
  }

  // (e) curte uma determinada postagem a partir do id
  curtir_p(id: number): void {
    for (let i = 0; i < this.postagens.length; i++) {
      if (id == this.postagens[i].id) {
        this.postagens[i].curtir();
      }
    }
  }

  // (f) retorna a concatenação do “toString” de todas as postagens.
  toString(): string {
    let contatenacao: string = "";
    for (let i = 0; i < this.postagens.length; i++) {
      contatenacao += this.postagens[i].toString();
    }
    return contatenacao;
  }
}
