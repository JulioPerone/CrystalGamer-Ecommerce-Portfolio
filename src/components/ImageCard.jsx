import { useCart } from '../context/CartContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { dropboxlinks } from '../utils/dropboxlinks';

export const ImageCard = ({ id, nombre, descripcion, precio, divisa, imageUrl }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      ProductId: id,
      nombre,
      descripcion,
      precio,
      divisa,
      imageUrl
    });
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        alt={nombre}
        height="200"
        image={dropboxlinks(imageUrl)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descripcion}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {typeof precio === "number"
            ? precio.toLocaleString("es-AR")
            : precio} {divisa}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddToCart} size="medium" color='primary'>
          Añadir a carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;