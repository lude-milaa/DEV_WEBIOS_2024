// exercicio 1
let numeros = [17, 43, 8, 4, 97, 56, 29]

function verificarParOuImpar(numeros) {
    numeros.forEach(number => {
        if (number % 2 === 0) {
            console.log(`${number} é par`);
        } else {
            console.log(`${number} é ímpar`);
        }
    });
}

verificarParOuImpar(numeros);

//exercicio 2

const numeros2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

const numeros3 = numeros2.filter(valor => valor > 20 && valor < 80);

console.log(numeros3);