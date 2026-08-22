import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import styles from "./Galeria.module.scss";

import palestr1 from "../../assets/palestr1.jpeg";
import psico11 from "../../assets/psico11.jpeg";
import lideranca from "../../assets/psico22.jpeg";
import festiva from "../../assets/fetiva.jpeg";
import treain from "../../assets/treaindlider.jpg";
import cursoLi from "../../assets/Curso-de-Lideranca.jpg";
import projetoEmpre from "../../assets/Projeto-Empreende-Mulher.jpg";
import projetoPrefeitura from "../../assets/ProjetoEmpreendePrefeitura.jpg";
import projetoEmpreende from "../../assets/Projeto-Empreende.jpg";
import projeto2 from "../../assets/Projeto2.jpg";
import recru from "../../assets/recrutamento.jpg";
import cursoDeLideranca from "../../assets/cursodelideranca.jpeg";
import pales from "../../assets/palestra.jpg";

const galleryData = [
  {
    id: 1,
    category: "Palestra",
    img: palestr1,
    title: "Palestra Saúde Mental — Lagoinha Niterói",
  },
  {
    id: 2,
    category: "Curso",
    img: psico11,
    title:
      "Curso de Recrutamento & Seleção por Competência e Avaliação Psicológica",
  },
  {
    id: 3,
    category: "Curso & Liderança",
    img: lideranca,
    title:
      "Curso Liderança: Ferramentas Práticas de Desenvolvimento e Gestão — Empresa Estasa",
  },
  {
    id: 4,
    category: "Palestra",
    img: festiva,
    title:
      "Festival Gastronômico: Palestra Saúde Mental — Prefeitura de São Gonçalo",
  },
  {
    id: 5,
    category: "Curso & Liderança",
    img: treain,
    title: "Curso Liderança: Ferramentas Práticas — Empresa Espaço Crescer",
  },
  {
    id: 6,
    category: "Curso",
    img: cursoLi,
    title: "Curso Liderança: Ferramentas Práticas de Desenvolvimento e Gestão",
  },
  {
    id: 7,
    category: "Projeto Corporativo",
    img: projetoEmpre,
    title: "Projeto Empreende Mulher — Palestras para Empreendedoras",
  },
  {
    id: 8,
    category: "Projeto Corporativo",
    img: projetoPrefeitura,
    title: "Projeto Empreende Mulher — Prefeitura de São Gonçalo",
  },
  {
    id: 9,
    category: "Projeto Corporativo",
    img: projetoEmpreende,
    title: "Projeto Empreende Mulher — Encontro de Captação e Desenvolvimento",
  },
  {
    id: 10,
    category: "Projeto Corporativo",
    img: projeto2,
    title: "Projeto Empreende Mulher — Capacitação Profissional",
  },
  {
    id: 11,
    category: "Curso",
    img: recru,
    title: "Curso Recrutamento e Seleção por Competência",
  },
  {
    id: 12,
    category: "Curso & Liderança",
    img: cursoDeLideranca,
    title: "Curso Liderança Operacional — Empresa EBSE",
  },
  {
    id: 13,
    category: "Palestra",
    img: pales,
    title: "Palestra para Empreendedoras — Instituto EnLife 2023",
  },
];

const Galeria = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Travar o scroll da página de fundo enquanto a foto ampliada estiver aberta
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCard]);

  return (
    <section className={styles.galeriaSection}>
      <div className="container">
        {/* Cabeçalho delicado e elegante */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.sectionTitle}>
            Mentoria • Palestras • Workshops
          </h2>
        </div>

        {/* Grade de cartões limpos e alinhados */}
        <div className={styles.galleryGrid}>
          {galleryData.map((card) => (
            <motion.div
              key={card.id}
              className={styles.galleryCard}
              onClick={() => setSelectedCard(card)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imgWrapper}>
                <img src={card.img} alt={card.title} loading="lazy" />
              </div>
              <p className={styles.caption}>{card.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Ampliada Elegante */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setSelectedCard(null)}
                aria-label="Fechar"
              >
                <FaTimes />
              </button>

              <div className={styles.modalImgWrapper}>
                <img src={selectedCard.img} alt={selectedCard.title} />
              </div>

              <div className={styles.modalFooter}>
                <p className={styles.modalCaption}>{selectedCard.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galeria;
