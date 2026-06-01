import mongoose from "mongoose";
import { envConfig } from "./config.ts";

async function connectDB(){
    try{
        mongoose.connection.on('connected',()=>{
            console.log('Connected to MongoDB')
        })
       await mongoose.connect(envConfig.mongodb_uri as string)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}
export default connectDB