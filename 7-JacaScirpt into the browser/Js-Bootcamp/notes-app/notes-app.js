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

// console.log("This is from my HTML document")
// // DOM Document Object Model
// // Query and remove
// const p = document.querySelector('p')
// // console.log(p)
// // p.remove()
// // Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//   p.textContent="******************* Replaced with Dom"
//   // p.remove()
//   // console.log(p)
// //  console.log(p.textContent)
// })
const filters = {
  searchText:''
}
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  console.log(filteredNotes)
  // document.querySelector('#notes').innerHTML='<p>TEST</p>'
  document.querySelector('#notes').innerHTML=''
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p")
    noteEl.textContent = note.title
    // document.querySelector('body').appendChild(noteEl)
    document.querySelector('#notes').appendChild(noteEl)

  })
}
renderNotes(notes,filters)
document.querySelector('#create-note').addEventListener('click', function (event) {
  // console.log('Did this work? ')
  // // console.log(event)
  // // console.log(event.target)
  event.target.textContent="The was clicked"
})
document.querySelector('#remove-all').addEventListener('click', function () {
  console.log('Delete all Notes')
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})
document.querySelector('#search-text').addEventListener('input', function (e) {
  
  filters.searchText = e.target.value
  renderNotes(notes,filters)
})