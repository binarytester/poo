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
}

let calculo: Calculadora = new Calculadora(2, 3);
console.log("Resultado: ", calculo.soma());
