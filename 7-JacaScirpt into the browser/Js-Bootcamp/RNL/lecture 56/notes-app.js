const filters = { searchText: '' }
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    console.log(note.title.toLowerCase())
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  // console.log(filteredNotes)
}
document.querySelector('#notes').innerHTML='<p>Test</p>'