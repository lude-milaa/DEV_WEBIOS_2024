// Class   - //construção das propriedades dos meus objetos "constructor" //  "objeto é a caracteristica"
// Objetos é composta por duas coisas:
//propriedades = caracteristicas e metodos = funcionalidades

class Carro{
    constructor(nome, ano){ // molde de um objeto
        this.nomeCarro = nome;
        // O que está antes do sinal de igual é uma propredade de como o this sabemos que 
        // pertencem a classe e o que está depois do sinal de igual sabemos que é um parametro
        this.ano = ano;
        // propriedades
        // isso
        // variavel nome/propriedades sempre pertencem a isso; isso o que? Pertencem a classe que você acabou de criar



        // this.arreya = [
        //     this.novo1 = {
        //         nome: "fixo",
        //         ano: "teste",
        //         idade: "vai",

        //     }
        // ]

// funcionalidades para saber quantos anos o carro; ano atual - ano da criação
    }
    anoCarro(anoAtual) {
        return anoAtual - this.ano;
        // anoAtual = 2024
        // this.ano = 2012
    }
}

// new =novo
// cria uma nova copia da classe = instancie

let carro1 = new Carro ("KWID", 2012)
let carro2 = new Carro("MOBI", 2015)
let carro3 = new Carro ("HB20", 2020)
console.log(Carro)
console.log(carro1)
console.log(carro2)
console.clear()

let anoAtual = new Date ()
let recebeAno = anoAtual.getFullYear()
console.log(carro1)
console.log(anoAtual)
console.log(recebeAno)
console.log(carro1.anoCarro(recebeAno))

// significado do this = é um rotulo 