import { EncryptedLogins } from "@api/models/LoginsModel";
import { TableRow, TableCell, Checkbox, Avatar, Theme, CSSObject, Box } from "@mui/material"
import { FC } from "react";
import { RowLogo } from "./RowLogo";


function transformIntoRowInfo(logins : EncryptedLogins[]) : RowInfo[] {
    return logins.map((login : EncryptedLogins) => {
        return {
            ...login,
            isSelected : false,
        }
    })
}

function transformTimestampToReadableDate(timestamp : number) : string {
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
    
    const styles = (theme: Theme): CSSObject => (
        {
            display: 'flex',
            alignItems: 'center',
            padding : theme.spacing(1),
            gap: theme.spacing(2),
        }
    )

    return (
        <TableRow hover role="checkbox" key={key} selected={isSelected}>
            <TableCell
            sx={{   width: "1px", whiteSpace: "nowrap"}}
            padding="checkbox">
                <Checkbox
                    onClick={(_ : any) => onRowClick(row)}
                    color="primary"
                    checked={isSelected}
                />
            </TableCell>
            <TableCell />
            
            <TableCell sx={styles} component="th" scope="row" padding="none">
                <RowLogo logo={logo} name={name} />
                <Box sx={{whiteSpace: "nowrap"}}>{name}</Box>
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