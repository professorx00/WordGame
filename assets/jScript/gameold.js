//Create Global Variables
let wins = 0;
let losses = 0;
let badChoiceLetters = "";
let usedLetters = "";
let hiddenWord = "";

//Computers Choice and Choosen Word   
const movieTitles = ["Guardians of the Galaxy Vol. 2", "Avengers: Infinity War", "E.T.: The Extra-Terrestrial", "The Hunger Games: Mockingjay - Part 1", "X-Men: Days of Future Past", "Madagascar 3: Europe's Most Wanted"];
const computerGuess = Math.floor(Math.random() * movieTitles.length);
const compTitle = movieTitles[computerGuess];
const extras = ["'", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "&", ":", ".","-"]
//Checks to make sure that the extra characters are already set
for (i = 0; i < compTitle.length; i++) {
    let check = true;
    for (let e = 0; e < extras.length; e++) {
        if (compTitle[i] == extras[e]) {
            hiddenWord = hiddenWord + extras[e];
            check = false;
        }
    }
    if(check){
        hiddenWord = hiddenWord + "-";
    }
}

console.log(compTitle+" "+compTitle.length);
console.log(hiddenWord+" "+hiddenWord.length);



document.onkeyup = function (event) {
    //Get HTML Text Locations
    let winsText = document.getElementById("wins");
    let lossesText = document.getElementById("losses");
    let hiddenWordText = document.getElementById("hiddenWord");
    let guessLeftText = document.getElementById("guessLeft");
    let usedLetterText = document.getElementById("letterUsed");






    console.log("Computer Choice is " + movieTitles[computerGuess])

    //Get user input and save it
    const userLetter = event.key;
    console.log(userLetter);

    //check if user input has been used before
    if (!(usedLetters.includes(userLetter))) {
        usedLetters = usedLetters + userLetter;
        console.log(usedLetters);
    }
































}