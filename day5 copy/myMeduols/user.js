export default class User{
    username=""
    age=21
    email=""
    id=""
    constructor(username,age,email){
        this.username=username
        this.age=age
        this.email=email
        this.id=Date.now().toString()
    }
    getName(){
        console.log(this.username)
    }
    getAge(){
        console.log(this.age)
    }
    getEmail(){
        console.log(this.email)
    }
    getId(){
        console.log(this.id)
    }
}