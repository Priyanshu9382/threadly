import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const logoutUser = async () => {
      try {
        logout();
        navigate("/");
      } catch (error) {
        alert("Error in User logout");
        if (error instanceof Error) {
          throw new Error("Error in authenticating user " + error.message);
        } else {
          throw new Error("Unknown Error in authenticating user " + error);
        }
      }
    };
    logoutUser();
  }, [logout, navigate]);
  return <div>Logging Out the User</div>;
};

export default Logout;
