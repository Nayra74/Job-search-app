import { Express } from "express";
import { UpdateUser, deleteAccount, findAccounts, getProfile, getUserData, login, resetPasword, signUp, updatePassword, } from "./user.controller.js";
import { checkUserFound } from "../../middleware/checkUserFound.js";
import { authenicationToken } from "../../middleware/authenticationToken.js";
export const userRouter=Express.Router()
userRouter.post('/signup',checkUserFound,signUp)
userRouter.post('/login',login)
userRouter.put('/account',authenicationToken,UpdateUser)
userRouter.delete("/account",authenicationToken,deleteAccount)
userRouter.get("/account",authenicationToken,getUserData)
userRouter.get("/profile:userId",authenicationToken,getProfile)
userRouter.put("/update-password",authenicationToken,updatePassword)
userRouter.post('/forgot-password',ForgotPassword)
userRouter.post('/reset-password',resetPasword)
userRouter.get('/accounts/:recoveryEmail',findAccounts)

export default  userRouter; 