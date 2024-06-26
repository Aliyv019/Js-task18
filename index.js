const btn=document.querySelector('button')
const text=document.querySelector('p')

let arr=[]

arr.push(+prompt("enter your first number"))
arr.push(+prompt("enter your second number"))

btn.addEventListener('click',()=>{
    let result=1
    arr.forEach(function (i){
        result *=i
    })
    text.textContent=`${result}`
})