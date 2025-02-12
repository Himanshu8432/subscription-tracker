import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.rotes.js";
// import authRouter from "./routes/auth.route.js";
import connectiontoDatabase from "./Database/mongodb.js";
// import userRouter from "./routes/user.rotes.js"
const app = express();
app.use("/api/v1/users", userRouter);
app.get("/", (req, res) => {
  res.send("Welcome to subdub");
});
app.listen(PORT, async() => {
  console.log(`server is running on port ${PORT}`);
  await connectiontoDatabase()
});
