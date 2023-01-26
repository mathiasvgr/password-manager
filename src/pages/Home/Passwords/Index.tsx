import { PMTable } from '@components/PMTable/PMTable';
import { Box } from '@mui/material';

function Passwords() {
  const passwordsPageStyle = {
    width : "100%",
    height : "100%",
  }    

  
  return (
    <Box sx={passwordsPageStyle}>
      <PMTable/>
    </Box>
  );
}

export 
{
  Passwords
}