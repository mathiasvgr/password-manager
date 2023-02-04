import { PaletteColor } from '@mui/material';

declare module "@mui/material/styles" {
    interface Palette {
      border: PaletteColor;
      light: PaletteColor;
    }
    interface PaletteOptions {
      border: PaletteColor;
      light: PaletteColor;
    }
  }
  
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
      border: true;  
      light: true;
    }
}
