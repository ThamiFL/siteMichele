import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { informacoes } from '../../data/informacoes';
import styles from './Contato.module.scss';

const Contato = () => {
  return (
    <section className={styles.contatoSection} id="contato">
      <div className={`container ${styles.contatoContainer}`}>
        
        <div className={styles.infoColumn}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vamos conversar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Entre em contato através de um dos canais abaixo. Retornarei o mais breve possível para agendarmos o seu atendimento.
          </motion.p>
          
            <div className={styles.contactDetails} style={{ justifyContent: 'center', gap: '4rem' }}>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><FaWhatsapp /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a 
                    href={`https://wa.me/${informacoes.whatsapp}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary" 
                    style={{ marginTop: '0.5rem', display: 'inline-block', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                  >
                    Enviar Mensagem
                  </a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><FaEnvelope /></div>
                <div>
                  <h4>E-mail</h4>
                  <a href={`mailto:${informacoes.email}`}>{informacoes.email}</a>
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contato;
