import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.midleware.js";
const userRouter = Router();



userRouter.get("/", getUsers);
userRouter.get("/:id",authorize, getUser);
userRouter.post("/",(req,res)=>{
    res.send("Hello User Post");
})
export  default userRouter