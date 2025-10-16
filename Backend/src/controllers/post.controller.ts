import Post from "../models/post.model"
import { ApiError } from "../utils/ApiError"
import { ApiResponse } from "../utils/ApiResponse"
import { AsyncHandler } from "../utils/AsyncHandler"

const createPost = AsyncHandler(async (req, res) => {
    const { title, content, author } = req.body
    if (!title || !content || !author) {
        throw new ApiError(400, "All fields are required")
    }
    const newPost = await Post.create({
        title,
        content,
        author
    })
    const createdPost = await Post.findById(newPost._id)
    if (!createdPost) {
        throw new ApiError(500, "Error while creating post")
    }
    return res
        .status(201)
        .json(
            new ApiResponse(201, createdPost, "Post created successfully")
        )
})

const getPost = AsyncHandler(async (req, res) => {
    const postId = req.params.postId
    if (!postId) {
        throw new ApiError(404, "PostId Not found")
    }
    const post = await Post.findById(postId)
    if (!post) {
        throw new ApiError(400, "Invalid PostId")
    }
    return res
        .status(200)
        .json(
            new ApiResponse(200, post, "Post fetched Successfully")
        )
})
const deletePost = AsyncHandler(async (req, res) => {
    const postId = req.params.postId
    if (!postId) {
        throw new ApiError(404, "PostId not found")
    }
    const post = await Post.findOneAndDelete(
        { _id: postId, author: req.user?._id }
    )
    if (!post) {
        throw new ApiError(404, "Post not found or you are not authorized to delete it")
    }
    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Post deleted successfully")
        )
})


export { createPost, deletePost, getPost }