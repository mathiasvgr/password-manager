import { createContext } from 'react'
import type { FC, PropsWithChildren } from 'react'
import { TableDataContext, getTableDataContext } from './contexts/TableDataContext';
import { RowInfo } from '@components/Home/PMTable/PMTableRow';

const TableDataContextInstance = createContext<TableDataContext>(null!);

interface TableDataProviderProps {
  rowsDataInit ?: RowInfo[]
}

const TableDataProvider: FC<PropsWithChildren<TableDataProviderProps>> = ({ children, rowsDataInit }) => {
  const auth = getTableDataContext(rowsDataInit);
  
  return (
      <TableDataContextInstance.Provider value={auth}>
        {children}
      </TableDataContextInstance.Provider>
  )
}

export {
  TableDataProvider,
  TableDataContextInstance
}