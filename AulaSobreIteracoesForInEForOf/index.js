/* Dado que exista o array abaixo */
let jogos = ['Tibia','Battlefield','FIFA'];

/* para realizar a iteração deste array, podemos utilizar for, foreach, forin e forof */
/* FOR OF */
/* O iterador for of vai direto ao ponto, trazendo sempre o item do array */
for(let jogo of jogos)
    console.log(jogo);
/* saída do console 
Tibia
Battlefield
FIFA
*/

/* FOR IN */
/* O iterador for in funciona como o foreach e é mais completo que o for of, pois, trás a posição do item no array. 
   Também é mais completo que o foreach, porque pode iterar objetos (darei exemplo mais pra baixo).
*/
for(let posicao in jogos)
    console.log(jogos[posicao]);
/* saída do console git s
Tibia
Battlefield
FIFA
*/
for(let posicao in jogos)
    console.log(posicao);
/* saída do console 
0
1
2
*/
for(let posicao in jogos)
    console.log(`O jogo: ${jogos[posicao]} está na posição: ${posicao} do array.`);
/* saída do console
O jogo: Tibia está na posição: 0 do array.
O jogo: Battlefield está na posição: 1 do array.
O jogo: FIFA está na posição: 2 do array.
*/

/* Dado que exista o objeto */
let pessoa = {
    nome: 'Diego',
    idade: 33,
    profissao: 'Desenvolvedor'
}

for(let chave in pessoa)
    console.log(chave);
/* saída do console
nome
idade
profissao
*/

for(let chave in pessoa)
    console.log(pessoa[chave]);

/* saída do console
Diego
33
Desenvolvedor
*/