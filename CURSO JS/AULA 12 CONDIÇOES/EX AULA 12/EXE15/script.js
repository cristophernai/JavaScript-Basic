function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <12){
                img.setAttribute('src','criancah.jpeg')
            }else if(idade <=40){
                img.setAttribute('src','jovemh.jpeg' )
            }else if(idade <60){
                img.setAttribute('src','homem44.jpeg')
            }else{
                img.setAttribute(`src`,`idoso.jpeg`)
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <=11){
                img.setAttribute('src','criacam.jpeg')
            }else if(idade <=40){
                img.setAttribute('src','jovemm.jpeg')
            }else if (idade < 60){
                img.setAttribute('src','mulher44.jpeg')
            }else{
                img.setAttribute(`src`,`idosa.jpg`)
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}