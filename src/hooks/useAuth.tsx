import { useContext } from "react";
import { AuthContextInstance } from "./provider/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContextInstance);
};