let Prompt = require("prompt-sync");
const input = Prompt();
import { AplicacaoError } from "./excecoes";
import { Jogador, Partida } from "./jogadores";
let partida: Partida = new Partida();
let opcao: string = "";

do {
  try {
    console.clear();
    console.log("\n\tPedra, Papel e Tesoura (Jokenpo)\n\nDigite uma opção:");
    console.log(
      "1 - Jogar\n2 - Ver pontuação\n3 - Registro de partidas\n0 - Sair\n"
    );

    opcao = input("Opção: ");
    switch (opcao) {
      case "1":
        jogar();
        break;
      case "2":
        pontuacao();
        break;
      case "3":
        logPartidas();
        break;
    }
  } catch (e: any) {
    if (e instanceof AplicacaoError) {
      console.log(e.message);
    }
  }
  input("Pressione <enter> para prosseguir");
} while (opcao != "0");
console.log("Aplicação encerrada");

// cadastro dos jogadores
function jogar() {
  console.log("\nCadastrar Jogador\n");
  let jogador1!: Jogador;
  let jogador2!: Jogador;
  let nome1: string = input("Digite o nome do Jogador: ");
  let numero1: number = input("Digite o id do Jogador: ");
  jogador1 = new Jogador(nome1, numero1, 0);
  partida.inserir(jogador1);

  console.log("\nCadastrar Jogador 2\n");
  let nome2: string = input("Digite o nome do Jogador: ");
  let numero2: number = input("Digite o id do Jogador: ");
  jogador2 = new Jogador(nome2, numero2, 0);
  partida.inserir(jogador2);

  input("Operação finalizada. Pressione <enter>");
  console.clear();

  // partida do jogo
  let j1: string = "";
  let j2: string = "";
  let opcao: string = "";
  let vencedor!: Jogador;

  console.log("\n\tPedra, Papel e Tesoura\n");
  do {
    console.log("1 - Pedra\n2 - Papel\n3 - Tesoura\n");
    console.log(`Jogador 1 - ${jogador1.getNome()}\n`);
    j1 = input("Digite a opção: ");
    console.clear();
    console.log("\nPedra, Papel e Tesoura\n");
    console.log("\n1 - Pedra\n2 - Papel\n3 - Tesoura\n");
    console.log(`Jogador 1 - ${jogador2.getNome()}\n`);
    j2 = input("Digite a opção: ");
    vencedor = partida.gerarResultado(j1, j2, jogador1, jogador2); // determina quem venceu
    console.log(`Vencedor: ${vencedor.getNome()}`);
    opcao = input("Deseja jogar mais uma partida? s/n: ").toLowerCase();
  } while (opcao == "s");
}

// consultar pontuação
function pontuacao() {
  try {
    console.log("\nPontuação das batalhas\n");
    let id: number = 0;
    id = input("digite seu id: ");
    let jogadorEscolhido: Jogador = partida.consultarJogador(id);
    console.log(
      `\nNome do Jogador: ${jogadorEscolhido.getNome()} \nPontuação: ${jogadorEscolhido.getPontuacao()}`
    );
  } catch (e: any) {
    if (e instanceof AplicacaoError) {
      console.log(e.message);
    } else {
      console.log("Id invalido.");
    }
  }
}

function logPartidas() {
  console.log("\nStatus das Partidas\n");
  partida.statusJogadores();
}
