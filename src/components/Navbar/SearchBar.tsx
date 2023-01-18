import { Icon } from "@components/common/Icon";
import { Box, Input, Theme } from "@mui/material"
import { FC } from "react";
import { NAVBAR_ICON_SIZE } from "./Config";


interface SearchBarProps 
{
    isMenuOpen : boolean;
}

const SearchBar : FC<SearchBarProps> = ({ isMenuOpen }) => {
    const inputStyle = {
        color : (theme : Theme) => theme.palette.primary.main,
        ml : (theme : Theme) => theme.spacing(3),
        pl : "5px",
        "& > *": {
            padding: "0",
        },
        width : "50%",
        display : "inline",
        opacity : isMenuOpen ? 1 : 0,
    };

    const openSearchModal = () => {
        console.log("Open search modal");
    }


    return (
        <Input placeholder={"Search items"} sx={inputStyle} type="text" />
    )
}

export {
    SearchBar
}