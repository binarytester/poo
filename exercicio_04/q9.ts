class Jogador {
  forca: number;
  nivel: number;
  pontos_atuais: number;

  constructor(forca: number, nivel: number, pontos_atuais: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontos_atuais = pontos_atuais;
  }

  calcularAtaque(): number {
    return this.forca * this.nivel;
  }

  atacar(atacado: Jogador): boolean {
    if (atacado.estaVivo()) {
      atacado.pontos_atuais = atacado.pontos_atuais - this.calcularAtaque();
      return true;
    } else {
      return false;
    }
  }

  estaVivo(): boolean {
    if (this.pontos_atuais > 0) {
      return true;
    } else {
      return false;
    }
  }

  toString(nome: string) {
    console.log(
      `${nome}: força: ${this.forca} | nivel: ${this.nivel} | pontos: ${this.pontos_atuais}`
    );
  }
}

// instanciando jogador1 e jogador2
let jogador1: Jogador = new Jogador(20, 5, 600);
let jogador2: Jogador = new Jogador(5, 2, 600);

// ambos atacam
jogador1.atacar(jogador2);
jogador2.atacar(jogador1);

// exibindo seus status atuais após combate
jogador1.toString("Jogador 1");
jogador2.toString("Jogador 2");
