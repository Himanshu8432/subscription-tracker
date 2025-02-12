import { Router } from "express";
const userRouter = Router();



userRouter.get("/", (req, res) => {
  res.send("Hello User");
});
userRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello User ${id}`);
});
userRouter.post("/",(req,res)=>{
    res.send("Hello User Post");
})
export  default userRouter