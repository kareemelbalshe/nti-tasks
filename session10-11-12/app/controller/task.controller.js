const {resGenerator} = require("../helper")
const taskModel = require("../../db/models/task.model")
class Task{
    static add = async(req,res)=>{
        try{
            const task = new taskModel({
                userId: req.user._id,
                ...req.body
            })
            await task.save()
            resGenerator(res,200, true, task, "task added")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static getAllTaskByUserID = async (req,res) => {
        try{
            // const tasks = await taskModel.find({userId: req.user._id})
            await req.user.populate("myTasks") 
            resGenerator(res,200, true, {tasks:req.user.myTasks}, "fetched")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static getAllTasks = async(req,res)=>{
        try{
            const tasks = await taskModel.find()
            resGenerator(res,200, true, tasks, "task added")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static getSingleTask = async(req,res)=>{
        try{
            const task = await taskModel.findById(req.params.id)
            resGenerator(res,200, true, task, "task added")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    
}
module.exports = Task