/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //* test for step 2 *//

// const phrase = new Phrase('Life is good!');
// console.log(`Phrase - phrase: ${}`);

//* test for step 3 *//

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
// });

//* test for step 4 *//

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
//* test for step 5 *//

//const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//* test for step 6 *//

// game.getRandomPhrase().addPhraseToDisplay();

//* test for step 7 *//

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);



