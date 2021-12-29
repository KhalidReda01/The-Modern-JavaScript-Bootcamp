const notes = ['Note 1', 'Note 2', 'Note 3']
// // remove from the end
// console.log(notes.pop())
// // add to the end
// notes.push('MY New note')
// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[2])
// console.log(notes[3])
// console.log(notes[notes.length - 1])
// console.log(notes)
// console.log(notes.shift())
// console.log(notes)
// console.log(notes.unshift("add new note"))
// console.log(notes)
// console.log(notes.splice(0 , 1 ,"This is the new Item  using Splice"))
// console.log(notes)
// notes[2] = "hello test"
// console.log(notes)


//Looping over Arrays
// const doThis = function () {
  
// }
// notes.forEach(doThis)
notes.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})