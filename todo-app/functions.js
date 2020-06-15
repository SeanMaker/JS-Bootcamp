//Fetch existing todos from localStorage
const getSavedTodos=function() {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    }
    else{
        return []
    }
}

//save todos to localStorage
const saveTodos=function (todos) {
    localStorage.setItem('todos',JSON.stringify(todos))
}

//Render application todos based on filters
const renderTodos=function(todos,filerText){
    let filteredTodes=todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filterText.searchText.toLowerCase())
    })

    filteredTodes=filteredTodes.filter(function(todo){

        if(filterText.hideCompleted===true){
            return todo.completed===false
        }
        else{
            return todo
        }
    })



    const incompleteTodos=todos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#div-filter').innerHTML=''
    document.querySelector('#div-filter').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodes.forEach(function(element){
        document.querySelector('#div-filter').appendChild(generateTodoDOM(element))
    })
}

//Get the DOM elements for an individual note
const generateTodoDOM=function (element) {
    //set up a root div
    const todoEl=document.createElement('div')

    //set up and append a checkbox
    const checkBox=document.createElement('input')
    checkBox.setAttribute('type','checkbox')
    todoEl.appendChild(checkBox)

    //set up and append a span
    const todoText=document.createElement('span')
    todoText.textContent=element.text
    todoEl.appendChild(todoText)

    //set up and append a button
    const removeButton=document.createElement('button')
    removeButton.textContent='x'
    todoEl.appendChild(removeButton)

    return todoEl
}

//Get the DOM elements for list summary
const generateSummaryDOM=function(incompleteTodos){
    const summary=document.createElement('h2')
    summary.textContent=`You have ${incompleteTodos.length} todos left.`
    return summary
}
//
