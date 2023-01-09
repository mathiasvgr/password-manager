import { ApiResponse } from "@api/ApiResponse";
import { UserApi } from "@api/UserApi";
import { UserModel } from "@api/models/UserModel";
import { useEffect, useState } from "react";

interface AuthContext {
  user : UserModel | null,
  login : (password : string) => Promise<UserModel> ,
  register : (password : string, surname : string, name : string) => Promise<UserModel>,
  logout : () => void,
}

const getAuthContext = () : AuthContext => {
  const [user, setUser] = useState<UserModel | null>(null);

  const login = async (password : string) => {
      const user : UserModel = (await UserApi.login(password)).data
      setUser(user);
      return user;
  };
  
  const register = async (password : string, surname : string, name : string) => {
    const user : UserModel = (await UserApi.register(password, {surname, name})).data
    setUser(user);
    return user;
  };
  
  const logout = () => {
    setUser(null);
  };

  // do retrieve user info first load in useEffect for later :
  useEffect(() => {
    UserApi.getUser().then((response : ApiResponse<UserModel>) => {
      setUser(response.data);
    }).catch((error : any) => {
      console.error("Error while loading user :", error.message)
    })
  }, [])
  

  return {
    user,
    login,
    register,
    logout,
  };
}

export {
  type AuthContext,
  getAuthContext
}