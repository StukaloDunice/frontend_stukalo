import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { requestCurrentUser } from '../../redux/actions/actionsUser';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(requestCurrentUser(id)), [dispatch, id]);
  const {
    loading, error, current,
  } = useSelector((state) => state.authUser);
  // const {} = current;
  console.log(current);
  if (error) {
    return (
      <Alert severity="error">{error.message}</Alert>
    );
  }
  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/public/images/avatar.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography gutterBottom variant="h5">
        {current.username}
      </Typography>
      <div className="main-page">
        News
      </div>
    </>
  );
}

export default UserPage;
