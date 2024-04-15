//Tipos de dados - Variáveis no JS

//string
//preferêncialmente para strings, utilizar aspas simples, pois, assim vocÊ pode utilizar aspas duplas nos textos quando precisar;
//utilizar let ou const
let frase = 'O Sr. Pedro foi até a quitanda buscar os "presentes".';

//Number
//Utilizar para qualquer tipo de número.
let idade = 30;
let preco = 40.5;

//Boolean
let ativarProposta = false;

//Array
let frutas = ['Abacaxi', 'Limão', 'Laranja'];

//Objetos
//possui o mesmo formato de JSON
let carro = { 
    marca: 'Nissan',
    modelo: 'Kicks',
    ano: 2020,
    motor: null
};

//Function
let soma = function(a, b) {
    return a + b;
};
//ou
function soma(a, b) {
    return a + b;
}
//ou com Arrow Functions
let soma = (a, b) => a + b;

//Pesquisa fora da aula: Qual é a diferença entre var, let e const?
/*
Graças ao hoisting, variáveis declaradas com a palavra-chave var podem ser utilizadas mesmo antes de sua declaração.
Por outro lado, as variáveis criadas com let só podem ser utilizadas após sua declaração, pois, apesar de serem elevadas, elas não são inicializadas.
Além das variáveis declaradas com var temos a possibilidade de usar constantes por meio da palavra-chave const ou utilizar variáveis com escopo de bloco através da let.
Fonte: https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=20987928442&hsa_grp=157916200306&hsa_ad=689395782879&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh2vDqLBSrSG3_uCChl2jCKp5xLh_jvTFYQd5O4azOobkevD7Wyp96BoCfMAQAvD_BwE
*/
