/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed=0, phrases=[{phrase: 'Between a Rock and a Hard Place'}, {phrase:'Down To Earth'},
        {phrase: 'My Cup of Tea'}, {phrase: 'Cry Wolf'}, {phrase: 'Cut To The Chase'}], activePhrases) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrases = null;
    }
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length) ;
        return this.phrases[randomNum];
    }
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrases = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrases.phrase); 
        phrase.addPhraseToDisplay(); 
        // phrase.checkLetter();
        phrase.showMatchedLetter();
        this.checkForWin();
    }
    checkForWin() {
        $( "#phrase ul li" ).each(function(  ) {
            if ( $(this).attr('class') !== 'hide letter' && $(this).attr('class') !== 'hide space')  {
                // console.log($(this).attr('class') !== 'hide letter');
            // console.log($(this).attr('class'))
                return true;
            }
        });
    }
    removeLife() {
        $('button.key').on('click', e => {
            let keyValue = $(e.target).text();
            $( "#phrase ul li" ).each(function( index ) {
                if ($(this).text() !== keyValue)  {
                    $('#scoreboard ol li img').attr('src', '"images/lostHeart.png"');
                    this.missed++;
                    if (this.missed >= 5) {
                        this.gameOver();
                    }
                }
            });
        });
    }
    gameOver() {
        $('#overlay').css('display', 'block');
    }

}

    