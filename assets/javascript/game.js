// Declaring variables
var goal = 0;
var currentNumber = 0;
var crystalA = 0;
var crystalB = 0;
var crystalC = 0;
var crystalD = 0;
var wins = 0;
var losses = 0;
var crystalNumbers = []; // numbers 1 through 12 will be pushed to this array
var goalNumbers = []; // numbers 19 through 120 will be pushed to this array
// functions below

// setting up crystal number array
for (i=1; i<13; i++){
    crystalNumbers.push(i);
}
console.log(" 1 through 12 " + crystalNumbers)

for (i=19; i<121; i++){
    goalNumbers.push(i);
}
console.log(" 19 through 120 " + goalNumbers)

var randomCrystalA = function() {
    crystalA = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log("crystal A " + crystalA);
}
var randomCrystalB = function() {
    crystalB = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log("crystal B " + crystalB);
}
var randomCrystalC = function () {
    crystalC = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log("crystal C " + crystalC);
}
var randomCrystalD = function () {
    crystalD = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log("crystal D " + crystalD);
}
var randomGoal = function () {
    goal = goalNumbers[Math.floor(Math.random()* goalNumbers.length)];
    console.log("Goal " + goal);
}