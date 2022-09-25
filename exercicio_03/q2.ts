function eh_primo(num: number): boolean {
  let numero_divisores = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      numero_divisores++;
    }
  }

  if (numero_divisores === 2) {
    return true;
  } else {
    return false;
  }
}
