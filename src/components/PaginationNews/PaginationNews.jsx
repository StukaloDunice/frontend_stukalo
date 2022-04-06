import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationNews(props) {
  const { currentPage, setCurrentPage, filteredNews } = props;
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  console.log(filteredNews);
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(filteredNews.length / 6)}
        page={currentPage}
        size="large"
        onChange={handleChange}
      />
    </Stack>
  );
}

PaginationNews.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  filteredNews: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      image: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }).isRequired,
    }.isRequired,
  )).isRequired,
};
