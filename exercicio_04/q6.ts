class Triangulo {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  ehTriangulo() {
    return Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c;
  }

  ehIsosceles() {
    return (
      this.ehTriangulo() &&
      (this.a === this.b || this.a === this.c || this.b === this.c)
    );
  }

  ehEquilatero() {
    return this.ehTriangulo() && this.a === this.b && this.b === this.c;
  }

  ehEscaleno() {
    return this.ehTriangulo() && this.a !== this.b && this.b !== this.c;
  }
}

// um equilatero
let triangulo_a: Triangulo = new Triangulo(6, 6, 6);

if (triangulo_a.ehEquilatero()) {
  console.log("Eh equilatero");
} else if (triangulo_a.ehIsosceles()) {
  console.log("Eh isosceles");
} else if (triangulo_a.ehEscaleno()) {
  console.log("Eh escaleno");
} else {
  console.log("Nao eh triangulo");
}

// um isosceles
let triangulo_b: Triangulo = new Triangulo(5, 5, 3);

if (triangulo_b.ehEquilatero()) {
  console.log("Eh equilatero");
} else if (triangulo_b.ehIsosceles()) {
  console.log("Eh isosceles");
} else if (triangulo_b.ehEscaleno()) {
  console.log("Eh escaleno");
} else {
  console.log("Nao eh triangulo");
}

// um escaleno
let triangulo_c: Triangulo = new Triangulo(5, 4, 6);

if (triangulo_c.ehEquilatero()) {
  console.log("Eh equilatero");
} else if (triangulo_c.ehIsosceles()) {
  console.log("Eh isosceles");
} else if (triangulo_c.ehEscaleno()) {
  console.log("Eh escaleno");
} else {
  console.log("Nao eh triangulo");
}
