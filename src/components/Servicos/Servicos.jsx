import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCouch,
  FaChalkboardTeacher,
  FaMapSigns,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./Servicos.module.scss";

const Servicos = () => {
  const servicosData = [
    {
      id: "atendimento",
      titulo: "Atendimento",
      icone: <FaCouch />,
      descricao:
        "Espaço de escuta para mulheres que desejam construir uma vida e uma carreira coerentes com sua história.",
      link: "/atendimento",
    },
    {
      id: "supervisao",
      titulo: "Supervisão clínica",
      icone: <FaChalkboardTeacher />,
      descricao:
        "Desenvolver uma prática clínica ética, segura e comprometida com a singularidade do sujeito.",
      link: "/supervisao",
    },
    {
      id: "mentoria",
      titulo: "Mentoria de carreira",
      icone: <FaMapSigns />,
      descricao:
        "A construção de uma trajetória de vida e de carreira coerente com a história e a identidade.",
      link: "/mentoria",
    },
    {
      id: "desenvolvimento",
      titulo: "Desenvolvimento para empresas",
      icone: <FaBuilding />,
      descricao:
        "Palestras, treinamentos e programas de desenvolvimento para fortalecer pessoas, equipes e lideranças.",
      link: "/desenvolvimento-empresas",
    },
  ];

  return (
    <section className={styles.servicosSection} id="servicos">
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Como posso te ajudar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Conheça as minhas frentes de atuação
          </motion.p>
        </div>

        <div className={styles.cardsContainer}>
          {servicosData.map((servico, index) => (
            <motion.div
              key={servico.id}
              className={styles.servicoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className={styles.cardIcon}>{servico.icone}</div>
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>

              <Link to={servico.link} className={styles.saibaMaisBtn}>
                Saiba mais <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
