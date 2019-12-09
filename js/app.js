/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//  const phrase = new Phrase();


// const phrase = new Phrase('Life is good!');
// console.log(`Phrase - phrase: ${}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
// });

const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};

const game = new Game();

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
