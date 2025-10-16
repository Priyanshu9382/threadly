import mongoose from "mongoose";

export interface IPost extends Document{
    title: string,
    content: string,
    author: mongoose.Schema.Types.ObjectId,
    comments:  mongoose.Schema.Types.ObjectId[],
    createdAt: Date,
    updatedAt: Date
}

const PostSchema = new mongoose.Schema<IPost>({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    author:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comments:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
},{timestamps: true})

export default mongoose.model<IPost>("Post",PostSchema)