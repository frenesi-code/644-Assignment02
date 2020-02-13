/** 
 * In this part of the assignment you will explore what you’ve learned so far about variables, 
 * prompts, conditionals, operators, math, and more to create a “coin flip game”. 
 * To complete the game follow the steps outlined below:
 */

// Begin your application by creating a variable called coinFlip and set it equal to 
// random number. You will have to use a Math method to get this number.
let coinFlip = parseInt(Math.round(Math.random() * 10));

// Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
let choice = window.prompt("Heads or Tails");

// Use a conditional to check the result of the coin flip. If it’s less than a certain number, 
// it will be heads. If   greater than a certain number, it will be tails. 
let certainNumber = 5;
let result = '';

if (coinFlip === certainNumber) {
    result = "Random number is equal to Certain Number!";
}

if (coinFlip > certainNumber) {
    result = "Tails";
}

if (coinFlip < certainNumber) {
    result = "Heads";
}

// If the result is heads and the user selects heads, display the following message within an alert: 
// The flip was heads and you chose heads...you win!

if (result === "Heads" && choice === "Heads") {
    window.alert("The flip was heads and you chose heads...you win!");    
} 

// If the result is heads and the user selects tails, display the following message within an alert: 
// The flip was heads but you chose tails...you lose!

if (result === "Heads" && choice === "Tails") {
    window.alert("The flip was heads but you chose tails...you lose!");    
}

// If the result is tails and the user selects heads, display the following message within an alert: 
// The flip was tails but you chose heads...you lose!

if (result === "Tails" && choice === "Heads") {
    window.alert("The flip was tails but you chose heads...you lose!");    
}

// If the result is tails and the user selects tails, display the following message within an alert: 
// The flip was tails and you chose tails...you win!

if (result === "Tails" && choice === "Tails") {
    window.alert("The flip was tails and you chose tails...you win!");    
}

window.alert("Random " + coinFlip + " X " + certainNumber +  " Certain." + "\n\n" + result);



