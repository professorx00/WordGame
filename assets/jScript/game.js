let compChoice;
let hiddenWord = "";
let guesses = 10;
let win = 0;
let loss = 0;
let gameover = false;


gameData = {
    availableWords: ["dog style", "cat's", "Froggie run", "super cow"],
    hidden: {},
    correct: [],
    incorrect: [],
    used: [""],
    unused: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    removeUnused: function (value) {
        indexOfValue = this.unused.indexOf(value)
        if (indexOfValue >= 0) {
            this.unused.splice(indexOfValue, 1);
        }
    },
    addToCorrect: function (value) {
        check = function (letter) {
            return letter == value;
        }
        let found = this.correct.find(check);
        if (!found) {
            this.correct.push(value);
            this.used.push(value);
        }
    },
    addToIncorrect: function (value) {
        check = function (letter) {
            return letter == value;
        }
        let found = this.incorrect.find(check);
        if (!found) {
            this.incorrect.push(value);
            this.used.push(value);
        }
    },
    reset: function () {
        guesses = 10;
        this.correct.length = 0;
        this.incorrect.length = 0;
        this.used.length = 0;
        this.unused = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    },
    random: function () {
        l = this.availableWords.length;
        return Math.floor(Math.random() * l);
    },
    compChoice: function () {
        value = this.random();
        let choosen = this.availableWords[value];
        choosen = choosen.toLowerCase();
        return (choosen);
    },
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
    checkHidden: function (word) {
        if (word.search("-") < 0) {
            return false;
        }
        else {
            return true;
        }

    },
    checkLetter: function (letter) {
        this.removeUnused(letter);
        let lCheck = false;
        for (let x = 0; x < compChoice.length; x++) {
            if (compChoice[x] == letter) {
                hiddenWord = hiddenWord.substring(0, x) + letter + hiddenWord.substring(x + 1);
                lCheck = true;
            }
        }
        if (lCheck) {
            this.addToCorrect(letter);
        }
        else {
            let usedLetter = "";
            for (let u = 0; u < this.used.length; u++) {
                if (this.used[u] == letter) {
                    console.log("used letter " + this.used[u])
                    usedLetter = "used";
                }
            }
            if(usedLetter=="used"){
                this.addToIncorrect(letter);
                console.log(`this letter ${letter} has been used.`)
            }
            else{
                this.addToIncorrect(letter);
                guesses = guesses - 1;
            }    
            

        }

    }
}
start = {
    choice: function () {
        compChoice = gameData.compChoice();
    },
    hiddenWord: function (compChoice) {
        hiddenWord = gameData.createHiddenWord(compChoice);
    }
}


start.choice();
console.log("[start]computers pick "+compChoice);
start.hiddenWord(compChoice);
console.log("[start]hidden word "+hiddenWord);


document.onkeydown = function (event) {
    let run = gameData.checkHidden(hiddenWord);
    if (run || !gameover || guesses > 0) {
        gameData.checkLetter(event.key);
        console.log("[key down]hidden word "+hiddenWord);

    }
}
document.onkeyup = function (event) {
    console.log("[keyup]Number of guesses: "+guesses);
    if (!gameData.checkHidden(hiddenWord)) {
        console.log("You got it");
        win+=1; 
        console.log(win);
        console.log(loss);
        let restart = confirm("do you want to play again?");
        if (restart) {
            gameData.reset();
            start.choice();
            start.hiddenWord(compChoice);
        }
    }
    else if(guesses <= 0){
        console.log("Game Over");
        console.log(win);
        loss+=1;
        console.log(loss);
        let restart = confirm("You Lost! Do you want to play again?");
        if (restart) {
            gameData.reset();
            start.choice();
            start.hiddenWord(compChoice);
        }
    }
}








