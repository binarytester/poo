import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const vetor = new Array(5)

    // preenchendo vetor
    for(let i = 0; i < 5; i++){
        vetor[i] = Number(input('Digite um valor: '))
    }

    // saída
    const [vetor_crescente, vetor_decrescente] = ordenar_vetores(vetor)
    console.log('\nVetor em ordem crescente: ', vetor_crescente)
    console.log('Vetor em ordem decrescente: ', vetor_decrescente)

}

main()

// ordenar usando algoritmo Bubble
function ordenar_vetores(vetor){

    const tamanho_vetor = vetor.length
    const vetor_auxiliar = []
    for(let i = 0; i < tamanho_vetor; i++){
        vetor_auxiliar[i] = vetor[i]
    }

    // vetor em ordem crescente
    let auxiliar = 0
    for (let i = 0; i < tamanho_vetor; i++){
        for(let j = i + 1; j < tamanho_vetor; j++){
            if(vetor[i] > vetor[j]){
                auxiliar = vetor[i]
                vetor[i] = vetor[j]
                vetor[j] = auxiliar
            }
        }
    }

    // vetor em ordem decrescente
    let auxiliar2 = 0
    for (let i = 0; i < tamanho_vetor; i++){
        for(let j = i + 1; j < tamanho_vetor; j++){
            if(vetor_auxiliar[i] < vetor_auxiliar[j]){
                auxiliar2 = vetor_auxiliar[i]
                vetor_auxiliar[i] = vetor_auxiliar[j]
                vetor_auxiliar[j] = auxiliar2
            }
        }
    }
    return [vetor, vetor_auxiliar]
}