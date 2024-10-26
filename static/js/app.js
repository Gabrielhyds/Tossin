class Produto {
    constructor(nome, preco, descricao, imagem) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.imagem = imagem;  // Atributo para a imagem
    }
}

const produtos = [
    new Produto('Caneta', 1.50, 'Caneta azul', 'static/img/caneta.jpg'),
    new Produto('Lápis', 0.75, 'Lápis preto HB', 'https://example.com/lapis.jpg'),
    new Produto('Caderno', 10.00, 'Caderno de 200 páginas', 'https://example.com/caderno.jpg'),
    new Produto('Borracha', 0.50, 'Borracha branca', 'https://example.com/borracha.jpg'),
    new Produto('Apontador', 1.20, 'Apontador metálico', 'https://example.com/apontador.jpg')
];

function bubbleSortProdutos(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].nome > arr[j + 1].nome) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function buscarProduto() {
    const nomeBusca = document.getElementById('searchInput').value;
    bubbleSortProdutos(produtos);

    const resultados = produtos.filter(produto => produto.nome.toLowerCase().includes(nomeBusca.toLowerCase()));
    exibirProdutos(resultados);
}

function exibirProdutos(produtos) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    produtos.forEach(produto => {
        const productCard = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">Descrição: ${produto.descricao}</p>
                        <p class="card-text">Preço: R$${produto.preco.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
        productList.insertAdjacentHTML('beforeend', productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => exibirProdutos(produtos));
