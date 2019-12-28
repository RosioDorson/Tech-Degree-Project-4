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
            document.getElementById("phrase").append('<li class ="space">' + this.phrase.charAt(i) + '</li>');
        } else { 
            document.getElementById("phrase").append('<li class= "hide letter">' + this.phrase.charAt(i) + '</li>');
        }
    }
    // checkLetter() {

    // }
    // showMatchedLetter() {

    // }
};
}
 