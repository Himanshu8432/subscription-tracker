import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.rotes.js";
// import authRouter from "./routes/auth.route.js";
import connectiontoDatabase from "./Database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
// import userRouter from "./routes/user.rotes.js"
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
// app.use(cookieParser);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Welcome to subdubs");
});
app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
  await connectiontoDatabase();
});
