import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\nJuros Compostos\n')
    const v = Number(input('Digite o valor em R$: '))
    const t = Number(input('Digite a % juros: '))
    const vetor_juros_compostos = calcular_juros(v,t)
    console.log(vetor_juros_compostos)
}

main() 

function calcular_juros(valor,taxa){

    const vetor = new Array(12)
    let montante = 0
    for(let i = 0; i < 12; i++){
        montante = valor * (1 + taxa/100)
        montante = Number((montante).toFixed(2))
        vetor[i] = montante
        valor = montante
    }

    return vetor
}