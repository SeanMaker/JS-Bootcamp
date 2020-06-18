//Fetch existing notes from localStorage
const getSavedNotes=function() {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    }
    else{
        return []
    }
}

//save notes to localStorage
const saveNotes=function (notes) {
    localStorage.setItem('notes',JSON.stringify(notes))
}

//remove note when click the button
const removeNote=function (id) {
    const noteIndex=notes.findIndex(function(note){
        return note.id===id
    })
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
}

//sort your notes by one of three ways
const sortNotes=function(notes,sortBy){
    if (sortBy==='byEdited'){
        return notes.sort(function(a,b){
            if(a.updatedAt>b.updatedAt){
                return -1
            }else if(a.updatedAt<b.updatedAt){
                return 1
            }else{
                return 0
            }
        })

        }
    else{
        return notes
    }
}


//Render application notes based on filters
const renderNotes=function(notes,filer){
    notes=sortNotes(notes,filter.sortBy)

    let filteredNotes=notes.filter(function (note) {
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML=''

    filteredNotes.forEach(function(element){
        document.querySelector('#notes').appendChild(generateNoteDOM(element))
    })
}

//Get the DOM elements for an individual note
const generateNoteDOM=function (element) {
    //set up a root div
    const noteEl=document.createElement('div')

    //set up and append a button
    const removeButton=document.createElement('button')
    removeButton.textContent='x'
    noteEl.appendChild(removeButton)

    //set up and append a archor
    const noteTitle=document.createElement('a')
    noteTitle.textContent=element.title
    noteTitle.setAttribute('href',`edit.html#${element.id}`)
    noteEl.appendChild(noteTitle)

    //set EventListener to remove note when click the button
    removeButton.addEventListener('click',function () {
        removeNote(element.id)
        saveNotes(notes)
        renderNotes(notes,filter)
    })
    return noteEl
}

//set up time left after updated
const generateLastEdited=function(timestamp){
    return `last edited ${moment(timestamp).fromNow()}`
}
