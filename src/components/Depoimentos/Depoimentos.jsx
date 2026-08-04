import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Depoimentos.module.scss';

// Importando as imagens
import depo1 from '../../assets/depo1.png';
import depo2 from '../../assets/depo2.png';
import depo3 from '../../assets/depo3.png';
import depo4 from '../../assets/depo4.png';

const depoimentos = [depo1, depo2, depo3, depo4];

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carrossel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section className={styles.depoimentosSection}>
      <div className={`container ${styles.depoimentosContainer}`}>
        
        <div className={styles.header}>
          <h2>O que dizem sobre mim</h2>
          <p>Acompanhe a experiência de quem já passou pelos meus atendimentos.</p>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={styles.navButton} onClick={handlePrev} aria-label="Anterior">
            <FaChevronLeft />
          </button>
          
          <div className={styles.carouselContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className={styles.depoimentoCardImage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={depoimentos[currentIndex]} 
                  alt={`Depoimento ${currentIndex + 1}`} 
                  className={styles.depoImg}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navButton} onClick={handleNext} aria-label="Próximo">
            <FaChevronRight />
          </button>
        </div>
        
        <div className={styles.dots}>
          {depoimentos.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Depoimentos;
