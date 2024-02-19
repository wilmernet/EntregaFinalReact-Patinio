import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const  MessageConfirm=({idGenerated})=> {
  return (
    <Stack sx={{ width: '50%', textAlign:"center", margin:"20px" }} spacing={2}>
      <Alert severity="success">Su compra se ha registrado exitosamente con el código {idGenerated}.</Alert>
    </Stack>
  );
}

export default MessageConfirm;