import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
export const signup = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, email, password } = req.body;
    //check if user already exists
    console.log(req.body)
    const Existinguser = await User.findOne({ email });
    if (Existinguser) {
      throw new Error("Email already exists");
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create new user
    const newUser = await User.create(
      [
        {
          name,
          email,
          password: hashedPassword,
        },
      ],
      {
        session,
      }
    );
    const token=jwt.sign({
        userId:newUser[0]._id},JWT_SECRET,{
            expiresIn:JWT_EXPIRES_IN
        })

    //save user to database
    await session.commitTransaction();
    session.endSession();
    res.status(201).json({ 
        success:true,
        message:"User created successfully",
        data:{
            token,
            user:newUser[0],


        }
    });
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    res.status(500).send({ message:error });
  }
};
export const signin=async(
    req,res,next
)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" 
                });
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(401).json({ success: false, message: "Invalid password" });
                    }
                    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
                        expiresIn: JWT_EXPIRES_IN
                        });
                        res.status(200).json({
                            success: true,
                            message: "User signed in successfully",
                            data: {
                                token,
                                user
                                }
                                });
                                } catch (error) {
                                    res.status(500).send({ message: error });
                                    }
}
