// creare un bottone che genera una griglia di gioco quadrata
const  gridElement = document.getElementById('grid');
const  playButton = document.getElementById('play');


playButton.addEventListener('click', function () {
    generateGrid(gridElement);
} )

function generateGrid(container) {
        container.innerHTML = '';
    for (let i = 0; i < 100; i ++) {
        const cellElement = generateCell();
        container.append(cellElement);
    }
}

function generateCell()  {
    const cella = document.createElement('div');
    cella.classList.add('cella');

    // Per ogni cella cliccata, essa diventa colore azzurro
    cella.addEventListener('click', function() {
        cella.classList.toggle('cellacolorata'); 
    })
    return cella;
}






// assegnare alle celle un numero da 1 a 100 progressivamente da disporre 10x10

//   stampare in console il numero della cella cliccata