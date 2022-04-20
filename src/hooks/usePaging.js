import { useState } from 'react';

const usePaging = (newsPerPage, filteredNews) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    filteredNews.length / newsPerPage,
  );
  const newsItems = filteredNews.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage,
  );
  return {
    totalPages, currentPage, setCurrentPage, newsItems,
  };
};

export default usePaging;
