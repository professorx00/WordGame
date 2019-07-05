let compChoice = "";
let letters =[];
let hiddenWord = "";


game = {
    letters: {
        correct: [],
        incorrect: [],
        used: [],
        unused: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        removeUnused: function (value) {
            indexOfValue = letters.unused.indexOf(value)
            letters.unused.splice(indexOfValue, 1);
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
        }
    },
    words: {
        availableWords: ["dog-style", "cat's", "Froggie run","super cow"],
        letters: [],
        hidden: {},
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
                const extras = ["'", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "&", ":", ".","-"]
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
            }
        }

   }
start = {
    initalize:{
        choice : function(){
            compChoice = game.words.compChoice();
        },
        hiddenWord: function(compChoice){
            hiddenWord = game.words.createHiddenWord(compChoice);
        }
    }
}

start.initalize.choice();
console.log(compChoice);
start.initalize.hiddenWord(compChoice);
console.log(hiddenWord);