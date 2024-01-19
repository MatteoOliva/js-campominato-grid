// creare un bottone che genera una griglia di gioco quadrata
const  gridElement = document.getElementById('grid');
const  playButton = document.getElementById('play');


playButton.addEventListener('click', function () {
    generateGrid(gridElement);
} )

function generateGrid(container) {
        container.innerHTML = '';
    for (let i = 1; i < 101; i ++) {
        const cellElement = generateCell(i);
        container.append(cellElement);
    }
}

function generateCell(cellNumber)  {
    const cella = document.createElement('div');
    cella.classList.add('cella');

    // assegnare alle celle un numero da 1 a 100 progressivamente da disporre 10x10
    cella.innerText = cellNumber; 
    

    // Per ogni cella cliccata, essa diventa colore azzurro
    cella.addEventListener('click', function() {
        cella.classList.toggle('cellacolorata');

        //   stampare in console il numero della cella cliccata
        console.log(cellNumber);
        
    })
    return cella;
}



// DAY 2 
// Step 1


// let bombe = [];

// for(i = 0; i < 15; i++)
// {
//     bombe[i] = Math.floor(Math.random() * 100 + 1 );
//     if (bombe.includes(bombe[i])) {

    
//     bombe.push(i);
// }
    
// }
// console.table(bombe);



// Step 1 migliorato


// let bombe = [];

// while (bombe.length < 16)
// {
//     let number = Math.floor(Math.random() * 100 + 1 );
//     if (!bombe.includes(number)) {
//         bombe.push(number);
// }
    
// }
// console.table(bombe);










