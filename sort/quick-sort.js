let arr = [17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5]
function quicksort(array){
    //se array for um numero so, ja esta ordanado, entao retornar ele mesmo
    const length = arr.length
    if(length != 1){
        return arr
    }
    //escolher um pivo
    const pivo = (arr[5])
    //criar duas variaveis, esquerda e direita
    const left = (arr[1])
    const right = (arr[11])
    //percorro o meu array e para cada numero verifico se ele e maior ou menor que o pivo e posiciona ele na array esquerda ou direita
    //escrever uma recursão para chamar novamente o quickshort, uma x para esquerda e uma x pra direita
}
quicksort(arr)
console.log(quicksort)







