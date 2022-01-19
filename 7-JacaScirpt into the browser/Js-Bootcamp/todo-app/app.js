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
const createP = document.createElement('p')
  createP.textContent = 'You have 3 todos left'
document.querySelector('body').appendChild(createP)

toDoo.forEach(function (todo) {
  const createtodoP = document.createElement('p')

  if (todo.completed === false) {
    createtodoP.textContent = todo.text
    document.querySelector('body').appendChild(createtodoP)
  } else {
    
    // console.log('there is a problem here the problem was just you mistyped textContent you wrote textConent but you are the one who disover that ')
  }
 
})