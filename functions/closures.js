const myFunction=()=>{
    const message='This is my message'
    const printMessage=()=>{
        console.log(message)
    }
    return printMessage
}

const myPrintMessage=myFunction()
myPrintMessage()

// Counter
/*const createCounter=()=>{
    let count=0

    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter=createCounter()
counter.increment()
console.log(counter.get())
counter.decrement()
console.log(counter.get())
counter.decrement()
console.log(counter.get())*/

//Adder
/*const createAdder=(a)=>{
    return (b)=>{
        return a+b
    }
}

const add_10=createAdder(10)
console.log(add_10(10))*/

//Tipper
const createrTipper=(baseTip)=> {
    return (amount) => {
        return amount * baseTip
    }
}
const tip20=createrTipper(.2)
const tip30=createrTipper(.3)

console.log(tip20(100))
console.log(tip30(100))

