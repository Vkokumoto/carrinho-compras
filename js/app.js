function adicionar() {
    // recuperar valores: produto, valor e quantidade
    let produtoSelecionado = document.getElementById('produto');
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitario = produtoSelecionado.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
}