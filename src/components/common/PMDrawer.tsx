import { Drawer } from "@mui/material";
import { PropsWithChildren, FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PMDrawer : FC<PropsWithChildren> = ({children}) => 
{
    const [state, setState] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setState(true);
    }, [])

    const handleDrawerClose = () => {
        setState(false);
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    return (
        <Drawer anchor={"right"} open={state} onClose={handleDrawerClose}>
            {children}
        </Drawer>
    )
}

export {
    PMDrawer
}