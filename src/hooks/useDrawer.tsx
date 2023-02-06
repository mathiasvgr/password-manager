import { useContext } from "react";
import { DrawerContextInstance } from "./provider/DrawerProvider";

export const useDrawer = () => {
  return useContext(DrawerContextInstance);
};