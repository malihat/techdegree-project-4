/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// ---------------------------------------------------------------------------------------------------
// ----------------------**** I am aiming for Meets Expectations **** --------------------------------
// ---------------------------------------------------------------------------------------------------

// Starts the game for the first time
let game;
$('#btn__reset').on('click', () => {
    game = new Game();
    game.startGame();
});

// Calls the handleInteraction function when the user types the letter.
$('button.key').on('click keypress', e => {
    game.handleInteraction(e.target);
});

