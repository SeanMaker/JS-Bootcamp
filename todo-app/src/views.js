import {getTodos,toggleTodo,removeTodo} from "./todos";
import {getFilters} from "./filters";

// renderTodos
const renderTodos=()=>{
    const todos=getTodos()
    const filterText=getFilters()
    const todoEl=document.querySelector('#div-filter')
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
    todoEl.innerHTML=''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if(filteredTodes.length>0){
        filteredTodes.forEach((element)=>{
            todoEl.appendChild(generateTodoDOM(element))
        })
    }else{
        const messageEl=document.createElement('p')
        messageEl.textContent='There are no to-dos to show'
        messageEl.classList.add('empty-message')
        todoEl.appendChild(messageEl)
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM=(element) =>{
    //set up a root div
    const todoEl=document.createElement('label')
    const containerEl=document.createElement('div')

    //set up and append a checkbox
    const checkBox=document.createElement('input')
    checkBox.setAttribute('type','checkbox')
    checkBox.checked=element.completed
    containerEl.appendChild(checkBox)

    //set todocheckbox
    checkBox.addEventListener('change',()=>{
        toggleTodo(element.id)
        renderTodos()
    })

    //set up and append a span
    const todoText=document.createElement('span')
    todoText.textContent=element.text
    containerEl.appendChild(todoText)

    //setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //set up and append a button
    const removeButton=document.createElement('button')
    removeButton.textContent='remove'
    removeButton.classList.add('button','button--text')
    todoEl.appendChild(removeButton)

    //set EventListener to remove todo when click the button
    removeButton.addEventListener('click',()=> {
        removeTodo(element.id)
        renderTodos()
    })
    return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM=(incompleteTodos)=>{
    const summary=document.createElement('h2')
    /*console.log(incompleteTodos.length)*/
    if(incompleteTodos.length<=1){
        summary.textContent=`You have ${incompleteTodos.length} todo left.`
    }else{
        summary.textContent=`You have ${incompleteTodos.length} todos left.`
    }
    summary.classList.add('list-title')
    return summary
}

// set up the exports
export {renderTodos}
