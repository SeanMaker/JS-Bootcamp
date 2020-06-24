const Person=function(firstName,lastName,age,likes=[]){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.likes=likes
}

Person.prototype.getBio=function(){
    let bio= `${this.firstName} is ${this.age}.`
    this.likes.forEach((like)=>{
        bio+=` ${this.firstName} likes ${like}.`
    })

    return bio

}

Person.prototype.setName=function(fullName){
    const name=fullName.split(' ')
    this.firstName=name[0]
    this.lastName=name[1]
}

const me=new Person('Sean','Dong',29,['swimming','running'])
me.setName('Shiheng Dong')
const friendOne=new Person('ChengYang','Luo','28',['drama'])


console.log(me.getBio())
console.log(friendOne.getBio())

const name=''
