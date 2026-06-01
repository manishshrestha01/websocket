import { config } from "dotenv";
config()

export const envConfig = {
    port : process.env.PORT,
    mongodb_uri : process.env.MONGODB_URI
}