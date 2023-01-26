import { EncryptedLogins } from "@api/models/Logins";
import { TableRow, TableCell, Checkbox, Theme } from "@mui/material"
import { FC } from "react";

export class RowInfo<T>  {
    data : T; 
    isSelected : boolean;
  
    constructor(data: T) {
      this.isSelected = false;
      this.data = data;
    }
}
  
export function transformIntoRowInfo<T>(data: T[]) : RowInfo<T>[] {
    let rows : RowInfo<T>[] = [];

    if (!data)
        return rows;

    data.forEach((element) => {
        rows.push(new RowInfo(element));
    });

    return rows;
}
  
interface PMTableRowProps {
    onRowClick : (row: RowInfo<EncryptedLogins>) => void;
    row : RowInfo<EncryptedLogins>,
    key : number,
}

const PMTableRow : FC<PMTableRowProps> = ({ onRowClick, row, key}) => {
    const {name, emails, website, timestamp, logo} = row.data;

    return (
        <TableRow hover role="checkbox" key={key} selected={row.isSelected}>
            <TableCell padding="checkbox">
                <Checkbox
                    onClick={(_ : any) => onRowClick(row)}
                    color="primary"
                    checked={row.isSelected}
                />
            </TableCell>
            
            <TableCell component="th" scope="row" padding="none">
                {name}
            </TableCell>
            <TableCell align="left">{emails}</TableCell>
            <TableCell align="left">{website}</TableCell>
            <TableCell align="left">{timestamp}</TableCell>
          </TableRow>
    )
}

export {
    PMTableRow
}