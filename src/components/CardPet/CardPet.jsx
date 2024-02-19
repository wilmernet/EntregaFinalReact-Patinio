import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import "./CardPet.css";
import {Link} from "react-router-dom";

const styles = {
  link: {
    textDecoration: 'none', // Quita el subrayado del enlace
    color: 'inherit', // Hereda el color del texto del contenedor
  }
};

const CardPet=({petsData})=> {
  return (       
    <Link to={`/DetailPage/${petsData.id}`} style={styles.link}>
    <Card sx={{ maxWidth: 345, backgroundColor:"#F3F2F4", boxShadow: "9px 7px 33px 0px rgba(15,12,12,12.75)" }} className='target'>      
      <CardActionArea>
        <CardMedia
          component="img"
          height="340px"                    
          image={petsData.img}
          alt="green iguana"
          className='imagen'          
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {petsData.nombre}
          </Typography>          
          <Typography variant="subtitle1" component="div" >
              <p> <b>Tipo de Mascota:</b> {petsData.tipo}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">  
            <p> <b>Raza:</b>{petsData.raza} </p>
            <p> <b>Sexo:</b>{petsData.sexo=="hembra"?<FemaleIcon/>:petsData.sexo=="macho"?<MaleIcon/>:<spam><FemaleIcon/><MaleIcon/></spam>} {petsData.sexo} </p>                        
            <p> <b>Edad:</b>{petsData.edad} meses </p>
          </Typography>
          <Typography gutterBottom variant="h6" component="div" >
            COP$ {petsData.precio}.oo
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
   </Link>
  );
}

export default CardPet;