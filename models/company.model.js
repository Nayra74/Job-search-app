import mongoose from "mongoose";
const  Schema = new mongoose.Schema({
    companyName:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true,
        required:[true,"description can't be empty"],
        minLength:[10,"Description is too short"],
        maxLength:[500,"Description is  too long "]
    },
    industry:{
        type:String,

    },
    address:{
        type:String,
        trim:true,
        minLength:[5,"address is too short"]
    },
    numberOfEmployees:{
        type:Number,
        min:'11',
        max:'20'
    },
    companyEmail:{
        type:String ,
        unique:true,
       trim:true,
       lowercase:true,
       required:true
    },
    companyHr: {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user'
    },

},{timestamps:true})
export const companyModel=mongoose.model('company',Schema)