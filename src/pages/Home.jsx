import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero/Hero';
import Sobre from '../components/Sobre/Sobre';
import Servicos from '../components/Servicos/Servicos';
import Galeria from '../components/Galeria/Galeria';
import Contato from '../components/Contato/Contato';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Michele Gonçalves - Psicologia & Carreira</title>
        <meta name="description" content="Psicologia Clínica, Mentoria de Carreira e Consultoria Estratégica focada em autoconhecimento, planejamento e estratégia." />
        <meta name="keywords" content="psicologia, psicóloga, mentoria de carreira, consultoria empresarial, desenvolvimento pessoal" />
      </Helmet>

      <Hero />
      <Sobre isResumo={true} />
      <Servicos />
      <Galeria />
      <Contato />
    </>
  );
};

export default Home;
