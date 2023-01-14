import {useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { NavbarLinks } from './NavbarLinks';
import { Drawer } from './Drawer';
import { DrawerHeader } from './DrawerHeader';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
      <Drawer variant="permanent" open={open}>
        <DrawerHeader open={open} toggleDrawer={toggleDrawer}/>
        <Divider/>
        <List >
          <NavbarLinks to={`/home/passwords`} iconName="lock.svg" alt="lock" text="Logins" isMenuOpen={open} />
          <NavbarLinks to={`/home/payments`} iconName="card.svg" alt="card" text="Payments" isMenuOpen={open} />
          <NavbarLinks to={`/home/personal`} iconName="user.svg" alt="user" text="Personal Infos" isMenuOpen={open} />
          <NavbarLinks to={`/home/servers`} iconName="server.svg" alt="server" text="Servers" isMenuOpen={open} />
        </List>
      </Drawer>
  );
}

export {
  Navbar,
}