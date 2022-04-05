import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { requestNews } from '../../redux/actions/actionsNews';
import { requestUser } from '../../redux/actions/actionsUser';
import CardNews from '../../components/CardNews/CardNews';
import Search from '../../components/Search/Search';

import './style.css';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNews());
    dispatch(requestUser());
  }, [dispatch]);
  const { news, error, loading } = useSelector((state) => state.allNews);
  const [filteredNews, setFilteredNews] = useState([]);
  useEffect(() =>{
    setFilteredNews(news);
  },[news]);
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
        <>
          <Search setFilteredNews={setFilteredNews} news={news} />
        </>
        {Boolean(filteredNews.length) && (<div className="main-page">
          {filteredNews.map((item) => <CardNews key={item.id} data={item} />)}
        </div>)}
      </>
    );
}

export default MainPage;
