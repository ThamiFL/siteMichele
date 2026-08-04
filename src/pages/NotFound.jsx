import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página não encontrada - Michele Gonçalves</title>
      </Helmet>

      <Header />
      
      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '4rem', color: '#2c4a3e', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#4a4a4a' }}>Página não encontrada</h2>
        <p style={{ marginBottom: '2rem' }}>A página que você está procurando não existe ou foi movida.</p>
        <Link to="/" className="btn-primary">
          Voltar para Início
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
