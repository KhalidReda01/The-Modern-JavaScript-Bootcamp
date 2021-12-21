//Function - input (argument) , code, output (return value)
// let greetUser = function () {
//   console.log('Welcome user!')
// }
// greetUser();
// greetUser();
// greetUser();

// let square = function (num) {
//   let result = num * num
//   return result
//   // console.log(num)
// }
// // square(10)

// let value = square(3)
// let otherValue = square(10)
// console.log(value)
// console.log(otherValue)

// Challenge Area
// ConvertFahrenheitToCelsius
////T(°C) = (T(°F) - 32) × 5/9

// let celsius = (fahrenheit - 32) * 5 / 9;

let celsius = function (fahrenheit) {
  let result = (fahrenheit - 32) * 5 / 9
  // console.log(result)
  // return isn't working but just console.log why yes I understnad why because I have to assign the result in a decalred value then print it I tried that and it worked Nice
  return result
}
// Call a couple of items (32 - 0 ) (68 - 20)
// Print the converted values 
let tempOne=celsius(32)
let tempTwo=celsius(68)
console.log(tempOne)
console.log(tempTwo)

// let convertFahrenheitToCelsius = function (fahrenheit) {
//   let celsius = (fahrenheit - 32) * 5 / 9
//   return celsius
// }

// let tempOne = convertFahrenheitToCelsius(32)
// let tempTwo = convertFahrenheitToCelsius(68)

// console.log(tempOne)
// console.log(tempTwo)
// console.log(convertFahrenheitToCelsius(32))
