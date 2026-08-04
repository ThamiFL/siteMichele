import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import styles from './Beneficios.module.scss';

const beneficiosList = [
  "Atendimento personalizado para o cliente",
  "Treinamentos personalizados",
  "Ética no desenvolvimento de líderes",
  "Orientação de Carreira para Jovens",
  "Acolhimento e Autoconhecimento",
  "Escuta qualificada e confidencialidade"
];

const Beneficios = () => {
  return (
    <section className={styles.beneficiosSection}>
      <div className="container">
        
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Por que escolher Psicologia &amp; Carreira?
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {beneficiosList.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.beneficioCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <FaCheck />
              </div>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Beneficios;
