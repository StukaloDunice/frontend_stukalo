export default function returnImage(image) {
  if (!image) {
    return null;
  }
  if (image.includes('https')) {
    return image;
  }
  return `${process.env.REACT_APP_API_URL}${image}`;
}
