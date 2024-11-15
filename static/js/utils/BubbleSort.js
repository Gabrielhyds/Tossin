//função para ordenar os produtos usamos o 
// algoritmo de ordenação bubbleSort
export function bubbleSortProdutos(arr) {
    //for externo para ir de 0 até o tamanho máximo do vetor acrescentando 1 a cada vez que passar por aqui
    for (let i = 0; i < arr.length; i++) {
        //for interno para ir de 0 até o último elemento não ordenado
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Verifica se o valor de 'nome' no índice atual (j) é maior que o próximo (j + 1)
            if (arr[j].nome > arr[j + 1].nome) {
                // Se for maior, troca os elementos de posição
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    //retorna o vetor
    return arr;
}