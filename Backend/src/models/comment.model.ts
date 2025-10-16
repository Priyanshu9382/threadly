import mongoose from "mongoose";

export interface IComment extends Document{
    postId: mongoose.Schema.Types.ObjectId,
    author: mongoose.Schema.Types.ObjectId,
    content: string,
    parentId:  mongoose.Schema.Types.ObjectId | null,
    createdAt: Date,
    updatedAt: Date
}

const CommentSchema = new mongoose.Schema<IComment>({
    postId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    author: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content:{
        type: String,
        required: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: null
    }
},{timestamps: true})

export default mongoose.model<IComment>("Comment",CommentSchema)