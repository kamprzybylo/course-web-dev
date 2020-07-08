// pobieranie wszystkich potrzebnych elementów z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

// określamy potrzebne dane

let textSize = 20; // poczatkowa wielkość font-size dla p

// parametry początkowe
text.style.fontSize = textSize + "px";
text.style.backgroundColor = '#ddd'

// określanie akcji - napisanie funkcji

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
    // 17 + "px"
    // "17" + "px"
    // "17px"
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px"
}

// ustwienie nasłuchiwania na przyciskach na kliknięcie

btnIncrease.addEventListener('click', textIncrease)
btnDecrease.addEventListener('click', textDecrease)