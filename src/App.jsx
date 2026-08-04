import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BotaoWhatsApp from './components/BotaoWhatsApp/BotaoWhatsApp';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <BotaoWhatsApp />
    </Router>
  );
}

export default App;
