import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { PMTableRow, RowInfo, transformIntoRowInfo } from './PMTableRow';
import { EncryptedLogins } from '@api/models/Logins';
import { FC, useState } from 'react';

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

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
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

// # CREATION OF TABLE 
const PMTable : FC<PMTableProps> = ({ rows }) => {

  // create fake data of type ENCRYPTED LOGINS 
  rows = [
    {
      name: 'Cupcake',
      emails : 'toto@amzeza',
      website: 'toto',
      timestamp: 'toto',
    },
    {
      name: 'Donut',
      emails : 'toto@amzeza',
      website: 'toto',
      timestamp: 'toto',
    },
    {
      name: 'Eclair',
      emails : 'toto@amzeza',
      website: 'toto',
      timestamp: 'toto',
    },
  ]


  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof EncryptedLogins>('name');
  
  const [encryptedLogins, setEncryptedLogins] = 
    useState<RowInfo<EncryptedLogins>[]>(transformIntoRowInfo<EncryptedLogins>(rows));

  const handleRequestSort = (_:any, property: keyof EncryptedLogins) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const onRowClick = (row: RowInfo<EncryptedLogins>) => {
    row.isSelected = !row.isSelected;
    setEncryptedLogins([...encryptedLogins]);
  };

  return (
        <TableContainer>
          <Table sx={{ minWidth: 750 }} >

            {/* <PMTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            /> */}

            <TableBody>
              {
                // stableSort(rows, getComparator(order, orderBy))
                encryptedLogins.map((row, index) => {

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