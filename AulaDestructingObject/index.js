//Destructing Object

let carro = {
    marca: 'Fiat',
    modelo: 'Pulse',
    ano: '2023',
    cor: 'cinza',
    valor: 140000
}

//Qual tipo de problema resolve?
/*
Quando precisarmos jogar em variáveis as propriedades do objeto, por exemplo:
let marca = carro.marca;
let modelo = carro.modelo;

Dá para utilizar o destructing para simplificar a sintaxe.
let { marca, modelo, ano, cor, valor } = carro;
console.log(marca, modelo, ano, cor, valor);
a saída do console será: Fiat Pulse 2023 cinza 140000

Também dá pra alterar o nome da variável de saída, como por exemplo:
let { marca, modelo, ano, cor, valor: precoCarro } = carro;
deste modo, não será criada a variável valor e sim a variável precoCarro

Outra opção de uso do Destructing é na passagem de parâmetros numa função, por exemplo:
function calcularValorSeguro(marca, modelo, ano) {
}
calcularValorSeguro(carro.marca, carro.modelo, carro.ano);

a sintaxe acima poderá ser substituída por Destructing, sendo:
function calcularValorSeguro({ marca, modelo, ano}) {
}
calcularValorSeguro(carro);


Destructing com Arrays
let frutas ['Banana', 'Maçã', 'Pera'];

sintaxe sem destructing para pegar a primeira posição do array e jogar numa variável:
let banana = frutas[0];

sintaxe utilizando destructing:
let [banana] = frutas;
importante salientar que o nome dentro do colchetes, pode ser qualquer nome, por exemplo:
let [a] = frutas;
Para retornar as outras posições, pode-se utilizar a sintaxe:
let [a, b, c] = frutas; //retornará as posições 0, 1, e 2 do array frutas;
*/