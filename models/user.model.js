import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name is required"],
      trim: true,
      
    },

    email: {
      type: String,
      required: [true, "user Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email"],
    },
    password: {
      type: String,
      required: [true, "user password is required"],
      trim: true,
      minlength: [8, "password must be at least 8 characters"],
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
