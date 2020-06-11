let  todos=getSavedTodos()

const filterText={
    searchText:'',
    hideCompleted:false
}

renderTodos(todos,filterText)

document.querySelector('#filter-todo').addEventListener('input',function (e) {
    filterText.searchText=e.target.value
    renderTodos(todos,filterText)

})

document.querySelector('#add-things-todo').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value,
        completed:false
    })
    saveTodos(todos)
    renderTodos(todos,filterText)
    e.target.elements.text.value=''

})

document.querySelector('#check-uncompleted').addEventListener('click',function(e){
    filterText.hideCompleted=e.target.checked
    renderTodos(todos,filterText)
})
