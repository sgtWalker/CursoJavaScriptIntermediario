/* Aula sobre localStorage, Cookies e SessionStorage */

/* Introdução */
/* 
O que são?
São formas de armazenamento de dados no navegador. O armazenamento é feito por site/aplicação.
*/

/* localStorage */
/* 
localStorage tem a capacidade de armazenamento de até 10mb. Suporta html5 e nunca expira.
A vantagem do localStorage é de que não é enviado a cada requisição ao servidor.
Exemplos de usos indicados:
- Armazenamento do token do usuário logado.
- Carrinho de compras;
*/

/* Cookies */
/* Os cookies possuem a capacidade de armazenamento de até 4kb. Suporta html4 e html5. 
Pode ser configurado para expirar em determinado período. 
Os cookies são enviados ao servidor em todas as requisições.
Exemplos de usos indicados:
- Controle de linguagem preferida do usuário. Dado um cenário de uma plataforma que tem suporte há inglês e português, o usuário pode escolher a linguagem preferida.
Neste exemplo, podemos salvar a linguagem preferida nos cookies. A cada requisição essa preferência é enviada para o servidor.
- Armazenamento do token do usuário logado.
*/

/* SessionStorage */
/*
A sessionStorage tem a capacidade de armazenamento de até 5mb e sempre expira quando a janela/tab é fechada.
Não são enviados a cada requisição ao servidor.
Exemplos de uso:
- Sistemas bancários que precisam expirar automaticamente ao fechar a janela/aba.
*/

/* Como o localStorage é o mais utilizado, utilizaremos ele para os exemplos de implementação */
/* Estrutura do localStorage */
/* É composto por uma key e um value */
/* Para adicionar o item: localStorage.setItem('key', 'value'); */
localStorage.setItem('token', '019kjahh189jk90');

/* Para obter o item: localStorage.getItem('key'); */
localStorage.getItem('token');
//retorno console: '019kjahh189jk90'

/* Para adicionar objetos */
let carrinhoUsuario = [
    {
        produto: 'margarina',
        quantidade: 2,
        precoUnitario: 7.50,
        subTotal: 15.0
    },
    {
        produto: 'biscoito salgado',
        quantidade: 1,
        precoUnitario: 3.50,
        subTotal: 3.50
    }
];

localStorage.setItem('carrinho-usuario', JSON.stringify(carrinhoUsuario));

let carrinhoParaFinalizar = JSON.parse(localStorage.getItem('carrinho-usuario'));