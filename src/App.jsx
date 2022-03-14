import React from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MainPage from './pages/MainPage/mainPage';

import './styles/style.css';

function App() {
  return (
    <>
      <Header />
      <Search />
      <MainPage />
    </>
  );
}

export default App;
