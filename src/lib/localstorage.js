const getToken = () => localStorage.getItem('token');

const setToken = (token) => {
  localStorage.setItem('token', token);
};
const deleteToken = () => {
  localStorage.removeItem('token');
};

export { getToken, setToken, deleteToken };
