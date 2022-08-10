import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\n\tNúmero maior e menor\n')
    const num1 = Number(input('Digite o primeiro número: '))
    const num2  = Number(input('Digite o segundo número: '))
    const num3  = Number(input('Digite o terceiro número: '))
    const [maior, menor] = calcular_maior_e_menor(num1,num2,num3)
    
    console.log(`\nMaior: ${maior}`)
    console.log(`Menor: ${menor}`)

}

main()

function calcular_maior_e_menor(n1,n2,n3){
    let maior = n1
    if (n2 > maior) maior = n2
    if(n3 > maior) maior = n3

    let menor = n1
    if (n2 < menor) menor = n2
    if(n3 < menor) menor = n3

    return [maior, menor]
}