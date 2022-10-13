class Calculadora {
  private _operando1: number;
  private _operando2: number;

  constructor(_operando1: number, _operando2: number) {
    this._operando1 = _operando1;
    this._operando2 = _operando2;
  }

  public soma() {
    return this._operando1 + this._operando2;
  }

  public multiplicacao() {
    return this._operando1 * this._operando2;
  }
}

let calculo: Calculadora = new Calculadora(2, 4);
console.log(calculo.soma()); // 6
console.log(calculo.multiplicacao()); // 8

// calculo._operando1 = 2;    não é possivel acessar
