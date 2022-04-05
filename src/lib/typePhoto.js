export default function typePhoto(photo) {
  if (!photo) {
    return null;
  }
  if (photo.includes('https')) {
    return photo;
  }
  return `${process.env.REACT_APP_API_URL}${photo}`;
}
