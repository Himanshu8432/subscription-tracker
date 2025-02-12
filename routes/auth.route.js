import { Router } from "express";
const authRouter=Router();
authRouter.post("/sign-up",(req,res)=>{
    res.send({
        message:"User created successfully",
    })
})
authRouter.post("/sign-in",(req,res)=>{
    res.send({
        message:"User created successfully",
    })
})
authRouter.post("/sign-out",(req,res)=>{
    res.send({
        message:"User created successfully",
    })
})
export default authRouter