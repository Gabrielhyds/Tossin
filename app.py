# Importando o Flask
from flask import Flask, render_template, request

# Cria uma instância da classe Flask
app = Flask(__name__)

# Define a rota para a página inicial ("/")
@app.route('/')
def home():
    # Renderiza e retorna o template 'index.html' quando a rota inicial é acessada
    return render_template('index.html')

@app.route('/prod')
def prod():
    # Obtém o ID do produto da query string
    produto_id = request.args.get('id')
    # Aqui você pode usar o produto_id para buscar as informações do produto em uma lista ou banco de dados
    # Por exemplo, você pode usar o ID para encontrar o produto correspondente em uma lista de produtos
    return render_template('prod.html',  produto_id=produto_id)  # Enviando o ID para o template

# Define a rota para a página inicial ("/")
@app.route('/cart')
def cart():
    # Renderiza e retorna o template 'index.html' quando a rota inicial é acessada
    return render_template('cart.html')

# Verifica se o script está sendo executado diretamente
if __name__ == '__main__':
    # Inicia o servidor em modo debug, permitindo recarregar o servidor em alterações
    app.run(debug=True)
