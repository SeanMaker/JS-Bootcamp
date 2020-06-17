const titleElement=document.querySelector('#note-title')
const bodyElement=document.querySelector('#note-body')
const removeElement=document.querySelector('#remove-note')

const getSavednotes=function() {
    const notesJSON = localStorage.getItem('todos')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    }
    else{
        return []
    }
}

const noteId=location.hash.substring(1)
let notes=getSavednotes()
// console.log(notes)
let note=notes.find(function(note){
    return note.id===noteId
})

if (note===undefined){
    location.assign('index.html')
}
//
const removeNote=function (id) {
    const noteIndex=notes.findIndex(function(note){
        return note.id===id
    })
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
}
//
const saveNotes=function (notes) {
    localStorage.setItem('todos',JSON.stringify(notes))
}

titleElement.value= note.text
bodyElement.value=note.body

titleElement.addEventListener('input',function(e){
    note.text=e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input',function(e){
    note.body=e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click',function(e){
    removeNote(noteId)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage',function(e){
    if (e.key==='todos'){
        notes=JSON.parse(e.newValue)

        note=notes.find(function(note){
            return note.id===noteId
        })

        if (note===undefined){
            location.assign('index.html')
        }

        titleElement.value= note.text
        bodyElement.value=note.body
    }


})
