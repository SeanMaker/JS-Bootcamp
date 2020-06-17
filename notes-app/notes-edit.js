const titleElement=document.querySelector('#note-title')
const bodyElement=document.querySelector('#note-body')
const removeElement=document.querySelector('#remove-note')

const noteId=location.hash.substring(1)
let notes=getSavedTodos()
// console.log(notes)
let note=notes.find(function(note){
    return note.id===noteId
})

if (note===undefined){
    location.assign('index.html')
}

titleElement.value= note.text
bodyElement.value=note.body

titleElement.addEventListener('input',function(e){
    note.text=e.target.value
    saveTodos(notes)
})

bodyElement.addEventListener('input',function(e){
    note.body=e.target.value
    saveTodos(notes)
})

// removeElement.addEventListener('click',function(e){
//     removeTodo(noteId)
//     saveTodos(notes)
//     location.assign('index.html')
// })

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
