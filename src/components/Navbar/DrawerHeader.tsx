import { Icon } from '@components/common/Icon';
import Box from '@mui/material/Box/Box';
import { CSSObject, Theme } from '@mui/material/styles';
import { FC } from 'react';
import { SearchBar } from './SearchBar';
import { ITEM_MARGIN, NAVBAR_ICON_SIZE } from './Config';

interface NavbarHeaderProps {
  open : boolean;
  toggleDrawer : () => void;
}

const DrawerHeader : FC<NavbarHeaderProps> = ({open, toggleDrawer}) => {

  const drawerHeaderStyle = (theme: Theme): CSSObject => (
    {
      display : 'flex',
      alignItems: 'center',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: '10%',
      ...ITEM_MARGIN(theme)
    }
  );

  return (
    <Box sx={drawerHeaderStyle}>
      <button style={{width : `${NAVBAR_ICON_SIZE}px`}}  onClick={toggleDrawer}>
        <Icon name="burger.svg" alt="burger menu" />
      </button>
      <SearchBar/>
    </Box>
    )

}


export  {
    DrawerHeader
}