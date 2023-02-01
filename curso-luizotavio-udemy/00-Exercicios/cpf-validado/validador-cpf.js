let cpf = '611.454.863-98'
let cpfLimpo = cpf.replace(/\D+/g,'')

console.log(cpfLimpo)
let arrayCpf = Array.from(cpfLimpo)

console.log(arrayCpf)