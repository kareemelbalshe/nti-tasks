// const os =require("os")
// console.log(os.freemem())
// const user = require("./myMeduols/user")
// user.add()
// const validator=require("validator")

// validator.isEmail('foo@bar.com'); //=> true
// let chalk=require("chalk")
// console.log(chalk.blue('Hello world!'));

// const fs=require("fs")
// fs.readFileSync("kareem.txt","utf8","kareem")

// Node.js program to demonstrate the 
// fs.readFileSync() method 

// Include fs module

// Calling the readFileSync() method
// to read 'input.txt' file
// const fs = require('node:fs');
// const data = fs.writeFileSync('input.txt',"kareem")

// // Display the file data
// console.log(data);
import user from './myMeduols/user.js'
import validator from 'validator';
import fileHandler from './myMeduols/fileHandler.js'
import * as fs from 'fs'
let email = "kareem@gmail.com"
if (validator.isEmail(email)) {
    let u = new user("kareem", 21, email)
    fs.writeFileSync("input.json", `{"name":"${u.username}","age":"${u.age}","email":"${u.email}","id":"${u.id}"}`)
    u.getAge()
    u.getEmail()
}
else {
    console.log("invaled email")
}
let u2=new fileHandler()
u2
