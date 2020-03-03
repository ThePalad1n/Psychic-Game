
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var guessesRemaining = 9;
    var losses = 0;
    var previousGuesses = [];

    /*
    var userChoiceText = document.getElementById("userchoice");
    var alphaChoiceText = document.getElementById("alpha");
    var winsText = document.getElementById("wins");
    var losesText = document.getElementById("losses");
    var guessesText = document.getElementById("guessesRemaining");
*/
 //When key is released it becomes the users guess
function startGame(){
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if (guessesRemaining > 0) {
            if (userGuess == alphaSelect.alphaChoice) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                resetGame();
            }
        } 
        else if (guessesRemaining == 0) {
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            resetGame();
        }
        return false;
    };
}   

function ugr() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessRemaining').innerHTML = "Guesses remaining: " + guessesRemaining;
};

function alphaSelect() {
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


startGame();