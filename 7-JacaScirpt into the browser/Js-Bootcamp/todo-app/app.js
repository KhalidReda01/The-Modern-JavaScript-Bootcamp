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

// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(function (paragraph) {
//   // console.log(paragraph.textContent.includes('the'))
//   if (paragraph.textContent.includes('the')) {
//     // The issue was that you missed the textContent and just have the paragraph.includes is not a function
//     paragraph.remove()
//   }
// })
// // Add  new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)

//Challengre Area
const toDoo = [{
    text: 'clearn your clothes',
    completed: false
  },
  {
    text: 'Do your homwork',
    completed: true
  }, {
    text: 'make  your dinner',
    completed: true
  }, {
    text: 'help  your mom',
    completed: false
  }, {
    text: 'adjust your desk/workspace',
    completed: false
  }
]

//  You have  2 todos left this is the instructor not you
//  You have 3 todos left (p element)
// Add a p for each todo above (use text value )
// There is Modification here the instructor it tbe be Dynamic not static

//Old solution understand the new one Any way you make the hard part and didn't think that he want the other part Dynamicaly
// const createP = document.createElement('p')
//   createP.textContent = 'You have 3 todos left'
// document.querySelector('body').appendChild(createP)
const incompleteTodos = toDoo.filter(function (todo) {
  return !todo.completed
})

console.log(incompleteTodos)
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)
/*Instrucor solution He used filter to return and object/array or the false  todos  */

toDoo.forEach(function (todo) {
    const createtodoP = document.createElement('p')

  if (todo.completed === false) {
    createtodoP.textContent = todo.text
    document.querySelector('body').appendChild(createtodoP)
  } else {
    
    // console.log('there is a problem here the problem was just you mistyped textContent you wrote textConent but you are the one who disover that ')
  }
 
})

// Handling User  Interaction Challengre Area 
document.querySelector('button').addEventListener('click', function (e) {
  console.log("I'm ading a new todo")
})
//Challenge Area Advanced Queries
document.querySelector('#add-todo').addEventListener('click', function (e) {
  e.target.textContent="You Added a todo"
})

// Challenge Area
// I didn't understand what he want me do but He said I have to create an input and add an event listener to it
document.querySelector('#create-todo').addEventListener("change", function (e) {
  console.log(e.target.value)
})