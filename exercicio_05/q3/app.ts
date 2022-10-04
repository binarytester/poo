import prompt from "prompt-sync";
const input = prompt();

import { Conta, Banco } from "./bancos";
let b: Banco = new Banco();
let opcao: String = "";

do {
  console.log("\nBem vindo\nDigite uma opção:");
  opcao_escolha();
  opcao = input("Digite uma opção: ");
  switch (opcao) {
    case "1":
      inserir();
      break;
    case "2":
      consultar();
      break;
    case "3":
      sacar();
      break;
    case "4":
      depositar();
      break;
    case "5":
      excluir();
      break;
    case "6":
      transferir();
      break;
    case "7":
      totalizacoes();
      break;
  }
  input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function opcao_escolha(): void {
  let menu = "1 - Cadastrar";
  menu += "\n2 - Consultar";
  menu += "\n3 - Depositar";
  menu += "\n4 - Depositar";
  menu += "\n5 - Excluir";
  menu += "\n6 - Transferir";
  menu += "\n7 - Totalizações";
  menu += "\n0 - Sair";
  console.log(menu);
}

function inserir(): void {
  console.log("\nCadastrar Conta\n");
  let numero: string = input("Digite o N° da Conta: ");
  let conta: Conta;
  conta = new Conta(numero, 0);
  b.inserir(conta);
}

function consultar(): void {
  console.log("Consultar Conta\n");
  let numero: string = input("Digite o N° da Conta que deseja consultar: ");
  console.log("Conta consultada: ", b.consultar(numero));
}

function sacar(): void {
  console.log("Sacar valor de uma Conta\n");
  let numero: string = input("Digite o N° da Conta em que irá sacar: ");
  let valor: number = Number(input("Digite o valor que deseja sacar: "));
  b.sacar(numero, valor);
  console.log("Valor sacado da conta!");
}

function depositar() {
  console.log("Depositar em uma Conta\n");
  let numero: string = input("Digite o N° da Conta em que irá depositar: ");
  let valor: number = Number(input("Digite o valor que deseja depositar: "));
  b.depositar(numero, valor);
  console.log("Valor depositado na conta!");
}

function excluir() {
  console.log("Excluir Conta\n");
  let numero: string = input("Digite o N° da Conta que deseja excluir: ");
  b.excluir(numero);
  console.log("A conta foi excluída!");
}

function transferir() {
  console.log("Transferir valor entre Contas\n");
  let origem: string = input("Digite o N° da Conta de onde irá transferir: ");
  let destino: string = input(
    "Digite o N° da Conta em que irá mandar o valor: "
  );
  let valor: number = Number(input("Digite o valor que deseja transferir: "));
  b.transferir(origem, destino, valor);
  console.log("O valor foi transferido!");
}

function totalizacoes() {
  console.log("Totalizações dos valores\n");
  console.log("Totalizações: R$ ", b.total_depositado_contas().toFixed(2));
}
