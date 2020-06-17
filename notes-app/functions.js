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

//remove todo when click the button
const removeTodo=function (id) {
    const todoIndex=todos.findIndex(function(todo){
        return todo.id===id
    })
    if(todoIndex>-1){
        todos.splice(todoIndex,1)
    }
}

//Toggle the completed value for a given todo
const toggleTodos=function (id) {
    const todo=todos.find(function(todo){
        return todo.id===id
    })
    if(todo!==undefined){
        todo.completed=!todo.completed
    }
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
    checkBox.checked=element.completed
    todoEl.appendChild(checkBox)

    //set todocheckbox
    checkBox.addEventListener('change',function(){
        toggleTodos(element.id)
        saveTodos(todos)
        renderTodos(todos,filterText)
    })

    //set up and append a span
    const todoText=document.createElement('a')
    todoText.textContent=element.text
    todoText.setAttribute('href','edit.html')
    todoEl.appendChild(todoText)

    //set up and append a button
    const removeButton=document.createElement('button')
    removeButton.textContent='x'
    todoEl.appendChild(removeButton)

    //set EventListener to remove todo when click the button
    removeButton.addEventListener('click',function () {
        removeTodo(element.id)
        saveTodos(todos)
        renderTodos(todos,filterText)
    })

    return todoEl
}

//Get the DOM elements for list summary
const generateSummaryDOM=function(incompleteTodos){
    const summary=document.createElement('h2')
    summary.textContent=`You have ${incompleteTodos.length} notes left.`
    return summary
}
//
