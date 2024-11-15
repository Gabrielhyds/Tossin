import { produtos } from '../data/Produtos.js';
import { exibirProdutos } from './ExibirProduto.js';

// Função para filtrar produtos pelo tipo
export function filtrarProdutosPorTipo(tipo) {
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