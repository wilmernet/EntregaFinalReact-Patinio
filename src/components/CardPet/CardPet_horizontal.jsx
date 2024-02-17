import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import "./CardPet.css";
import CarouselImagePet from '../CarouselImagePet/CarouselImagePet';

import {Link} from "react-router-dom";

const styles = {
  link: {
    textDecoration: 'none', // Quita el subrayado del enlace
    color: 'inherit', // Hereda el color del texto del contenedor
  }
};

const CardPet=({petsData})=> {
  return (
    <Card sx={{ display: 'flex', flexDirection:"row", justifyContent: "center",  minWidth: "90vw", backgroundColor:"#ffffff9f",  boxShadow: "9px 7px 33px 0px rgba(15,12,12,12.75)" }} className='target'>
      <Link to={`/DetailPage/${petsData.id}`} style={styles.link}>
        <CardActionArea sx={{ display: 'flex',textDecoration:"none", flexDirection:"row", backgroundColor:"#ffffff9f",  margin:"30px"}}>
        {/* <CardActionArea sx={{ display: 'flex', justifyContent:"space-evenly", margin:"30px"}}> */}
        <CardMedia
          component="img"
          height="340px"          
          image={petsData.img}
          alt="Pet"
          className='imagen'
           sx={{maxWidth: 345}}
        />        
        <CardContent >
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
      </Link> 
      {/* <CarouselImagePet key={petsData.id} imgList={petsData}/>  */}
      <CarouselImagePet key={petsData.id} imgList={petsData.imgList} id={petsData.id}/> 
    </Card>
  );
}

export default CardPet;
