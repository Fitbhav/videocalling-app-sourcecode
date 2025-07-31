import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Room from './Room';

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to the livestream app</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </div>
  );
};

export default App;


