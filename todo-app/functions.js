//Fetch existing todos from localStorage
const getSavedTodos=function() {
    const todosJSON = localStorage.getItem('todos')
    try{
        return todosJSON ? JSON.parse(todosJSON):[]
    }
    catch(e){
        return []
    }
}

//save todos to localStorage
const saveTodos=(todos)=> {
    localStorage.setItem('todos',JSON.stringify(todos))
}

//remove todo when click the button
const removeTodo=(id)=> {
    const todoIndex=todos.findIndex((todo)=>todo.id===id)
    if(todoIndex>-1){
        todos.splice(todoIndex,1)
    }
}

//Toggle the completed value for a given todo
const toggleTodos=(id)=> {
    const todo=todos.find((todo)=>todo.id===id)
    if(todo){
        todo.completed=!todo.completed
    }
}

//Render application todos based on filters
const renderTodos=(todos,filerText)=>{
    let filteredTodes=todos.filter((todo)=>todo.text.toLowerCase().includes(filterText.searchText.toLowerCase()))

    filteredTodes=filteredTodes.filter((todo)=>{

        if(filterText.hideCompleted===true){
            return todo.completed===false
        }
        else{
            return todo
        }
    })

    const incompleteTodos=todos.filter((todo)=>!todo.completed)

    document.querySelector('#div-filter').innerHTML=''
    document.querySelector('#div-filter').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodes.forEach((element)=>{
        document.querySelector('#div-filter').appendChild(generateTodoDOM(element))
    })
}

//Get the DOM elements for an individual note
const generateTodoDOM=(element) =>{
    //set up a root div
    const todoEl=document.createElement('div')

    //set up and append a checkbox
    const checkBox=document.createElement('input')
    checkBox.setAttribute('type','checkbox')
    checkBox.checked=element.completed
    todoEl.appendChild(checkBox)

    //set todocheckbox
    checkBox.addEventListener('change',()=>{
        toggleTodos(element.id)
        saveTodos(todos)
        renderTodos(todos,filterText)
    })

    //set up and append a span
    const todoText=document.createElement('span')
    todoText.textContent=element.text
    todoEl.appendChild(todoText)

    //set up and append a button
    const removeButton=document.createElement('button')
    removeButton.textContent='x'
    todoEl.appendChild(removeButton)

    //set EventListener to remove todo when click the button
    removeButton.addEventListener('click',()=> {
        removeTodo(element.id)
        saveTodos(todos)
        renderTodos(todos,filterText)
    })

    return todoEl
}

//Get the DOM elements for list summary
const generateSummaryDOM=(incompleteTodos)=>{
    const summary=document.createElement('h2')
    summary.textContent=`You have ${incompleteTodos.length} todos left.`
    return summary
}

const generateClick=function(){
    let sum=0
    for(let i=0;i<=9;i++){
        sum=sum+i**
    }

}

