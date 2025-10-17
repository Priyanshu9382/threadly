import { useContext, useState } from "react";
import { type CommentType, type User } from "../types/interface";
import { FaHeart } from "react-icons/fa";
import { CommentContext } from "../context/CommentContext";

interface CommentProps {
  comment: CommentType;
  allComments: CommentType[];
  users: User[];
}

const Comment: React.FC<CommentProps> = ({ comment, allComments, users }) => {
  const context = useContext(CommentContext);
  
  if (!context) throw new Error("Must be used within CommentProvider");
  const { setComments} = context
  const [count,setCount] = useState(comment.upvote)
  
  const [replyVisible, setReplyVisible] = useState(false);
const handleUpvote = ()=>{
  setCount(count + 1)
  setComments((prevComments: CommentType[])=>
    prevComments.map(c=>c._id === comment._id?{...c,upvote:c.upvote + 1}: c)
  )
}
  const author = users.find((user) => user._id === comment.author);
  const replies = allComments.filter((c) => c.parentId === comment._id);

  return (
    <div className="mb-4">
      <div className="user_detail flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img
            src={author?.avatar}
            alt="user avatar"
            className="h-8 w-8 rounded-full"
          />
          <div className="user_Id font-semibold text-sm">
            {author?.username}
          </div>
        </div>
        <div className="upvote cursor-pointer flex items-center gap-1" onClick={()=>handleUpvote()}>
            <FaHeart size={12}  /> {count}
        </div>
      </div>
      <div className="comment ml-10">{comment.content}</div>

      {replies.length > 0 && (
        <div className="ml-10">
          <div
            className="text-gray-600 hover:underline cursor-pointer"
            onClick={() => setReplyVisible(!replyVisible)}
          >
            <span className={`${replyVisible?"hidden":""} text-sm font-semibold`}>View Replies</span>
          </div>

          <div className={`${replyVisible ? "mt-2" : "hidden"}`}>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                comment={reply}
                allComments={allComments}
                users={users}
              />
            ))}
          </div>
          <div
            className="text-gray-600 hover:underline cursor-pointer"
            onClick={() => setReplyVisible(!replyVisible)}
          >
            <span className={`${replyVisible?"":"hidden"} font-semibold text-sm`}>Hide Replies</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
