//.map() percorre todo o array , precisamos colocar uma função arrow dentro, metodo otimizado

const cursos= ['luan', 'amanda', 'caio', ]
cursos.map((elemento,indice)=>{ //precisamos de 2 parametros, elemento e indice entre parenteses

    console.log(elemento, indice)// vai mostrar cada elemento e cada indice

}) // aqui está o fechamento da função  MAP((e,i) => {console.log(e,i)})

// podemos retornar os elementos dentro de uma variável

nomes = cursos.map((e,i) => {
    return e // os nomes serão armazenados na variável
})

console.log(nomes)

