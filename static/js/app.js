//classe produto:
class Produto {
    //construtor
    constructor(id,codigoBarras,nome, preco, descricaoCurta,descricaoLonga, imagem) {
        this.id = id;
        this.codigoBarras = codigoBarras;
        this.nome = nome;
        this.preco = preco;
        this.descricaoCurta = descricaoCurta;
        this.descricaoLonga = descricaoLonga;
        this.imagem = imagem;
    }
}

//vetor produtos, do tipo objeto
const produtos = [
    new Produto('1','7896924303364','Zorba', 35.00, 'Cueca Tamanho G','Conforto e estilo se encontram na Cueca Zorba, uma peça essencial para o guarda-roupa masculino. Feita com um tecido de alta qualidade, ela proporciona uma sensação suave contra a pele, garantindo conforto durante todo o dia. Seu design moderno e corte perfeito oferecem um ajuste ideal, valorizando a silhueta sem abrir mão da liberdade de movimentos.', 'static/img/c1.jpg'),
    new Produto('2','7899303536759','zimba', 35.00, 'Cueca Tamanho G','A Cueca ComfortFit é a escolha ideal para quem valoriza conforto sem abrir mão do estilo. Feita com um tecido de algodão premium, ela proporciona uma sensação suave contra a pele, tornando-a perfeita para o uso diário. O design anatômico se adapta perfeitamente ao corpo, garantindo que você se sinta seguro e confortável em qualquer situação.','static/img/c5.jpg')
];

//função para ordenar os produtos usamos o 
// algoritmo de ordenação bubbleSort
function bubbleSortProdutos(arr) {
    //for externo para ir de 0 até o tamanho máximo do vetor acrescentando 1 a cada vez que passar por aqui
    for (let i = 0; i < arr.length; i++) {
        //for interno para ir de 0 até o último elemento não ordenado
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Verifica se o valor de 'nome' no índice atual (j) é maior que o próximo (j + 1)
            if (arr[j].nome > arr[j + 1].nome) {
                // Se for maior, troca os elementos de posição
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    //retorna o vetor
    return arr;
}

// Função para buscar o produto com o que o usuário digitar
function buscarProduto() {
    // Armazena o valor que o usuário digitou em uma constante 
    const nomeBusca = document.getElementById('searchInput').value;

    //chama a função bubbleSort para ordenar os produtos em ordem alfabetica
    bubbleSortProdutos(produtos);

    //filtro: ignora diferenças entre maiúsculas e minúsculas
    const resultados = produtos.filter(produto => produto.nome.toLowerCase().includes(nomeBusca.toLowerCase()));
    
    // Exibe os produtos filtrados na interface
    exibirProdutos(resultados);
}


//função para exibirProdutos na interface
function exibirProdutos(produtos) {
    //pega elemento com o ID 'productList' onde os produtos serão exibidos
    const productList = document.getElementById('productList');

    // Verifica se o vetor de produtos está vazio
    // Caso não haja produtos, exibe uma mensagem centralizada informando o usuário
    if (produtos.length === 0) {
        productList.innerHTML = `<h3 class="text-center text-muted">Nenhum produto encontrado.</h3>`;
        return;
    }
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


// Carregar todos os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    exibirProdutos(produtos);
});
