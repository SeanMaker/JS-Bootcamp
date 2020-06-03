const  todos=[]
todos[0]={text:'walk the dog',completed:true}
todos[1]={text:'swimming',completed:false}
todos[2]={text:'shopping',completed:true}
todos[3]={text:'cooking',completed:false}
todos[4]={text:'turn off the light',completed:true}

// console.log('success')

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

    document.querySelector('#div-filter').innerHTML=''

    filteredTodes.forEach(function(element){
        const p=document.createElement('p')
        p.textContent=element.text
        document.querySelector('#div-filter').appendChild(p)
    })
}

renderTodos(todos,filterText)




let count=0  //count how many unfinished todos
todos.forEach(function(todo){
    if(!todo.completed){
        count+=1
    }
})
const body=document.querySelector('body')
const h2=document.createElement('h2')
h2.textContent=`You have ${count} todos left.`
body.appendChild(h2)          //output unfinished todos

/*for (let i=0;i<todos.length;i++){
    const paragraph=document.createElement('p')
    paragraph.innerHTML=`${todos[i].text}`
    document.querySelector('body').appendChild(paragraph)
}*/

/*todos.forEach(function(element){
    const p=document.createElement('p')
    p.textContent= element.text
    document.querySelector('body').appendChild(p)

})*/

document.querySelector('#add-todo').addEventListener('click',function (e) {

    console.log('add a new todo...')
})
document.querySelector('#input-new-todo').addEventListener('input',function (e) {
    filterText.searchText=e.target.value
    renderTodos(todos,filterText)

})

