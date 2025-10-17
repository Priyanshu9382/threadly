import { createContext } from "react";
import {type UserInfo } from "../types/interface";

export interface IUserContext{
    userInfo: UserInfo | null
    accessToken: string | null
    register:(username:string, email:string, password: string) => Promise<void>
    login: (email:string, password: string) =>Promise<void>
    logout:()=>void
    refreshAccessToken:()=>Promise<void>
}

export const UserContext = createContext<IUserContext|undefined>(undefined)