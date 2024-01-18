// creare un bottone che genera una griglia di gioco quadrata
const  gridElement = document.getElementById('grid');
const  playButton = document.getElementById('play');
generateGrid(gridElement);


// assegnare alle celle un numero da 1 a 100 progressivamente da disporre 10x10
// Per ogni cella cliccata, essa diventa colore azzurro
//   stampare in console il numero della cella cliccata