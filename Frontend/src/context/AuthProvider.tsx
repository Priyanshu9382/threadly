import React, { useEffect, useState, type ReactNode } from "react";
import { type UserInfo } from "../types/interface";
import { UserContext } from "./UserContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("userInfo");

    if (storedToken && storedUser) {
      setAccessToken(storedToken);
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const registerData = new FormData();
    registerData.append("username", username);
    registerData.append("email", email);
    registerData.append("password", password);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/user/register`,
        {
          method: "POST",
          body: registerData,
        }
      );
      if (!res.ok) throw new Error(`Failed to register`);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error in Registering User", err.message);
      } else {
        console.error("Unknown error in Registering User", err);
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (!res.ok) throw new Error(`Login failed with res.status${res.status}`);
      const data = await res.json();
      setAccessToken(data.data.accessToken);
      setUserInfo(data.data.user);
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          _id: data.data.user._id,
          email: data.data.user.email,
          avatar: data.data.user.avatar,
          role: data.data.user.role,
          loggedIn: true,
        })
      );
    } catch (err) {
      console.error("Error while logging in ", err);
      logout();
    }
  };

  const logout = async () => {
    try {
      if (!accessToken) throw new Error("No AccessToken");
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserInfo(null);
      setAccessToken(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error in Logging Out User", err.message);
      } else {
        console.error("Unknown error in Logging out User", err);
      }
    }
  };

  const refreshAccessToken = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/refresh`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error in Refreshing Token", err.message);
      } else {
        console.error("Unknown error in Refreshing Token", err);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        accessToken,
        register,
        login,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
