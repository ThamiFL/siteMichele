import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { informacoes } from '../../data/informacoes';
import styles from './BotaoWhatsApp.module.scss';

const BotaoWhatsApp = () => {
  const location = useLocation();
  
  // Define a mensagem com base na rota atual
  let mensagem = informacoes.mensagensWhatsapp.padrao;
  
  if (location.pathname === '/mentoria') {
    mensagem = informacoes.mensagensWhatsapp.mentoria;
  } else if (location.pathname === '/psicoterapia') {
    mensagem = informacoes.mensagensWhatsapp.psicoterapia;
  }

  // Codifica a mensagem para a URL
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${mensagemCodificada}`;

  return (
    <motion.a
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20 
      }}
      aria-label="Fale conosco pelo WhatsApp"
      title="Agende seu atendimento"
    >
      <div className={styles.pulseRing}></div>
      <FaWhatsapp className={styles.icon} />
    </motion.a>
  );
};

export default BotaoWhatsApp;
