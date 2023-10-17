const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()
const userRoutes = require("../routes/user.routes")
const taskRoutes = require("../routes/task.routes")
app.use(cors())
app.use( express.static( path.join(__dirname, "../public") ) )
app.use(express.json())
app.use(express.urlencoded( { extended:true } ) )
app.use("/api/user",userRoutes)
app.use("/api/task",taskRoutes)
app.all("*", (req,res)=>{
    res.status(404).send({
        message: "Route not found"
    })
})
module.exports = app