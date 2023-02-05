import { Button, CSSObject, Theme } from "@mui/material"
import { useTableData } from "@hooks/useTableData";
import { LoginsApi } from "@api/LoginsApi";
import { FC } from "react";

const AddButton : FC<{}> = () => {

    const {rowsData, setRowsData} = useTableData();

    const styleButton = (theme: Theme): CSSObject => (
        {
            height: "60%",
            fontSize: "0.8rem",
            color: theme.palette.light.main,
            backgroundColor: theme.palette.primary.main,
        }
    )

    const addLogin = () => {
        LoginsApi.addLogin({
            name: "test",
            emails: "test",
            website: "test",
            logo: "test",
            timestamp: 0,
        }).then((response) => {
            const newRow = {
                ...response.data,
                isSelected: false,
            };
            rowsData.push(newRow);
            setRowsData([...rowsData]);
        })
    }
    
    return (
        <Button sx={styleButton} onClick={addLogin} >Add Logins</Button>
    )    
}

export {
    AddButton
}