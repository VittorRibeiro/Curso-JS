let amigo = {nome: 'José', 
peso: 85, 
altura: 1.80, 
imc(p= this.peso, a= this.altura){
    console.log(`O IMC de ${this.nome} é ${(p / a ** 2).toFixed(2)}`)
    }//Chave final da função
} //Chave final do objeto

console.log(amigo)
amigo.imc()

let num = 8
num **= 2
console.log(num)