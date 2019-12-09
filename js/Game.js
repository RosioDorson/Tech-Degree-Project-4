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
     this.activePhrase = null;
    };
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * 5);
        return this.phrases[randomPhrase];
    };
 }
