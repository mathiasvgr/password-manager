import { Outlet} from "react-router-dom";
import { Navbar } from "./Navbar";
import styles from "@styles/Home/home.module.css"

function Home() {

  return (
    <div className={styles.home}>
      <Navbar/>
      <Outlet />
    </div>
    );
}

export 
{
  Home
}