import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { faqList } from '../../data/faq';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={`container ${styles.faqContainer}`}>
        
        <div className={styles.faqHeader}>
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre os atendimentos, sessões e mentoria.</p>
        </div>

        <div className={styles.accordion}>
          {faqList.map((item, index) => (
            <div 
              key={item.id} 
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                {item.pergunta}
                <FaChevronDown className={styles.icon} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className={styles.accordionContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.accordionInner}>
                      <p>{item.resposta}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
