
/*
  Introdução - O que é o Fetch API?
    A Fetch API fornece uma interface para buscar recursos, oferece um conjunto de recursos
    mais poderoso e flexível do que o XMLHttpRequest. Funciona de forma assíncrona.

  Conceitos e uso
    Fornece uma definição genérica de objetos Request e Reponse. Isso permite que sejam utilizados
    onde quer que sejam necessários (service workers, cache api e entre outros).
    Também fornece uma definição para conceitos relacionados como CORS e a semântica de cabeçalho de origem HTTP.
*/

const funcionarios = [{
        nome: 'João',
        idade: 25,
        cargo: 'Desenvolvedor Pl',
        salario: 7000
    },
    {
        nome: 'Pedro',
        idade: 17,
        cargo: 'Estagiário',
        salario: 1600
    },
    {
        nome: 'Adriana',
        idade: 28,
        cargo: 'Desenvolvedor Sr',
        salario: 12000
    },
    {
        nome: 'Carol',
        idade: 23,
        cargo: 'Desenvolvedor Pl',
        salario: 7500
    },
    {
        nome: 'Isabela',
        idade: 18,
        cargo: 'Estagiário',
        salario: 1700
    }
];

function buildTable() {
    document.querySelector('#table-body').innerHTML = '';

    funcionarios.forEach(el => {
        let template = `
        <tr>
            <td>${el.nome}</td>
            <td>${el.idade}</td>
            <td>${el.cargo}</td>
            <td>R$ ${el.salario}</td>
        </tr>
        `;

        document.querySelector('#table-body').insertAdjacentHTML('beforeend', template);
    });
}

buildTable();
/* Fontes: 
https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
*/