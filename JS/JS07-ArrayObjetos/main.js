//Objetos
let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "preto",
    nome: "Caio",
    sobrenome: "Maciel",
    hobbie: ["futebol", "LOL", "Tocar guitarra"],
    // criar outro objeto
    endereço: {
        rua: "Jao medeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "SP"
    }
}

console.log(pessoa)
console.log(pessoa.nome) // retornar apenas uma propriedade
console.log(pessoa.hobbie) // retorna todos os hobbies
console.log(pessoa.hobbie[1])// retornar apenas um hobbie em específico - um objeto
console.log(pessoa.endereço) // retorna todo o endereço 
console.log(pessoa.endereço.estado)//retornar apenas uma informação dentro do endereço

console.clear()

let tarefa = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
{
    id: 2,
        isPronta: false,
        nomeTarefa: "Escrever"
},
{
    id: 3,
    isPronta: true,
    nomeTarefa: "Ler"
}
]

console.log(tarefa)
console.log(tarefa[1])  // retorna objeto
console.log(tarefa[1].nomeTarefa)// retorna uma unica propriedade de um objeto

console.clear()

let recebeJAISON = JSON.stringify(pessoa);  //JSON é um objeto e dentro tem métodos e eles transforma pelo formato JSON

console.log(pessoa)
console.log(recebeJAISON)

console.clear()

var JSONITO = '{"corDosOlhos":"verde","altura":1.7,"corCabelo":"preto","nome":"Caio","sobrenome":"Maciel","hobbie":["futebol","LOL","Tocar guitarra"],"endereço":{"rua":"Jao medeiro","numero":234,"cidade":"São Paulo","estado":"SP"}}'

console.log(JSONITO)
console.log(JSON.parse(JSONITO))  // parse >> pega as informações e transforma em objeto