
/*
  Introdução - O que é o Fetch API?
    A Fetch API fornece uma interface para buscar recursos, oferece um conjunto de recursos
    mais poderoso e flexível do que o XMLHttpRequest. Funciona de forma assíncrona.

  Conceitos e uso
    Fornece uma definição genérica de objetos Request e Reponse. Isso permite que sejam utilizados
    onde quer que sejam necessários (service workers, cache api e entre outros).
    Também fornece uma definição para conceitos relacionados como CORS e a semântica de cabeçalho de origem HTTP.
*/

let funcionarios = [];

function getFuncionarios() {
    fetch('https://6682b6514102471fa4c7f34f.mockapi.io/api/funcionarios')
        .then(response => response.ok ? response.json() : _throw(response.status))
        .then(responseList => {
            funcionarios = responseList;
            buildTable();
        })
        .catch(erro => erroHandler(erro.message));
}

function buildTable() {
    document.querySelector('#table-body').innerHTML = '';

    if (funcionarios.length === 0) {
        document.querySelector('#table-body')
        .insertAdjacentHTML('beforeend', '<span>Não existem dados para serem exibidos.</span>');
        return;
    }
       
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

getFuncionarios();

/* Fontes: 
    https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
    https://mockapi.io/
    https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
*/