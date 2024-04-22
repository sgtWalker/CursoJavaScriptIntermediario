/*
por convenção do javascript a indicação de propriedade privada é a inclusão do underline no início do nome
exemplo:
let usuario = {
    _nome: 'Diego'
}

Veremos abaixo como criar objeto com propriedades privadas e inclusão de getters e setters específicos.
*/

let usuario = {
    _nome: 'Diego',
    _sobreNome: 'Marques',

    //getter
    get nome() {
        this._nome;
    },

    //setter
    set nome(value) {
        this._nome = value;
    },

    get nomeCompleto() {
        this._nome + ' ' + this._sobreNome;
    }
}

