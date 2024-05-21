//vat texto ="T O T V S"
//            0 1 2 3 4 = INDICE    

//array unidimensional
var numeros = [-2, 40, 16, 111, 33, 64]

console.log(numeros)
console.log(numeros[3])

var aula = ["Luciana", "Leandro", "Vinicius", "Gabriel", "Ana Carolina", "Cristiane", "Raquel", "Robson"]

console.log(aula)
console.log(aula[3])
console.log(aula[7]) 
console.clear()

//array bidimensional adiciona 2 conchetes [ [ ] ] e conta apenas as linhas
var bidi = [
    ['banana', 'maçã', 'pêra'],  // linha 0
    ['laranja', true, 1],  //linha 1
    // 0, 1, 2, 3
    ['null', 'uva', -350, 4566]  // linha 2
]

console.log(bidi)
console.log(bidi[0] [2])
console.clear()

//(0.0) primeiro linha e depois a coluna array
// para acessar info utilizando array bidi passamos nos colchetes o indici da linha e depois coluna

//Array bidi >> Exercício na sala

var mercado = [
    ['Pipoca', 'arroz', 'feijão', 'batata'],
    ['molho de tomate', 'alface', 'leite em pó', 'detergente'],
    ['leite de coco', 'candida', 'maçã', 'vinagre'],
    ['bolacha', 'azeite', 'limão', 'shampoo']
]

console.log(mercado[0][2]),
console.log(mercado [1] [3]),
console.log(mercado[2] [2]),
console.log(mercado[3] [3])

console.log(`${mercado[0] [2]} \n ${mercado[1] [3]} \n ${mercado [2] [2]} \n ${mercado [3] [3]}`) // igual o de cima
console.clear()

let moeda = ["Real", "Euro", "Coroa", "Dolar"]
console.log(moeda)
moeda[3] = "yen"
console.log(moeda)

console.clear()

let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
var mudança = numArray.toString(); // converte um array em uma string >> texto
console.log(mudança)

console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]

console.log(teste1)
var mudança2 = teste1.join("* *") // join - altera o tipo de separador e no exemplo seria a virgula (5 ** 10 ....)!
var mudança3 = teste1.toString()  // texto padrão
console.log("com o join")
console.log(mudança2)
console.log("com a toString")
console.log(mudança3)

console.clear()

let array1 = [0, 2, 3, 5, 7]
console.log(array1.length)

console.clear()

//pop remove só o ultimo elemento:

let ultilizaPop = ["Pollyana", "André", "Felippe", "Lucas Natan", "Esther", "Lude Mila"]
console.log(ultilizaPop)
var mudança4 = ultilizaPop.pop()  // remove
console.log(mudança4)
console.log(ultilizaPop)

var mudança5 = ultilizaPop.push("Saraiva") // push insere uma nova informação
console.log(mudança5)
console.log(ultilizaPop)
console.clear()

// shift - remove no inicio 
var nomesCarros = ["Audi", "Celta", "Uno com escada", "HB20"]

var mudança6 = nomesCarros.shift()
console.log(mudança6)
console.log(nomesCarros)

console.clear()

//unshift insere informação no inicio

var insereNoInicio = [true, 34, "mano", "Socorro", "JS'"]
delete insereNoInicio [2]   // delete retira informação do meio
console.log(insereNoInicio)

// console.log(insereNoInicio)
// var mudança7 = insereNoInicio.unshift("Nice")
// console.log(mudança7)
// console.log(insereNoInicio)
