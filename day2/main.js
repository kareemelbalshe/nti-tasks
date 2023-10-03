let input

let add = document.getElementById("add")
let update = document.getElementById("update")
let deletee = document.getElementById("delete")
let arr=[]
add.addEventListener("click",()=>{
    input=prompt("enter user")
    arr.push({
        id:arr.length+1,
        name:input
    })
    console.log(arr)
})
update.addEventListener("click",()=>{
    let num=prompt("num user")
    input=prompt("update user")
    arr.find(i=>i.id==num?i.name=input:null)
    console.log(arr)
})
deletee.addEventListener("click",()=>{
    let num=prompt("num user")
    arr.splice(num-1,1)
    console.log(arr)
})