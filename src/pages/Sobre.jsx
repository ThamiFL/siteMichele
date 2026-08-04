import React from 'react';
import { Helmet } from 'react-helmet';
import SobreComponent from '../components/Sobre/Sobre';

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Mim - Michele Gonçalves</title>
        <meta name="description" content="Conheça mais sobre a minha trajetória, missão e valores como Psicóloga, Mentora de Carreira e Consultora." />
      </Helmet>

      <div style={{ paddingTop: '80px' }}>
        <SobreComponent />
      </div>
    </>
  );
};

export default Sobre;
