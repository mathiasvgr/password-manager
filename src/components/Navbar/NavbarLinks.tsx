import { Theme, CSSObject } from '@mui/material/styles';
import { Icon } from "@components/common/Icon";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { ITEM_MARGIN, NAVBAR_ICON_SIZE } from './Config';

interface NavbarLinksProps {
    to : string;
    iconName : string;
    text : string;
    alt : string;
    isMenuOpen : boolean
}

const NavbarLinks : React.FC<NavbarLinksProps> = ({to, iconName, text, alt, isMenuOpen}) => {

    const styleListItemIcon = (theme: Theme): CSSObject => (
        {
            minWidth: NAVBAR_ICON_SIZE,
            maxWidth: NAVBAR_ICON_SIZE,
            ...ITEM_MARGIN(theme)
        }
    )

    return (
        <Link to={to}>
            <ListItem  key={text} disablePadding>
                <ListItemButton  sx={{ padding: '0' }}>
                    <ListItemIcon sx={styleListItemIcon}>
                        <Icon name={iconName} alt={alt} />
                    </ListItemIcon>

                    <ListItemText primary={text} sx={{ opacity: isMenuOpen ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        </Link>
    )

}
  
export {
    NavbarLinks
}