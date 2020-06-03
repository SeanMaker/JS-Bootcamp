/*var a = 99;            // 全局变量a
f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。
console.log(a);        // a=>99,  此时是全局变量的a
function f() {
    console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
    var a = 10;
    console.log(a);      // a => 10
}*/

/*for (var i = 0; i <10; i++) {
    setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
        console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
    }, 0);
}*/

const setName=function(){
    var firstName='Jen'

}
setName()
console.log(firstName)

