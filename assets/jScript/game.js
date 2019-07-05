let compChoice;
let letters = [];
let hiddenWord = "";


gameData = {
    availableWords: ["dog-style", "cat's", "Froggie run", "super cow"],
    letters: [],
    hidden: {},
    correct: [],
    incorrect: [],
    used: [],
    unused: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    removeUnused: function (value) {
        indexOfValue = this.unused.indexOf(value)
        this.unused.splice(indexOfValue, 1);
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
        return this.availableWords[value];
    },
    lettersInWord: function (value) {
        for (let c = 0; c < value.length; c++) {
            this.letters.push(value[c])
        }
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
    checkHidden: function(word) {
        if (word.search("-") < 0) {
            return false;
        }
        else {
            return true;
        }

    },
    checkLetter: function(letter){
        console.log(compChoice.length);
        console.log(letter);
        console.log(hiddenWord);
        for(let x=0;x<compChoice.length;x++){
            if(compChoice[x]==letter){
                hiddenWord = hiddenWord.substring(0, x) + letter + hiddenWord.substring(x+1);
                console.log(hiddenWord);
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
console.log(compChoice);
start.hiddenWord(compChoice);
console.log(hiddenWord);


document.onkeyup = function (event) {
    let run = gameData.checkHidden(hiddenWord);
    if (run) {
        console.log(run);
        gameData.checkLetter(event.key);
        
    }
}







