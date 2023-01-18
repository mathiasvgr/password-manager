import { Outlet} from "react-router-dom";
import { Navbar } from "@components/Navbar/Navbar";

import Box from "@mui/material/Box/Box";

function Home() {


  const homeStyle = {
    display: "flex",
    width: "100%",
    height: "100vh",

  }

  return (
    <Box style={homeStyle} >
      <Navbar/>
      <Outlet />
    </Box>
    );
}

export 
{
  Home
}