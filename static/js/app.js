//classe produto:
class Produto {
    //construtor
    constructor(id, tipo,codigoBarras, nome, preco, descricaoCurta,descricaoLonga, imagem) {
        this.id = id;
        this.tipo = tipo;
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
    new Produto('1','cueca','7896924303364','ZIMBA', 35.00, 'Cueca Tamanho G','Conforto e estilo se encontram na Cueca Zorba, uma peça essencial para o guarda-roupa masculino. Feita com um tecido de alta qualidade, ela proporciona uma sensação suave contra a pele, garantindo conforto durante todo o dia. Seu design moderno e corte perfeito oferecem um ajuste ideal, valorizando a silhueta sem abrir mão da liberdade de movimentos.', 'static/img/cueca_02_branco.webp'),    //
    new Produto('2','meia','3784378583749','Meia Cano Curto Esportiva Puma', 40.00, 'Meia Tamanho G','68% Algodão 27% Poliamida 03% Elastano 02% Outras Fibras','static/img/meia_07_01.webp'), //
    new Produto('3','cueca','7899303536759','Aorba', 35.00, 'Cueca Tamanho G','A Cueca ComfortFit é a escolha ideal para quem valoriza conforto sem abrir mão do estilo. Feita com um tecido de algodão premium, ela proporciona uma sensação suave contra a pele, tornando-a perfeita para o uso diário. O design anatômico se adapta perfeitamente ao corpo, garantindo que você se sinta seguro e confortável em qualquer situação. Confeccionadas em Algodão e Poliester sem costuras marcantes. Garantem maior conforto e liberdade de movimento. Modelagem moderna e confortável.','static/img/c5.jpg'), //
    new Produto('4','cueca','7892314748797','Cueca Boxer Algodão Sem Costura Zorba', 35.00, 'Cueca Tamanho G','Possuem proteção contra bactérias e maus odores. Feitas com tecnologia MaxFresh, que regula a sensação térmica.','static/img/cueca_preta.png'), //
    new Produto('5','cueca','7898493877544','Cueca Lupo AM Boxer Urban', 35.00, 'Cueca Tamanho G','A opção ideal para os homens que valorizam estilo e bem-estar. A Cueca Boxer Adulto Sem Costura possui fios sintéticos fabricados com filamentos individuais extremamente finos, que garantem uma peça de secagem rápida, macia e durável. Além disso, a tecnologia sem costura evita atritos e incômodos durante o uso, permitindo ajuste perfeito ao corpo, segurança e liberdade de movimento, sempre com muito conforto, qualidade e durabilidade.','static/img/cueca_04_1.png'), //
    new Produto('6','cueca','7894336754612','Cueca Boxer sem Costura Puma',35.00,'Cueca Tamanho G','Sinta- se confortável em todos os momentos, com esse Kit de Cuecas Boxer sem Costura Puma. Confeccionado em materiais leves e resistentes, proporcionando leveza e maior liberdade dos movimentos. Já o cós em elástico possibilita um ajuste personalizado. Não perca a oportunidade e adquira já seu kit com toda qualidade que a Puma tem a oferecer. Compre já!','static/img/cueca_05_1.png'), //
    new Produto('7','cueca','7896431264837','Cueca Box Boxer Lupo Sem Costura Basic Microfibra', 35.00,'Cueca Tamanho G','Cueca boxer masculina Lupo. É composto por cuecas masculinas para adultos, modelo boxer confeccionado em microfibra da marca Lupo. Cueca boxer para homens que gostam de estilo. Com formato anatômico, muito mais conforto, malha com elasticidade para ajuste perfeito. Para garantir leveza e suavidade a cada movimento, invista no bem-estar que a cueca sem costura proporciona no dia a dia, escolha certa para acompanhar homens modernos e sofisticados.','static/img/cueca_06_01.webp'), //
    new Produto('8','meia', '3756343564354','Meia Curta Adulto Walk Lupo', 40.00,'Meia Tamanho G','Se você quer meias que sejam confortáveis, bonitas e duráveis, você vai adorar a Meia Curta Adulto Walk Lupo. Ela é ideal para o seu cotidiano, pois suas peças são feitas com um tecido macio e resistente, que se ajusta ao seu pé e não causa irritações na pele. As meias são curtas, ótimas para usar com calçados baixos ou esportivos. As cores são variadas e modernas, combinando com qualquer roupa. E o melhor de tudo: não tem costura, garantindo ainda mais conforto e bem-estar.','static/img/meia_05_02.png'), //
    new Produto('10','meia', '3792183356564','Meia Lupo AU Sport Lupo K3', 50.00, 'Meia Tamanho G', 'Qualidade e conforto todos os dias. Cada meia do kit com três unidades possui cano médio e calcanhar verdadeiro, proporcionando ajuste perfeito e conforto superior. Produzida com algodão penteado, tem toque macio, suave, leve e oferece excelente respirabilidade da pele. Polivalente, é perfeita para fazer atividade física e usar no trabalho', 'static/img/meia_03.webp'), //
    new Produto('9','meia', '3712872948598','Meia Olympikus Invisível', 40.00, 'Meia Tamanho G','A Meia Olympikus Invisível é a opção perfeita para seu conforto e praticidade no dia a dia. - Veste do tamanho 39 ao 43. Composição: 62% algodão, 36% poliéster, 2% elastano.', 'static/img/meia_04.png'), //
    new Produto('10','meia','3721839874672','Meia Adulto Média Esportiva Walk Lupo', 40.00, 'Meia Tamanho M','Se você está em busca de um item que te acompanhe em todos os momentos de prática de esportes, então precisa conhecer a nossa meia adulto média esportiva Walk Lupo. As nossas peças oferecem muito conforto e garante que os movimentos sejam feitos com tranquilidade, além de poderem ser utilizadas com diferentes tipos de calçados esportivos.','static/img/meia_05_01.png'), //
    new Produto('11','meia','3789982758374','Meia Nike Sportswear Everyday Essential Unissex', 60.00, 'Meia Tamanho G','As meias Nike Sportswear Everyday Essential são feitas com tecido macio e elástico que se molda ao seu pé para proporcionar conforto o dia todo. Este produto é feito com, no mínimo, 75% de fibras de poliéster reciclado.','static/img/meia_05_02.png'), //
    new Produto('12','meia','3782694828678','Meia Nike Elite Unissex', 90.00, 'Meia Tamanho G','A Meia Nike Elite NBA Crew é a escolha do jogador que busca conforto e suporte. Ela é feita com fios de knit premium e tecnologia que absorve o suor, além de amortecimento onde mais importa. A meia contém o logo da NBA e é marcadas verticalmente nas costas com a faixa Elite de primeira linha da Nike Basketball.', 'static/img/meia_06_01.png'), //
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



let tipoSelecionado = "Todos"; // Valor padrão
function buscarProduto() {
    // Valor da busca inserido pelo cliente
    const nomeBusca = document.getElementById('searchInput').value.trim();

     // Chama a função bubbleSort para ordenar os produtos
     bubbleSortProdutos(produtos);

    // Filtra produtos com base no tipo selecionado e no nome digitado
    const resultados = produtos.filter(produto => {
        // Verifica se o produto pertence ao tipo selecionado (ou a todos) e se o nome corresponde
        const pertenceAoTipo = tipoSelecionado === "Todos" || produto.tipo.toLowerCase() === tipoSelecionado.toLowerCase();
        const correspondeAoNome = produto.nome.toLowerCase().includes(nomeBusca.toLowerCase());
        return pertenceAoTipo && correspondeAoNome;
    });


   // Se a busca estiver vazia, restaura o vetor original
   if (nomeBusca === null) {
    exibirProdutos(produtos); // Exibe os produtos na ordem original
    return;
}
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
                <img class="card-img-top" src="${produto.imagem}" alt="${produto.nome}" >
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bolder">${produto.nome}</h5>
                    <p>R$${produto.preco.toFixed(2)}</p>
                     <div class="rating">
                        <i class="fa fa-star" style="color:#ffc107"></i>
                        <i class="fa fa-star" style="color:#ffc107"></i>
                        <i class="fa fa-star" style="color:#ffc107"></i>
                         <i class="fa fa-star" style="color:#ffc107"></i>     
                        <i class="fa fa-star-half-alt" style="color:#ffc107"></i>
                        <i class="fa fa-star-o" style="color:#ffc107"></i>
                    </div>
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

// Função para filtrar produtos pelo tipo
function filtrarProdutosPorTipo(tipo) {
    let produtosFiltrados;
    
    if (tipo === "Todos") {
        produtosFiltrados = produtos; // Exibe todos os produtos
    } else {
        // Filtra os produtos pelo tipo (case insensitive)
        produtosFiltrados = produtos.filter(produto => produto.tipo.toLowerCase() === tipo.toLowerCase());
    }
    
    // Atualiza a exibição dos produtos filtrados
    exibirProdutos(produtosFiltrados);
}


document.querySelectorAll('.snip1226 a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Remove a classe 'current' de todos os itens
        document.querySelectorAll('.snip1226 li').forEach(li => li.classList.remove('current'));

        // Adiciona a classe 'current' ao item clicado
        this.parentElement.classList.add('current');

        // Atualiza o tipo selecionado globalmente
        tipoSelecionado = this.getAttribute('data-tipo');

        // Atualiza a exibição com os produtos filtrados pelo tipo selecionado
        buscarProduto();
    });
});

// Carregar todos os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    exibirProdutos(produtos);
});
