import { EncryptedLogin } from "@api/models/LoginsModel";
import { TableRow, TableCell, Checkbox, Theme, CSSObject, Box } from "@mui/material"
import { FC } from "react";
import { Logo } from "@components/common/Logo";
import { useNavigate } from "react-router-dom";

function transformIntoRowInfo(logins : EncryptedLogin[]) : RowInfo[] {
    return logins.map((login : EncryptedLogin) => {
        return {
            ...login,
            isSelected : false,
        }
    })
}

function transformTimestampToReadableDate(timestamp : number) : string {
    return new Date(timestamp).toLocaleDateString();
}

interface RowInfo extends EncryptedLogin {
    isSelected : boolean;
}
  
interface PMTableRowProps {
    onCheckBoxClick : (row: RowInfo) => void;
    row : RowInfo,
    key : number,
}

const PMTableRow : FC<PMTableRowProps> = ({ onCheckBoxClick, row, key}) => {
    const {id, name, emails, website, timestamp, logo, isSelected} = row;
    const navigate = useNavigate();

    const styles = (theme: Theme): CSSObject => (
        {
            display: 'flex',
            alignItems: 'center',
            padding : theme.spacing(1),
            gap: theme.spacing(2),
        }
    )
    const onEventCheckboxClick = (event : any) => {
        event.stopPropagation();
        onCheckBoxClick(row);
    }

    const onRowClick = () => {
        navigate(`/home/logins/${id}`);
    }

    return (
        <TableRow sx={{cursor: "pointer"}} onClick={onRowClick} hover role="checkbox" key={key} selected={isSelected}>
            <TableCell
            sx={{ minWidth: "1px", whiteSpace: "nowrap"}}
            padding="checkbox">
                <Checkbox
                    onClick={onEventCheckboxClick}
                    color="primary"
                    checked={isSelected}
                />
            </TableCell>
            <TableCell />
            
            <TableCell component="th" scope="row" padding="none">
                <Box sx={styles}>
                    <Logo logo={logo} name={name} width="60px" height="40px" />
                    <Box sx={{whiteSpace: "nowrap"}}>{name}</Box>
                </Box>
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