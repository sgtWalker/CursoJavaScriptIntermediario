let pessoa = {
    nome: 'Diego',
    idade: 33
}

//quando tentamos clonar apenas atribuindo é realizada apenas uma referência ao outro objeto.
let outraPessoa = pessoa;
outraPessoa.idade = 10;
//conforme dito acima, neste caso, por ser uma referência, será alterada a idade nos dois objetos.

//Para resolver este problema, a forma que resolve em quase todos os cenários é a utilização das apis JSON.

let pessoa2 = {
    nome: 'Diego',
    idade: 33
}

let outraPessoa2 = JSON.parse(JSON.stringify(pessoa2));
outraPessoa2.idade = 10;
//Neste caso, a idade será alterada apenas no objeto outraPessoa2.

//Pontos de atenção:
//Utilização da API JSON é recomendada para objetos que não possuem propriedades com prototype, por exemplo:
let pessoa3 = {
    nome: 'Diego',
    idade: 33,
    dataLogin: new Date()
}
//Ao realizar a cópia com as APIs JSON, a propriedade dataLogin não será mais o prototype Date e sim uma string 
//contendo a data;
//Outro fator importante é que as APIS fazem cópias razas, ou seja, copiam sem referÊncia apenas o primeiro nível de objetos.
//Por exemplo:
let pessoa4 = {
    nome: 'Diego',
    idade: 33,
    maisInfo: {
        hobbies: 'programar e estudar'
    }
}
//Repare que o objeto acima possui a propriedade maisInfo, a qual é outro objeto, neste caso se alterarmos numa cópia os dados do objeto maisInfo,
//as alterações seriam realizadas nos dois objetos.

//Para resolver esse tipo de problema, é recomendado o uso do método cloneDeep da biblioteca lodash
//link: https://lodash.com/docs/4.17.15#cloneDeep 