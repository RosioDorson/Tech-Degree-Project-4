/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay () {
       const split = this.phrase.split('');
       console.log(split);
       for (let i = 0; i < split.length; i += 1) {
        if (this.phrase.charAt(i) === ' ') {
        const space = document.createElement('li');
        space.setAttribute("class", "space");
        phrase.appendChild(space); 
        } else { 
        const letter = document.createElement('li');
        letter.setAttribute("class", "hide letter");
        phrase.appendChild(letter);
        }
    }
}
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
    if(this.phrase.includes(letter)) {
        return true;
    } else {
        return false;
    }
};
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
let matchedLetter = document.querySelectorAll(`.letter`);
for (let i = 0; i < matchedLetter.length; i++)
if (matchedLetter[i].innerHTML === letter) {
    matchedLetter[i].removeAttribute("class", "hide");
    matchedLetter[i].setAttribute("class", "show");
    }
};
};
