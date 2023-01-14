import { Theme, CSSObject } from '@mui/material/styles';

const SPACING = 8;

const NAVBAR_ICON_SIZE = 35;

const NAVBAR_WIDTH = 240;

const ITEM_MARGIN = (theme: Theme): CSSObject => (
  {
    ml: `calc(${theme.spacing(SPACING / 2)})`,
  }
)

export 
{
  SPACING,
  NAVBAR_ICON_SIZE,
  NAVBAR_WIDTH,
  ITEM_MARGIN
}