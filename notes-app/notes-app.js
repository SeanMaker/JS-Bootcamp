let  notes=getSavedNotes()

const filter={
    searchText:'',
    sortBy:'byEdited'
}

renderNotes(notes,filter)

document.querySelector('#search-text').addEventListener('input', (e)=> {
    filter.searchText=e.target.value
    renderNotes(notes,filter)
})

document.querySelector('#filter-by').addEventListener('change',(e)=>{
    filter.sortBy=e.target.value
    renderNotes(notes,filter)
})

document.querySelector('#create-note').addEventListener('click',(e)=>{
    e.preventDefault()
    const id=uuidv4()
    const now=moment()
    const timestamp=moment().valueOf()
    notes.push({
        id:id,
        title:'',
        body:'',
        createdAt:timestamp,
        updatedAt:timestamp
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
    // renderNotes(notes,filter)
})

window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){
        notes=JSON.parse(e.newValue)
        renderNotes(notes,filter)
    }
})



