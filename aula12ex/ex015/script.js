function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}