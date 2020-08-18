const getDataPromise=(num)=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        typeof num==='number'? resolve(num*2):reject('Number must be provided')
    },2000)
})

const processData=async ()=>{

}

console.log(processData())
