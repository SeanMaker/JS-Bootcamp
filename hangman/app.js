const product=new Object({
    name: 'the war of art'
})

Object.prototype.someNewMethod=()=>'This is the new function'
console.log(product)
console.log(product.hasOwnProperty('arguments'))
console.log(product.someNewMethod())

