class Equipamento {
  ligado: boolean;

  constructor(ligado: boolean) {
    this.ligado = ligado;
  }

  // liga o equipamento
  liga() {
    if (this.ligado === true) {
      return this.ligado;
    } else {
      this.ligado = true;
      return this.ligado;
    }
  }

  //  desliga o equipamento
  desliga() {
    if (this.ligado === false) {
      return this.ligado;
    } else {
      this.ligado = false;
      return this.ligado;
    }
  }

  // inverte o valor logico do equipamento
  inverte() {
    if (this.ligado === true) {
      this.ligado = false;
      return this.ligado;
    } else {
      this.ligado = true;
      return this.ligado;
    }
  }

  // mostra o estado atual do equipamento ( ligado ou desligado)
  estaLigado() {
    if (this.ligado === true) {
      console.log("Esta ligado.");
    } else {
      console.log("Esta desligado.");
    }
  }
}

let equipamento_a: Equipamento = new Equipamento(true);

// como ja ligado, permanece assim
equipamento_a.liga();
equipamento_a.estaLigado();

// desliga o equipamento
equipamento_a.desliga();
equipamento_a.estaLigado();

// inverte para ligado ja que estava desligado
equipamento_a.inverte();
equipamento_a.estaLigado();
