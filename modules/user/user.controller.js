import { userModel } from "../../../Databases/models/user.model.js"
import bcrypt from bcrypt

export const signUp=async (req,res,next)=>{
    await userModel.insertMany({email:req.body.email,mobileNumber:req.body.mobileNumber,password:req.body.password})
    res.json({message:"success"})
}
export const login=async(req,res)=>{
    let userEmail=await userModel.findOne({email:req.body.email})
    let userPhone=await userModel.findOne({mobileNumberNumber:req.body.mobileNumber})
    if((userEmail||userPhone) && bcrypt.compareSync(req.body.password,user.password)){
     return res.json({message:"login...token"})
     user.isActive="true"
    }
    return res.json({message:"user not found "})
}
export const UpdateUser=async(req,res,next)=>{
    const userId=req.params.id;
    const newData=req.body;
    const user=await userModel.findById(userId)
    if (!user)return res.json({message:"User not Found"})
if (params.id!=userId) return res.json({message:"unauthorized"})
if (newData.email!=user.email){
    const emailExist= await userModel.findOne({email:newData.email});
    if (emailExist) return res.json({message:"This Email is already taken."})
    user.email=newData.email
}
if (newData.mobileNumber!=user.mobileNumber){
    const mobileNumberExist= await userModel.findOne({mobileNumber:newData.mobileNumber});
    if (mobileNumberExist) return res.json({message:"This Mobile Number is already taken."})
    user.mobileNumber=newData.mobileNumber
}
if(newData.recoveryEmail) user.recoveryEmail=newData.recoveryEmail
if (newData.DOB)  user.DOB = newData.DOB 
if (newData.firstName)  user.firstName = newData.firstName
if (newData.lastName)   user.lastName = newData.lastName
res.json({message:"User Updated Successfully",newData})
}

export const deleteAccount=async(req,res,next)=>{
    const userId=req.params.id
    const user= await userModel.findById(userId)
    if(!user){
        return res.json({message:"User Not Found"})
    }
    if(params.id!=userId){
        return res.json({message:"Unauthorized"})
    }
    await user.deleteOne(userId)
}
export const getUserData= async (req,res,next)=> {
    const userId=req.params.id
    const user= await userModel.findById(userId)
    if(!user) return res.json({message:"User not found"})

if (params.id!=userId) return res.json({message:"an authorized"})
if (user.isActive="true") return res.json({message:"your acount data",user})
}
export const getProfile=async(req,res,next)=>{
    const requestId=req.params.id
    const userId=req.params.userId
    const user=await userModel.findById(userId)
    if(!user){
        return res.json({message:"User Not Found"})
    }
    if(requestId!==userId)return res.json({message: "You are not allowed to view this profile"})
    res.json({profile:user})
}
export const updatePassword=async(req,res,next)=>{
    const userId= req.params.userId;
    const user=await userModel.findById(userId)
    if (!user)return res.json({message:"User Not  Found"})
    let passwordCheck=await bcrypt.compareSync(currentPassword,user.password)
if (!passwordCheck) return res.json({message:'Current Password is incorrect'});
let newPassord=await bcrypt.hashSync(newPassword,8);
user.password=newPassord

}
export const forgetPassword=async(req,res)=>{
    const { email, newPassword } = req.body;
    const user = await userModel.findOne({email});
    if (!user) return res.json({message:"User Not  Found"})
    const OTP = Math.floor(1000 + Math.random() * 9000);
    user.resetToken = OTP;
    user.resetTokenExpiration = Date.now() + 600000;
    res.json({ message: 'OTP sent', OTP });

}
export const resetPasword=async(req,res,next)=>{
    const { email, OTP, newPassword } = req.body;
    const user = await userModel.findOne({ email, resetToken: OTP, resetTokenExpiration: { $gt: Date.now() } });
    if (!user) return res.json({message:"User Not  Found"})
    const hashedPassword = await bcrypt.hash(newPassword, 8);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    res.json({ message: 'Password Reset Successfully' })

}
export const findAccounts= async (req,res)=> {
    const { recoveryEmail } = req.params;
    const users = await userModel.find({ recoveryEmail });
    res.json({users})

}