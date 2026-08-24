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
import assert from "../../assets/Assertiva.jpeg";
import amarelo from "../../assets/Amarelo.jpeg";
import sipat from "../../assets/Sipat.jpeg";
import brito from "../../assets/Brito.jpeg";
import saude from "../../assets/saude.jpeg";
import comu from "../../assets/comunicacao.jpeg";
import mental from "../../assets/Mental.jpeg";
import lider from "../../assets/lider.jpeg";
import treinamento from "../../assets/Treinamento.jpeg";
import profissi from "../../assets/profissionais.jpeg";

const galleryData = [
  {
    id: 1,
    catKey: "palestras",
    category: "Palestra",
    img: palestr1,
    title: "Palestra Saúde Mental — Lagoinha Niterói",
  },
  {
    id: 2,
    catKey: "cursos",
    category: "Curso",
    img: psico11,
    title:
      "Curso de Recrutamento & Seleção por Competência e Avaliação Psicológica",
  },
  {
    id: 3,
    catKey: "cursos",
    category: "Curso & Liderança",
    img: lideranca,
    title:
      "Curso Liderança: Ferramentas Práticas de Desenvolvimento e Gestão — Empresa Estasa",
  },
  {
    id: 4,
    catKey: "palestras",
    category: "Palestra",
    img: festiva,
    title:
      "Festival Gastronômico: Palestra Saúde Mental — Prefeitura de São Gonçalo",
  },
  {
    id: 5,
    catKey: "cursos",
    category: "Curso & Liderança",
    img: treain,
    title: "Curso Liderança: Ferramentas Práticas — Empresa Espaço Crescer",
  },
  {
    id: 6,
    catKey: "cursos",
    category: "Curso",
    img: cursoLi,
    title: "Curso Liderança: Ferramentas Práticas de Desenvolvimento e Gestão",
  },
  {
    id: 7,
    catKey: "projetos",
    category: "Projeto Corporativo",
    img: projetoEmpre,
    title: "Projeto Empreende Mulher — Palestras para Empreendedoras",
  },
  {
    id: 8,
    catKey: "projetos",
    category: "Projeto Corporativo",
    img: projetoPrefeitura,
    title: "Projeto Empreende Mulher — Prefeitura de São Gonçalo",
  },
  {
    id: 9,
    catKey: "projetos",
    category: "Projeto Corporativo",
    img: projetoEmpreende,
    title: "Projeto Empreende Mulher — Encontro de Captação e Desenvolvimento",
  },
  {
    id: 10,
    catKey: "projetos",
    category: "Projeto Corporativo",
    img: projeto2,
    title: "Projeto Empreende Mulher — Capacitação Profissional",
  },
  {
    id: 11,
    catKey: "cursos",
    category: "Curso",
    img: recru,
    title: "Curso Recrutamento e Seleção por Competência",
  },
  {
    id: 12,
    catKey: "cursos",
    category: "Curso & Liderança",
    img: cursoDeLideranca,
    title: "Curso Liderança Operacional — Empresa EBSE",
  },
  {
    id: 13,
    catKey: "palestras",
    category: "Palestra",
    img: pales,
    title: "Palestra para Empreendedoras — Instituto EnLife 2023",
  },
  {
    id: 14,
    catKey: "palestras",
    category: "Palestra",
    img: assert,
    title: "Capacitação de Liderança -  Comunicação Assertiva",
  },
  {
    id: 15,
    catKey: "palestras",
    category: "Palestra",
    img: amarelo,
    title: "Palestra - Setembro Amarelo",
  },
  {
    id: 16,
    catKey: "palestras",
    category: "Palestra",
    img: sipat,
    title: "Sipat - Tema Saúde Mental",
  },
  {
    id: 17,
    catKey: "palestras",
    category: "Palestra",
    img: brito,
    title: "Capacitação de Liderança - Brito Contabilidade",
  },
  {
    id: 18,
    catKey: "palestras",
    category: "Palestra",
    img: saude,
    title: "Projeto - Saúde Mental nas empresas",
  },
  {
    id: 19,
    catKey: "palestras",
    category: "Palestra",
    img: comu,
    title: "Comunicação Sem Assédio",
  },
  {
    id: 20,
    catKey: "palestras",
    category: "Palestra",
    img: mental,
    title: "Projeto - Saúde Mental nas empresas",
  },
  {
    id: 21,
    catKey: "palestras",
    category: "Palestra",
    img: lider,
    title: "Treinamento de Liderança",
  },
  {
    id: 22,
    catKey: "palestras",
    category: "Palestra",
    img: treinamento,
    title: "Treinamento de Comunicação",
  },
  {
    id: 23,
    catKey: "palestras",
    category: "Palestra",
    img: profissi,
    title: "Palestra Saúde Mental - Colégio Odete São Paio",
  },
];

const Galeria = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const initialCount = 6;
  const displayedData = showAll ? galleryData : galleryData.slice(0, initialCount);

  // Travar o scroll da página de fundo enquanto a foto ampliada estiver aberta
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

  return (
    <section className={styles.galeriaSection}>
      <div className="container">
        {/* Cabeçalho delicado e elegante */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.sectionTitle}>
            Cursos • Palestras • Workshops
          </h2>
        </div>

        {/* Grade de cartões limpos e alinhados */}
        <div className={styles.galleryGrid}>
          {displayedData.map((card) => (
            <motion.div
              key={card.id}
              className={styles.galleryCard}
              onClick={() => setSelectedCard(card)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div className={styles.imgWrapper}>
                <img src={card.img} alt={card.title} loading="lazy" />
              </div>
              <p className={styles.caption}>{card.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais Fotos (mostra todas de uma vez ao clicar) */}
        {!showAll && galleryData.length > initialCount && (
          <div className={styles.loadMoreWrapper}>
            <button
              className={styles.loadMoreBtn}
              onClick={() => setShowAll(true)}
            >
              Ver mais fotos ({galleryData.length - initialCount} restantes)
            </button>
          </div>
        )}
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
