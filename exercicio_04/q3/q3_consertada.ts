class Radio {
  volume: number;
  constructor(volume: number) {
    this.volume = volume;
  }
}

// definindo valor inicial para volume
let r: Radio = new Radio(2);
r.volume = 10;
