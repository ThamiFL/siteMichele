import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { informacoes } from '../../data/informacoes';
import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Coluna 1: Logo e Resumo */}
        <div className={styles.column}>
          <Link to="/" className={styles.logo}>
            Michele<span>Gonçalves</span>
          </Link>
          <p className={styles.description}>
            Desenvolvendo pessoas para que possam atingir seus objetivos pessoais e profissionais com responsabilidade, empatia e comprometimento.
          </p>
          <div className={styles.socials}>
            <a href={informacoes.redesSociais.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={informacoes.redesSociais.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={informacoes.redesSociais.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href={`https://wa.me/${informacoes.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Coluna 2: Links */}
        <div className={styles.column}>
          <h3>Navegação</h3>
          <ul>
            <li><Link to="/sobre">Sobre mim</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className={styles.column}>
          <h3>Contato</h3>
          <ul>
            <li>{informacoes.crp}</li>
            <li>{informacoes.email}</li>
            <li>{informacoes.endereco}</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {year} Michele Gonçalves - {informacoes.profissao}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
