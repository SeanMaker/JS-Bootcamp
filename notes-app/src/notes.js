import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes=[]

//Fetch existing notes from localStorage
const loadNotes=()=> {
    const notesJSON = localStorage.getItem('notes')
    try{
        return notesJSON ? JSON.parse(notesJSON):[]
    }
    catch(e){
        return []
    }
}

//save notes to localStorage
const saveNotes=()=> {
    localStorage.setItem('notes',JSON.stringify(notes))
}

//expose notes from module
const getNotes=()=> notes

const createNote=()=>{
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
    saveNotes()
}

//remove note when click the button
const removeNote=(id)=> {
    const noteIndex=notes.findIndex((note)=>note.id===id)
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
        saveNotes()
    }
}

//sort your notes by one of three ways
const sortNotes=(sortBy)=>{
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

const updateNote=(id,updates)=>{
    const note=notes.find((note)=>{
        return note.id===id
    })
    if(!note){
        return
    }
    if(typeof updates.title==='string'){
        note.title=updates.title
        note.updateAt=moment().valueOf()
    }
    if(typeof updates.body==='string'){
        note.body=updates.body
        note.updateAt=moment().valueOf()
    }

    saveNotes()
}

notes=loadNotes()

export {getNotes,createNote,removeNote,sortNotes,updateNote}




