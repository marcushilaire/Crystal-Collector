var goal = 0;
var currentNumber = 0;
var crystalA = 0;
var crystalB = 0;
var crystalC = 0;
var crystalD = 0;
var wins = 0;
var losses = 0;
var crystalNumbers = []; //1 through 12
var goalNumbers = []; //19 through 120
// setting up crystal number array
for (i=1; i<13; i++){
    crystalNumbers.push(i);
};
for (i=19; i<121; i++){
    goalNumbers.push(i);
};
console.log(crystalNumbers);
console.log(goalNumbers);
