import { PMTable } from '@components/Home/PMTable/PMTable';
import { Box } from '@mui/material';
import { LoginsApi } from '@api/LoginsApi';
import { useLoaderData } from 'react-router-dom';
import { EncryptedLogin } from '@api/models/LoginsModel';
import { ApiResponse } from '@api/ApiResponse';
import { ActionBar } from '@components/Home/ActionBar/ActionBar';
import { RowInfo, transformIntoRowInfo } from '@components/Home/PMTable/PMTableRow';
import { useEffect, useState } from 'react';
import { useTableData } from '@hooks/useTableData';
import { TableDataProvider } from '@hooks/provider/TableDataProvider';

async function LoginsLoader() {
  let logins : EncryptedLogin[] | null = null;

  try {
      const apiResponse : ApiResponse<EncryptedLogin []> = await LoginsApi.getEncryptedLogin();
      logins  =  apiResponse.data
  } catch (error) {
      logins = null;
  }

  return logins;
}

function Logins() {

  const logins : any = useLoaderData();   


  const loginsPageStyle = {
    width : "100%",
    height : "100%",
    pl: 3, 
    pr: 3, 
  }    
  
  return (
    <TableDataProvider rowsDataInit={transformIntoRowInfo(logins)}>
      <Box sx={loginsPageStyle}>
        <ActionBar />
        <PMTable/>
      </Box>
    </TableDataProvider>
  );
}

export 
{
  Logins,
  LoginsLoader
}