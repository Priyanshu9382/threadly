import { useContext } from "react";
import { UserContext, type IUserContext } from "../context/UserContext";

export const useAuth = (): IUserContext =>{
    const context = useContext(UserContext)
    if(!context){
        throw new Error("UseUser must be used within AuthProvider")
    }
    return context
}