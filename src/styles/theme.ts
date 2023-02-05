import { createTheme } from '@mui/material';

const themeSettings = createTheme({
  typography: {
    fontFamily: 'Tahoma',
  },
});

// DARK THEME
const PRIMARY_DARK_THEME_COLOR = `rgb(35, 33, 33)`;
const SECONDARY_DARK_THEME_COLOR = `rgb(243, 245, 248)`;
const LIGHT_DARK_THEME_COLOR = `rgb(255, 255, 255)`;
const BORDER_DARK_THEME_COLOR = `rgba(${PRIMARY_DARK_THEME_COLOR}, 0.5)`;
const DANGER_DARK_THEME_COLOR = `rgb(210, 20, 30)`;

const darkTheme = createTheme({
    palette: {
        primary: {
            main: PRIMARY_DARK_THEME_COLOR,
        },
        secondary: {
            main: SECONDARY_DARK_THEME_COLOR,
        },
        light: {
            main: LIGHT_DARK_THEME_COLOR,
        },
        border: {
            main: BORDER_DARK_THEME_COLOR,
        },
        danger: {
            main: DANGER_DARK_THEME_COLOR,
        }
    },
    ...themeSettings.typography
});

export {
  darkTheme
}