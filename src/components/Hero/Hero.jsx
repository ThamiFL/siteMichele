import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { informacoes } from "../../data/informacoes";
import styles from "./Hero.module.scss";
import heroPerfil from "../../assets/michele-hero-hd.jpg";

const Hero = () => {
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent(informacoes.mensagensWhatsapp.padrao)}`;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Psicologia &amp; <span>Carreira</span>
          </h1>
          <p>
            Desenvolvendo pessoas para que possam atingir seus objetivos
            pessoais e profissionais com responsabilidade, empatia e
            comprometimento.
          </p>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className={styles.imagePlaceholder}>
            <img src={heroPerfil} alt="Michele Gonçalves - Psicóloga" />
          </div>
          {/* Elementos decorativos */}
          <div className={styles.decorator1}></div>
          <div className={styles.decorator2}></div>
        </motion.div>

        <motion.div 
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Agendar consulta
          </a>
          <Link to="/sobre" className="btn-secondary">
            Conheça meu trabalho
          </Link>
        </motion.div>
      </div>

      {/* Divisória elegante visível apenas no mobile para separar o Hero do Sobre */}
      <div className={styles.mobileDivider}>
        <span>◆</span>
      </div>
    </section>
  );
};

export default Hero;
