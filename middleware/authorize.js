import { userModel } from "../../Databases/models/user.model.js"

export const authorize=(requiredROle)=> async function (req, res, next) {
    const userId=req.params.id
    const user=await userModel.findById(userId)
    if(!user||user.role!==requiredROle)
    return res.json({message:"forbidden"})
next()

}