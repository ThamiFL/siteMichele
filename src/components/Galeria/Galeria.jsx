import React from 'react';
import styles from './Galeria.module.scss';

const Galeria = () => {
  return (
    <section className={styles.galeriaSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Mentoria - Palestras - Workshops</h2>
        <div className={styles.galleryGrid}>
          
          <div className={styles.galleryCard}>
            <div className={styles.imgWrapper}>
              <span>Falta Imagem:<br/>Galeria 1</span>
            </div>
            <div className={styles.caption}>Palestra Saúde Mental - Lagoinha Niterói</div>
          </div>

          <div className={styles.galleryCard}>
            <div className={styles.imgWrapper}>
              <span>Falta Imagem:<br/>Galeria 2</span>
            </div>
            <div className={styles.caption}>Curso de Recrutamento e Seleção & Avaliação Psicológica</div>
          </div>

          <div className={styles.galleryCard}>
            <div className={styles.imgWrapper}>
              <span>Falta Imagem:<br/>Galeria 3</span>
            </div>
            <div className={styles.caption}>Curso Liderança: Ferramentas práticas - Estasa</div>
          </div>

          <div className={styles.galleryCard}>
            <div className={styles.imgWrapper}>
              <span>Falta Imagem:<br/>Galeria 4</span>
            </div>
            <div className={styles.caption}>Festival Gastronômico - Saúde Mental - Pref. São Gonçalo</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Galeria;
