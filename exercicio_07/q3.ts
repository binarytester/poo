class Calculadora {
  private _operando1: number;
  private _operando2: number;

  constructor(operando1: number, operando2: number) {
    this._operando1 = operando1;
    this._operando2 = operando2;
  }

  soma(): number {
    return this._operando1 + this._operando2;
  }

  get num1(): number {
    return this._operando1;
  }

  get num2(): number {
    return this._operando2;
  }
}

class CalculadoraCientifica extends Calculadora {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2);
  }

  // a)
  exponenciar(): number {
    return this.num1 ** this.num2;
  }
}

// b)
let calculo: CalculadoraCientifica = new CalculadoraCientifica(2, 5);
console.log("Soma: ", calculo.soma());
console.log("Exponenciação: ", calculo.exponenciar());

/* c) Foi necessário alterar a classe Calculadora, adicionando
 o método get para ter acesso aos operandos.
*/
