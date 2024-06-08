
// imagem
function mostrarImagem(img) {
    var imagem = document.createElement("img");
    imagem.src = 'https://bancodeseries.tv.br/images/posters/13970.jpg'

    // imagem ao lado do botão
    var botao = document.getElementById("B_01");
    botao.parentNode.insertBefore(imagem, botao.nextSibling);

    // Muda a cor 
    document.body.style.backgroundColor = "#000fff";
}

// Função para solicitar o nome do usuário e exibir uma mensagem de boas-vindas
function solicitarNome(nome) {
    // Solicita o nome do usuário através de um prompt
    var nome = prompt("Por favor, digite seu nome:");

    // Verifica se o usuário digitou um nome e não cancelou o prompt
    if (nome !== null && nome !== "") {
        // Cria um elemento de parágrafo para exibir a mensagem de boas-vindas
        var mensagem = document.createElement("p");
        // Define o texto da mensagem
        mensagem.textContent = "Olá " + nome + ", bem-vindo à nossa academia.";

        // Insere a mensagem abaixo do botão
        var botao = document.getElementById("B_02");
        botao.parentNode.insertBefore(mensagem, botao.nextSibling);
    }
}

// Função para exibir a tabuada do número informado pelo usuário
function exibirTabuada() {
    // Solicita um número ao usuário através de um prompt
    var numero = prompt("Digite um número para ver sua tabuada:");
    // Converte o número digitado para inteiro
    numero = parseInt(numero);

    // Verifica se o usuário digitou um número válido e não cancelou o prompt
    if (!isNaN(numero)) {
        var listaTabuada = document.createElement("ul");
        // calcular e adicionar os itens da tabuada à lista
        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            var itemTabuada = document.createElement("li");
            itemTabuada.textContent = numero + " x " + i + " = " + resultado;
            listaTabuada.appendChild(itemTabuada);
        }

        // Insere a lista da tabuada abaixo do botão
        var botao = document.getElementById("B_03");
        botao.parentNode.insertBefore(listaTabuada, botao.nextSibling);
    }
}
//eventos aos botões
document.getElementById("B_01").addEventListener("click", mostrarImagem);
document.getElementById("B_02").addEventListener("click", solicitarNome);
document.getElementById("B_03").addEventListener("click", exibirTabuada);
