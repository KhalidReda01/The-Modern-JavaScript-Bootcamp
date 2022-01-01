// // Create an array with five todas
// // You have x todos
// // console.log(`You have ${toDo.length} todos`)
// // Print the first and second to last items = > Todo : walk the dog
// // console.log(toDo[0])
// // console.log(toDo[3])// toDo[toDo.lenght-1]
// // Challengre Area
// // Delete the 3rd Items
// // console.log(toDo)
// // // Add a new item onto the end
// // console.log(toDo.length)

// // toDo.push("Eat your lunch")
// // console.log(toDo)
// // console.log(toDo.length)
// // // Remove the first item from the list
// // // we can use shift and splice
// // console.log(toDo)
// // console.log(toDo[0])
// // toDo.shift()
// // console.log(toDo[0])
// // toDo.splice(0, 1)
// // console.log(toDo[0])
// // console.log(toDo)
// // challengre Area
// toDo.splice(2, 1)
// toDo.push("Buy Coffee")
// toDo.shift()
// console.log(toDo)
// //1.The first Item
// //2.The second Items
// // toDo.forEach(function (item, index) {
// //   console.log(`${index+1}. ${item}`)
// //   // console.log(`ToDo index is ${index} ToDo Item is ${item}`)
// //   // console.log(item)
// // })

// // 1. Do your homwork
// // 2.make  your dinner
// console.log("##################")
// console.log(toDo.length)
// // Challengre Area
// for (let count = 0; count < toDo.length; count++){
//   // for (let  count=toDo.length-1 ; count >=0 ; count--){//reverse
// console.log(`${count+1}. ${toDo[count]}`)
//   // console.log(toDo[count])
// }
// const toDo = ['Do your homwork','make  your dinner','help  your mom','adjust your desk/workspace']
// Challenge Area
// 1. Convert array to arry of objects -> text completed
const toDoo = [
  {
    text: 'Do your homwork', completed: true
  }, {
    text: 'make  your dinner', completed: true
  }, {
    text: 'help  your mom', completed: false
  }, {
    text: 'adjust your desk/workspace', completed: false
  }]
// // 2.create a function to work with the array of object allow us to remove todo by text value
// const deleteToDoo = function (todoo,arrayText) {
//   // if (toDoo.text.toLowerCase() === arrayText.toLowerCase) {
//   // console.log(todooo.text)
//   // console.log(todooo.completed)
//   // console.log(arrayText)
  
//   return todoo.find(function (todoo,index) {
//     // console.log(todo.text)
//       // console.log(arrayText)
//     // console.log(arrayText)
//     // return toDoo.text.toLowerCase() === arrayText.toLowerCase()// not again
//     // console.log(todo.text)
//     if (todoo.text.toLowerCase() === arrayText.toLowerCase() && todoo.completed === true) {
//       console.log(index)
//      console.log(todoo.splice(0, 1))
//       // return todo.text = 'Deleted to do'
//       return todoo.text = 'Deleted to do'

//   }else {
//       return todoo.text.toLowerCase() === arrayText.toLowerCase()

//     }
     
//   })
// }
// const todo =deleteToDoo(toDoo,'Do your homwork')
// // const todo =deleteToDoo(toDoo,'adjust your desk/workspace')
// console.log(todo)

// // console.log(toDoo[0])
// using findIndex instead of find with the instructor 
const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo){
    return todo.text.toLowerCase() ===todoText.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index,1)
  }
}

deleteTodo(toDoo, 'Do your homwork')
console.log(toDoo)