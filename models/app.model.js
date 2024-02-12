import mongoose from "mongoose";
const schema=new mongoose.Schema({
    jobId:{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'job'
    },
   userId:{
    type : mongoose.Schema.Types.ObjectId, 
    ref : 'user'
   },
   userTechSkills:{
    type : mongoose.Schema.Types.ObjectId, 
    ref : 'technicalSkills'
   },
   userSoftSkills:{
    type : mongoose.Schema.Types.ObjectId, 
    ref : 'softSkills'
   }
    

})
export const applicationModel=mongoose.model("application",schema)