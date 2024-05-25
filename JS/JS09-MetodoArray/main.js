// metodo forEach
let frutas = ["Manga", "Uva", "Carambola", "Perâ", "Maçã", "Melancia"]

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, Indice){
console.log(`nomeFruta: {nomeFruta}`)
console.log(`Indice: ${Indice}`)
}

//resumo arrow function
frutas.forEach((teste) => console.log(teste)) // retornará apenas o nome e não o indice 


// arrow function
frutas.forEach(teste = (nomeFruta, Indice) =>{
    console.log(`nomeFruta: {nomeFruta}`)
console.log(`Indice: ${Indice}`)
})

console.clear()

let tarefa = [
    { //0
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
{ //1
    id: 2,
        isPronta: false,
        nomeTarefa: "Escrever"
},
{ //3
    id: 3,
    isPronta: true,
    nomeTarefa: "Ler"
}
]

console.log(tarefa)
console.log(tarefa[1])  // retorna objeto
console.log(tarefa[1].nomeTarefa)// retorna uma unica propriedade de um objeto

// arrow function
tarefa.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()

let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo" + numeros)
console.log("novoArray" + novoArray)

let mapText = tarefa.map((retornaText) => {
    console.log(retornaText.nomeTarefa)
})

console.clear()

let numeros2 = [3, 13, 24, 36, 47, 50, 2, 1, 60, 78, 89]

let resultado = numeros2.filter(retornaFiltro)

function retornaFiltro(num){
    return num > 30
}

console.log(resultado)

let tarefaFiltro = tarefa.map((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})

console.log(tarefaFiltro)

console.clear()

let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]

console.log(
    sapatos.find((retornaFind) => {
        return retornaFind.marca == "Puma"
    })
     
)








































































// for(var i = 0; 1 < frutas.length ; i++){
//     console.log(`Nome: ${frutas[i]}`)
//     console.log(`Indice: ${[i]}`)
// }