// Create an array with five todas
const toDo = ['Do your homwork','make  your dinner ','help  your mom','adjust your desk/workspace']
// You have x todos
// console.log(`You have ${toDo.length} todos`)
// Print the first and second to last items = > Todo : walk the dog
// console.log(toDo[0])
// console.log(toDo[3])// toDo[toDo.lenght-1]
// Challengre Area
// Delete the 3rd Items
// console.log(toDo)
// // Add a new item onto the end
// console.log(toDo.length)

// toDo.push("Eat your lunch")
// console.log(toDo)
// console.log(toDo.length)
// // Remove the first item from the list
// // we can use shift and splice
// console.log(toDo)
// console.log(toDo[0])
// toDo.shift()
// console.log(toDo[0])
// toDo.splice(0, 1)
// console.log(toDo[0])
// console.log(toDo)
// challengre Area
toDo.splice(2, 1)
toDo.push("Buy Coffee")
toDo.shift()
console.log(toDo)
//1.The first Item
//2.The second Items
toDo.forEach(function (item, index) {
  console.log(`${index+1}. ${item}`)
  // console.log(`ToDo index is ${index} ToDo Item is ${item}`)
  // console.log(item)
})

// 1. Do your homwork
// 2.make  your dinner
// Challengre Area 