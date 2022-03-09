import React from 'react';
// import { createStore } from 'redux';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Newsline from './components/Newsline/Newsline';

import './styles/style.css';

// const reducer = (state, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// };

// const store = createStore();
function App() {
  return (
    <>
      <Header />
      <Search />
      <Newsline />
    </>
  );
}

export default App;
