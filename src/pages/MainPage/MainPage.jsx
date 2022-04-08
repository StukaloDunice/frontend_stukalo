import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { requestNews } from '../../redux/actions/actionsNews';
import { requestUser } from '../../redux/actions/actionsUser';
import CardNews from '../../components/CardNews/CardNews';
import Search from '../../components/Search/Search';
import usePaging from '../../hooks/usePaging';

import './style.css';

function MainPage() {
  const newsPerPage = 6;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNews());
    dispatch(requestUser());
  }, [dispatch]);
  const { news, error, loading } = useSelector((state) => state.allNews);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    setFilteredNews(news);
  }, [news]);

  const {
    totalPages, currentPage, setCurrentPage, newsItems,
  } = usePaging(newsPerPage, filteredNews);
  if (error) {
    return (
      <Alert severity="error">{error}</Alert>
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
        {newsItems.map((item) => <CardNews key={item.id} data={item} />)}
      </div>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            size="large"
            onChange={(event, value) => {
              setCurrentPage(value);
            }}
          />
        </Stack>
      </div>
    </>
  );
}

export default MainPage;
