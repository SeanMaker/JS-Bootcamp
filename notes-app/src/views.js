import moment from 'moment'
import {getFilters} from "./filters";
import {sortNotes,getNotes} from "./notes";


//Get the DOM elements for an individual note
const generateNoteDOM=(element)=> {
    //set up a root div
    const noteEl = document.createElement('a')
    const noteTitle = document.createElement('p')
    const statusEl = document.createElement('p')

    //setup the note title text
    if (element.title.length > 0) {
        noteTitle.textContent = element.title
    } else {
        noteTitle.textContent = 'Unnamed note'
    }
    noteTitle.classList.add('list-item__title')
    noteEl.appendChild(noteTitle)

    //setup the link
    noteEl.setAttribute('href', `edit.html#${element.id}`)
    noteEl.classList.add('list-item')

    //setup the status message
    statusEl.textContent = generateLastEdited(element.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)
    return noteEl

}

//Render application notes based on filters
const renderNotes=()=>{
        const notesEl=document.querySelector('#notes')
        const filters=getFilters()
        const notes=sortNotes(notes,filters.sortBy)

        let filteredNotes=notes.filter((note)=>note.title.toLowerCase().includes(filters.searchText.toLowerCase())
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

const initializeEditPage=(noteId)=>{
    const titleElement=document.querySelector('#note-title')
    const bodyElement=document.querySelector('#note-body')
    const dateElement=document.querySelector('#last-edited')
    const notes=getNotes()
    const note=notes.find((note)=> note.id===noteId)

    if (!note){
        location.assign('index.html')
    }

    titleElement.value=note.title
    bodyElement.value=note.body
    dateElement.textContent=generateLastEdited(note.updatedAt)


}


//set up time left after updated
const generateLastEdited=(timestamp)=> `last edited ${moment(timestamp).fromNow()}`

export{generateNoteDOM,renderNotes,generateLastEdited,initializeEditPage}
