export default function returnsTasksForPage(filteredNews, currentPage) {
  let tasksForPage = [];
  for (let i = 0; i < filteredNews.length; i += 1) {
    switch (currentPage - 1) {
      case i:
        tasksForPage = filteredNews.slice(i * 6, (i + 1) * 6);
        break;
      default:
        break;
    }
  }
  return tasksForPage;
}
