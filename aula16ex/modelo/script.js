let lst = document.getElementById('ns')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inLista(n, l) {
    if (l.includes(Number(n))) {
        return true
    } else {
        return false
    }
}


function add() {
    let num = document.getElementById('txtn').value
    if (isNumero(num) && !inLista(num, valores)) {
        let opt = document.createElement('option')
        opt.text = `Número digitado: ${num}`
        lst.appendChild(opt)
        valores.push(Number(num))
        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já encontrado na lista!')
    }
    document.getElementById('txtn').value = ''
    num.focus()
}


function avaliação() {
    if (valores.length < 1) {
        window.alert('Nenhum número cadastrado!')
    } else {
    res.innerHTML = `Ao todo foram ${valores.length} números cadastrados<br>
    O maior valor foi ${Math.max(...valores)}<br>
    O menor valor foi ${Math.min(...valores)}<br>
    A média dos valores é ${valores.reduce((total, num) => total + num) / valores.length}<br>
    E a soma dos valores é ${valores.reduce((total, num) => total + num)}`
    }
} 