import { Outlet} from "react-router-dom";
import { Navbar } from "@components/Home/Navbar/Navbar";
import Box from "@mui/material/Box/Box";
import { DrawerProvider } from "@hooks/provider/DrawerProvider";

function Home() {

  const homeStyle = {
    display: "flex",
    width: "100%",
    height: "100vh",

  }

  return (
    <Box style={homeStyle} >
      <DrawerProvider>
        <Navbar/>
        <Outlet />
      </DrawerProvider>
    </Box>
    );
}

export 
{
  Home
}