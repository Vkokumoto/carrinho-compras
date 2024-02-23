function adicionar() {
    // recuperar valores: produto, valor e quantidade
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitario = produtoSelecionado.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
        
    // calcular o valor do subtotal
    let preco = quantidadeProduto * valorUnitario;

    // adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
}