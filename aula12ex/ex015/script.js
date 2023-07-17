function carregar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var sexo = document.getElementById('sexo')
    if (fano.value.length > ano || fano.value == 0) {
        window.alert('ERRO, Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'crianças.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'Hjovem.jpg')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'Hadulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'crianças.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'mulheradol.jpg')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulheradul.jpg')

            } else {
                // idoso
                img.setAttribute('src', 'velha.jpg')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}