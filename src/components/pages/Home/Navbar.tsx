import { FC } from "react";
import styles from "@styles/Home/navbar.module.css"
import { Link } from "react-router-dom";

interface NavbarLinkProps {
    to : string;
    iconName : string;
    text : string;
    alt : string;
}

interface IconProps {
    name : string;
    alt : string;
    styles?: string;
}

const Icon : FC<IconProps> = ({name, alt, styles}) => {
    return (
        <img className={styles || ""} src={"/icons/" + name} alt={alt} />
    )
}

interface ActionProps {
    iconName : string;
    alt : string;
    text: string;
}

const Action : FC<ActionProps> = ({iconName, text, alt}) => {
    return (
        <div className={styles.action}>
            <Icon styles={styles.icon} name={iconName} alt={alt} />
            <span className={styles.text}>{text}</span>
        </div>
    )
}

const NavbarLink : FC<NavbarLinkProps> = ({to, iconName, text, alt}) => {
    return (
        <Link to={to} className={styles.link}>
            <Action iconName={iconName} text={text} alt={alt}/>
        </Link>
    )
}

const Links : FC<{}> = () => {
    return (
        <div className={styles.links_container}>
            <NavbarLink to={`/home/passwords`} iconName="lock.svg" alt="lock" text="Logins" />
            <NavbarLink to={`/home/payments`} iconName="card.svg" alt="card" text="Payments" />
            <NavbarLink to={`/home/personal`} iconName="user.svg" alt="user" text="Personal Infos" />
            <NavbarLink to={`/home/servers`} iconName="server.svg" alt="server" text="Servers" />
        </div>
    )
}

const SearchBar : FC<{}> = () => {
    return (
        <div className={styles.searchbar_container}>
            <button className={styles.burger_menu}>
                <Icon styles={styles.icon} name="burger.svg" alt="burger menu" />
            </button>
            <div className={styles.search_bar}>
                <Icon styles={styles.search_icon} name="search.svg" alt="search" />
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

const Navbar : FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <SearchBar/>
                <div className={styles.actions_container}>
                    <Links/>
                    <button className={styles.logout}>
                        <Action text="Logout" iconName="logout.svg" alt="logout"  />
                    </button>
                </div>
                
            </div>
        </nav>
    )
}



export {
    Navbar
}