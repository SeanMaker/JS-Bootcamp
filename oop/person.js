
class Person{
    constructor(firstName,lastName,age,likes=[]){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.likes=likes
    }

    getBio(){
        let bio= `${this.firstName} is ${this.age}.`
        this.likes.forEach((like)=>{
            bio+=` ${this.firstName} likes ${like}.`
        })

        return bio
    }

    setName(fullName){
        const name=fullName.split(' ')
        this.firstName=name[0]
        this.lastName=name[1]
    }
}



/*const Person=function(firstName,lastName,age,likes=[]){
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
}*/

class Employee extends Person {
    constructor(firstName,lastName,age,position,likes){
        super(firstName,lastName,age,likes)
        this.position=position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }
}

// const me=new Employee('Sean','Dong',29,'Teacher',['swimming','running'])
// me.setName('Shiheng Dong')
// me.getBio=function(){
//     return 'testing'
// }
// console.log(me.getBio())

// const friendOne=new Person('ChengYang','Luo','28',['drama','swimming'])
//
// console.log(friendOne.getBio())


class Student extends Person{
    constructor(firstName,lastName,age,grade,likes){
        super(firstName,lastName,age,likes)
        this.grade=grade

    }
    getBio() {
        if(this.grade>=70){
            return `${this.firstName} is passing the class. The grade is ${this.grade}.`
        }
        else{
            return `${this.firstName} is failing the class. The grade is ${this.grade}.`
        }
    }
    updateGrade(change){
        this.grade=this.grade+change

    }
}

const myinfo=new Student('Sean','Dong',29,80,['swimming','running'])
console.log(myinfo.getBio())
myinfo.updateGrade(-30)
console.log(myinfo.getBio())

