import mongoose , {Schema} from "mongoose" ;
import {AvailableTaskStatus ,TaskStatusEnum} from "../utils/constants.js"


const taskSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
    },
    project:{
        type: Schema.Types.ObjecId,
        ref:"Project",
        required:[true,"project ref is required"],
    },
    assignedTo:{
        type: Schema.Types.ObjecId,
        ref:"User",
        required:true
    },
    assigmnedBy:{
        type: Schema.Types.ObjecId,
        ref:"User",
        required:true
    },
    status :{
        type:String,
        enum:AvailableTaskStatus,
        default: TaskStatusEnum.TODO,

    },
    attachements:{
      type: [
        {
        url:String,
        mimeType:String,
        size : Number,
      }
    ],
    default : [] //[{} , {}],
    }
}, {timestamps:true})


export const Task = mongoose.model("Task" , taskSchema)