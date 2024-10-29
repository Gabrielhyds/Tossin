// app.js

class Produto {
    constructor(nome, preco, descricao, imagem) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.imagem = imagem;
    }
}

const produtos = [
    new Produto('Zorba', 35.00, 'Cueca Tamanho G', 'static/img/c1.jpg')
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
    const nomeBusca = document.getElementById('searchInput').value || "";
    bubbleSortProdutos(produtos);

    const resultados = produtos.filter(produto => produto.nome.toLowerCase().includes(nomeBusca.toLowerCase()));
    exibirProdutos(resultados);
}



function exibirProdutos(produtos) {
    const productList = document.getElementById('productList');
    if (!productList) {
        console.error('Elemento "productList" não encontrado');
        return;
    }
    productList.innerHTML = '';

    if (produtos.length === 0) {
        productList.innerHTML = `<h3 class="text-center text-muted">Nenhum produto encontrado.</h3>`;
        return;
    }

    const productContainer = document.createElement('div');
    productContainer.className = "row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center";

    produtos.forEach(produto => {
        const productCard = `
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="${produto.imagem}" alt="${produto.nome}">
                    <div class="card-body p-4 text-center">
                        <h5 class="fw-bolder">${produto.nome}</h5>
                        <p>R$${produto.preco.toFixed(2)}</p>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ver mais</a></div>
                    </div>
                </div>
            </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', productCard);
    });

    productList.appendChild(productContainer);
}

// Carregar todos os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    exibirProdutos(produtos);
});
