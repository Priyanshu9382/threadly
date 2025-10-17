import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaComments } from "react-icons/fa";
// import commentsData from "../../Data/comments.json";
import users from "../../Data/users.json";
import { useContext, useState } from "react";
import Comment from "./Comment";
import { CommentContextProvider } from "../context/CommentContextProvider";
import { CommentContext } from "../context/CommentContext";

const Post = () => {
  const [commentVisible, setCommentVisible] = useState(false);
  const context = useContext(CommentContext);

  if (!context) throw new Error("Must be used within CommentProvider");

  const { comments } = context;

  return (
    <CommentContextProvider>
      <div className="min-h-screen">
        <Navbar />
        <div className="body p-4">
          <div className="post bg-[#333533] w-full  text-[#CFDBD5] mt-3 rounded-2xl shadow-2xl p-4">
            <div className="title flex">
              <Link to={"/"}>
                <img
                  src= "https://i.pravatar.cc/150?img=1"
                  alt="User avatar"
                  className="h-10 w-10 rounded-full mr-4"
                />
              </Link>
              <Link to={"/post"}>
                <div className="heading text-2xl font-bold">
                  What is a Title
                </div>
              </Link>
            </div>

            <div className="description pb-3 text-wrap mt-4">
              This is the description of this Post. Title is the main heading of
              the post which is shown. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Adipisci odit nihil vero porro at sequi quo
              cupiditate Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quis, vel! Dolores dolor delectus molestias voluptas quae
              porro, voluptatum ratione ad illum unde tempore odit quisquam
              placeat, cupiditate eaque impedit iusto?Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Nobis eligendi optio quis
              placeat quo unde fugit modi, inventore repellat nostrum doloremque
              voluptatibus libero. Facere nulla provident incidunt dolorum, quam
              iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus soluta autem laboriosam expedita aperiam, harum,
              fuga ducimus repellat sit ipsa, nihil non itaque odit eum tenetur
              saepe nostrum illum in. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sit repudiandae vel quibusdam, explicabo
              consectetur aut hic quaerat cumque. Ullam nisi reprehenderit
              libero ipsam magni fuga modi omnis reiciendis. Repellendus,
              beatae.
            </div>

            <div className="comments flex flex-col gap-2 justify-center">
              <div
                className={`flex items-center gap-2 hover:underline text-[#E8EDDF] cursor-pointer`}
                onClick={() => setCommentVisible(!commentVisible)}
              >
                <FaComments />{" "}
                <span>
                  {commentVisible ? "Hide comments" : "view comments"}
                </span>
              </div>

              <div className={`${commentVisible ? "" : "hidden"} `}>
                <div className="h-96 overflow-y-auto">
                  {comments
                    ?.filter((c) => c.parentId == null)
                    .map((c) => (
                      <Comment
                        key={c._id}
                        comment={c}
                        allComments={comments}
                        users={users}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommentContextProvider>
  );
};

export default Post;
