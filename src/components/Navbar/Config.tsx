import { Theme, CSSObject } from '@mui/material/styles';

const CLOSED_NAVBAR_SPACING = 8;

const TEXT_SPACING = 2;

const LINK_SPACING = 1.5;

const NAVBAR_ICON_SIZE = 30;

const NAVBAR_WIDTH = 240;

const ITEM_MARGIN = (theme: Theme): CSSObject => (
  {
    ml: `calc(${theme.spacing(CLOSED_NAVBAR_SPACING / 2)})`,
  }
)

export 
{
  CLOSED_NAVBAR_SPACING,
  NAVBAR_ICON_SIZE,
  NAVBAR_WIDTH,
  ITEM_MARGIN,
  TEXT_SPACING,
  LINK_SPACING,
}