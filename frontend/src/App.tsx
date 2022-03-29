import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home';
import Cursos from 'views/Cursos';
import Consultas from 'views/Consultas';
import AAvet from 'views/AAvet';
import Blog from 'views/Blog';
import FaleConosco from 'views/FaleConosco';
import InscricaoOnline from 'views/InscricaoOnline';
import AgendarConsultaOnline from 'views/AgendarConsultaOnline';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/consultas' element={<Consultas />} />
        <Route path='/aavet' element={<AAvet />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faleConosco' element={<FaleConosco />} />
        <Route path='/inscricaoOnline' element={<InscricaoOnline />} />
        <Route path='/agendarConsultaOnline' element={<AgendarConsultaOnline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
