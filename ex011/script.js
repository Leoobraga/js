function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados novamente')
    } else{
        var fsex =  document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '250')
        img.setAttribute('height', '250')
        if (fsex[0].checked){
            genero ='Homem' 
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/meninobebe.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src' , 'imagem/menino-adolescente.jpg')
            } else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/homem-idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'imagem/meninabebe.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src' , 'imagem/menina-adolescente.jpg')
            } else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src' , 'imagem/mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} idade`
        res.appendChild(img)
    }

}