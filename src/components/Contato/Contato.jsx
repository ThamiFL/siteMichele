import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { informacoes } from '../../data/informacoes';
import contatoImg from '../../assets/contato-hd.jpg';
import styles from './Contato.module.scss';

const Contato = ({ showPhoto = false }) => {
  if (!showPhoto) {
    // LAYOUT PARA A PÁGINA INICIAL (HOME): Sem foto, 100% Centralizado
    return (
      <section className={styles.contatoSection} id="contato">
        <div className={`container ${styles.centeredContainer}`}>
          <motion.div 
            className={styles.centeredContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.centeredTitle}>Vamos conversar?</h2>
            <p className={styles.centeredSubtitle}>
              Entre em contato através de um dos canais abaixo. Retornarei o mais breve possível para agendarmos o seu atendimento.
            </p>

            <div className={styles.centeredContactDetails}>
              <div className={styles.centeredContactItem}>
                <div className={styles.iconBox}><FaWhatsapp /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a 
                    href={`https://wa.me/${informacoes.whatsapp}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary" 
                    style={{ marginTop: '0.5rem', display: 'inline-flex', padding: '0.6rem 1.6rem', fontSize: '0.92rem', color: '#ffffff' }}
                  >
                    Enviar mensagem
                  </a>
                </div>
              </div>
              
              <div className={styles.centeredContactItem}>
                <div className={styles.iconBox}><FaEnvelope /></div>
                <div>
                  <h4>E-mail</h4>
                  <a href={`mailto:${informacoes.email}`}>{informacoes.email}</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // LAYOUT PARA A PÁGINA DEDICADA DE CONTATO (/contato): Com Foto e Caixa Ampla
  return (
    <section className={styles.contatoSection} id="contato">
      <div className={`container ${styles.contatoCard}`}>
        
        {/* LADO ESQUERDO: IMAGEM DA MICHELE */}
        <motion.div 
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={contatoImg} alt="Entre em contato com Michele Gonçalves" />
        </motion.div>

        {/* LADO DIREITO: INFORMAÇÕES DE CONTATO */}
        <motion.div 
          className={styles.infoColumn}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Vamos conversar?</h2>
          <p className={styles.subtitle}>
            Entre em contato através de um dos canais abaixo. Retornarei o mais breve possível para agendarmos o seu atendimento.
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}><FaWhatsapp /></div>
              <div className={styles.itemContent}>
                <h4>WhatsApp</h4>
                <a 
                  href={`https://wa.me/${informacoes.whatsapp}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary" 
                  style={{ marginTop: '0.4rem', display: 'inline-flex', padding: '0.6rem 1.6rem', fontSize: '0.92rem', color: '#ffffff' }}
                >
                  Enviar mensagem
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.iconBox}><FaEnvelope /></div>
              <div className={styles.itemContent}>
                <h4>E-mail</h4>
                <a href={`mailto:${informacoes.email}`}>{informacoes.email}</a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contato;
