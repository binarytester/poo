// alternativa e)

/* com o StrictNullChecks em false, seria possivel fazer o uso do null como argumento
para a função imprimir_pessoa, ocorrendo o erro apenas depois da compilação. No entanto, 
quando deixamos em true, há uma maior rigorosidade no uso de Null e Undefined, já poupando
de erros futuros.

*/

type pessoa = {
  cpf: number;
  nome: string;
};

function imprimir_pessoa(p: pessoa) {
  console.log(`${p.nome}`);
}

imprimir_pessoa(null);
