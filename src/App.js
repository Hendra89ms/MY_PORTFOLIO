import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
