
// // const findNote = function (notes, noteTitle) {
// //   const index = notes.findIndex(function (note, index) {
   
// //     return note.title.toLowerCase() === noteTitle.toLowerCase() // it gives me the same message // to just keep going I will not use the toLowerCase until I find a solution because I don't see why toLowerCase is not defind
// //   })
// //   return notes[index]
// // }
// // const findNote = function (notes, noteTitle) {
// //  return  notes.find(function (note, index) {
// //        return note.title.toLowerCase() === noteTitle.toLowerCase() // it gives me the same message // to just keep going I will not use the toLowerCase until I find a solution because I don't see why toLowerCase is not defind
// //   })
// // }

// // Trip , ne flexible searching
// // explore this techinpe outside of function
// const findNotes = function (notes,query) {
//  return  notes.filter(function (note, index) {
//   const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//   const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//   return isTitleMatch || isBodyMatch
//   })
 
// }

// console.log(findNotes(notes,"office"))
//   //  console.log(filteredNotes)


// // const note = findNote(notes, "Habbits to work on")
// // console.log(note)
// 44.Sorting Arrays
// console.log('a'<'A')
const notes = [
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
const sortNotes = function (notes) {
  notes.sort(function (a,b) {
    if (a.title.toLowerCase() <b.title.toLowerCase()) {
        return -1
    } else if (b.title.toLowerCase() <a.title.toLowerCase()) {
      return 1
    } else {
      return 0
      }
    })
  }
// console.log(notes)
sortNotes(notes)

console.log(notes)