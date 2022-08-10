import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\n\tMês por extenso\n')
    const numero_mes = Number(input('Digite o número: '))

    if(nao_eh_numero(numero_mes) || mes_invalido(numero_mes)){
        console.log('\nValor digitado foi inválido.')
    } else {
        const [mes, numero_dias] = calcular_mes_correspondente(numero_mes)
        console.log(`\nMês: ${mes}`)
        console.log(`Quantidade de dias: ${numero_dias} dias`)
    }
}
main()

function calcular_mes_correspondente(numero){
    let mes_em_extenso = ''
    let qtd_dias_mes = 0
    if(numero === 1){
        mes_em_extenso = 'janeiro'
        qtd_dias_mes = 31
    } else if (numero === 2){
        mes_em_extenso = 'fevereiro'
        qtd_dias_mes = 28
    } else if (numero === 3){
        qtd_dias_mes = 31
        mes_em_extenso = 'março'
    } else if (numero === 4){
        mes_em_extenso = 'abril'
        qtd_dias_mes = 30
    } else if (numero === 5){
        qtd_dias_mes = 31
        mes_em_extenso = 'maio'
    } else if (numero === 6){
        mes_em_extenso = 'junho'
        qtd_dias_mes = 30
    } else if (numero === 7){
        mes_em_extenso = 'julho'
        qtd_dias_mes = 31
    } else if (numero === 8){
        mes_em_extenso ='agosto'
        qtd_dias_mes = 31
    } else if (numero === 9){
        mes_em_extenso = 'setembro'
        qtd_dias_mes = 30
    } else if (numero === 10){
        mes_em_extenso = 'outubro'
        qtd_dias_mes = 31
    } else if (numero === 11){
        mes_em_extenso = 'novembro'
        qtd_dias_mes = 30
    } else if (numero === 12){
        mes_em_extenso = 'dezembro'
        qtd_dias_mes = 31
    }

    return [mes_em_extenso, qtd_dias_mes]
}

function mes_invalido(num){
    return num < 1 || num > 12
}

function nao_eh_numero(valor){
    return isNaN(valor)
}