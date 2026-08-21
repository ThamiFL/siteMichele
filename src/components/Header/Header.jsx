import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { informacoes } from '../../data/informacoes';
import logoHeader from '../../assets/logo-psicologia-carreira.png';
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
        
        {/* Logo com imagem antes do nome (sem link) */}
        <div className={styles.logo}>
          <img src={logoHeader} alt="Psicologia e Carreira Logo" className={styles.logoImg} />
          <div className={styles.logoText}>
            Michele<span>Gonçalves</span>
          </div>
        </div>


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
        <motion.button 
          className={styles.mobileToggle} 
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.88 }}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </motion.button>

      </div>

      {/* Mobile Menu AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06, delayChildren: 0.05 }
                }
              }}
            >
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.hash === link.path.replace('/', ''));
                return (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
                    }}
                  >
                    {link.path.startsWith('/#') ? (
                      <a 
                        href={link.path} 
                        onClick={() => setMenuOpen(false)}
                        className={isActive ? styles.activeLink : ''}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className={isActive ? styles.activeLink : ''}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
                }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                <a href={urlWhatsApp} target="_blank" rel="noreferrer" className={styles.mobileBtn}>
                  Agende sua sessão
                </a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
