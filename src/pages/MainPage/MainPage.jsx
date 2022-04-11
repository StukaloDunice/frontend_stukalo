import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { requestNews } from '../../redux/actions/actionsNews';
import { requestUser } from '../../redux/actions/actionsUser';
import CardNews from '../../components/CardNews';
import Search from '../../components/Search';
import usePaging from '../../hooks/usePaging';

import styles from './MainPage.module.css';

const newsPerPage = 6;

function MainPage() {
  const dispatch = useDispatch();

  const { news, error, loading } = useSelector((state) => state.allNews);

  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    dispatch(requestNews());
    dispatch(requestUser());
  }, [dispatch]);

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
      <div className={styles.posts}>
        {newsItems.map((item) => <CardNews key={item.id} data={item} />)}
      </div>
      <div className={styles.pagination}>
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
