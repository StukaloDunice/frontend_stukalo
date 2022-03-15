import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CardNews({ oneNew }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={oneNew.image}
        alt={oneNew.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {oneNew.title}
        </Typography>
        <Typography variant="body2">
          {oneNew.content}
        </Typography>
        <Typography gutterBottom variant="caption" color="text.secondary">
          {oneNew.tags}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          {oneNew.User.username}
        </Typography>
      </CardContent>
    </Card>
  );
}

CardNews.propTypes = {
  oneNew: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    User: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default CardNews;
