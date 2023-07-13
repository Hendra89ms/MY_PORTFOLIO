import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components'
import Coba from './coba/Coba';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coba' element={<Coba />} />
    </Routes>
  );
}
