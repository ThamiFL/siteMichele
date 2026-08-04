import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { informacoes } from '../../data/informacoes';
import styles from './Header.module.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Efeito de scroll para mudar o visual do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar o menu ao mudar de rota
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Mensagem dinâmica do WhatsApp para o Header
  let mensagem = informacoes.mensagensWhatsapp.padrao;
  if (location.pathname === '/mentoria') {
    mensagem = informacoes.mensagensWhatsapp.mentoria;
  } else if (location.pathname === '/psicoterapia') {
    mensagem = informacoes.mensagensWhatsapp.psicoterapia;
  }
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent(mensagem)}`;

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Michele<span>Gonçalves</span>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navItems}>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                {link.path.startsWith('/#') ? (
                  <a href={link.path}>{link.name}</a>
                ) : (
                  <Link to={link.path}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
          
          <a href={urlWhatsApp} target="_blank" rel="noreferrer" className="btn-primary">
            Agende sua sessão
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            className={styles.mobileNav}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {link.path.startsWith('/#') ? (
                    <a href={link.path} onClick={() => setMenuOpen(false)}>{link.name}</a>
                  ) : (
                    <Link to={link.path}>{link.name}</Link>
                  )}
                </li>
              ))}
              <li>
                <a href={urlWhatsApp} target="_blank" rel="noreferrer" className="btn-primary">
                  Agende sua sessão
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
