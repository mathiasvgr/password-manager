import { RowInfo } from "@components/Home/PMTable/PMTableRow";
import { useState } from "react";

interface TableDataContext {
  rowsData : RowInfo[],
  setRowsData : (rowsData : RowInfo[]) => void,
}

const getTableDataContext = (rowsDataInit ?: RowInfo[]) : TableDataContext => {
  const [rowsData, setRowsData] = useState<RowInfo[]>(rowsDataInit || []);

  return {
    rowsData,
    setRowsData,
  };
}

export {
  type TableDataContext,
  getTableDataContext
}