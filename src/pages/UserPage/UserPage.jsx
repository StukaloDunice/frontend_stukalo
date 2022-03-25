import React from 'react';

import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

// import CardNews from '../../components/CardNews/CardNews';

function UserPage() {
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/public/images/avatar.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <Typography gutterBottom variant="h5">
        Stas
      </Typography>
      <div className="main-page">
        News
        {/* {news.map((item) => <CardNews key={item.id} data={item} />)} */}
      </div>
    </>
  );
}

export default UserPage;
