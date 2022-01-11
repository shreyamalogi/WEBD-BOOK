
//goal: to take in 2 inputs and display their love percentage


//math.floor gives whole number, math.random gives
// random number between 0 to 0.9999999999 (upto 16 decimal places)
//so to get a random number betwween 0 to 100 we multiply with 100 and add 1
//eg 


// var n = Math.random();
// n = (n*100)+1;
// var wholeNumber = Math.floor(n)
// console.log(fill);
// alert(wholeNumber);

var userName1 = prompt("enter your name:");
var userName2 = prompt("enter your name:");

var loveCalculator = Math.floor(Math.random() * 101); 
alert("your love percentage is " + loveCalculator + "%");