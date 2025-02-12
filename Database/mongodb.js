import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("DB_URI is not defined");
}
const connectiontoDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to database");
    return true;
  } catch (error) {
    console.log("Error connecting to database:", error);
    // process.exit(1);
  }
};
export default connectiontoDatabase;
