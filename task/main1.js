let username = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let phone = document.getElementById("phone")
let info = document.getElementById("info")
let register = document.getElementById("register")
let arr = []
let tmp
register.addEventListener("click", () => {
    if(register.innerHTML==="edit"){
        arr[tmp].name=username.value
        arr[tmp].balance=prompt("enter balance")
        localStorage.users=JSON.stringify(arr)
        register.innerHTML="register"
        clearInp()
        show()
        return
    }
    let user = {
        id: arr.length + 1,
        name: username.value,
        email: email.value,
        password: password.value,
        balance: prompt("balance")
    }
    arr.push(user)
    localStorage.setItem("users", JSON.stringify(arr))
    clearInp()
    show()
})

function clearInp(){
    username.value=''
    email.value=''
    password.value=''
    phone.value=''
}
function show() {
    arr = JSON.parse(localStorage.users)
    info.innerHTML=''
    for (let i = 0; i <= arr.length; i++) {
        info.innerHTML += `
        <tr>
            <td>${arr[i].id}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].balance}</td>
            <td><button onclick="edit(${i})">edit</button></td>
            <td><button onclick="deleteee(${i})">delete</button></td>
        </tr>
        `
    }
    
}
show()
function edit(i){
    username.value=arr[i].name
    register.innerHTML="edit"
    tmp=i
}
function deleteee(i){
    arr.splice(i,1)
    arr.map(t=>{
        t.id>i+1?t.id-=1:t.id
    })
    localStorage.users=JSON.stringify(arr)
    show()
}