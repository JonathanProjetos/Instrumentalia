/* eslint-disable max-len */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

function CardMusic({ artworkUrl100, collectionName, price, ReleaseDate, collectionId }) {
  const history = useHistory();
  return (
    <Card
      sx={ { maxWidth: 250 } }
    >
      <CardMedia
        sx={ { height: 150 } }
        image={ artworkUrl100 }
        title={ collectionName }
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          { collectionName }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { `US$: ${price}` }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { `Date: ${ReleaseDate}` }
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={ () => history.push(`/album/${collectionId}`) }
        >
          open
        </Button>
      </CardActions>
    </Card>
  );
}

CardMusic.propTypes = {
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ReleaseDate: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};

export default CardMusic;
