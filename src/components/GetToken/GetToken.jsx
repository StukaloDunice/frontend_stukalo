import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { requestGoogleAuthorization } from '../../redux/actions/actionsAuthorization';

function GetToken() {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(requestGoogleAuthorization(token));
  }, [dispatch]);
  const {
    loading, error, auth,
  } = useSelector((state) => state.authUser);
  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  });
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

  return null;
}

export default GetToken;
