import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-[#605c5c] flex justify-between items-center">
      <div className="logo flex items-center gap-3 ml-2">
        <div className="sm:hidden cursor-pointer">
          <FaBars size={25} />
        </div>
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="h-15" />
        </Link>
      </div>
      <Link to={"/profile"}>
        <img
          src={logo}
          alt="User avatar"
          className="h-12 w-12 rounded-full mr-4"
        />
      </Link>
      {/* <div className="nav-items">
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
      </div> */}
    </div>
  );
};

export default Navbar;
