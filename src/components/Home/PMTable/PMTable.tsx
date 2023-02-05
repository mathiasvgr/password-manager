import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { PMTableRow, RowInfo } from './PMTableRow';
import { EncryptedLogin } from '@api/models/LoginsModel';
import { FC, useState } from 'react';
import { PMTableHead } from './PMTableHead';
import { useTableData } from '@hooks/useTableData';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

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

const AtLeastOneSelected = (rows : RowInfo[]) => {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].isSelected) {
      return true;
    }
  }
  return false;
}

const PMTable : FC<{}> = () => {
  const {rowsData, setRowsData} = useTableData();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof EncryptedLogin>("emails");

  const handleRequestSort = (property: keyof EncryptedLogin) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const onRowClick = (row: RowInfo) => {
    row.isSelected = !row.isSelected;
    setRowsData([...rowsData]);
  };

  const onSelectAll = () => {
    if (AtLeastOneSelected(rowsData)) {
      rowsData.forEach((row) => (row.isSelected = false));
    } else {
      rowsData.forEach((row) => (row.isSelected = true));
    }
    setRowsData([...rowsData]);
  } 

  return (
        <TableContainer>
          <Table sx={{ minWidth: 950 }} >

            <PMTableHead
              numSelected={rowsData.reduce((total, row) => total + (row.isSelected ? 1 : 0), 0)}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={onSelectAll}
              onRequestSort={handleRequestSort}
              rowCount={rowsData.length}
            />

            <TableBody>
              {
                stableSort<RowInfo>(rowsData, getComparator<keyof EncryptedLogin>(order, orderBy))
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
    PMTable,
    type Order,
    AtLeastOneSelected
}