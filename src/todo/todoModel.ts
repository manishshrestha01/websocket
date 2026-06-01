import mongoose from "mongoose";
import { Status, type ITodo } from "./todoTypes.ts";
const Schema = mongoose.Schema

const todoSchema = new Schema<ITodo>({
    task : String,
    deadline : String,
    status : {
        type : String,
        enum : [Status.pending,Status.completed],
        default : Status.pending
    }
})
export default mongoose.model<ITodo>('Todo',todoSchema)