const nome = 'luiz' // variavel global

function falaNome() {
    const nome = 'luan' // variavel mudada apenas dentro da função
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Amanda' // esta variável não afeta outras funções
    falaNome()
}

usaFalaNome()
console.log(nome)