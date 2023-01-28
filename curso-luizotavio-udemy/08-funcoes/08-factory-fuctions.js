// funções que retornam objetos

function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        fala: (assunto) => {return `${nome} ${assunto}`}
    }
}

let pessoa = criaPessoa('luan', 'amanda') // { nome:'luan, sobrenome:'albis', fala: function }
console.log(pessoa.fala('estuda bastante'))