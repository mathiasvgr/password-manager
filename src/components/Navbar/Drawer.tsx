import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { NAVBAR_ICON_SIZE, NAVBAR_WIDTH, SPACING } from './Config';

const openedStyle = (theme: Theme): CSSObject => ({
  width: NAVBAR_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedStyle = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(SPACING)} + ${NAVBAR_ICON_SIZE}px)`,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: NAVBAR_WIDTH,
    flexShrink: 0,
    padding: 0,

    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedStyle(theme),
      '& .MuiDrawer-paper': openedStyle(theme),
    }),
    ...(!open && {
      ...closedStyle(theme),
      '& .MuiDrawer-paper': closedStyle(theme),
    }),
  }),
);

export {
    Drawer,
}