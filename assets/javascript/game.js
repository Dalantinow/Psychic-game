var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var availableGuesses = 9;

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var pastGuesses = document.getElementById("past-guesses");
var newText = "Your guesses so far:"

function newgame(availableGuesses) {
    this.availableGuesses = 9;
    // pastGuesses = ""; tried this but not working totally
}

document.onkeydown = function (event) {

    var userGuess = event.key;

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (typeof userGuess === "string") {
        availableGuesses--;

        if (userGuess === computerGuess) {
            wins++;
            newgame();
            
        }
        else if (userGuess != computerGuess && availableGuesses === 0) {
            losses++;
            newgame();
            
           

        }
    }

    winsText.textContent = "Wins:" + wins;
    lossesText.textContent = "Losses:" + losses;
    guessesLeft.textContent = "Guesses left:" + availableGuesses;
    newText = newText + userGuess
    pastGuesses.textContent = newText

    // can't get my letters to reset after winning or losing
    
}

