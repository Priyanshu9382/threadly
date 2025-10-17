import { AsyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import Comment from "../models/comment.model";
import Post from "../models/post.model";
import mongoose from "mongoose";

const comment = AsyncHandler(async (req, res) => {
    const author = req.user
    const { postId, content, parentId } = req.body
    if (!postId || !author || !content) {
        throw new ApiError(400, "All fields are required")
    }
    const session = await mongoose.startSession();
    session.startTransaction();
    let newComment
    try {
        newComment = await Comment.create(
            [{ postId, author: req.user?._id, content, parentId }],
            { session }
        );

        await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: newComment[0]._id } },
            { session }
        );

        await session.commitTransaction();
        session.endSession();

        res
            .status(201)
            .json(new ApiResponse(201, newComment[0], "Comment and post updated"));
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw new ApiError(500, "Transaction failed: " + error);
    }
})


const getAllComments = AsyncHandler(async (req, res) => {
    const postId = req.params.postId
    const post = await Post.findById({ _id: postId }, { comments: 1 })
    if (!post) {
        throw new ApiError(404, "Post Not found")
    }
    const allComments = await Comment.find({ _id: { $in: post.comments } })
    if (!allComments) {
        throw new ApiError(500, "Error in fetching all comments")
    }
    return res
        .status(200)
        .json(
            new ApiResponse(200, allComments, "Comments fetched Successfully")
        )
})

const editComment = AsyncHandler(async (req, res) => {
    const commentId = req.params.id
    const { content } = req.body
    if (!commentId || !content) {
        throw new ApiError(400, "Field is required")
    }
    const comment = await Comment.findOneAndUpdate(
        { _id: commentId, author: req.user?._id },
        {
            $set: {
                content: content
            }
        }, {
        new: true,
        runValidators: true
    }
    )
    if(!comment){
        throw new ApiError(404, "Comment not found or you are not authorized to edit it")
    }

    return res
        .status(201)
        .json(
            new ApiResponse(201, comment, "Comment updated successfully")
        )

})

const deleteComment = AsyncHandler(async (req, res) => {
    const commentId = req.params.id
    if (!commentId) {
        throw new ApiError(404, "Comment not found")
    }
    const comment = await Comment.findOneAndDelete(
        { _id: commentId, user: req.user?._id }
    )
    if(!comment){
        throw new ApiError(404, "comment not found or you are not authorized to delete it")
    }
    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "comment deleted successfully!")
        )
})

const upvoteComment = AsyncHandler(async(req,res)=>{
    const commentId = req.params.id
    if(!commentId){
        throw new ApiError(400, "CommentId is required")
    }
    const comment = await Comment.findByIdAndUpdate(
        commentId,
        {
            $inc:{
                upvote: 1
            }
        }
    )
    return res
    .status(200)
    .json(
        new ApiResponse(200, comment, "Upvoted successfully")
    )
})

export { comment, getAllComments, editComment, deleteComment }