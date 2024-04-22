/* Spread Operator (...) 
Operador que permite a somatória e edição de objetos, retornando um novo objeto */

let pessoa = {
    nome: 'Diego',
    idade: 28
}

let endereco = {
    cidade: 'São Paulo'
}

let diego = {
    ...pessoa,
    ...endereco
}

/* saída do console para a variável diego
{nome: 'Diego', idade: 28, cidade: 'São Paulo'}

Outro exemplo:
let pessoa = {
    nome: 'Diego',
    idade: 28
}

let endereco = {
    cidade: 'São Paulo'
}

let diego = {
    ...pessoa,
    ...endereco,
    ...{
        idade: 29,
        email: 'email@email.com.br'
    }
}

saída no console para a variável diego
{nome: 'Diego', idade: 29, cidade: 'São Paulo', email: 'email@email.com.br'}
*/

