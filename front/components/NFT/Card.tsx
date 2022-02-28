import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function NFTCard() {
  return (
    <Card sx={{ width: '100%', minWidth: '13.5rem' }}>
      {/* <CardHeader */}

      <CardActions>
        <Button size="small" color="primary">
          Collection Name
        </Button>
      </CardActions>

      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: '100%' }}
          image="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg"
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NFT name #77
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price, for Sale
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NFTCard;
