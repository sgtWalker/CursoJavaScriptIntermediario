//Documentação de eventos: https://www.w3schools.com/jsref/dom_obj_event.asp

function sayName() {
    alert('Evento Click');
}

document.querySelector('#meu-botao').addEventListener('click', () => {
    sayName();
});

document.querySelector('#meu-botao').addEventListener('mouseover', () => {
    alert('Evento Mouseover');
});

document.querySelector('#meu-botao').addEventListener('mouseout', () => {
    alert('Evento Mouseout');
});