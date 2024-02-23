let valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

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

    // calcular valor total do carrinho
    valorTotal = valorTotal + preco;
    let valorFinal = document.getElementById('valor-total');
    valorFinal.innerHTML = `R$${valorTotal}`;

    // zerar valor QUANTIDADE após adicionar o produto no carrinho
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}