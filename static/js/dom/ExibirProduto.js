//função para exibirProdutos na interface
export function exibirProdutos(produtos) {
    //pega elemento com o ID 'productList' onde os produtos serão exibidos
    const productList = document.getElementById('productList');

    // Verifica se o vetor de produtos está vazio
    // Caso não haja produtos, exibe uma mensagem centralizada informando o usuário
    if (produtos.length === 0) {
        productList.innerHTML = `<h3 class="text-center text-muted">Nenhum produto encontrado.</h3>`;
        return;
    }

    // Limpa o conteúdo atual do 'productList' para garantir que a lista será atualizada
    productList.innerHTML = '';
    
    // Cria um container 'div' que agrupará todos os cards de produtos
    const productContainer = document.createElement('div');

    // Define classes para estilizar a disposição dos produtos em várias colunas e alinhá-los ao centro
    productContainer.className = "row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center";

    // Para cada produto no vetor 'produtos', cria um card HTML/CSS/BOOTSTRAP com as informações do produto
    produtos.forEach(produto => {
        // Template
        const productCard = `
        <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="${produto.imagem}" alt="${produto.nome}">
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bolder">${produto.nome}</h5>
                    <p>R$${produto.preco.toFixed(2)}</p>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark" href="prod?id=${produto.id}">Ver mais</a></div>
                </div>
            </div>  
        </div>
        `;
        // Adiciona o card do produto dentro do 'productContainer'
        productContainer.insertAdjacentHTML('beforeend', productCard);
    });
    // Após gerar todos os cards, adiciona o container de produtos dentro do elemento 'productList' na página
    productList.appendChild(productContainer);
}