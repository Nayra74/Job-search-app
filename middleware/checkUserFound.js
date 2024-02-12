import { userModel } from "../../Databases/models/user.model.js"
import bcrypt from bcrypt
export const checkUserFound=async(req,res,next)=>{
    let userEmail= await userModel.findOne({email:req.body.email,})
    let userPhone=await userModel.findOne({mobileNumber: req.body.mobileNumber})
    if (userEmail&&userPhone ) return res.json({message:"User is already exist"})
    req.body.password=bcrypt.hashSync(req.body.password,8)
next()
}