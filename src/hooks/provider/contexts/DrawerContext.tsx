import { useState } from "react";

interface DrawerContext {
    handleDrawer : (element ?: JSX.Element) => void,
    drawerState : boolean,
    drawerElement ?: JSX.Element,
}

const getDrawerContext = () : DrawerContext => {

    const [drawerState, setDrawerState] = useState<boolean>(false);
    const [drawerElement, setDrawerElement] = useState<JSX.Element | undefined>();
    
    const handleDrawer = (element ?: JSX.Element) => {
        if (element) {
            setDrawerElement(element);
        }
        setDrawerState(!drawerState);
    }



    return {
        handleDrawer,
        drawerState,
        drawerElement,
    };
}

export {
  type DrawerContext,
  getDrawerContext
}