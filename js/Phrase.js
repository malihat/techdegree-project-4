/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        let letters = this.phrase.toLowerCase().split('');
        // let list = document.querySelector('#phrase ul');
        letters.map( letter =>  {
            if (letter == " ") {
                $('#phrase ul').append("<li class='hide space'>"+letter+ "</li>");
            } else  {
                $('#phrase ul').append("<li class='hide letter'>"+letter+ "</li>");                
            }
        });
    }
    checkLetter(word) {
        // Checks if the letter in the phrase matches the letter a player types
        // console.log(letters);
        // $('button.key').on('click', e => {
        //     let keyValue = $(e.target).text();

        // });

        $( "#phrase ul li" ).each(function() {
            if ($(this).text() == word)  {
                console.log('its', true);
            } else {
                console.log('its', false);
            }
        });
    }
    showMatchedLetter() {
        $('button.key').on('click', e => {
            let keyValue = $(e.target).text();
            $( "#phrase ul li" ).each(function( index ) {
                if ($(this).text() == keyValue)  {
                    $(this).attr('class', 'show');
                }
            });
        });
        

    }
 }


 