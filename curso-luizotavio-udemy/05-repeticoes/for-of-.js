const nome = 'Luan da silva albis'
const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'


console.log(caracteres)

for (let c = 0; c < nome.length; c++) {
    if (caracteres.indexOf(nome[c]) < 0){
        console.log(nome.replace(nome[c],''))
        
        
        
    }
}

console.log(nome)
