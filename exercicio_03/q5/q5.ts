function soma(x: number, y?: any): number {
  return x + y;
}

console.log(`Alternativa a: ${soma(1, 2)}`);
console.log(`Alternativa b: ${soma(1, "2")}`);
console.log(`Alternativa c: ${soma(1)}`);
