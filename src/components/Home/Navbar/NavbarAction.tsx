import { Theme, CSSObject } from '@mui/material/styles';
import { Icon, IconProps } from "@components/common/Icon";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ITEM_MARGIN, LINK_SPACING, NAVBAR_ICON_SIZE, TEXT_SPACING } from './Config';

interface NavbarActionProps {
    icon : IconProps;
    text : string;
    isMenuOpen : boolean;
    sx ?: CSSObject;
    onClick ?: () => void;
}

const NavbarAction : React.FC<NavbarActionProps> = ({sx, onClick, icon, text, isMenuOpen}) => {

    const { name, alt } = icon;

    const styleListItemIcon = (theme: Theme): CSSObject => (
        {
            minWidth: NAVBAR_ICON_SIZE,
            maxWidth: NAVBAR_ICON_SIZE,
            ...ITEM_MARGIN(theme)
        }
    )

    const styleItemText = {
        opacity: isMenuOpen ? 1 : 0,
        color : (theme : Theme) => theme.palette.primary.main,
        marginLeft: (theme : Theme) => theme.spacing(TEXT_SPACING),
    };

    return (
        <ListItem sx={sx}  key={text} disablePadding>
            <ListItemButton onClick={onClick}  sx={{padding: (theme : Theme) => theme.spacing(LINK_SPACING, 0)}}>
                <ListItemIcon sx={styleListItemIcon}>
                    <Icon name={name} alt={alt} />
                </ListItemIcon>
                <ListItemText 
                    primary={text} 
                    sx={styleItemText} 
                />

            </ListItemButton>
        </ListItem>
    )

}
  
export {
    NavbarAction
}