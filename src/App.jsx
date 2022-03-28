import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="users/:id" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
