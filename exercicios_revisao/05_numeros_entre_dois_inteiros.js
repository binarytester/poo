import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\nNúmeros inteiros entre dois valores\n')
    const [num1,num2] = input('Digite os dois números. Ex.: 2 10: ').split(' ').map(Number)
    const [maior,menor] = calcular_maior_e_menor(num1,num2)

    for (let i = menor+1; i < maior; i++){
        console.log(Math.trunc(i))
    }
}
main()

function calcular_maior_e_menor(n1,n2){
    const maior = Math.max(n1,n2)
    const menor = Math.min(n1,n2)

    return [maior, menor]
}