import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, CircularProgress, Box } from '@mui/material';

import { requestGoogleAuthorization } from '../../redux/actions/actionsAuthorization';

function Token() {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  const {
    loading, error, auth,
  } = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(requestGoogleAuthorization(token));
  }, [dispatch]);

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

export default Token;
