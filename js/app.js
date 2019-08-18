/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
//  game.startGame(); 
//  console.log(`Active Phrase - phrase: ${game.activePhrases.phrase}`); 

let game;
$('#btn__reset').on('click', () => {
    game = new Game();
    game.startGame();
    
});

