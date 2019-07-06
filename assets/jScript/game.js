let compChoice;
let hiddenWord = "";
let guesses = 10;
let win = 0;
let loss = 0;
let gameover = false;
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabool = false;
let docHiddenWord = document.getElementById("hiddenWord");
let docWin = document.getElementById("wins");
let docLoss = document.getElementById("loss");
let docIncUsedLetters = document.getElementById("incorrectUsed");
let docCorUsedLetters = document.getElementById("correctUsed");
let docGuesses = document.getElementById("guessLeft");
let correctletters ="";
let corLetter = "";
let incorrectletters ="";
let incorLetter = "";
sounds = {

}

movieData = {
    "avatar": {
        title: "avatar",
        imgsrc: "./assets/imgs/movies/avatar.jpeg"
    },
    "avengers: endgame": {
        title: "Avengers: Endgame",
        imgsrc: "./assets/imgs/movies/Avengersendgame.jpeg"
    },
    "titanic": {
        title: "Titanic",
        imgsrc: "./assets/imgs/movies/Titanic.jpeg"
    },
    "star wars: the force awakens": {
        title: "Star Wars: The Force Awakens",
        imgsrc: "./assets/imgs/movies/swforce.jpeg"
    },
    "jurassic world": {
        title: "Jurassic World",
        imgsrc: "./assets/imgs/movies/jurassicWorld.jpeg"
    },
    "black panther": {
        title: "Black Panther",
        imgsrc: "./assets/imgs/movies/blackpanther.jpeg"
    },
    "harry potter and the deathly hallows": {
        title: "Harry Potter and the Deathly Hallows",
        imgsrc: "./assets/imgs/movies/harrypotter.jpeg"
    },
    "frozen": {
        title: "Frozen",
        imgsrc: "./assets/imgs/movies/frozen.jpeg"
    },
    "beauty and the beast": {
        title: "Beauty and the Beast",
        imgsrc: "./assets/imgs/movies/beautyandbeast.jpeg"
    },
    "incredibles 2": {
        title: "Incredibles 2",
        imgsrc: "./assets/imgs/movies/incredibles.jpeg"
    },
    "the fate of the furious": {
        title: "The Fate of the Furious",
        imgsrc: "./assets/imgs/movies/fastandfurious.jpeg"
    },
    "aquaman": {
        title: "Aquaman",
        imgsrc: "./assets/imgs/movies/aquaman.jpeg"
    },
    "captain marvel": {
        title: "Captain Marvel",
        imgsrc: "./assets/imgs/movies/cptmarvel.jpeg"
    },
    "wonder woman": {
        title: "Wonder Woman",
        imgsrc: "./assets/imgs/movies/wonderwoman.jpeg"
    },
    "the lord of the rings: the return of the king": {
        title: "The Lord of the Rings: The Return of the King",
        imgsrc: "./assets/imgs/movies/lordoftherings.jpeg"
    },
    "skyfall": {
        title: "Skyfall",
        imgsrc: "./assets/imgs/movies/jamesbond.jpeg"
    },
    "the dark knight rises": {
        title: "The Dark Knight Rises",
        imgsrc: "./assets/imgs/movies/batman.jpeg"
    },
    "toy story 3": {
        title: "Toy Story 3",
        imgsrc: "./assets/imgs/movies/toystory.jpeg"
    },
    "alice in wonderland": {
        title: "Alice in Wonderland",
        imgsrc: "./assets/imgs/movies/AliceinWonderland.jpeg"
    },
    "zootopia": {
        title: "Zootopia",
        imgsrc: "./assets/imgs/movies/Zootopia.jpeg"
    },
    "the lion king": {
        title: "The Lion King",
        imgsrc: "./assets/imgs/movies/loinking.jpeg"
    }

}

gameData = {
    //Game Specific Variables
    availableWords: ["Avatar","Avengers: Endgame","Titanic","Star Wars: The Force Awakens","Jurassic World","Black Panther","Harry Potter and the Deathly Hallows","Frozen","Beauty and the Beast","Incredibles 2","The Fate of the Furious","Aquaman","Captain Marvel","Wonder Woman","The Lord of the Rings: The Return of the King","Skyfall","The Dark Knight Rises","Toy Story 3","Alice in Wonderland","Zootopia","The Lion King"],
    hidden: {},
    correct: [],
    incorrect: [],
    used: [""],
    imgsrc:"",
    // unused: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    //Game Specific Methods
    //
    // removeUnused: function (value) {
    //     indexOfValue = this.unused.indexOf(value)
    //     if (indexOfValue >= 0) {
    //         this.unused.splice(indexOfValue, 1);
    //     }
    // },

    //Adds to the correct letter storage
    addToCorrect: function (value) {
        check = function (letter) {
            return letter == value;
        }
        let found = this.correct.find(check);
        if (!found) {
            this.correct.push(value);
            this.used.push(value);
            for(let alpha=0;alpha<gameData.correct.length;alpha++){
                console.log("the alpha is "+alpha);
                console.log(gameData.correct[alpha]);
                corLetter = gameData.correct[alpha];
            }
            correctletters = correctletters+" "+corLetter;
        }
    },
    //adds to the incorrect letter storage
    addToIncorrect: function (value) {
        check = function (letter) {
            return letter == value;
        }
        let found = this.incorrect.find(check);
        if (!found) {
            this.incorrect.push(value);
            this.used.push(value);
            for(let alpha=0;alpha<this.incorrect.length;alpha++){
                console.log("the alpha is "+alpha);
                console.log(this.incorrect[alpha]);
                incorLetter = this.incorrect[alpha];
            }
            incorrectletters = incorrectletters+" "+incorLetter;

        }
    },
    //resets and starts the game
    reset: function () {
        guesses = 10;
        this.correct.length = 0;
        this.incorrect.length = 0;
        this.used.length = 0;
        this.unused = alpha;
        correctletters="";
        incorrectletters="";
        docIncUsedLetters.textContent = incorrectletters;
        docCorUsedLetters.textContent = correctletters;
        docGuesses.textContent = guesses;
        start.choice();
        start.hiddenWord(compChoice);
        docHiddenWord.textContent = hiddenWord;

    },
    //chooses the computer choice
    compChoice: function () {
        value = Math.floor(Math.random() * this.availableWords.length)
        let choosen = this.availableWords[value];
        choosen = choosen.toLowerCase();
        this.imgsrc=movieData[choosen].imgsrc;
        console.log(this.imgsrc);
        return (choosen);
    },
    //Creates the Hidden word from Computer Choice
    createHiddenWord: function (word) {
        let hiddenWord = "";
        const extras = ["'", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "&", ":", ".", "-"]
        for (i = 0; i < word.length; i++) {
            let check = true;
            for (let e = 0; e < extras.length; e++) {
                if (word[i] == extras[e]) {
                    hiddenWord = hiddenWord + extras[e];
                    check = false;
                }
            }
            if (check) {
                hiddenWord = hiddenWord + "-";
            }
        }
        return hiddenWord;
    },
    //Checks to make sure there is no '-' in the word. It also means we can not have any words with a '-'
    checkHidden: function (word) {
        if (word.search("-") < 0) {
            return false;
        }
        else {
            return true;
        }

    },
    //Checks to see if the User Choosen Letter is in the Computer Choosen word then removes the '-' with the right letter
    checkLetter: function (letter) {
        // this.removeUnused(letter);
        let lCheck = false;// Sets check to default to false
        //goes through the computer choice and sees if the letter exisit if it does it replaces and sets check to True indicating letter exisited.
        for (let x = 0; x < compChoice.length; x++) {
            if (compChoice[x] == letter) {
                hiddenWord = hiddenWord.substring(0, x) + letter + hiddenWord.substring(x + 1);
                lCheck = true;
            }
        }

        //if check for exisit is true then call the method to add to correct letter
        if (lCheck) {
            this.addToCorrect(letter);
        }
        else {
            //If it did not exisit
            let usedLetter = false;//establish check to see if the letter had been used prior
            for (let u = 0; u < this.used.length; u++) {
                if (this.used[u] == letter) {
                    console.log("used letter " + this.used[u])
                    usedLetter = true;
                }
            }

            // actions to do if the letter was found to not be used
            if(usedLetter){
                //if found in the used letters
                // this.addToIncorrect(letter);
                console.log(`this letter ${letter} has been used.`)
            }
            else{
                //still adds to incorrect but minuses guess since its new
                this.addToIncorrect(letter);
                guesses = guesses - 1;
            }    
            

        }

    }
}
start = {
    //creates a computer choice and hidden word
    choice: function () {
        compChoice = gameData.compChoice();
    },
    hiddenWord: function (compChoice) {
        hiddenWord = gameData.createHiddenWord(compChoice);
    }
}

//Starts the game
gameData.reset();
// checks for keydown when down runs game
document.onkeydown = function (event) {
    for(let a=0;a<alpha.length;a++){
        if(alpha[a]==event.key){
            alphabool = true;
        }
    }
    if(alphabool){
        let run = gameData.checkHidden(hiddenWord);
        if (run || !gameover || guesses > 0) {
            gameData.checkLetter(event.key);
            console.log("[key down]hidden word "+hiddenWord);
            docHiddenWord.textContent = hiddenWord;
            
            
            console.log(correctletters)
            docIncUsedLetters.textContent = incorrectletters;
            docCorUsedLetters.textContent = correctletters;
            // docGuesses.textContent = "";

        }
        
    }
    else{
        console.log("please choose a letter between a-z.");
    }
}
//on Keyup checks win loss and hidden comparison
document.onkeyup = function (event) {
    // Log Guess Left
    console.log("[keyup]Number of guesses: "+guesses);
    docGuesses.textContent = guesses;
    //**************** WIN SCENERIO**************//
    if (!gameData.checkHidden(hiddenWord)) {
    
        console.log("You got it");
        win+=1; 
        // console.log(win);
        // console.log(loss);
        docWin.textContent = win;
        docLoss.textContent = loss;
        let restart = confirm("do you want to play again?");
        
        if (restart) {
            gameData.reset();
            
        }
    }
    //***************** */Game Over Scenerio ****************
    else if(guesses <= 0){
        console.log("Game Over");
        // console.log(win);
        loss+=1;
        // console.log(loss);
        docWin.textContent = win;
        docLoss.textContent = loss;
        //Ask if they want to play again
        let restart = confirm("You Lost! Do you want to play again?");
        if (restart) {
            //if yes resets game
            gameData.reset();
        }
    }
}








