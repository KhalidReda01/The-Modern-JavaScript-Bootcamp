 
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
  // document.querySelector('#notes÷ ').innerHTML='<p>TEST</p>'
  document.querySelector('#notes').innerHTML=''
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p")
    noteEl.textContent = note.title
    // document.querySelector('body').appendChild(noteEl)
    document.querySelector('#notes').appendChild(noteEl)

  })
}
// renderNotes(notes,filters)
document.querySelector('#create-note').addEventListener('click', function (event) {
  // console.log('Did this work? ')
  // // console.log(event)
 document.querySelector('#remove-all').addEventListener('click', function () {
  })
})
document.querySelector('#search-text').addEventListener('input', function (e) {
  console.log(e.target.value)
  console.log(e.target)
  console.log(e)


  filters.searchText = e.target.value
  renderNotes(notes, filters)
})