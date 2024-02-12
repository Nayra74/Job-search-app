import mongoose from "mongoose";
const schema= new mongoose.Schema({
    jobTitle:{
        type:String,
        required:[true,"Please provide a Job Title"],
        trim: true,
        minLength:[2,'job Title is too short']

    },
    jobLocation:{
        type:String,
        enum:['onSite','remotely','hybird'],
        required:true
    },
    workingTime:{
        type:String,
        enum:['partTime','fullTime']
    },
    serioritylevel:{
        type:String,
        emun:['junior','midlevel','senior','teamlead','CTO']
    },
    jobDescription:{
        type:String,
        trim:true,
        required:[true,"jobDescription can't be empty"],
        minLength:[10,"Job Description is too short"],
        maxLength:[500,"Job Description is  too long "]
    },
    technicalSkills:{
        type:String,
    
    },
    softSkills:String,
    addedBy:{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'companyHr'
    }
},{timestamps:true})
export const jobModel=mongoose.model('job',schema)