import { EncryptedLogins } from "@api/models/Logins";
import { TableRow, TableCell, Checkbox } from "@mui/material"
import { FC } from "react";


function transformIntoRowInfo(logins : EncryptedLogins[]) : RowInfo[] {
    return logins.map((login : EncryptedLogins) => {
        return {
            ...login,
            isSelected : false,
        }
    })
}

function transformTimestampToReadableDate(timestamp : number) : string {
    console.log(timestamp);
    return new Date(timestamp).toLocaleDateString();

}

interface RowInfo extends EncryptedLogins {
    isSelected : boolean;
}
  
interface PMTableRowProps {
    onRowClick : (row: RowInfo) => void;
    row : RowInfo,
    key : number,
}

const PMTableRow : FC<PMTableRowProps> = ({ onRowClick, row, key}) => {
    const {name, emails, website, timestamp, logo, isSelected} = row;

    return (
        <TableRow hover role="checkbox" key={key} selected={isSelected}>
            <TableCell padding="checkbox">
                <Checkbox
                    onClick={(_ : any) => onRowClick(row)}
                    color="primary"
                    checked={isSelected}
                />
            </TableCell>
            
            <TableCell component="th" scope="row" padding="none">
                {name}
            </TableCell>
            <TableCell align="left">{emails}</TableCell>
            <TableCell align="left">{website}</TableCell>
            <TableCell align="right">{transformTimestampToReadableDate(timestamp)}</TableCell>
          </TableRow>
    )
}

export {
    PMTableRow,
    type RowInfo,
    transformIntoRowInfo
}