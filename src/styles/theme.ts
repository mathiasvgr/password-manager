import { createTheme } from '@mui/material';

declare module "@mui/material/styles" {
  interface TypographyVariants {
    primaryFontFamily: React.CSSProperties;
    secondaryFontFamily: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    primaryFontFamily?: React.CSSProperties;
    secondaryFontFamily?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primaryFontFamily: true;
    secondaryFontFamily: true;
  }
}

const customTheme = createTheme({
  typography: {
    fontFamily: 'Tahoma',
    primaryFontFamily: {
      fontFamily :'Tahoma'
    },
    secondaryFontFamily: {
      fontFamily : 'roboto',
    },
  },
});



export {
    customTheme
}
