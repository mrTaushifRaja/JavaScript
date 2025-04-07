/*Create a game where you start with any random game.asl the user 
to keep guessing the game number until the user enters corect value.*/

let gamNum=25;
let userNum = prompt("Guess the game number:");

while(userNum !== gameNum){ //game
 userNum = prompt("you entered wrong number.Guess again:"); 
}
console.log("congratulation,you entered the right number");
