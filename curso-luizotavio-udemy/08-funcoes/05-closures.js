// habilidade que a função possui de acessar seu campo léxico

function retornaFuncao(){
    const nome = 'Luan'
    return sobrenome => nome + sobrenome
}

const nomeCompleto = retornaFuncao()
console.log(nomeCompleto('Albis'))