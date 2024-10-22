function mergeSort(array_desordenado){
    if(array_desordenado.length <= 1){
    }
    const meio = Math.floor(array_desordenado.length/2)
    const esquerda = array_desordenado.slice(0,meio)
    const direita = array_desordenado.slice(meio)
    mergeSort(esquerda)
    mergeSort(direita)
    return mesclar(esquerda, direita)
}
const mesclar = (esquerda, direita) => {
    const resultado = []
    let i = 0
    let j = 0
    while(i < esquerda.length && j < direita.length){
        if(esquerda[i] < direita[j]){
            resultado.push(esquerda[i])
            i++
        }else{
            resultado.push(direita[j])
            j++
        }
    }
    while(i<esquerda.length){
        resultado.push(esquerda[i])
        i++
    }
    while(i<direita.length){
        resultado.push(direita[j])
        j++
    }
    return resultado
}


array_desordenado = [38,27,43,3,9,82,10]

mergeSort(array_desordenado)