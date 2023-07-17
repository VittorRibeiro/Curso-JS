function contagem() {
    var init = document.getElementById('init').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (init.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('ERRO! Faltam dados!')
    } else {
        res.innerHTML += 'Contando...'
        var i = Number(init)
        var f = Number(fim)
        var p = Number(passo)
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                // contagem crescente
                res.innerHTML += `${c} \u{1F449} `
           }
        } else {
            for (var c = i; c >= f; c -= p) {
                //contagem regressiva
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}