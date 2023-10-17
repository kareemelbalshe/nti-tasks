const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const taskModel = require("./task.model")

const userSchema = mongoose.Schema({
    fname:{
        type:String,
        trim:true,
        lowercase: true,
        minLength:2,
        maxLength:20,
        required:true
    }, 
    lname:{
        type:String,
        trim:true,
        lowercase: true,
        minLength:2,
        maxLength:20,
        required:true
    }, 
    age:{
        type:Number,
        required:true,
        min:21,
        max:60
    }, 
    password:{        
        type:String,
        trim:true,
        required:true
    }, 
    email:{
        type:String,
        trim:true,
        lowercase: true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))throw new Error("invalid email format")
        }
    }, 
    status:{
        type:Boolean,
        default:false
    }, 
    gender:{
        type:String,
        trim:true,
        lowercase: true,
        enum:["male", "female"]
    },
    image:{
        type:String,
        trim:true,
    }, 
    dOfBirth:{
        type:Date
    },
    addresses:[
        {
            isDefault: {
                type:Boolean,
                default: false
            },
            addrType:{
                type:String,
                trim:true,
                lowercase: true,
            },
            addrDetails:{
                type:String,
                trim:true,
                lowercase: true,
            }
        }
    ],
    tokens: [
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
})
userSchema.virtual("myTasks", {
    ref:"Task",
    localField: "_id",
    foreignField:"userId"
})
userSchema.pre("save", async function(){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 12)
})
userSchema.post("findOneAndDelete", async function(_doc){
    // console.log(doc)
    await taskModel.deleteMany({userId: _doc._id})
})
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    delete user.tokens
    return user
}

userSchema.statics.login = async (email, password)=>{
    const data = await userModel.findOne({email})
    if(!data) throw new Error("Invalid Email")
    const isvalidPassword = await bcrypt.compare(password, data.password)
    if(!isvalidPassword) throw new Error("Invalid password")
    // if(data.tokens.length == 5) throw new Error("e2fl device mn bto3k")
    return data
}

userSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.jwtKey)
    this.tokens.push({token})
    // this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}
const userModel= mongoose.model("User", userSchema)

module.exports = userModel


