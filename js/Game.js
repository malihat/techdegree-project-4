/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Game Class
class Game {
    constructor() {
        // Its a counter
        this.missed = 0;
        // Calls the functions which returns a random phrase
        this.phrases = this.createPhrase();
        // Holds the current phrase
        this.activePhrases = null;
    }

    // Returns phrases
    createPhrase() {
        const phrases = [
            {phrase: 'Between a Rock and a Hard Place'}, 
            {phrase:'Down To Earth'},
            {phrase: 'My Cup of Tea'}, 
            {phrase: 'Cry Wolf'},
            {phrase: 'Cut To The Chase'}];
        return phrases;
    }

    // Returns a random phrase
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length) ;
        return this.phrases[randomNum];
    }

    // lengthOfPhrase() {
    //     let phrase = this.getRandomPhrase().phrase.replace(/ /g, '')
    //     // console.log(phrase,  phrase.replace(/ /g, '').length)
    //     return phrase.length;
    // }
    
    // Initiates the game 
    startGame() {
        // Hides the start display
        document.querySelector('#overlay').style.display = 'none';
        // Calls the function to get random phrase.
        this.activePhrases = this.getRandomPhrase();
        // Instantiates the phrase class and calls the function to display the phrase.
        this.activePhrases = new Phrase(this.activePhrases.phrase); 
        this.activePhrases.addPhraseToDisplay(); 
    }

    // Checks if the player has guessed the phrase.
    checkForWin() {
        // let phraseVisible = [];
        // $('button.key').on('click', () => {
            // phraseVisible = $( "#phrase ul li.letter" ).filter(function(  ) {    
            //     return $(this).attr('class') == 'hide letter'
            // })
            // console.log(phraseVisible.attr('class') ,'phraseVisible class : ', phraseVisible.length);  //if length of phraseVisible is > 0
            // if ( phraseVisible.length <= 0) {  
            // console.log('Show class:', $( "#phrase ul li.letter" ).attr('class', 'show').length);
            // // phraseVisible.attr('class') !== 'hide letter'
            //     console.log('true');
            //     return 'true';
            // } 
            // else {
            //     console.log('false');
            //     return 'false';
            // }
        // });

        
        let sumLetter = document.getElementsByClassName('letter').length;
        let shownLetters = document.getElementsByClassName('show').length;

        if ( shownLetters > 0 &&  sumLetter == 0) {
            return 'true'
        } else {
            return 'false';
        }
    }

    // Removes one heart when the player types wrong letter
    removeLife() {        
        $('li.tries img').eq(this.missed).attr('src', 'images/lostHeart.png');
        this.missed++;
    
        // If there are 5 wrong guesses, then the gameover function is called.
        if(this.missed == 5) {
            this.gameOver(false);
        }  
    }

    // Resets the display 
    resetGame() {
        $('#phrase ul li').remove();
        $('#qwerty div button').attr('disabled', false);
        $('#qwerty div button').attr('class', 'key');
        $('li.tries img').attr('src', 'images/liveHeart.png');
    }


    gameOver(gameWon) {
        $('#overlay').css('display', 'block');
        if (gameWon) {
            $('#overlay').attr('class', 'win');
            $('#overlay h1').text('You are the WINNER :)');
            this.resetGame()
        } else {
            $('#overlay').attr('class', 'lose');
            $('#overlay h1').text('You Lose :(');
            this.resetGame()
        }

    }

    handleInteraction(button) { 
        $(button).attr('disabled', true);
        if ( this.activePhrases.checkLetter($(button).text()) == 'false' ) {
            $(button).attr('class', 'wrong');
            this.removeLife();
        } else {
            this.activePhrases.showMatchedLetter($(button).text());
            $(button).attr('class', 'chosen');
            this.checkForWin();
        }
        if (this.checkForWin() == 'true') {
            this.gameOver(true);
        }
    }
}

    