import React from "react";
import { motion } from "framer-motion";
import styles from "./Clientes.module.scss";

import logoEnlife from "../../assets/logo1.png";
import logoAdore from "../../assets/logo2.png";
import logoEstasa from "../../assets/logo3.png";
import logoEbse from "../../assets/logo4.png";
import logoHosp from "../../assets/logo5.png";
import logoEspaco from "../../assets/logo6.png";
import logoPrefeitura from "../../assets/logo-prefeitura.png";

const clientes = [
  { imgSrc: logoEspaco, nome: "Espaço Crescer" },
  { imgSrc: logoHosp, nome: "São José Hospital" },
  { imgSrc: logoEbse, nome: "EBSE Engenharia" },
  { imgSrc: logoEstasa, nome: "Estasa" },
  { imgSrc: logoAdore, nome: "ADORE Professional" },
  { imgSrc: logoEnlife, nome: "Instituto EnLife" },
];

const parceiros = [{ imgSrc: logoPrefeitura, nome: "Prefeitura de São Gonçalo" }];

const Clientes = () => {
  return (
    <section className={styles.clientesSection} id="clientes">
      <div className="container">
        {/* CLIENTES */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Clientes</h2>
        </motion.div>

        <div className={styles.logoGrid}>
          {clientes.map((cliente, index) => (
            <motion.div
              key={`cliente-${index}`}
              className={styles.logoItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {cliente.imgSrc ? (
                <img src={cliente.imgSrc} alt={cliente.nome} />
              ) : (
                <div className={styles.placeholderBox}>
                  <span>
                    Falta Imagem:
                    <br />
                    {cliente.nome}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* PARCEIROS */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: "4rem" }}
        >
          <h2>Parceiros</h2>
        </motion.div>

        <div className={styles.logoGridSingle}>
          {parceiros.map((parceiro, index) => (
            <motion.div
              key={`parceiro-${index}`}
              className={styles.logoItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {parceiro.imgSrc ? (
                <img src={parceiro.imgSrc} alt={parceiro.nome} />
              ) : (
                <div className={styles.placeholderBox}>
                  <span>
                    Falta Imagem:
                    <br />
                    {parceiro.nome}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
