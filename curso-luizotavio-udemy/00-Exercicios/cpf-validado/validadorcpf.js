// VARIÁVEIS 


function validadorDeCPF(){
    let cpf = document.getElementById("idcpf").value
    let cpfLimpo = cpf.replace(/\D+/g,'')
    let primeiroDigito = 0, segundoDigito = 0,contador = 0

    const arrayCpf = Array.from(cpfLimpo)
    const arrayParaValidar = []
    
    if (arrayCpf.length == 11) {
    // For para atribuir um valorao primeiro digito
        for (let c = 10; c >= 2 ; c--){
            if (arrayCpf.length == 11) {
                primeiroDigito += (Number(arrayCpf[contador]) * c) 
                arrayParaValidar.push(arrayCpf[contador])
                contador++
            }
        }
    }
    
    primeiroDigito = 11 -(primeiroDigito % 11) // calculo para pegar o primeiro digito
    if (primeiroDigito > 9) primeiroDigito = 0 // se primeiro digito for maior que 10, será 0
    arrayParaValidar.push(primeiroDigito.toString()) // adcionando 

    //For para atribuir um valor para o segundo dígito, parecido com o primeiro
    contador = 0
    for (c = 11; c >= 2; c--){
        if (arrayCpf.length == 11){
            segundoDigito += (Number(arrayCpf[contador]) * c)
            contador ++
        }
    }

    segundoDigito = 11 - (segundoDigito % 11)
    if (segundoDigito > 9) segundoDigito = 0 // se primeiro digito for maior que 10, será 0
    arrayParaValidar.push(segundoDigito.toString()) // adcionando 

    // for para verificar se os cpfs serão validados
    contador = 0
    for(numero in arrayCpf){
        if(arrayCpf[numero] !== arrayParaValidar[numero]){
            contador=1
        }
    }

    if (contador > 0 && cpfLimpo.length == 11) document.getElementById('resultado').innerHTML = 'CPF inválido'
    else if (contador == 0 && cpfLimpo.length == 11) document.getElementById('resultado').innerHTML = 'CPF válido' 
    else document.getElementById('resultado').innerHTML = 'CPF inválido' 
}