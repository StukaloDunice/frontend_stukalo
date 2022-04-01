import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { requestNews } from '../../redux/actions/actionsNews';
import { requestUser } from '../../redux/actions/actionsUser';
import CardNews from '../../components/CardNews/CardNews';

import './style.css';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNews());
    dispatch(requestUser());
  }, [dispatch]);
  const { news, error, loading } = useSelector((state) => state.allNews);
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
    <div className="main-page">
      {news.map((item) => <CardNews key={item.id} data={item} />)}
    </div>
  );
}

export default MainPage;
