import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CardNews(props) {
  const { data } = props;
  console.log(data);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {data.title}
        </Typography>
        <Typography variant="body2">
          {data.content}
        </Typography>
        <Typography gutterBottom variant="caption" color="text.secondary">
          {data.tags}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          {data.user.username}
        </Typography>
      </CardContent>
    </Card>
  );
}

CardNews.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default CardNews;
