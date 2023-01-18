gerador(){
    var numero = Number(document.getElementById('idnumero').value)
    var tabu = document.getElementById('tabuada')
    var contador = 0
    while (contador < 10){  
        tabu.innerHTML += `<p>${numero} x ${contador} = ${numero*contador}</p>`
        contador+=
    }
}
