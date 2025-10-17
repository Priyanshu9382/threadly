import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const logoutUser = async () => {
        
      logout();
      navigate("/");
    };
    logoutUser();
  }, [logout, navigate]);
  return <div>Logging Out the User</div>;
};

export default Logout;
