import mongoose from "mongoose";
import { MY_DB } from "../constants.js";

const connectDB = async () => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${MY_DB}`)
       console.log(`\n MongoDB connected !! DB host :${connectionInstance.connection.host} `);
       
    }catch (error) {
        console.log("error while connecting MongoDB", error);
        process.exit(1)
    }
}

export default connectDB