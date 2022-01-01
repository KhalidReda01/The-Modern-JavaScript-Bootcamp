// const notes = ['Note 1', 'Note 2', 'Note 3']
// const notes = [{},{},{}]
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
  
// // }
// // notes.forEach(doThis)
// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })
// //Counting ...1
// for (let count = 0; count <= 2;count =count+1 ){
// // for (let count = 2; count >= 0;count =count-1 ){
//   //  console.log(count)
//    console.log(notes[count])
// }
// console.log("##################")
// console.log(notes.length-1)

// // for (let count = 0; count < notes.length; count++){
// for (let count = notes.length - 1; count >= 0; count--){
//   console.log(notes[count])
// }
//indexOf method
// console.log("^^^^^^^^^^^^^^^^^^")
// console.log(notes.indexOf('Note 2'))
// console.log(notes.indexOf('Note 1'))
const notes = [
//   title: "the empty object",
// body:"toLowercase was undefined because I didn't delete the empty object I hope so yes It's working now Wow "},
 {
  title: "My next Trip",
  body:"I would like to go to Turkey"
}, {
  title: "Habbits to work on",
  body:"Exercise. Eating a bit better"
  }, {
  title: "Office Modification",
  body:"Get a new seat"
  }]
// // Searching Arrays : part 2
// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     // console.log(note.title=== noteTitle)
//     // console.log(note.title.toLowerCase() === noteTitle.toLowerCase())
//     // return note.title.toLowerCase()=== noteTitle.toLowerCase
//     // There is a problem
//     //.toLowerCase TypeError: Cannot read property 'toLowerCase' of undefined Cannot read property 'toLowerCase' of undefined
//     // this is the source code but even using it gives me the same undefind message 
//     // console.log(noteTitle.toUpperCase())
//     // console.log({}.toUpperCase()) // see you can't pass an empty object it will gives you the smae message undefined Cannot read property 'toLowerCase' of undefined
//     return note.title.toLowerCase() === noteTitle.toLowerCase() // it gives me the same message // to just keep going I will not use the toLowerCase until I find a solution because I don't see why toLowerCase is not defind
//     // return note.title === noteTitle 
//   })
//   return notes[index]
// }
// Searching Arrays : part 2
const findNote = function (notes, noteTitle) {
  // notes.push("hello")
 return  notes.find(function (note, index) {
       return note.title.toLowerCase() === noteTitle.toLowerCase() // it gives me the same message // to just keep going I will not use the toLowerCase until I find a solution because I don't see why toLowerCase is not defind
  })
}
const note = findNote(notes, "Habbits to work on")
console.log(note)
// console.log(`$ The Notes Array length is{notes.length}`)
// console.log(notes)
// console.log(notes.indexOf("{}"))//-1// that's why we will use findIndex()
// console.log(1===1)// true
// console.log({} === {}) // false why //that's because it's not the same what  makes object equal to be at the same at the memory come on you understand it don't try to explian every thing to yourself
// Here is a proof even from Andrea
// let someObject = {};
// let otherObject = someObject
// console.log(someObject===otherObject)// true  "if they are actually the exact same object "
// alternative way instead of indexOf we will use findIndex() what we pass is similar to forEach
// const index =notes.findIndex(function (note, index) {
// //   console.log("#########################")
// //   // console.log(`Test findIndex ${note}`)
// //   console.log( note)
// //   // console.log(` ${note}`)
// //   // console.log(note)
// //   console.log(index)
//   // return note.title ==="Habbits to work on"
//   // return note.title ==="Office Modification"
//   return note.body ==="Get a new seat"
// })
// console.log(index)\