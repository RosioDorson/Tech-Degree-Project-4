/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            new Phrase("Toto Ive got a feeling we're not in Kansas anymore"),
            new Phrase("May the Force be with you"),
            new Phrase("My precious"),
            new Phrase("Bond James Bond"),
            new Phrase("Im king of the world"),
        ];
        this.activePhrase = this.getRandomPhrase();
    };
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };
    startGame() {
       document.getElementById('overlay').style.visibility = "hidden";
       this.activePhrase.addPhraseToDisplay();
    }

    // handleInteraction() {

    // }
    // removeLife() {

    // }
    // checkForWin() {

    // }
    // gameOver() {

    // }
 }
