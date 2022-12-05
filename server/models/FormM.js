
import mongoose from "mongoose";

const formSchema=new mongoose.Schema(
    {
        name:{type:String,
        required:true},
        //email:{type:String},
        //date:{type:Date},
        //password:{type:String},
        //tel:{type:String}
    }
)

export default mongoose.model("FormM",formSchema)