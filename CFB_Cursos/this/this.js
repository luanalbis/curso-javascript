//this

function aluno(nome,nota){
    this.nome=nome // usamos o this para usar o mesmo nome no parâmetro e na variável
    this.nota=nota

    console.log(nome)
    console.log(nota)

    this.dados_anonimo = () => {
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.data)
        })
        
    }
}


console.log(aluno('luan',10))