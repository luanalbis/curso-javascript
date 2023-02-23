function verificadorDePalindromo(texto){
    let tamanhoDaFrase  = texto.length, textoParaAnalisar = ''
   for (let c = tamanhoDaFrase-1; c >= 0; c-- ){
    textoParaAnalisar += texto[c]
   }
   console.log(textoParaAnalisar)
}

verificadorDePalindromo('')


