import CSS from 'csstype';
import { Box, Theme } from "@mui/material";
import { FC } from "react";

interface RowLogoProps {
    logo ?: string,
    name : string,
}

const RowLogo : FC<RowLogoProps> = ({logo, name}) => {

    // get the first letter of the 2 first words

    const containerStyle = {
        position : "relative",
        width : "60px",
        height : "40px",
        backgroundColor : (theme : Theme) => theme.palette.primary.main,
        color : (theme : Theme) => theme.palette.light.main,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
    }

    const imageStyle : CSS.Properties =  {
        width : "100%",
        height : "100%",
        objectFit : "cover"
    }
    
    if (!logo) {
        const letters = name.split(" ").map((word : string) => word[0]).join("").slice(0, 2);
        return <Box sx={containerStyle}>{letters}</Box>;
    }

    return (
        <Box sx={containerStyle}>
            <img style={imageStyle} src={logo} alt={name} /> 
        </Box>
    )
}

export {
    RowLogo
}