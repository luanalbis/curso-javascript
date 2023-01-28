//funções que chamam ela mesma

function recursiva (max) { // definimos o parametro max
    if (max >= 10) return  // se o max for 10, irá parar
    max += 2               // incremento
    console.log(max)
    recursiva(max)         // a função se chama novamente, mas agora com o valor de max atualizado
}

recursiva(0)