function tabuada() {
    var n = document.getElementById('txtn')
    var res = document.getElementById('contagem')

    if(n.value.length == 0) {
        window.alert('Por favor digite um Número!')
    } else {
        var num = Number(n.value)
        var tabuada = ''
       
        for(var c = 1; c <= 10; c++) {
            var mult = c * num
            tabuada += `${num} x ${c} = ${mult}\n`
        }
    res.value = tabuada
    } 
}    