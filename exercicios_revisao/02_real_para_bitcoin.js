import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\n\tCoverter real para bitcoin\n')
    const valor_reais = Number(input('Digite o valor em R$: '))
    const cotacao_bitcoin = Number(input('Digite a cotação atual do Bitcoin em R$: '))
    const valor_em_bitcoin = valor_reais / cotacao_bitcoin
    console.log(`\nValor em bitcoin: ${valor_em_bitcoin.toFixed(8)} btc`)
}

main()