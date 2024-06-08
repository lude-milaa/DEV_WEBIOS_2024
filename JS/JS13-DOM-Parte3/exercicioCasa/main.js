function calcularNovoSalario() {
    // Obtém o valor do salário atual do input
    var salarioAtual = parseFloat(document.getElementById("salarioAtual").value);

    // Verifica se o valor inserido é válido (não é NaN)
    if (!isNaN(salarioAtual)) {
        // Calcula o aumento de 17%
        var aumento = salarioAtual * 0.17;
        // Calcula o novo salário 
        var novoSalario = salarioAtual + aumento;
        //reajuste anual de 215 reais
        novoSalario += 215;

        // Exibe o novo salário
        document.getElementById("resultado").textContent = "Novo Salário: R$ " + novoSalario.toFixed(2);
    } else {
        // Se o valor inserido não for válido, exibe uma mensagem de erro
        document.getElementById("resultado").textContent = "Por favor, insira um valor válido para o salário.";
    }
}
