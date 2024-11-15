export class Produto {
    constructor(id, tipo, codigoBarras, nome, preco, descricaoCurta, descricaoLonga, imagem) {
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