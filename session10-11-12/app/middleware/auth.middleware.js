const {verify} = require("jsonwebtoken")
const {resGenerator} = require("../helper")
const userModel = require("../../db/models/user.model")
const auth = async(req, res, next) =>{
    try{
        // get token from header
        const token = req.header("Authorization").replace("Bearer ", "")
        // verify token
        const decoded = verify(token, process.env.jwtKey)
        //if ! user => throw error enta msh auth
        const user = await userModel.findOne({
            _id:decoded._id,
            "tokens.token": token
        })
        if(!user) throw new Error("unauthorized")
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        resGenerator(res,500, false, e.message, "un auth")
    }
}
module.exports = auth