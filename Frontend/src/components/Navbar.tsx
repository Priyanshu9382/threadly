import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
const Navbar = () => {
  const {userInfo, logout} = useAuth()
  const handleLogout = async() =>{
    logout()
    alert("User Logged out successfully!")
  }
  return (
    <div className="bg-[#333533] flex justify-between items-center">
      <div className="logo flex items-center gap-3 ml-2">
        {/* <div className="sm:hidden cursor-pointer">
          <FaBars color="#CFDBD5" size={25} />
        </div> */}
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="h-15" />
        </Link>
      </div>
      {userInfo?._id?(
        <Link to={"/"}>
        {userInfo.avatar?(
          <img
          src={userInfo.avatar}
          alt="User avatar"
          className="h-12 w-12 rounded-full mr-4"
        />
        ):(
          <div className="flex gap-2 mr-8">
            <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
            <FaUser size={22} />
          </div>
          <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center" onClick={()=>handleLogout()}>
            <FaSignOutAlt size={22} />
          </div>
          </div>
        )}
      </Link>
      ):(
         <div className="nav-items">
          <div className="btns">
            <div className="login flex gap-3 mr-2 ">
              <Link to={"/login"} className="">
                <button className="text-white bg-black h-10 w-20 rounded-3xl font-bold cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to={'/register'} className="">
                <button className="text-black bg-white h-10 w-20 rounded-3xl font-bold cursor-pointer">
                Signup
              </button>
              </Link>
            </div>
          </div>
        </div> 
      )}
    </div>
  );
};

export default Navbar;
