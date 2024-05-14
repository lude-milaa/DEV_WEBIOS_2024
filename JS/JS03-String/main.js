// concatenar Strings
var string = "Os alunos estão"
var string2 = "Reprovados"
var string3 = "ou aprovados?"
var OlhaAi = "ou reprovados"
var num1 = 2
var num2 = 4


// + >> soma ou concatenação
console.log(string + string2 + string3)

//template strings
console.log(`${string, string2, string3 + (num1 + num2) + OlhaAi}`)
//concatenar string e faz ao mesmo tempo contas matematicas
console.clear()


// I O S - T O T V S
// 0 1 2 4 6 7 8 9 10  
var texto = "IOS fez uma excursão na TOTVS com três cabritinhos (alunos)"
console.log(texto.charAt(27)) //igual o de baixo
console.log(texto[27])  // modo diferente mas é igual

console.clear()

// tamanho string
var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`na variavel texto3 tem ${texto3.length} caracteres`)
// outro exemplo console.log(`na variavel texto3 tem + texto3.length + caracteres`)

var nome = "João"
console.log(nome.length)

console.clear()


var texto4 = "aqui está em minusculo"
var texto5 = "AQUI ESTÁ EM MAIUSCULO"
// UP - CRESCER
// LOW - DIMINUIR 


console.log(`Minusculo: ${texto5.toLowerCase()}`)
console.log(`Maiusculo: ${texto4.toUpperCase()}`)

var nomeUsuarioFACEBOOK = "PKNinaDaZL"
console.log(nomeUsuarioFACEBOOK.toUpperCase())

console.clear()

var str = "Mozilla"
// M O Z I L L A
// 0 1 2 3 4 5 6 

console.log(str)
console.log(str.substring(1, 3 )) // 3 seria para parar e voltar uma casa 
console.log(str.substring(3))
console.clear()

var texto6 = "Olha a pipoca"
console.log(texto6)
console.log(texto6.replace('pipoca', 'carreta furacão')) // substir um texto pelo outro 

console.clear()

var texto7= "        olha a carreta         "
console.log(texto7)
console.log(texto7.trim())   // "trim" retira espaços apenas no inicio e no fim 