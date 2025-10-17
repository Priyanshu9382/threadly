import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="body p-4">
        <h1 className="text-white text-2xl font-bold ">All Posts</h1>
        {/* {array.forEach(element => {
          <Card/> //imported from a card component Here array can be of posts
        });} */}
        <div className="post bg-[#333533] w-full h-[25vh] overflow-hidden text-white mt-3 rounded-2xl shadow-2xl p-4">
          <div className="title flex ">
            <Link to={'/'}><img
              src= "https://i.pravatar.cc/150?img=1"
              alt="User avatar"
              className="h-10 w-10 rounded-full mr-4"
            /></Link>
            <Link to={'/post'}><div className="heading text-2xl font-bold">What is a Title</div></Link>
          </div>
          <div className="description pb-3 text-wrap mt-4"> This is the description of this Post. Title is the main heading of the post which is shown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit nihil vero porro at sequi quo cupiditate Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque pariatur incidunt error soluta unde molestiae, eum sequi aperiam esse. Deserunt esse fugit nesciunt, magni perferendis doloribus repellendus laborum ut repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias, itaque non in expedita blanditiis impedit deserunt molestiae dolore animi, totam assumenda ab explicabo eaque dolorum. Ad mollitia fuga rem...</div>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default Landing;
