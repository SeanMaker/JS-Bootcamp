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
    const notesEl=document.querySelector('#notes')
    notes=sortNotes(notes,filter.sortBy)

    let filteredNotes=notes.filter((note)=>note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    )
    notesEl.innerHTML=''

    if(filteredNotes.length>0){
        filteredNotes.forEach((element)=>{
            notesEl.appendChild(generateNoteDOM(element))
        })
    }else{
        const emptyMessage=document.createElement('p')
        emptyMessage.textContent='No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }


}

//Get the DOM elements for an individual note
const generateNoteDOM=(element)=> {
    //set up a root div
    const noteEl=document.createElement('a')
    const noteTitle=document.createElement('p')
    const statusEl=document.createElement('p')

    //setup the note title text
    if(element.title.length>0){
        noteTitle.textContent=element.title
    }else{
        noteTitle.textContent='Unnamed note'
    }
    noteTitle.classList.add('list-item__title')
    noteEl.appendChild(noteTitle)

    //setup the link
    noteEl.setAttribute('href',`edit.html#${element.id}`)
    noteEl.classList.add('list-item')

    //setup the status message
    statusEl.textContent=generateLastEdited(element.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)
    return noteEl

    //set up and append a button
/*    const removeButton=document.createElement('button')
    removeButton.textContent='x'
    noteEl.appendChild(removeButton)*/

/*    removeButton.addEventListener('click', ()=> {
        removeNote(element.id)
        saveNotes(notes)
        renderNotes(notes,filter)
    })*/

}

//set up time left after updated
const generateLastEdited=(timestamp)=> `last edited ${moment(timestamp).fromNow()}`

