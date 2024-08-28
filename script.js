// Variáveis para armazenar o total da compra e o número de itens
var totalCompra = 0;
var contadorItens = 1; // Contador de itens adicionados

// Função para adicionar um item
function adicionarItem() {
    // Solicita o preço do item ao usuário
    var preco = prompt("Digite o preço do item:");

    // Converte o valor para um número decimal
    preco = parseFloat(preco);

    // Verifica se o preço é um número válido
    if (isNaN(preco) || preco <= 0) {
        alert("Por favor, insira um preço válido."); // Mensagem de erro
    } else {
        // Adiciona o preço ao total
        totalCompra = totalCompra + preco;

        // Exibe o item na lista
        var listaItens = document.getElementById("listaItens");
        var novoItem = document.createElement("li");
        novoItem.textContent = "Item " + contadorItens + ": R$ " + preco.toFixed(2);
        listaItens.appendChild(novoItem);

        // Incrementa o contador de itens
        contadorItens++;
    }
}

// Função para calcular o desconto
function aplicarDesconto(total) {
    var desconto = 0; // Inicializa o desconto

    // Aplica um desconto de acordo com o total da compra
    if (total > 200) {
        desconto = 0.1; // 10% de desconto
    } else if (total > 100) {
        desconto = 0.5; // 5% de desconto
    }

    // Calcula o valor do desconto e o total com desconto
    var valorDesconto = total * desconto;
    var totalComDesconto = total - valorDesconto;

    return {
        valorDesconto: valorDesconto,
        totalComDesconto: totalComDesconto
    };
}

// Função para processar a compra
function processarCompra() {
    // Verifica se há itens na compra
    if (totalCompra > 0) {
        // Calcula o desconto e o total final
        var resultado = aplicarDesconto(totalCompra);

        // Exibe o resultado na página
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<p><strong>Resumo da Compra:</strong></p>" +
            "<p>Total Inicial: R$ " + totalCompra.toFixed(2) + "</p>" +
            "<p>Desconto Aplicado: R$ " + resultado.valorDesconto.toFixed(2) + "</p>" +
            "<p>Total Final com Desconto: R$ " + resultado.totalComDesconto.toFixed(2) + "</p>";
    } else {
        alert("Nenhum item adicionado! Por favor, adicione itens antes de calcular.");
    }
}
