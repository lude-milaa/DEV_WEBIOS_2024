//If 
var TodosDeCracha = false 
// true == true >> true
// true == false >> false
// if >> SE // else >> senao


if(TodosDeCracha == true){
    console.log("Todos recebem nota 10 em JS")}else{
        console.log("Todos recebem nota 0 em JS")
    }

console.clear() // para apagar

//exercicio em sala
var numero1 = 4 
var numero2 = 2

numero1 > numero2 ? console.log("numero1 é maior") : console.log("numero2 é menor")  //abreviação - operador ternário

// if(numero1 > numero2){ //true
//     console.log("variavel numero1 é maior que o numero2")}
//     else{ //false
//         console.log("numero1 é menor que o numero2")
//     }
console.clear()

// se for Janeiro = Verão / Junho = Outono / Inverno

// Gerente / Estagio / CEO
// Você é o gerente >> No perfil de gerente aparece todas as informações sobre os estágiarios

// Nome e senha 

// let mes = "JANEIRO"

// if(mes == "JANEIRO"){
//     console.log("É verão")
// }else if(mes == "JUNHO"){      // consegue fazer varias alterações (else if - se não se)
//     console.log("É outono")
// }else if(mes == "OUTUBRO"){
//     console.log("É primavera")
// }else{
//     console.log("É inverno")
// }

console.clear()

let mes = "janeiro"

switch(mes){
    case "janeiro" :
        console.log("é verão")
        break // ponto de parada
    
    case "junho" :
        console.log("é outono")
    break

    case "outubro" : 
    console.log ("é primavera")
    break
    default: // else 
    console.log("é inverno")
    break
    
}


