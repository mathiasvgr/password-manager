import { useContext } from "react";
import { TableDataContextInstance } from "./provider/TableDataProvider";

export const useTableData = () => {
  return useContext(TableDataContextInstance);
};