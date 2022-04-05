import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import GetToken from './components/GetToken/GetToken';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="users/:id" element={<UserPage />} />
        <Route path="/:token" element={<GetToken />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
