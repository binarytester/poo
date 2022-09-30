class Saudacao {
  texto: string;
  destinatario: string;

  constructor(texto: string, destinatario: string) {
    this.texto = texto;
    this.destinatario = destinatario;
  }

  obterSaudacao() {
    return this.texto + ", " + this.destinatario;
  }
}
let s: Saudacao = new Saudacao("Bom dia", "Pedro");
console.log(s.obterSaudacao());
