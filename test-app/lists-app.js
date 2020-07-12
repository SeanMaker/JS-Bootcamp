const lists=[
    {text:'apple', type:'fruit'},
    {text:'orange', type:'fruit'},
    {text:'mobile phone', type:'device'},
    {text:'laptop', type:'device'}
]

// console.log(lists)
const filterText={
    searchText:''
}

const filter=function(lists,filterText){

    const filteredContent=lists.filter(function(list){
        return list.text.toLowerCase().includes(filterText.searchText.toLowerCase())
    })

    document.querySelector('#div-filter').innerHTML=''

    filteredContent.forEach(function(element){
        const p=document.createElement('p')
              p.textContent=element.text
        document.querySelector('#div-filter').appendChild(p)
    })

}

filter(lists,filterText)

document.querySelector('#input-list-filter').addEventListener('input',function(e){
    filterText.searchText=e.target.value
    filter(lists,filterText)
})

document.querySelector('#name-form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstname.value)
})

const body_p=document.createElement('p')
document.querySelector('body').appendChild(body_p)

document.querySelector('#select-type').addEventListener('change',function(e){
    console.log(e.target.value)
})

/*localStorage.setItem('location','New York')
console.log(localStorage.getItem('location'))
localStorage.removeItem('location')
localStorage.clear()*/

const JSON_lists=JSON.stringify(lists)
localStorage.setItem('local_lists',JSON_lists)
console.log(JSON_lists)
const get_local_lists=localStorage.getItem('local_lists')
const JSON_get_lists=JSON.parse(get_local_lists)
console.log(JSON_get_lists)
