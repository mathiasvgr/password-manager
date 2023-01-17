import { PaletteColorOptions, } from '@mui/material';

declare module "@mui/material/styles" {
    interface Palette {
      border: PaletteColorOptions;
      light: PaletteColorOptions;
    }
    interface PaletteOptions {
      border: PaletteColorOptions;
      light: PaletteColorOptions;
    }
  }
  
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
      border: true;  
      light: true;
    }
}
