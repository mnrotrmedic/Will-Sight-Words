
var sightWords = ["what", "little", "for", "was", "of", "they", "said", "want", "here", "this", "help", "too", "has",
    // "play", "look", "good", "who", "come", "does", "where", "white", "do", "are", "with"
];


var randomNum = Math.floor(Math.random() * sightWords.length);
var word = sightWords[randomNum];

console.log(randomNum);
console.log(word);
console.log(sightWords.length);


displayWord();

function displayWord () {
    document.getElementById("word").innerHTML = word;
}

document.getElementById("right").onclick = function removeRight () {
    sightWords.splice(randomNum, 1);
    console.log(sightWords);
    var randomNum = Math.floor(Math.random() * sightWords.length);
    var word = sightWords[randomNum];
    console.log("New number: " + randomNum);
    console.log("New word: " + word);

}




// startOver();

// function startOver() {
//     console.log(sightWords.length);
    // var randomNum = Math.floor(Math.random() * sightWords.length);
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

