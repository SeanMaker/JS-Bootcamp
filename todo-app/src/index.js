import {setFilters} from './filters'
import {createTodo,loadTodos} from './todos'
import {renderTodos} from './views'

// Set up index.html to load the bundle
// load uuid via an npm module
// Render initial todos

renderTodos()

// Set up search text handler
document.querySelector('#filter-todo').addEventListener('input', (e)=> {
    // filterText.searchText=e.target.value
    setFilters({
        searchText:e.target.value,
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector('#check-uncompleted').addEventListener('click',(e)=>{
    // filterText.hideCompleted=e.target.checked
    setFilters({
        hideCompleted:e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector('#add-things-todo').addEventListener('submit',(e)=>{
    const text=e.target.elements.text.value.trim()
    if(text.length>0){
        createTodo(text)
        renderTodos()
        e.target.elements.text.value=''
    }

})

// Add a watcher for local storage
window.addEventListener('storage',(e)=>{
    if(e.key==='todos'){
        loadTodos()
        renderTodos()
    }
})
