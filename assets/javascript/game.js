
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var guessesRemaining = 9;
    var losses = 0;
    var previousGuesses = [];

    var userChoiceText = document.getElementById("userchoice-text");
    var alphaChoiceText = document.getElementById("alphabet-text");
    var winsText = document.getElementById("wins-text");
    var losesText = document.getElementById("loses-text");
    var guessesText = document.getElementById("guesses-text");

function ugr() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessRemaining').innerHTML = "Guesses remaining: " + guessesRemaining;
};

function alphaChoice() {
    this.alphaChoice = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function upg() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#previousGuesses').innerHTML = "Previous Guesses: " + previousGuesses.join(', ');
};

function updateScore() {
    wins++;
    resetGame();
};

function resetGame(){
    var guessesRemaining = 9;
    var previousGuesses = [];
    startGame();
};

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var isIn = alphaChoice.includes(userGuess);
    var isInn = previousGuesses.includes(userGuess);
    // console.log(checkDouble);
    if (isInn === true){
        console.log("double letter");
        alert("That letter has already been guessed, would you try again?");
        return false;
    } 
    else if (isIn === true) {
        //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        ugr();
        upg();

        if (guessesRemaining > 0) {
            if (userGuess == alphaChoice) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                reset();
            }
        } else if (guessesRemaining == 0) {
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
        }
        return false;
        } 
    else {
        alert("error");
    }
};