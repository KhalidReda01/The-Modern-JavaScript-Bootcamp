/**
 * Second Challenge
 * 1. Create and link a Jacascript file to HTML
 * 2. Remove all p that have "The" in the text 
 *  
//  */
// const todos = document.querySelectorAll('p')
// // console.log(todos[3].textContent.search('the'))
// todos.forEach(function (todo) {
//   // todo.includes("the")
//   // const findThe = todo.search('the')
//   // console.log(findThe)
   
  
// })
 
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function (paragraph) {
  // console.log(paragraph.textContent.includes('the'))
  if (paragraph.textContent.includes('the')) {
    // The issue was that you missed the textContent and just have the paragraph.includes is not a function
    paragraph.remove()
  }
})