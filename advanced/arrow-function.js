const people=[
    {name:'Andrew',age:27},
    {name:'Amanda',age:31},
    {name:'David',age:22},
]

const result=people.find((person)=> person.age===22)
console.log(result.name)
