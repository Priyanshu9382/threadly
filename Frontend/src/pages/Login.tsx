import {  useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name == "email"){
      setEmail(e.target.value)
    }
    if(e.target.name == "password"){
      setPassword(e.target.value)
    }
  }
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault()
    try{
      console.log(email,password)
      await login(email, password)
      navigate('/')
    }catch(error){
      if(error instanceof Error){
        throw new Error("Error in authenticating user "+ error.message)
      }else{
        throw new Error("Unknown Error in authenticating user "+error)
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <div className="bg-[#333533] loginForm h-[70vh] w-md shadow-2xl rounded-4xl flex flex-col gap-5">
        <form action="" className="w-full p-10 flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-center text-[#E8EDDF] text-3xl font-bold">Login Page</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold text-[#E8EDDF] pl-1 ">
              Email
            </label>
            <input
              type="text"
              placeholder="test@example.com"
              name="email"
              value={email}
              onChange={(e)=>handleInput(e)}

              className="bg-gray-300 h-12 pl-3 text-md rounded-xl flex items-center"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold text-[#E8EDDF] pl-1">
              password
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e)=>handleInput(e)}

              className="bg-gray-300 h-12 pl-3 text-md rounded-xl flex items-center"
            />
          </div>
          <div className="h-full w-full ">
            <button className="text-2xl text-white bg-black h-14 rounded-2xl mt-3 w-full" >
              Login
            </button>
            <div className="text-sm text-center text-[#CFDBD5]">New Here? <Link to={'/register'} className="underline hover:text-[#F5CB5C]">SignUp Here</Link></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
