import { useContext, useState, type FormEvent } from "react";
import { type CommentType, type User } from "../types/interface";
import { FaHeart } from "react-icons/fa";
import { CommentContext } from "../context/CommentContext";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface CommentProps {
  comment: CommentType;
  allComments: CommentType[];
  users: User[];
  depth?: number;
}

const Comment: React.FC<CommentProps> = ({ comment, allComments, users, depth=0 }) => {
  const { userInfo } = useAuth();
  const [isInputBoxVisible, setIsInputBoxVisible] = useState(false);
  const [input, setInput] = useState("");
  const [upvoted, setUpvoted] = useState(false);
  const context = useContext(CommentContext);
  const navigate = useNavigate()

  if (!context) throw new Error("Must be used within CommentProvider");
  const { setComments } = context;
  const [count, setCount] = useState(comment.upvote);

  const [replyVisible, setReplyVisible] = useState(false);
  const handleUpvote = () => {
    setUpvoted(!upvoted);
    if (!upvoted) {
      setCount(count + 1);
      setComments((prevComments: CommentType[]) =>
        prevComments.map((c) =>
          c._id === comment._id ? { ...c, upvote: c.upvote + 1 } : c
        )
      );
    } else {
      setCount(count - 1);
      setComments((prevComments: CommentType[]) =>
        prevComments.map((c) =>
          c._id === comment._id ? { ...c, upvote: c.upvote - 1 } : c
        )
      );
    }
  };
  const author = users.find((user) => user._id === comment.author);
  const replies = allComments.filter((c) => c.parentId === comment._id);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input) {
      throw new Error("do not leave input field empty");
    }
    const newComment = {
      _id: Math.ceil(Math.random() * 1000),
      postId: null,
      author: userInfo?._id??"",
      content: input,
      parentId: comment._id,
      upvote: 0,
      downvote: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setComments((prevComments) =>[...prevComments,newComment]);
    setInput("")
    setIsInputBoxVisible(false)
  };
  return (
    <div className="relative pl-4 mb-4">
      {replies.length > 0 && replyVisible &&(
        <div className="absolute left-7 top-10 bottom-0 mb-4 w-[1px] bg-gray-600"></div>
      )}
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
        <div
          className="upvote cursor-pointer flex items-center gap-1"
          onClick={() => handleUpvote()}
        >
          <FaHeart size={12} fill={`${upvoted ? "red" : "white"}`} /> {count}
        </div>
      </div>
      <div className="comment ml-10">{comment.content}</div>
      

      {replies.length >= 0 && (
        <div className="mt-2  relative sm:ml-10" style={{
          marginLeft: window.innerWidth < 640 ? `10px` : undefined,
        }}>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 items-center">
              <div
                className="text-gray-600 hover:underline cursor-pointer "
                onClick={() => setReplyVisible(!replyVisible)}
              >
                <span
                  className={`${
                    replyVisible? "hidden" : ""
                  } text-gray-400 text-sm font-semibold `}
                >
                  {replies.length > 0 ? (
                    <span>View Replies</span>
                  ):(
                    <span>No Replies</span>
                  )}
                </span>
              </div>
              <div className="text-gray-600 hover:underline cursor-pointer flex gap-2">
                <span
                  className={`${
                    replyVisible ? "hidden" : ""
                  } text-gray-400 text-sm font-semibold `}
                  onClick={() => setIsInputBoxVisible(!isInputBoxVisible)}
                >
                  Reply
                </span>
              </div>
            </div>
            <form
              action=""
              className={`flex gap-3 ${isInputBoxVisible ? "" : "hidden"}`}
              onSubmit={(e)=>{
                e.preventDefault()
                if(!userInfo?._id){
                  alert("Login first")
                  navigate('/login')
                  return
                }
                handleSubmit(e)
              }}
            >
              <input
                type="text"
                value={input}
                placeholder="Reply?"
                className="bg-[#404040] h-10 rounded-xl pl-2"
                onChange={(e) => handleInput(e)}
              />
              <button className="bg-[#242423] h-10 w-15 rounded-xl cursor-pointer">
                Reply
              </button>
            </form>
            <div className={`${replyVisible ? "mt-2" : "hidden"}`}>
              {replies.map((reply) => (
                <Comment
                  key={reply._id}
                  comment={reply}
                  allComments={allComments}
                  users={users}
                  depth={depth + 1}
                />
              ))}
            </div>
          </div>
          <div
            className="text-gray-600 hover:underline cursor-pointer"
            onClick={() => setReplyVisible(!replyVisible)}
          >
            <span
              className={`${
                replyVisible ? "" : "hidden"
              } text-gray-400 font-semibold text-sm`}
            >
              Hide Replies
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
