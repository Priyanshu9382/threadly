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
            <Link to={'/profile'}><img
              src= "https://i.pravatar.cc/150?img=1"
              alt="User avatar"
              className="h-10 w-10 rounded-full mr-4"
            /></Link>
            <Link to={'/post'}><div className="heading text-2xl font-bold">What is a Title</div></Link>
          </div>
          <div className="description pb-3 text-wrap mt-4"> This is the description of this Post. Title is the main heading of the post which is shown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit nihil vero porro at sequi quo cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam molestiae nihil excepturi. Eius in perspiciatis distinctio, reiciendis suscipit consequuntur excepturi quisquam eveniet culpa voluptatem eum quidem expedita odio deserunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum asperiores non labore animi, consectetur perspiciatis aperiam recusandae vel pariatur inventore ipsam explicabo porro, laudantium quia, quos id delectus itaque atque...</div>
        </div>
        <div className="post bg-[#333533] w-full h-[25vh] overflow-hidden text-white mt-3 rounded-2xl shadow-2xl p-4">
          <div className="title flex ">
            <Link to={'/profile'}><img
              src= "https://i.pravatar.cc/150?img=1"
              alt="User avatar"
              className="h-10 w-10 rounded-full mr-4"
            /></Link>
            <Link to={'/post'}><div className="heading text-2xl font-bold">What is a Title</div></Link>
          </div>
          <div className="description pb-3 text-wrap mt-4"> This is the description of this Post. Title is the main heading of the post which is shown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit nihil vero porro at sequi quo cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam molestiae nihil excepturi. Eius in perspiciatis distinctio, reiciendis suscipit consequuntur excepturi quisquam eveniet culpa voluptatem eum quidem expedita odio deserunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum asperiores non labore animi, consectetur perspiciatis aperiam recusandae vel pariatur inventore ipsam explicabo porro, laudantium quia, quos id delectus itaque atque...</div>
        </div>
        <div className="post bg-[#333533] w-full h-[25vh] overflow-hidden text-white mt-3 rounded-2xl shadow-2xl p-4">
          <div className="title flex ">
            <Link to={'/profile'}><img
              src= "https://i.pravatar.cc/150?img=1"
              alt="User avatar"
              className="h-10 w-10 rounded-full mr-4"
            /></Link>
            <Link to={'/post'}><div className="heading text-2xl font-bold">What is a Title</div></Link>
          </div>
          <div className="description pb-3 text-wrap mt-4"> This is the description of this Post. Title is the main heading of the post which is shown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit nihil vero porro at sequi quo cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam molestiae nihil excepturi. Eius in perspiciatis distinctio, reiciendis suscipit consequuntur excepturi quisquam eveniet culpa voluptatem eum quidem expedita odio deserunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum asperiores non labore animi, consectetur perspiciatis aperiam recusandae vel pariatur inventore ipsam explicabo porro, laudantium quia, quos id delectus itaque atque...</div>
        </div>
        <div className="post bg-[#333533] w-full h-[25vh] overflow-hidden text-white mt-3 rounded-2xl shadow-2xl p-4">
          <div className="title flex ">
            <Link to={'/profile'}><img
              src= "https://i.pravatar.cc/150?img=1"
              alt="User avatar"
              className="h-10 w-10 rounded-full mr-4"
            /></Link>
            <Link to={'/post'}><div className="heading text-2xl font-bold">What is a Title</div></Link>
          </div>
          <div className="description pb-3 text-wrap mt-4"> This is the description of this Post. Title is the main heading of the post which is shown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit nihil vero porro at sequi quo cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam molestiae nihil excepturi. Eius in perspiciatis distinctio, reiciendis suscipit consequuntur excepturi quisquam eveniet culpa voluptatem eum quidem expedita odio deserunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum asperiores non labore animi, consectetur perspiciatis aperiam recusandae vel pariatur inventore ipsam explicabo porro, laudantium quia, quos id delectus itaque atque...</div>
        </div>
        <div className="post bg-[#333533] w-full h-[25vh] overflow-hidden text-white mt-3 rounded-2xl shadow-2xl p-4">
          <div className="title flex ">
            <Link to={'/profile'}><img
              src= "https://i.pravatar.cc/150?img=1"
              alt="User avatar"
              className="h-10 w-10 rounded-full mr-4"
            /></Link>
            <Link to={'/post'}><div className="heading text-2xl font-bold">What is a Title</div></Link>
          </div>
          <div className="description pb-3 text-wrap mt-4"> This is the description of this Post. Title is the main heading of the post which is shown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit nihil vero porro at sequi quo cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam molestiae nihil excepturi. Eius in perspiciatis distinctio, reiciendis suscipit consequuntur excepturi quisquam eveniet culpa voluptatem eum quidem expedita odio deserunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum asperiores non labore animi, consectetur perspiciatis aperiam recusandae vel pariatur inventore ipsam explicabo porro, laudantium quia, quos id delectus itaque atque...</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
