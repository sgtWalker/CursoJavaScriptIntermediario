//declaração básica, modelo Json
let pessoa = {
    nome: 'Diego',
    idade: 33,
    hobbies: ['Programar', 'Estudar', 'Jogar', 'Patins'],
    pets: [pet = {nome: 'Owen', especie: 'Gato'}, pet = {nome: 'Hashi', especie: 'Cachorro'}]
}

//adicionar propriedades
//forma indicada
pessoa.profissao = 'Programador';

//forma não indicada
pessoa['email'] = 'email@email.com.br';

//remover propriedades
delete pessoa.profissao;
delete pessoa['email'];

//Passando funções para o objeto
//com arrow function
let calculadora = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    dividir: (a, b) => a / b,
    multiplicar: (a, b) => a * b,
}

let resultadoSoma = calculadora.somar(1, 2);
let resultadoSubtracao = calculadora.subtrair(4, 1);
let resultadoDivisao = calculadora.dividir(6, 2);
let resultadoMultiplicacao = calculadora.multiplicar(2, 5);

//sem arrow function
let calculadoraSemArrow = {
    somar: function (a, b) { 
        return a + b 
    },
    subtrair: function (a, b) { 
        return a - b 
    },
    dividir: function (a, b) { 
        return a / b 
    },
    multiplicar: function (a, b) { 
        return a * b 
    },
}