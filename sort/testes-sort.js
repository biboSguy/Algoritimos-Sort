let arr = [17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5]
function quicksort(array){
    //se array for um numero so, ja esta ordanado, entao retornar ele mesmo
    if (array.length <= 1){
        return array
    }
    //escolher um pivo
    let pivo = array[0]
    //criar duas variaveis, esquerda e direita
    let left = []
    let right = []
    //percorro o meu array e para cada numero verifico se ele e maior ou menor que o pivo e posiciona ele na array esquerda ou direita
    for (let i=1; i <= array.length; i++){
        if(array[i] < pivo){
            esquerda.push(array[i])
        }else{
            direita.push(array[i])
        }
    }
    //escrever uma recursão para chamar novamente o quickshort, uma x para esquerda e uma x pra direita
}
quicksort(arr)
console.log(quicksort)







