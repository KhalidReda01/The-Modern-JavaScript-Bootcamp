let num = 103.941;
console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 0;
let max = 1;
// to get that done we use a forumula math.floor(Math.randomw() *(max-min +1))+min
let randomNum =Math.floor(Math.random()*(max-min +1)) 
console.log(randomNum)
// Test this formula
// console.log(Math.floor(Math.random() * (12 - 10) + 10))
// Math.floor(Math.random() * (max - min + 1) + min)
// Challenge Area
// 1-5 -true if correct - false if not correct
let makeGuess = function (guessNum) {
  let randomNumbers = Math.floor(Math.random() * (5 - 1 + 1) + 1)
  console .log(`your guessed Number is ${guessNum} and the random Number is ${randomNumbers}`)
return randomNumbers ===guessNum
}
console.log(makeGuess(5))