class User{
    username=""
    age=21
    email=""
    id=""
    constructor(username,age,email,id){
        this.username=username
        this.age=age
        this.email=email
        this.id=id
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
class Teacher extends User{
    constructor(username,age,email,id=Date.now()){
        super(username,age,email,id)
    }
}
class Student extends User{
    gread
    constructor(username,age,email,id=Date.UTC().toLocaleString(),gread=[]){
        super(username,age,email,id)
        this.gread=gread
    }
    getGread(){
        console.log(this.gread)
    }
}
let t1=new Teacher("kareem",41,"kareem@gmail.com")
t1.getEmail()
let s1=new Student("ahmed",21,"ahmed@gmail.com",Date.now(),[30,40,50])

s1.getGread()
s1.getId()
t1.getId()
