import CSS from 'csstype';
import { Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";

interface LogoProps {
    logo ?: string,
    name : string,
    width : string | ((theme: Theme) => string),
    height : string | ((theme: Theme) => string),
    sx?: SxProps<Theme> | undefined
}

const Logo : FC<LogoProps> = ({logo, name, width, height, sx}) => {

    const containerStyle = {
        position : "relative",
        minWidth : width,
        width : width,
        height : height,
        minHeight : height,
        backgroundColor : (theme : Theme) => theme.palette.primary.main,
        color : (theme : Theme) => theme.palette.light.main,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        ...sx
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
    Logo
}