import { Router } from "express";
const subscriptionRouter=Router()
subscriptionRouter.get("./",(req,res)=>{
    res.send("This is the subscription page")
})