export default function filterNews(textInput, tab, news) {
  const filterNewsByTabs = {
    all: (item) => [
      item.title,
      item.content,
      item.tags,
      item.user.username,
    ],
    authors: (item) => [
      item.user.username,
    ],
    tags: (item) => [
      item.tags,
    ],
  };
  if (!Object.keys(filterNewsByTabs).includes(tab)) {
    return [];
  }
  const filterFields = filterNewsByTabs[tab];
  const inputLC = textInput.toLowerCase();
  const result = news.filter((newsItem) => (
    filterFields(newsItem)
      .map((item) => String(item).toLowerCase())
      .some((filterMapValueLC) => filterMapValueLC.replaceAll('ё', 'е').includes(inputLC))
  ));
  return result;
}
