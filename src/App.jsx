import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import Token from './components/Token';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="users/:id" element={<UserPage />} />
        <Route path="/:token" element={<Token />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
