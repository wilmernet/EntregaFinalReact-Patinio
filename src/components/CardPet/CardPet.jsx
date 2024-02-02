import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardPet=({petsData})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={petsData.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {petsData.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {petsData.tipo}
            {petsData.raza}
            {petsData.sexo}
            {petsData.edad}
            {petsData.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardPet;