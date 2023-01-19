function calcPasso(){
     var inicio = Number(document.getElementById('idinicio').value)
     var fim = Number(document.getElementById('idfim').value)
     var passo = Number(document.getElementById('idpasso').value)
     document.getElementById("contagem").innerHTML = ' '
     if (inicio < fim && passo <= fim && passo > 0  && fim >= inicio + passo){

          for (inicio;inicio <= fim;inicio += passo){
               document.getElementById("contagem").innerHTML += `${inicio} &#x1F449 `
          }
          document.getElementById("contagem").innerHTML += ` FIM `    
          
     } else if (inicio > fim && passo <= inicio && passo > 0 && inicio - fim >= passo ){

          for (inicio;inicio >= fim;inicio -= passo){
               document.getElementById("contagem").innerHTML += `${inicio} &#x1F449 `  
          } 
          document.getElementById("contagem").innerHTML += ` FIM `

     } else {
          alert ('Por favor, insira valores válidos')
     }
}

 


