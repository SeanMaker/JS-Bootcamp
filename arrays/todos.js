const  todos=['walk the dog','swimming','shopping','cooking','turn off the light']
/*const notes=['note 1','note 2','note 3','note 4']*/

/*notes.pop()
notes.shift()
notes.unshift('note 1')*/

/*notes.splice(1,0,'note 2.5')
console.log(notes)*/
// todos.splice(2,1)
// todos.push('writing a article')
// todos.shift()
// console.log(todos)

/*todos.forEach(function (item,index) {
    console.log(`${index+1}. ${item}`)

})*/

// for (let i=0;i<todos.length;i++){
//     console.log(`${i+1}.${todos[i]}`)
// }

todos[0]={text:'walk the dog',completed:true}
todos[1]={text:'swimming',completed:false}
todos[2]={text:'shopping',completed:true}
todos[3]={text:'cooking',completed:false}
todos[4]={text:'turn off the light',completed:true}

/*console.log(todos)

let deleteTodos=function(todos,text){
    let index=todos.findIndex(function(todo){
        return todo.text===text
    })
    if(index>-1){
        todos.splice(index,1)
    }
    // todos.splice(index,1)
}


deleteTodos(todos,'swimming')
console.log(todos)*/

// const getThingsTodo=function(todos){
//     const uncompleted_todos=todos.filter(function(todo,index){
//         return !todo.completed //todo.completed===false
//     })
//     return uncompleted_todos
// }
//
// console.log(getThingsTodo(todos))

/*const sortTodos=function(todos){
    todos.sort(function (a,b) {
        if(a.completed && !b.completed){
            return 1
        }else if(!a.completed && b.completed){
            return -1
        }else{
            return 0
        }
    })
}*/

const sortTodos=function(todos){
    todos.sort(function (a,b) {
        if(a.text>b.text){
            return 1
        }else if(a.text<b.text){
            return -1
        }else{
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)
