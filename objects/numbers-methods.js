let num = 103.941

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10
let max = 20
let randomNum = Math.floor (Math.random() * (max - min +1 )) + min
console.log(randomNum);



let makeGuess = function(guess){
let minimum = 1
let maximum = 5 
let random = Math.floor (Math.random() * (maximum - minimum + 1)) + minimum

return guess === random }
 
console.log(makeGuess(1));