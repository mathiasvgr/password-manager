import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { Order } from './PMTable';
import { FC } from 'react';
import { EncryptedLogins } from '@api/models/LoginsModel';

interface HeadCell {
    disablePadding: boolean;
    id: keyof EncryptedLogins;
    label: string;
    numeric: boolean;
    isVisible: boolean;
}
  
const HEAD_DESCRIPTION: readonly HeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: false,
      label: 'Name',
      isVisible: true,
    },
    {
      id: 'website',
      numeric: false,
      disablePadding: false,
      label: 'Website',
      isVisible: true,
    },
    {
      id: 'emails',
      numeric: false,
      disablePadding: false,
      label: 'Emails',
      isVisible: true,
    },
    {
      id: 'timestamp',
      numeric: true,
      disablePadding: false,
      label: 'Last modification',
      isVisible: true,
    }
];


interface PMTableHeadProps {
  numSelected: number;
  onRequestSort: (property: keyof EncryptedLogins | any ) => void;
  onSelectAllClick: () => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const PMTableHead : FC<PMTableHeadProps> = (props: PMTableHeadProps) => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  
  const createSortHandler = (property: keyof EncryptedLogins) => (_ : React.MouseEvent<unknown>) => {
      onRequestSort(property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        <TableCell />

        {HEAD_DESCRIPTION.map((headCell) => (

          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >

            {headCell.isVisible && 
              (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}

                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              )
            }

          </TableCell>
        ))}

      </TableRow>
    </TableHead>
  );
}

export {
    PMTableHead
}