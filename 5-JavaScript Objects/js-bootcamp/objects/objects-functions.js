let myBook = {
  title: '1984',
  author: "George Orwell",
  pageCount:236
}

let otherBook = {
  title: 'A peoples History',
  author: "Howard zinn",
  pageCount:723
}
let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary:`${book.title} is ${book.pageCount} pages  long`
  }
  // console.log(`${book.title} by ${book.author}`)
}
let bookSummary=getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)
// Challenge Area
// Challenge Area on functions-101.js
// Create function - take fahrenheit in -return object with all three 

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
let kelvin = (fahrenheit + 459.67) * 5 / 9
  return  {
    fahrenheit: `The Fahrenheit degree is ${fahrenheit}`,
    celsius: `The celsius degree is ${celsius}`,
      kelvin:`The  kelvin degree is ${kelvin}`

  }
}

// let tempOne = convertFahrenheitToCelsius(32)
let tempOne = convertFahrenheitToCelsius(20)
// let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne.celsius)
console.log(tempOne.kelvin)
// console.log(tempTwo)
//temp-conversion.js
// let fahrenheit = 50 // 0c - 273.15k
// let celsius = (fahrenheit - 32) * 5 / 9
// let kelvin = (fahrenheit + 459.67) * 5 / 9

// console.log(celsius)
// console.log(kelvin)