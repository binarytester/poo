class Hora {
  private _horas: number;
  private _minutos: number;
  private _segundos: number;

  constructor(
    private horas: number,
    private minutos: number,
    private segundos: number
  ) {
    this._horas = horas;
    this._minutos = minutos;
    this._segundos = segundos;
  }

  public ler_hora() {
    return this._horas;
  }

  public ler_min() {
    return this._minutos;
  }

  public ler_seg() {
    return this._segundos;
  }

  public hora_completa() {
    return this._horas + ":" + this._minutos + ":" + this._segundos;
  }
}

let hora: Hora = new Hora(2, 30, 56);
console.log(hora.ler_hora()); // 2
console.log(hora.ler_min()); // 30
console.log(hora.ler_seg()); // 56
console.log(hora.hora_completa()); // 2:30:56
