import { PMTable } from '@components/PMTable/PMTable';
import { Box } from '@mui/material';
import { LoginsApi } from '@api/LoginsApi';
import { useLoaderData } from 'react-router-dom';
import { EncryptedLogins } from '@api/models/LoginsModel';
import { ApiResponse } from '@api/ApiResponse';

async function PasswordsLoader() {
  let logins : EncryptedLogins[] | null = null;

  try {
      const apiResponse : ApiResponse<EncryptedLogins []> = await LoginsApi.getEncryptedLogins();
      logins  =  apiResponse.data
  } catch (error) {
      logins = null;
  }

  return logins;
}

function Passwords() {

  const logins : any = useLoaderData();   

  const passwordsPageStyle = {
    width : "100%",
    height : "100%",
  }    
  
  return (
    <Box sx={passwordsPageStyle}>
      <PMTable rows={logins}/>
    </Box>
  );
}

export 
{
  Passwords,
  PasswordsLoader
}