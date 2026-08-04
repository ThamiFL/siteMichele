import React from 'react';
import { Helmet } from 'react-helmet';
import ServicosComponent from '../components/Servicos/Servicos';

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços - Michele Gonçalves</title>
        <meta name="description" content="Conheça os serviços de Consultoria Estratégica, Mentoria de Carreira e Psicologia Clínica." />
      </Helmet>

      <div style={{ paddingTop: '80px' }}>
        <ServicosComponent />
      </div>
    </>
  );
};

export default Servicos;
