class SituacaoFinanceira {
  valorCreditos: number = 0;
  valorDebitos: number = 0;

  saldo(): number {
    return this.valorCreditos - this.valorDebitos;
  }
}

let saldo_final: SituacaoFinanceira;
saldo_final = new SituacaoFinanceira();
saldo_final.valorCreditos = 520.0;
saldo_final.valorDebitos = 365.5;

console.log(saldo_final.saldo());
