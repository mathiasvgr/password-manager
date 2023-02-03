import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { PMTableRow, RowInfo, transformIntoRowInfo } from './PMTableRow';
import { EncryptedLogins } from '@api/models/LoginsModel';
import { FC, useState } from 'react';
import { PMTableHead } from './PMTableHead';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export type Order = 'asc' | 'desc';

type CompareFunction<Key extends keyof any> = (a: { [key in Key]?: number | string }, b: { [key in Key]?: number | string }) => number;

function getComparator<Key extends keyof any>(order: Order, orderBy: Key): CompareFunction<Key> {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {

  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

interface PMTableProps {
  rows: EncryptedLogins[];
}

const PMTable : FC<PMTableProps> = ({ rows }) => {

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof EncryptedLogins>("emails");
  
  const [encryptedLogins, setEncryptedLogins] = 
    useState<RowInfo[]>(transformIntoRowInfo(rows));

  const handleRequestSort = (property: keyof EncryptedLogins) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const onRowClick = (row: RowInfo) => {
    row.isSelected = !row.isSelected;
    setEncryptedLogins([...encryptedLogins]);
  };

  const onSelectAll = () => {
    if (isAtLeastOneSelected(encryptedLogins)) {
      encryptedLogins.forEach((row) => (row.isSelected = false));
    } else {
      encryptedLogins.forEach((row) => (row.isSelected = true));
    }
    setEncryptedLogins([...encryptedLogins]);
  } 

  const isAtLeastOneSelected = (rows : RowInfo[]) => {
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].isSelected) {
        return true;
      }
    }
    return false;
  }

  return (
        <TableContainer>
          <Table sx={{ minWidth: 750 }} >

            <PMTableHead
              numSelected={encryptedLogins.reduce((total, row) => total + (row.isSelected ? 1 : 0), 0)}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={onSelectAll}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            <TableBody>
              {
                stableSort<RowInfo>(encryptedLogins, getComparator<keyof EncryptedLogins>(order, orderBy))
                .map((row, index) => {

                  return (
                    <PMTableRow
                        onRowClick={onRowClick}
                        row={row}
                        key={index}
                      />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
  );
}


export {
    PMTable
}