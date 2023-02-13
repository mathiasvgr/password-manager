import { Box, CSSObject, Theme } from "@mui/material"
import { FC } from "react"
import { NAVBAR_ICON_SIZE } from "@components/Home/Navbar/Config"
import { useTableData } from "@hooks/useTableData";
import { AtLeastOneSelected } from "@components/Home/PMTable/PMTable";
import { AddButton } from "./AddButton";
import { DeleteButton } from "./DeleteButton";
import { useNavigate } from "react-router-dom";

const ActionBar : FC<{}> = () => {
    const {rowsData} = useTableData();
    const navigate = useNavigate();
    
    const styleBar = (theme: Theme): CSSObject => (
        {
            width: "100%",
            display: 'flex',
            alignItems: 'center',
            height: NAVBAR_ICON_SIZE * 2,
        }
    )
    
    return (
        <Box sx={styleBar} >
            {
                AtLeastOneSelected(rowsData) ? 
                <DeleteButton/>
                :
                <AddButton />
            }
        </Box>
    )
}

export
{
    ActionBar
}