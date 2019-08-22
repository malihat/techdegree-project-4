/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


//  Phrase Class with a property phrase that holds the one phrase in it.
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Displays the phrase to the screen the first time but it will remain hidden
    addPhraseToDisplay() {
        let letters = this.phrase.split('');
        letters.map( letter =>  {
            if (letter == " ") {
                $('#phrase ul').append("<li class='hide space'>"+letter+ "</li>");
            } else  {
                $('#phrase ul').append("<li class='hide letter'>"+letter+ "</li>");                
            }
        });
    }

    // Checks if the letter in the phrase matches the letter a player types
    checkLetter(letter) {
        let letters = this.phrase.split('');
        if (letters.includes(letter)) {
            return 'true';
        } else {
            return 'false';
        }
    }

    // If the typed letter exists in the phrase, then the letter is shown (class is changed) 
    showMatchedLetter(letter) {
        $( "#phrase ul li" ).each(function( ) {
            if ( $(this).text() == letter )  {
                $(this).attr('class', 'show');
            }
        });
    }
 }


 