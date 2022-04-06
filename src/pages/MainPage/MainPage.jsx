import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { requestNews } from '../../redux/actions/actionsNews';
import { requestUser } from '../../redux/actions/actionsUser';
import CardNews from '../../components/CardNews/CardNews';
import Search from '../../components/Search/Search';
import PaginationNews from '../../components/PaginationNews/PaginationNews';
import returnsTasksForPage from '../../lib/returnsTasksForPage';

import './style.css';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNews());
    dispatch(requestUser());
  }, [dispatch]);
  const { news, error, loading } = useSelector((state) => state.allNews);
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredNews(news);
  }, [news]);

  const tasksForPage = useMemo(
    () => returnsTasksForPage(filteredNews, currentPage),
    [filteredNews, currentPage],
  );
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
      <Search setFilteredNews={setFilteredNews} news={news} />
      <div className="main-page">
        {tasksForPage.map((item) => <CardNews key={item.id} data={item} />)}
      </div>
      <PaginationNews
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filteredNews={filteredNews}
      />
    </>
  );
}

export default MainPage;
