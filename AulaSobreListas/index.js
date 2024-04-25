let funcionarios = [{
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
        cargo: 'Estagiária',
        salario: 1700
    }
];

function montarTabela(funcionarios) {
    let tabela = document.querySelector('#tabela-body');

    if (!tabela || !funcionarios) return;

    tabela.innerHTML = '';

    funcionarios.forEach(funcionario => {
        let template = `
            <tr>
                <td>${funcionario.nome}</td>
                <td>${funcionario.idade}</td>
                <td>${funcionario.cargo}</td>
                <td>R$ ${funcionario.salario}</td>
            </tr>       
        `;

        tabela.insertAdjacentHTML('beforeend', template);
    });
}

//sem utilizar map e aplicando o conceito de função pura, ou seja, sem efeitos colaterais em objetos externos
/*
function adicionarDecimoTerceiro(funcionarios) {
    if (!funcionarios) return;

    const copiaFuncionarios = JSON.parse(JSON.stringify(funcionarios));

    copiaFuncionarios.forEach(funcionario => {
        funcionario.salario = funcionario.salario * 2;
    });

    return copiaFuncionarios;
}
*/

/*utilizando o map para aplicar a mudança também sem efeitos colaterais em objetos externos.
por padrão o map retorna um novo objeto array, por isso que não gera efeitos colaterais.
Você pode utilizar o map e retornar um novo objeto, por exemplo

//retornar um array só com o nome dos funcionários:
funcionarios.map(funcionario => {
    return funcionario.nome;
});

//retornar um array com nome e idade:
funcionarios.map(funcionario => {
    return { nomeFuncionario: funcionario.nome, idadeFuncionario: funcionario.idade }
});
*/
function adicionarDecimoTerceiro(funcionarios) {
    if (!funcionarios) return;

    return funcionarios.map(funcionario => {
        funcionario.salario = funcionario.salario * 2;
        return funcionario;
    });
}

funcionarios = adicionarDecimoTerceiro(funcionarios);
montarTabela(funcionarios);