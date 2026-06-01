
export enum Status{
    pending = "pending",
    completed = "completed"
}

export interface ITodo{
    task : String,
    deadline : String,
    status : Status
}