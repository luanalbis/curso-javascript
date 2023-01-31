// funções chamamas imediatamente, criadas para nossas váriaveis não tocare

// a função precisa ter esta sintaxe
(function(){
    let nome = 'paulo' // variavel da função IIFE, nod protejendo do escopo global
    console.log(nome)
})()

let nome = 'luan' // variavel do escopo global

console.log(nome)