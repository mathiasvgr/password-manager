import { Button, CSSObject, Theme } from "@mui/material"
import { useTableData } from "@hooks/useTableData";
import { LoginsApi } from "@api/LoginsApi";
import { FC } from "react";

const DeleteButton : FC<{}> = () => {

    const {rowsData, setRowsData} = useTableData();
    
    const styleButton = (theme: Theme): CSSObject => (
        {
            height: "60%",
            fontSize: "0.8rem",
            color: theme.palette.light.main, 
            backgroundColor: theme.palette.danger.main 
        }
    )

    const deleteSelected = async () => {
        const selectedRows = rowsData.filter((row) => row.isSelected);
        const selectedIds = selectedRows.map((row) => row.id);

        try {
            selectedIds.forEach((id) => {
                LoginsApi.deleteLogin(id);
            })

            const newRowsData = rowsData.filter((row) => !row.isSelected);
            setRowsData(newRowsData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button sx={styleButton} onClick={deleteSelected}>Delete Selected</Button> 
    )


}

export {
    DeleteButton
}