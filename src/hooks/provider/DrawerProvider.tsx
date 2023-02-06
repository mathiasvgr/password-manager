import { createContext } from 'react'
import type { FC, PropsWithChildren } from 'react'
import { DrawerContext, getDrawerContext } from './contexts/DrawerContext';
import { Drawer } from '@mui/material';

const DrawerContextInstance = createContext<DrawerContext>(null!);

const DrawerProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const {drawerState, drawerElement, handleDrawer} = getDrawerContext();
  
  return (
      <DrawerContextInstance.Provider value={{drawerState, drawerElement, handleDrawer}}>
        <Drawer anchor={"right"} open={drawerState} onClose={() => handleDrawer()}>
            {drawerElement}
        </Drawer>
        {children}
      </DrawerContextInstance.Provider>
  )
}

export {
  DrawerProvider,
  DrawerContextInstance
}