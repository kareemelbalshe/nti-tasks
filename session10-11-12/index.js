require("dotenv").config()
require("./db/connect")

const app = require("./app/app")

app.listen(
    process.env.PORT, 
    ()=> console.log(`http://localhost:${process.env.PORT}`)
    )