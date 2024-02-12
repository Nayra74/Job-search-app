import mongoose from "mongoose";
const schema=new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:[true,'Please provide your First Name'],
        minLength:[2,'First name is too shor']
    },
    lastName:{
        type:String,
        trim:true,
        required:[true,'Please provide your last Name'],
        minLength:[2,'First name is too short']
    },
    userName :{
        type:String,
        $concat: ["$firstName", "$lastName"]
    },
    email:{
        type:String ,
         unique:true,
        trim:true,
        lowercase:true,
        required:true
    },
    
    password:{
        type:String,
        min:[5, 'Password should be at least 5 characters'],
        max:[10,"password is too long"],
        required: [true, 'please enter a password']
    },
    recoveryEmail:{
        type:String,
        required:true,
        unique:false,
        lowercase:true,
        trim:true
    },
    DOB:Date,
    mobileNumber:{
        type:Number,
        unique:true,
        min:0,
        max:11
    },
    role:{
        type:String,
        emun:['user','companyHr'],
        default:'user'
    },
    isActive:{
        type:Boolean,
        default:false
    }
},
{timestamps:true})
export const userModel=mongoose.model('user',schema)