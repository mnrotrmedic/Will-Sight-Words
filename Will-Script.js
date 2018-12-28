
var sightWords = ["what", "little", "for", "was", "of", "they", "said", "want", "here", "this", "help", "too", "has",
    "play", "look", "good", "who", "come", "does", "where", "white", "do", "are", "with"
];


var randomNum = Math.floor(Math.random() * sightWords.length);
var word;

newWord();

function displayWord() {
    document.getElementById("word").innerHTML = word;
}

// On click "RIGHT", remove correct word from array & run function newWord ()
document.getElementById("right").onclick = function removeRight() {
    sightWords.splice(randomNum, 1);
    newWord();
}

// On click "NO", leave word in array and randomly assign a new one.
document.getElementById("no").onclick = function tryAgain() {
    sightWords.push(sightWords[randomNum]);
    console.log(sightWords);
    newWord();
}

// Calculate new word based on remaining words in array.
function newWord() {
    randomNum = Math.floor(Math.random() * sightWords.length);
    var word = sightWords[randomNum];
    document.getElementById("word").innerHTML = word;
    console.log("Word: " + word);
    logIt();
}

function logIt() {
    console.log("Random number: " + randomNum);
    console.log("Array length: " + sightWords.length)
    console.log(sightWords);;
    console.log("------------------------------------------------------------------")
}




// startOver();

// function startOver() {
//     console.log(sightWords.length);
//     var randomNum = Math.floor(Math.random() * sightWords.length);
//     var word = sightWords[randomNum];
//     document.getElementById("word").innerHTML = word;
//     document.getElementById("rightWord").innerHTML = word + randomNum;
// }

//Random number determined by the length of the sightWords array.
// console.log(randomNum);
// console.log(word);

//Write word to DOM

//function to cycle words based on yes click & remove correct word
// document.getElementById("right").onclick = function () {
//     sightWords.splice(randomNum, 1);
//     console.log(sightWords.length);
//     // startOver();
//     console.log(sightWords);

// }


//function for no click that leaves the word in the array, increments the misses
//maybe have word written to a separate div that can be displayed at the end of the game
