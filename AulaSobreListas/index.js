const list = [{
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

function buildTable() {
    document.querySelector('#table-body').innerHTML = '';

    list.forEach(elemento => {
        let template = `
            <tr>
                <td>${elemento.nome}</td>
                <td>${elemento.idade}</td>
                <td>${elemento.cargo}</td>
                <td>R$ ${elemento.salario}</td>
            </tr>       
        `;

        document.querySelector('#table-body').insertAdjacentHTML('beforeend', template);
    });
}

buildTable();