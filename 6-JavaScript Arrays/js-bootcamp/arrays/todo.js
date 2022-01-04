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