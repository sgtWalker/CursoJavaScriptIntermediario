
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
const _headers = {
    'Content-Type': 'application/json'
}
/* utilizando os outros verbos http com fetch api */
/* POST */
function incluirFuncionario() {  
    let init = {
        headers: _headers,
        body: JSON.stringify({ 
            "nome":"Alessandra",
            "idade":31,
            "cargo":"Desenvolvedor Pl",
            "salario":7000
        }),
        method: 'POST'
    }
    
    fetch('https://6682b6514102471fa4c7f34f.mockapi.io/api/funcionarios', init)
        .then(response => response.ok ? response.json() : _throw(response.status))
        .then(response => getFuncionarios())
        .catch(erro => erroHandler(erro.message)); 
}

/* PUT */
function alterarFuncionario(id) {    
    let init = {
        headers: _headers,
        body: JSON.stringify({ 
            "nome":"Alessandra Alves",
            "idade":32,
            "cargo":"Desenvolvedor Pl",
            "salario":7000
        }),
        method: 'PUT'
    }
    
    fetch(`https://6682b6514102471fa4c7f34f.mockapi.io/api/funcionarios/${id}`, init)
        .then(response => response.ok ? response.json() : _throw(response.status))
        .then(response => getFuncionarios())
        .catch(erro => erroHandler(erro.message)); 
}

/* DELETE */
function removerFuncionario(id) {    
    let init = {
        headers: _headers,
        method: 'DELETE'
    }
    
    fetch(`https://6682b6514102471fa4c7f34f.mockapi.io/api/funcionarios/${id}`, init)
        .then(response => response.ok ? response.json() : _throw(response.status))
        .then(response => getFuncionarios())
        .catch(erro => erroHandler(erro.message)); 
}


/* Como refatorar o código removendo callback hells? */
/*
Primeiro precisamos entender o que são os callbacks hell. Callback hell podem ser encontrados em cenários que várias functions podem ser chamadas em cascatas pela dependência uma da outra.
Sendo assim, imagine o cenário que uma function precisa chamar mais de uma rota em uma API para obter objetos e tratá-los.
Neste cenário, podemos encontrar códigos sendo chamados de uma forma na qual gere callbacks hell como o exemplo abaixo:
*/
const apiUrl = 'https://api.com.br/api/';

function exemploCallbackhell() {
    getListagemFetch('funcionarios', function(listagemFuncionarios) {
        getListagemFetch('funcionariosCargo', function(listagemCargo) {
            getListagemFetch('funcionariosNota', function(listagemNota) {
                getListagemFetch('funcionariosSalario', function(listagemSalario) {
                    console.log(listagemFuncionarios);
                    console.log(listagemCargo);
                    console.log(listagemNota);
                    console.log(listagemSalario);
                })
            })
        })
    })
}

function getListagemFetch(endpoint, callback) {
    return fetch(`${apiUrl}${endpoint}`)
        .then(res => res.json())
        .then(listagem => {
            callback(listagem);
    });
}

/* Podemos perceber que geramos um código confuso e 'hadouken', muito encadeado. Este tipo de código não é o ideal
para uma fácil leitura e manutenção e esse foi um exemplo de callback hell.
Agora vamos refatorar essa function para solucionar esse problema sem gerar um callback hell.
Exemplo: */

function exemploSemCallbackhell() {
    getFuncionariosAsync();
}

function getListFetch(endpoint) {
    return fetch(`${apiUrl}${endpoint}`)
        .then(res => res.json())
        .then(listagem => listagem);
}

async function getFuncionariosAsync() {
    const listagemFuncionarios = await getListFetch('funcionarios');
    const listagemCargo = await getListFetch('funcionariosCargo');
    const listagemNota = await getListFetch('funcionariosNota');
    const listagemSalario = await getListFetch('funcionariosSalario');

    console.log(listagemFuncionarios);
    console.log(listagemCargo);
    console.log(listagemNota);
    console.log(listagemSalario);
}

/* Ao utilizat o async/await, conseguimos eliminar o callback hell, tornando o código mais legível e de fácil manutenção. */


/* Fontes: 
    https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
    https://mockapi.io/
    https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
*/