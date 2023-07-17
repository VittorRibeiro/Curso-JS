function tabuada() {
    var n = document.getElementById('txtn').value
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    tab.innerHTML = ''
    if (n == 0) {
        window.alert('Digite um número!')
    } else {
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}