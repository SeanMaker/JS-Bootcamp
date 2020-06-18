const data1998=new Date('12 1 1998 6:25:01')
const timestamp1998=data1998.getTime()

const data2008=new Date('11 1 2008 6:25:01')
const timestamp2008=data2008.getTime()

if(timestamp2008>timestamp1998){
    console.log(data2008)
}
else{
    console.log(data1998)
}
// console.log(now.getTime())
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())


// const now=moment()
// now.add(1,'year').subtract(4,'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
//
// const nowtimestamp=now.valueOf()
// console.log(nowtimestamp)

// console.log(moment(nowtimestamp).toString())

// const birthday=moment()
// birthday.year(1991)
// birthday.month(9)
// birthday.date(5)
// console.log(birthday.format('MMMM D, YYYY'))
