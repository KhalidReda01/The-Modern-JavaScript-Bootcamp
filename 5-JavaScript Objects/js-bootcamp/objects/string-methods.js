let name = "     Khalid Reda";
// Length Property
console.log(name.length);
// Convert to upper case 

console.log(name.toUpperCase())

// Convert to lowe case
console.log(name.toLowerCase())
// Includes method
// let password = "abc123password098"
let password = "abc1230hellltest"
// console.log(password.includes('password',7))
console.log(password.includes('password'))
// Trim
console.log(name)
console.log(name.trim())

//Challengre Area
// isValidPassword
// create a function called isValid password
// length is more than 8 - and it doesn't contain the word password
console.log(password.length)
let isValidPassword = function (password) {
  if (password.length > 8 && password.includes('password') === false) {
 return "Your password is valid "
  } else {
    return "Pleae enter a valid password"
  }
  
}
// console.log(isValidPassword(password))
console.log(isValidPassword("test"))
console.log(isValidPassword("testloda24328"))
