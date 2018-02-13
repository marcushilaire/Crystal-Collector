// Declaring variables
var goal;
var currentNumber = 0;
var crystalA;
var crystalB;
var crystalC;
var crystalD;
var wins = 0;
var losses = 0;
var crystalNumbers = []; // numbers 1 through 12 will be pushed to this array
var goalNumbers = []; // numbers 19 through 120 will be pushed to this array
// functions below

// setting up crystal number array
for (i=1; i<13; i++){
    crystalNumbers.push(i);
}

for (i=19; i<121; i++){
    goalNumbers.push(i);
}

// picking random numbers per crystal
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
var newRound = function() {
    randomCrystalA();
    randomCrystalB();
    randomCrystalC();
    randomCrystalD();
    randomGoal();
    currentNumber = 0;
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#goal").html("Your Goal: " + goal);
    $("#current").html("Your Score: " + currentNumber);
}

//  on click functions
$("#crystalA").on("click", function(){
    currentNumber = parseInt(crystalA) + parseInt(currentNumber);
    $("#current").html("Your Score: " + currentNumber);
    $(this).shake({
        speed: 50,
        distance: 5
    });
})

$("#crystalB").on("click", function(){
    currentNumber = parseInt(crystalB) + parseInt(currentNumber);
    $("#current").html("Your Score: " + currentNumber);
    $(this).shake({
        speed: 50,
        distance: 5
    });
})

$("#crystalC").on("click", function(){
    currentNumber = parseInt(crystalC) + parseInt(currentNumber);
    $("#current").html("Your Score: " + currentNumber);
    $(this).shake({
        speed: 50,
        distance: 5
    });  
})  

$("#crystalD").on("click", function(){
    currentNumber = parseInt(crystalD) + parseInt(currentNumber);
    $("#current").html("Your Score: " + currentNumber);
    $(this).shake({
        speed: 50,
        distance: 5
    });  
})
$("#play").on("click", function(){
    $("#play").html("New Round!");
})
// game conditionals
$(".crystal").on("click", function(){
    if (parseInt(currentNumber) === parseInt(goal)){
        wins++;
        newRound();
    };
    if (currentNumber > goal){
        losses++;
        newRound();
    };
})