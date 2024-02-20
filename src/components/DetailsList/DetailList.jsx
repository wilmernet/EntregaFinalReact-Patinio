import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const DetailList=(petsSelected)=> {
    // console.log("primero",petsSelected.items[0]);
  return (
    <List sx={{marginTop:"20px", display:"flex", flexDirection:"column", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>      
      {petsSelected.items.map((pet)=>{
        return <>
            <div className='element'>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={pet[0].img} />
                </ListItemAvatar>
                <ListItemText
                primary={pet[0].nombre+" - [ CANTIDAD: "+pet[1]+" ]"}
                secondary={
                    <React.Fragment>
                    {pet[0].tipo} - {pet[0].raza} - {pet[0].sexo}  .
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        COP$ {pet[0].precio}.oo
                    </Typography>
                    
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
        </>        
      })}
    </List>      
  );
}

export default DetailList;