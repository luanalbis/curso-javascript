

function calcIdade() {
    var ano = Number(new Date().getFullYear())
    var nascimento = Number(document.getElementById('idano').value)
    var idade = ano - nascimento

    if (nascimento > ano || nascimento < 1900) {
        window.alert('Por favor, insira um ano válido!')
    } else {
        if (idade < 15){
            faixa_etaria = 'Criança'
        } else if (idade < 20) {
            faixa_etaria = 'Adolescente'
        } else if (idade < 60) {
            faixa_etaria = 'Adulto'
        } else if (idade > 59){
            faixa_etaria = 'Idoso'
        } else {
            faixa_etaria = 'Não definida'
        }
    }

    if (idade != ano || nascimento < ano) {
        var sexo = document.querySelector('input[name="sexo"]:checked').value
        document.getElementById('texto').innerHTML = `<p> Sua idade é ${idade} anos e sua faixa etária é ${faixa_etaria}, sexo ${sexo}`
    }

    if (idade < 15 && sexo == "masculino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/homem-criança2.jpg">'  
    } else if(idade < 20 && sexo == "masculino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/homem-adolescente2.jpg">'  
    } else if (idade < 60 && sexo == "masculino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/homem-adulto2.jpg">'
    } else if (idade > 59 && sexo == "masculino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/homem-idoso.jpg">'

    } else if (idade < 15 && sexo == "feminino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/mulher-criança2.jpg">'  
    } else if (idade < 20 && sexo == "feminino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/mulher-adolescente2.jpg">'
    } else if (idade < 60 && sexo == "feminino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/mulher-adulta2.jpg">'  
    } else if (idade > 59 && sexo == "feminino"){
        document.getElementById('imagem').innerHTML = '<img src="imagens/mulher-idosa2.jpg">'
    }

}