//  Função (function)
function soma(num1, num2, num3) {  //paramentros 
    //          2,    3,    2

    var num1
    var num2
    var num3

    return num1 + num2 + num3
}

console.log(soma(2, 3, 2)) // com parentese - precisa passar um valor para a variavél 
// console.log(soma)  // sem parentese - retorna toda a função

console.clear()

function media (numero1, numero2, numero3, numero4) {
return (numero1 + numero2 + numero3 + numero4) / 4
}


console.log(media(7,8,9,5))

console.clear()

const media2 = (n1, n2, n3, n4) => {   // arrow function
return (n1, n2, n3, n4) / 4;
}

console.log(media2(5,5,5,5))

console.clear()

function onloadTela(){
    alert("sua tela está carregada bem-vindo")
    console.log("recarregou a tela")
}

console.clear()

const clique = () => {
    alert("Bem-vindo você clicou em mim!!!")
    console.log("Você clicou em um botão")
}