import { produtos } from '../data/Produtos.js';
import { bubbleSortProdutos } from '../utils/BubbleSort.js';
import { exibirProdutos } from './ExibirProduto.js';

let tipoSelecionado = "Todos"; // Valor padrão
// Função para buscar o produto com o que o usuário digitar
export function buscarProduto() {
       // Valor da busca inserido pelo cliente
       const nomeBusca = document.getElementById('searchInput').value;

       // Chama a função bubbleSort para ordenar os produtos
       bubbleSortProdutos(produtos);
   
       // Filtra produtos com base no tipo selecionado e no nome digitado
       const resultados = produtos.filter(produto => {
           // Verifica se o produto pertence ao tipo selecionado (ou a todos) e se o nome corresponde
           const pertenceAoTipo = tipoSelecionado === "Todos" || produto.tipo.toLowerCase() === tipoSelecionado.toLowerCase();
           const correspondeAoNome = produto.nome.toLowerCase().includes(nomeBusca.toLowerCase());
           return pertenceAoTipo && correspondeAoNome;
       });
   
       // Exibe os produtos filtrados na interface
       exibirProdutos(resultados);
}
