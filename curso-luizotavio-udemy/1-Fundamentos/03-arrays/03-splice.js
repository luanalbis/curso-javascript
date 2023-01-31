// splice

let nomes = ['Luan', 'Amanda', 'Paulos', 'joão']


console.log(nomes.splice(2,1)) // retorna os itens removidos a partir do incice 2, remove 1 item
console.log(nomes )// retorna o array com os itens removidos

nomes = ['Luan', 'Amanda', 'Paulos', 'joão'] 
console.log(nomes.slice(3,0,'Luiz')) // não irá remover nenhum elemento, mas irá adicionar Luiz ao indice 3, podemos colocar quantos nomes quisermos

console.log(nomes.splice(-2,2)) // remove a partir do penultimo, 2 itens 

