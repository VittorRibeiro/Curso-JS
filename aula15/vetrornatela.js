var num = [2,6,4,8,9,7,1,2,5,2]

//for (let pos = 0; pos < num.length; pos++) {
//    console.log(`Elemento ${pos + 1}: ${num[pos]}`)
//}

for (let pos in num) {
    console.log(`Elemento ${Number(pos) + 1}: ${num[pos]}`)
}