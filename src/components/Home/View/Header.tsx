import { Logo } from "@components/common/Logo"
import { Theme } from "@mui/material"
import { Box } from "@mui/material"
import { FC } from "react"


interface HeaderProps {
    name : string
    logo ?: string
}

const Header : FC<HeaderProps> = ({name, logo}) => {

    const headerStyle = {
        backgroundColor: (theme : Theme) => theme.palette.light.main,
        position: "relative",
        width : "100%",
        display : "flex",
        alignItems : "center",
        gap: 5,
        padding: 2,
    }    

    const titleStyle = { fontSize: "1.5rem", fontWeight: "bold", maxWidth: "20ch", textOverflow: "ellipsis", overflow: "hidden" }
    return (
        <Box sx={headerStyle}>
            <Logo sx={{aspectRatio: "2/1", fontSize : "2rem"}} name={name} logo={logo} width={"50%"} height={"auto"}/>
            <Box sx={titleStyle}>{name}</Box>
        </Box>
    )
}

export {
    Header
}