const animais = ['Gato', 'Cachorro', 'Calopsita'];

//for
for (let i = 1; i < 5; i++) {
    console.log(`Esse laço rodou ${i} vezes.`);
}
/*
Saída do console:
Esse laço rodou 1 vezes
Esse laço rodou 2 vezes
Esse laço rodou 3 vezes
Esse laço rodou 4 vezes
Esse laço rodou 5 vezes
*/

for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}
/*
Saída do console:
Gato
Cachorro
Calopsita
*/

//foreach
animais.forEach((animal, index) => {
    console.log(animal);
});

/* saída do console
Gato
Cachorro
Calopsita
*/

animais.forEach(animal => {
    console.log(animal);
});

/* saída do console
Gato
Cachorro
Calopsita
*/