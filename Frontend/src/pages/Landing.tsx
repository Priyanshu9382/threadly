import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Test from "./Test";
const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <div className="body p-4">
        <h1 className="text-black text-2xl font-bold ">All Posts</h1>
        {/* {array.forEach(element => {
          <Card/> //imported from a card component Here array can be of posts
        });} */}
        <div className="post w-full h-[25vh] overflow-hidden text-black mt-3 rounded-2xl shadow-2xl p-4">
          <div className="title flex ">
            <Link to={'/profile'}><img
              src={logo}
              alt="User avatar"
              className="h-10 w-10 rounded-full mr-4"
            /></Link>
            <Link to={'/post'}><div className="heading text-2xl font-bold">What is a Title</div></Link>
          </div>
          <div className="description pb-3 text-wrap mt-4"> This is the description of this Post. Title is the main heading of the post which is shown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit nihil vero porro at sequi quo cupiditate....</div>
        </div>
      </div>
      <Test/>
    </div>
  );
};

export default Landing;
