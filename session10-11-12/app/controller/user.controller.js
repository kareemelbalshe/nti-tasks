const {resGenerator} = require("../helper")
const userModel = require("../../db/models/user.model")
class User{
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            resGenerator(res,200, true, user, "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static showAll = async(req,res)=>{
        try{
            const users = await userModel.find()
            resGenerator(res,200, true, users, "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static getSingle = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            if(!user) throw new Error("user not found")
            resGenerator(res,200, true, user, "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static delAll = async(req,res)=>{
        try{
            await userModel.deleteMany()
            resGenerator(res,200, true, null , "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static delSingle = async(req,res)=>{        
        try{
            const user = await userModel.findOneAndDelete({_id:req.params.id})
            resGenerator(res,200, true, user , "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
}
    static editSingle = async(req,res)=>{
        try{
            await userModel.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { runValidators:true }
                )
            resGenerator(res,200, true, "user", "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }

    }
    static login = async(req,res)=>{
        try{
            const user = await userModel.login(req.body.email, req.body.password)
            const token = await user.generateToken()
            resGenerator(res,200, true, {user, token}, "Logged in")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid Login")
        }
    }
    static profile = async(req,res)=>{
        resGenerator(res,200, true, {user: req.user}, "profile fetched")
    }
    static logOut = async(req,res)=>{
        try{    
            req.user.tokens = req.user.tokens.filter(t=>{
                return t.token != req.token
            })
            await req.user.save()
            resGenerator(res,200, true, null, "Logged out")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid Logout")
        }
    }
    static logOutAll = async(req,res)=>{
        try{    
            req.user.tokens = []
            await req.user.save()
            resGenerator(res,200, true, null, "Logged out from all devices")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid Logout")
        }
    }
    static addAddr = async(req,res)=>{
        try{    
            req.user.addresses.forEach(ad => ad.isDefault=false)
            req.body.isDefault=true
            req.user.addresses.push(req.body)
            await req.user.save()
            resGenerator(res,200, true, {addresses: req.user.addresses}, "address added")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "fail")
        }
    }
    static delAddr = async(req,res)=>{
        try{   
            const addrIndex = req.user.addresses.findIndex(
                ad => ad._id == req.params.id
            ) 
            if(addrIndex == -1) throw new Error("invalid address")
            const current = req.user.addresses[addrIndex].isDefault
            req.user.addresses.splice(addrIndex, 1);
            if(current && req.user.addresses.length>0)  
                req.user.addresses[0].isDefault = true
            await req.user.save()
            resGenerator(
                res, 200, true, {
                addresses: req.user.addresses
                }, 
                "address deletd"
            )
        }
        catch(e){
            resGenerator(res,500, false, e.message, "fail")
        }
    }

}
module.exports = User