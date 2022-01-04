// // const deleteTodo = function (todos, todoText) {
// //   const index = todos.findIndex(function (todo){
// //     return todo.text.toLowerCase() ===todoText.toLowerCase()
// //   })
// //   if (index > -1) {
// //     todos.splice(index,1)
// //   }
// // }

// // deleteTodo(toDoo, 'Do your homwork')
// // console.log(toDoo)
// //Challenge Area
// // create a funciton that use filter to get a list of todoos that have completed vlue of false that will be help your mom and ajdust your desktop
// const getThingsToDo = function (toDoo) {
//   const result = toDoo.filter(function (todo, index) {
//     const isCompletedFalse = todo.completed === false;
//     return isCompletedFalse
//   })
//   return result
// }
// console.log(getThingsToDo(toDoo))
// // Cool solved with no time that's why I said you have to watch the lecture again before actually doing the challenge it that's amazing 
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