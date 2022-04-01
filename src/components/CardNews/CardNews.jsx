import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './style.css';

function CardNews(props) {
  const { data } = props;
  return (
    <Card sx={{ width: 440 }}>
      <CardMedia
        component="img"
        height="300"
        image={`${process.env.REACT_APP_API_URL}${data.image}`}
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
          <Link to={`/users/${data.user.id}`} className="user-name">{data.user.username}</Link>
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
    image: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default CardNews;
