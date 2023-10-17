// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = '123';

// bcrypt.hash(myPlaintextPassword, saltRounds)
// .then(res=> console.log(res))
// jsonwebtoken
const jwt = require("jsonwebtoken")
const user = { _id: "123" }

const token = jwt.sign( { _id : user._id }, "marwa" )
console.log(token);

const data = jwt.verify(token, "marwa")
console.log(data);