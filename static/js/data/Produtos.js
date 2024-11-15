import { Produto } from '../models/Produto.js';

//vetor produtos, do tipo objeto
export const produtos = [
    new Produto('1','cueca','7896924303364','ZIMBA', 35.00, 'Cueca Tamanho G','Conforto e estilo se encontram na Cueca Zorba, uma peça essencial para o guarda-roupa masculino. Feita com um tecido de alta qualidade, ela proporciona uma sensação suave contra a pele, garantindo conforto durante todo o dia. Seu design moderno e corte perfeito oferecem um ajuste ideal, valorizando a silhueta sem abrir mão da liberdade de movimentos.', 'static/img/cueca_02_branco.webp'),    
    new Produto('2','meia','3784378583749','Meia Cano Curto Esportiva Puma', 40.00, 'Meia Tamanho G','68% Algodão 27% Poliamida 03% Elastano 02% Outras Fibras','Foto da meia 07'),
    new Produto('3','cueca','7899303536759','Aorba', 35.00, 'Cueca Tamanho G','A Cueca ComfortFit é a escolha ideal para quem valoriza conforto sem abrir mão do estilo. Feita com um tecido de algodão premium, ela proporciona uma sensação suave contra a pele, tornando-a perfeita para o uso diário. O design anatômico se adapta perfeitamente ao corpo, garantindo que você se sinta seguro e confortável em qualquer situação. Confeccionadas em Algodão e Poliester sem costuras marcantes. Garantem maior conforto e liberdade de movimento. Modelagem moderna e confortável.','static/img/c5.jpg'),
    new Produto('8','meia', '3756343564354','Meia Curta Adulto Walk Lupo', 40.00,'Meia Tamanho G','Se você quer meias que sejam confortáveis, bonitas e duráveis, você vai adorar a Meia Curta Adulto Walk Lupo. Ela é ideal para o seu cotidiano, pois suas peças são feitas com um tecido macio e resistente, que se ajusta ao seu pé e não causa irritações na pele. As meias são curtas, ótimas para usar com calçados baixos ou esportivos. As cores são variadas e modernas, combinando com qualquer roupa. E o melhor de tudo: não tem costura, garantindo ainda mais conforto e bem-estar.','Foto da meia 01'),
    new Produto('4','cueca','7892314748797','Cueca Boxer Algodão Sem Costura Zorba', 35.00, 'Cueca Tamanho G','Possuem proteção contra bactérias e maus odores. Feitas com tecnologia MaxFresh, que regula a sensação térmica.','static/img/cueca_preta.png'),
    new Produto('5','cueca','7898493877544','Cueca Lupo AM Boxer Urban', 35.00, 'Cueca Tamanho G','A opção ideal para os homens que valorizam estilo e bem-estar. A Cueca Boxer Adulto Sem Costura possui fios sintéticos fabricados com filamentos individuais extremamente finos, que garantem uma peça de secagem rápida, macia e durável. Além disso, a tecnologia sem costura evita atritos e incômodos durante o uso, permitindo ajuste perfeito ao corpo, segurança e liberdade de movimento, sempre com muito conforto, qualidade e durabilidade.','Foto_da_cueca_04'),
    new Produto('6','cueca','7894336754612','Cueca Boxer sem Costura Puma',35.00,'Cueca Tamanho G','Sinta- se confortável em todos os momentos, com esse Kit de Cuecas Boxer sem Costura Puma. Confeccionado em materiais leves e resistentes, proporcionando leveza e maior liberdade dos movimentos. Já o cós em elástico possibilita um ajuste personalizado. Não perca a oportunidade e adquira já seu kit com toda qualidade que a Puma tem a oferecer. Compre já!','Foto_da_cueca_05'),
    new Produto('7','cueca','7896431264837','Cueca Box Boxer Lupo Sem Costura Basic Microfibra', 35.00,'Cueca Tamanho G','Cueca boxer masculina Lupo. É composto por cuecas masculinas para adultos, modelo boxer confeccionado em microfibra da marca Lupo. Cueca boxer para homens que gostam de estilo. Com formato anatômico, muito mais conforto, malha com elasticidade para ajuste perfeito. Para garantir leveza e suavidade a cada movimento, invista no bem-estar que a cueca sem costura proporciona no dia a dia, escolha certa para acompanhar homens modernos e sofisticados.','Foto_da_cueca_06'),
    new Produto('8','meia', '3756343564354','Meia Curta Adulto Walk Lupo', 40.00,'Meia Tamanho G','Se você quer meias que sejam confortáveis, bonitas e duráveis, você vai adorar a Meia Curta Adulto Walk Lupo. Ela é ideal para o seu cotidiano, pois suas peças são feitas com um tecido macio e resistente, que se ajusta ao seu pé e não causa irritações na pele. As meias são curtas, ótimas para usar com calçados baixos ou esportivos. As cores são variadas e modernas, combinando com qualquer roupa. E o melhor de tudo: não tem costura, garantindo ainda mais conforto e bem-estar.','Foto da meia 01'),
    new Produto('9','meia', '3792183356564','Meia Lupo AU Sport Lupo K3', 50.00, 'Meia Tamanho G', 'Qualidade e conforto todos os dias. Cada meia do kit com três unidades possui cano médio e calcanhar verdadeiro, proporcionando ajuste perfeito e conforto superior. Produzida com algodão penteado, tem toque macio, suave, leve e oferece excelente respirabilidade da pele. Polivalente, é perfeita para fazer atividade física e usar no trabalho', 'Foto da meia 02'),
    new Produto('10','meia','3712872948598','Meia Olympikus Invisível', 40.00, 'Meia Tamanho G','A Meia Olympikus Invisível é a opção perfeita para seu conforto e praticidade no dia a dia. - Veste do tamanho 39 ao 43. Composição: 62% algodão, 36% poliéster, 2% elastano.', 'Foto da meia 03'),
    new Produto('11','meia','3721839874672','Meia Adulto Média Esportiva Walk Lupo', 40.00, 'Meia Tamanho M','Se você está em busca de um item que te acompanhe em todos os momentos de prática de esportes, então precisa conhecer a nossa meia adulto média esportiva Walk Lupo. As nossas peças oferecem muito conforto e garante que os movimentos sejam feitos com tranquilidade, além de poderem ser utilizadas com diferentes tipos de calçados esportivos.','Foto da meia 04'),
    new Produto('12','meia','3789982758374','Meia Nike Sportswear Everyday Essential Unissex', 60.00, 'Meia Tamanho G','As meias Nike Sportswear Everyday Essential são feitas com tecido macio e elástico que se molda ao seu pé para proporcionar conforto o dia todo. Este produto é feito com, no mínimo, 75% de fibras de poliéster reciclado.','Fot da meia 05'),
    new Produto('13','meia','3782694828678','Meia Nike Elite Unissex', 90.00, 'Meia Tamanho G','A Meia Nike Elite NBA Crew é a escolha do jogador que busca conforto e suporte. Ela é feita com fios de knit premium e tecnologia que absorve o suor, além de amortecimento onde mais importa. A meia contém o logo da NBA e é marcadas verticalmente nas costas com a faixa Elite de primeira linha da Nike Basketball.', 'Foto da meia 06'),
];