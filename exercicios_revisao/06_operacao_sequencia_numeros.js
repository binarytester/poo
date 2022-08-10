import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\n\tCálculo da Soma, Média e Desvio Padrão\n')
    let num = Number(input('Digite o número:  '))
    let soma = 0
    let contador = 0
    const vetor_armazenamento = []
    
    while (num !== -1){
        soma+= num
        vetor_armazenamento[contador] = num
        contador++
        num = Number(input('Digite o número:  '))
    }

    const media = soma / contador
    const desvio_padrao = calcular_desvio_padrao(vetor_armazenamento, media, contador)
    console.log(`\nSoma:  ${soma}`)
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Desvio Padrão: ${Math.floor(desvio_padrao)}`)

}

main()

function calcular_desvio_padrao(vetor, media, qtd_numeros){

    const tamanho_vetor = vetor.length
    let soma = 0
    for(let i = 0; i < tamanho_vetor; i++){
        soma += Math.pow((vetor[i] - media),2)
    }

    let desvio = Math.sqrt(soma / qtd_numeros)
    return desvio
}