let temp = 32;
// === - equality operator
// !== - no equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to opeator
// >= - greater than or equal to opeator 
// let isFreezing = temp !== 32;
// let isFreezing = temp === 31;
let isFreezing = temp <=32;
console.log(isFreezing)

// Challenge area
// create age set to your age
let age =30;
let calculate;
if (age < 7) {
   calculate = "child"
} else if (age > 65) {
  calculate = "senior"
}

// else {
//   console.log("your age doesn't have a discount")
// }

// calculate is child - if they are 7 or under
// calculate is senior - if the are 65 or older
// print is child value
// print is senior value
console.log("You are a age is " + age + " you are a " + calculate + " You deserve a discount")
// I used if else instead much better 
let isChild = age <= 7;
let isSenior = age >= 65;
console.log(isChild)
console.log(isSenior)