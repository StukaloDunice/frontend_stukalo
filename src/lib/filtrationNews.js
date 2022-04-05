export default function filtrationNews(textInput, tab, news) {
  let filteredNews = [];
  if (tab === 'all') {
    for (const objectNews of news) {
      for (const property in objectNews) {
        if (property === 'user') {
          if (objectNews[property]['username'].includes(textInput)) {
            filteredNews.push(objectNews);
          }
        }
        if (
          property === 'title' ||
          property === 'content' ||
          property === 'tags'
        ) {
          if (objectNews[property].includes(textInput)) {
            filteredNews.push(objectNews);
            break;
          }
        }
      }
    }
  }
  if (tab === 'tags') {
    for (const objectNews of news) {
      if (objectNews['tags'].includes(textInput)) {
        filteredNews.push(objectNews);
      }
    }
  }
  if (tab === 'authors') {
    for (const objectNews of news) {
      if (objectNews['user']['username'].includes(textInput)) {
        filteredNews.push(objectNews);
      }
    }
  }
  return filteredNews;
}
