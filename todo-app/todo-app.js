const  todos=[]
todos[0]={text:'walk the dog',completed:true}
todos[1]={text:'swimming',completed:false}
todos[2]={text:'shopping',completed:true}
todos[3]={text:'cooking',completed:false}
todos[4]={text:'turn off the light',completed:true}

/*const ps=document.querySelectorAll('p')
ps.forEach(function (p) {
    if(p.textContent.includes('the')){
        p.remove()
    }
})*/

const filterText={
    searchText:''
}

const renderTodos=function(todos,filerText){
    const filteredTodes=todos.filter(function (todo) {
        if(todo.text.toLowerCase().includes(filterText.searchText.toLowerCase())){
            return todo.text
        }
    })

    const incompleteTodos=todos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#div-filter').innerHTML=''

    const h2=document.createElement('h2')
    h2.textContent=`You have ${incompleteTodos.length} todos left.`
    document.querySelector('#div-filter').appendChild(h2)


    filteredTodes.forEach(function(element){
        const p=document.createElement('p')
        p.textContent=element.text
        document.querySelector('#div-filter').appendChild(p)
    })
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

    renderTodos(todos,filterText)
    e.target.elements.text.value=''
})

const body_p=document.createElement('p')
document.querySelector('body').appendChild(body_p)

