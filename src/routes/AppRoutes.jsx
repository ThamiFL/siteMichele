import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Servicos from '../pages/Servicos';
import Contato from '../pages/Contato';
import NotFound from '../pages/NotFound';

// Novas Páginas de Serviços
import Atendimento from '../pages/Atendimento';
import Supervisao from '../pages/Supervisao';
import Mentoria from '../pages/Mentoria';
import DesenvolvimentoEmpresas from '../pages/DesenvolvimentoEmpresas';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
      
      {/* Rotas dos Serviços Independentes */}
      <Route path="/atendimento" element={<Atendimento />} />
      <Route path="/supervisao" element={<Supervisao />} />
      <Route path="/mentoria" element={<Mentoria />} />
      <Route path="/desenvolvimento-empresas" element={<DesenvolvimentoEmpresas />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
