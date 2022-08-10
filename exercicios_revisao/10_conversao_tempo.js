import prompt from 'prompt-sync'
const input = prompt()

function main(){
    console.log('\n\tConversão de Tempo\n')
    const tempo_milissegundos = Number(input('Digite o tempo em ms: '))
    const segundos = tempo_milissegundos / 1000
    const qtd_dias = segundos / 86400
    const qtd_horas = (segundos%86400) / 3600
    const qtd_minutos = ((segundos%86400)%3600) / 60
    const qtd_segundos = (((segundos%86400)%3600)%60)

    console.log(`\nTempo Correspondente (Dd:HH:MM:SS): ${Math.trunc(qtd_dias)}:${Math.trunc(qtd_horas)}:${Math.trunc(qtd_minutos)}:${Math.trunc(qtd_segundos)}`)
}

main()