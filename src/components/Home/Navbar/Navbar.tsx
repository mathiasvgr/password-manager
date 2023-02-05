import {useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { Link, useNavigate } from "react-router-dom";
import { NavbarAction } from './NavbarAction';
import { Drawer } from './Drawer';
import { DrawerHeader } from './DrawerHeader';
import { Box } from '@mui/material';
import { UserApi } from '@api/UserApi';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const logout = async () => {
    UserApi.logout().then(() => {
      navigate("/login");  
    });
  }

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "90%" 
  };

  return (
      <Drawer sx={{position : "relative"}} variant="permanent" open={open}>
        <DrawerHeader open={open} toggleDrawer={toggleDrawer}/>
        <Divider/>
        <List sx={listStyle}>
         
          <Box>
            <Link to={`/home/logins`}>
              <NavbarAction icon={ {name:"lock.svg", alt:"lock"} } text="Logins" isMenuOpen={open} />
            </Link>
            <Link to={`/home/payments`}>
              <NavbarAction icon={ {name:"card.svg", alt:"card"} } text="Payments" isMenuOpen={open} />
            </Link>
            <Link to={`/home/personal`}>
              <NavbarAction icon={ {name:"user.svg", alt:"user"} } text="Personal Infos" isMenuOpen={open} />
            </Link>
            <Link to={`/home/servers`}>
              <NavbarAction icon={ {name:"server.svg", alt:"server"} } text="Servers" isMenuOpen={open} />
            </Link>
          </Box>

          <NavbarAction onClick={logout} sx={{justifySelf: "right"}}  icon={ {name:"logout.svg", alt:"logout"} } text="Logout" isMenuOpen={open} />
        </List>
      </Drawer>
  );
}

export {
  Navbar,
}