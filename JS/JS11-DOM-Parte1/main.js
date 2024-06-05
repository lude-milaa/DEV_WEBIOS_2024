// Dom - para ser acessado escreva "document"
// Link com o arquivo HTML
// Acessar o DOM
document.title = "Times"
// document.body.style.backgroundColor = "green"   - serve para mudar a cor de fundo estilo css


var time = prompt("Qual o nome do time?")

if (time == "Sao Paulo"){
    alert("O time é Sao Paulo")
    document.body.style.backgroundColor = "red"
    // createElement > serve para criar uma tag no html
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Sao Paulo - Rogério Ceni"
    document.body.appendChild(nomeTime)
    // innerHTML > Inserir uma informação no html 

}else if (time == "Corinthians"){
    alert("O time é Corinthians")
    document.body.style.backgroundColor = "black"
    let nomeTime = document.createElement('h2')
    nomeTime.innerHTML = "Corinthians - Cássio"
    document.body.appendChild(nomeTime)
    nomeTime.style.color = "White"

}else if (time == "Palmeiras"){

    alert("O time é Palmeiras")
    document.body.style.backgroundColor = "green"

}else{
    alert("Não sei qual é esse time?")
}
// window.prompt("Deseja realmente sair desse jogo?")   // "alert" serve para um pop-it e o "confirm" para escolher se confirma ou não
// o prompt insere uma caixa de texto 

// var teste = window.prompt("Deseja realmente sair desse jogo?") ;
// console.log(teste) serve para armazenar os dados

