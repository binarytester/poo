import {
  idInvalidoError,
  jogadorNaoEncontrado,
  jogadorJaCadastrado,
} from "./excecoes";

// jogador
class Jogador {
  private _nome: string;
  private _id: number;
  private _pontuacao: number = 0;

  constructor(nome: string, id: number, pontuacao: number) {
    this._id = id;
    this._pontuacao = pontuacao;
    this._nome = nome;
  }

  getNome() {
    return this._nome;
  }

  getId() {
    return this._id;
  }

  getPontuacao() {
    return this._pontuacao;
  }

  ganharPonto(): void {
    this._pontuacao = this._pontuacao + 1;
  }
}

// interface de partida
interface PartidaI {
  inserir(jogador: Jogador): void;
  consultarJogador(id: number): Jogador;
  statusJogadores(): void;
  gerarResultado(
    j1: string,
    j2: string,
    jogador1: Jogador,
    jogador2: Jogador
  ): Jogador;
}

// partida
class Partida implements PartidaI {
  private _jogadores: Jogador[] = [];

  // armazenar jogador
  public inserir(jogador: Jogador): void {
    try {
      this.consultarJogador(jogador.getId());
      throw new jogadorJaCadastrado("Jogador já cadastrado.");
    } catch (e: any) {
      if (e instanceof jogadorJaCadastrado) {
        console.log(e.message);
      }
      this._jogadores.push(jogador);
    }
  }

  // consultar jogador por id
  public consultarJogador(id: number): Jogador {
    let jogadorProcurado!: Jogador;

    for (let index = 0; index < this._jogadores.length; index++) {
      if (this._jogadores[index].getId() == id) {
        jogadorProcurado = this._jogadores[index];
      }
    }

    if (!jogadorProcurado) {
      throw new idInvalidoError("O Id digitado é inválido.");
    }

    return jogadorProcurado;
  }

  // consultar indice do jogador
  private consultarIndiceJogador(id: number) {
    let indice: number = -1;
    for (let index = 0; index < this._jogadores.length; index++) {
      if (this._jogadores[index].getId() == id) {
        indice = index;
      }
    }

    if (indice == -1) {
      throw new jogadorNaoEncontrado("Jogador não encontrado.");
    }

    return indice;
  }

  // adicionar ponto para jogador
  private _ganharPonto(id: number): void {
    let indiceGanhador = this.consultarIndiceJogador(id);
    this._jogadores[indiceGanhador].ganharPonto();
  }

  // gera o vencedor da batalha
  public gerarResultado(
    j1: string,
    j2: string,
    jogador1: Jogador,
    jogador2: Jogador
  ): Jogador {
    let vencedor!: Jogador;
    let idJogador1: number = jogador1.getId();
    let idJogador2: number = jogador2.getId();

    switch (j1) {
      case "1":
        if (j2 == "2") {
          vencedor = jogador2;
          this._ganharPonto(idJogador2);
        } else if (j2 == "3") {
          vencedor = jogador1;
          this._ganharPonto(idJogador1);
        }
        break;
      case "2":
        if (j2 == "1") {
          vencedor = jogador1;
          this._ganharPonto(idJogador1);
        } else if (j2 == "3") {
          vencedor = jogador2;
          this._ganharPonto(idJogador2);
        }
        break;
      case "3":
        if (j2 == "1") {
          vencedor = jogador2;
          this._ganharPonto(idJogador2);
        } else if (j2 == "2") {
          vencedor = jogador1;
          this._ganharPonto(idJogador1);
        }
        break;
    }
    return vencedor;
  }

  // status dos jogadores
  public statusJogadores(): void {
    let j = 0;
    let ganhador: string = "";
    let jogador1!: Jogador;
    let jogador2!: Jogador;

    // lista cada batalha e seu ganhador
    for (let index = 0; index <= this._jogadores.length; index++) {
      jogador1 = this._jogadores[index];
      console.log(
        `- Jogador: ${this._jogadores[
          index
        ].getNome()}\nVitórias: ${this._jogadores[index++].getPontuacao()}`
      );

      jogador2 = this._jogadores[index];

      console.log(
        `- Jogador: ${this._jogadores[
          index
        ].getNome()} \nVitórias: ${this._jogadores[index].getPontuacao()}`
      );

      // determina o vencedor da batalha
      if (jogador1.getPontuacao() > jogador2.getPontuacao()) {
        ganhador = jogador1.getNome();
        console.log(`\n\tGanhador: ${ganhador}\n`);
      } else if (jogador1.getPontuacao() < jogador2.getPontuacao()) {
        ganhador = jogador2.getNome();
        console.log(`\n\tGanhador: ${ganhador}\n`);
      } else {
        console.log(`\n\tEmpate\n`);
      }
    }
  }
}

export { Jogador, Partida };
