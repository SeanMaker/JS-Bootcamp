//Fetch existing notes from localStorage
const getSavedNotes=()=> {
    const notesJSON = localStorage.getItem('notes')
    try{
        return notesJSON ? JSON.parse(notesJSON):[]
    }
    catch(e){
        return []
    }
}

//save notes to localStorage
const saveNotes=(notes)=> {
    localStorage.setItem('notes',JSON.stringify(notes))
}

//remove note when click the button
const removeNote=(id)=> {
    const noteIndex=notes.findIndex((note)=>note.id===id)
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
}

//sort your notes by one of three ways
const sortNotes=(notes,sortBy)=>{
    if (sortBy==='byEdited'){
        return notes.sort((a,b)=>{
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
const renderNotes=(notes,filer)=>{
    notes=sortNotes(notes,filter.sortBy)

    let filteredNotes=notes.filter((note)=>note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    )

    document.querySelector('#notes').innerHTML=''

    filteredNotes.forEach((element)=>{
        document.querySelector('#notes').appendChild(generateNoteDOM(element))
    })
}

//Get the DOM elements for an individual note
const generateNoteDOM=(element)=> {
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
    removeButton.addEventListener('click', ()=> {
        removeNote(element.id)
        saveNotes(notes)
        renderNotes(notes,filter)
    })
    return noteEl
}

//set up time left after updated
const generateLastEdited=(timestamp)=> `last edited ${moment(timestamp).fromNow()}`

