import { Button, ButtonProps, Theme, styled } from "@mui/material"
import { FC } from "react"


export namespace PMButton 
{

    const basicButtonStyle = (theme : Theme) => {
        return {
            padding: theme.spacing(1, 2),
            fontSize: "0.9rem",
            '&:disabled': {
                opacity : 0.5,
                backgroundColor : theme.palette.primary.main,
                color : theme.palette.light.main,
            }
            
        }
    }

    export const Danger = styled(Button)(({theme}) => {
        return {
            color : theme.palette.light.main,
            backgroundColor : theme.palette.danger.main,
            ... basicButtonStyle(theme),
        }
    })
    
    export const Primary = styled(Button)(({theme}) => {
        return {
            color : theme.palette.light.main,
            backgroundColor : theme.palette.primary.main,
            ... basicButtonStyle(theme),
            
        }
    })

    export const Secondary = styled(Button)(({theme}) => {
        return {
            color : theme.palette.primary.main,
            backgroundColor : theme.palette.secondary.main,
            border : `1px solid ${theme.palette.primary.main}`,
            ... basicButtonStyle(theme),
        }
    })

}

