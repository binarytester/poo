var nova_string = "";
function separar_numeros_array(array: number[]): void {
  array.forEach(formar_string);
}

function formar_string(item: number): void {
  nova_string += item;
  console.log(nova_string);
  nova_string += "-";
}

let numeros: number[] = [1, 2, 3, 12, 2, 16, 3];
separar_numeros_array(numeros);
