import React from 'react';
import { Helmet } from 'react-helmet';
import ContatoComponent from '../components/Contato/Contato';

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Michele Gonçalves</title>
        <meta name="description" content="Entre em contato para agendar sua sessão de psicologia, mentoria ou consultoria." />
      </Helmet>

      <div style={{ paddingTop: '80px' }}>
        <ContatoComponent showPhoto={true} />
      </div>
    </>
  );
};

export default Contato;
