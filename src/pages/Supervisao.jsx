import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { informacoes } from "../data/informacoes";
import supervisaoImg from "../assets/supervisao-hd.jpg";
import styles from "./PageTemplate.module.scss";

// Import das imagens específicas dos depoimentos da Supervisão
import alineSupervisao from "../assets/alineSupervisao.jpeg";
import daniSupervisao from "../assets/daniSupervisao.jpeg";
import letiSupervisao from "../assets/letiSupervisao.jpeg";
import marcelleSupervisao from "../assets/marcelleSupervisao.jpeg";
import niceSupervisao from "../assets/niceSupervisao.jpg";
import saraSupervisao from "../assets/saramentoria.jpeg";

const faqSupervisao = [
  {
    id: 1,
    pergunta: "Como começar a atuar na clínica sendo psicóloga recém-formada?",
    resposta:
      "Muitas psicólogas recém-formadas sentem insegurança ao iniciar os primeiros atendimentos. A Supervisão Clínica em Psicanálise oferece um espaço seguro para discutir casos, desenvolver o raciocínio clínico e fortalecer a escuta psicanalítica. Quando integrada à Mentoria para Psicólogas, também auxilia na organização da prática profissional, na construção da identidade clínica e no planejamento de uma carreira sólida e ética.",
  },
  {
    id: 2,
    pergunta:
      "Qual a diferença entre Supervisão Clínica e Mentoria para Psicólogas?",
    resposta:
      "A Supervisão Clínica em Psicanálise é voltada para o desenvolvimento técnico da prática clínica, permitindo discutir casos, compreender o manejo da transferência e formular hipóteses clínicas. Já a Mentoria de Carreira para Psicólogas amplia o olhar para o desenvolvimento profissional, auxiliando na construção da identidade como psicóloga clínica, no posicionamento profissional, na organização da rotina e na construção de uma carreira sustentável.",
  },
  {
    id: 3,
    pergunta:
      "Como vencer a insegurança nos primeiros atendimentos psicológicos?",
    resposta:
      "A insegurança diminui quando a psicóloga conta com acompanhamento especializado, estudo contínuo e espaços de reflexão sobre sua prática. A Supervisão Clínica permite elaborar dúvidas e aprimorar o manejo clínico, enquanto a Mentoria fortalece a identidade profissional, desenvolve autonomia e oferece direcionamento seguro.",
  },
];

const depoimentosFotos = [
  alineSupervisao,
  daniSupervisao,
  letiSupervisao,
  marcelleSupervisao,
  niceSupervisao,
  saraSupervisao,
];

const Supervisao = () => {
  const [currentFotoIndex, setCurrentFotoIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a Supervisão Clínica e Mentoria para Psicólogas.")}`;

  const handleNextFoto = () => {
    setCurrentFotoIndex((prev) => (prev + 1) % depoimentosFotos.length);
  };

  const handlePrevFoto = () => {
    setCurrentFotoIndex(
      (prev) => (prev - 1 + depoimentosFotos.length) % depoimentosFotos.length,
    );
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Supervisão Clínica e Mentoria | Michele Gonçalves</title>
        <meta
          name="description"
          content="Supervisão Clínica em Psicanálise e Mentoria para Psicólogas. Desenvolva uma prática ética, segura e uma carreira sólida."
        />
      </Helmet>

      <section className={styles.pageSection}>
        <div className="container">
          {/* TOPO: TEXTO DE UM LADO, IMAGEM DO OUTRO (SEM BOTÃO NO TOPO) */}
          <motion.div
            className={styles.serviceHeroCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.serviceHeroText}>
              <span className={styles.eyebrow}>
                Mentoria & orientação clínica
              </span>
              <h1 className={styles.heroTitle}>
                Supervisão clínica em psicanálise e mentoria para psicólogas
              </h1>
              <p>
                A Supervisão Clínica oferece um espaço de reflexão, estudo e
                elaboração da prática profissional, permitindo que a psicóloga
                desenvolva uma escuta ética, sensível e comprometida com a
                singularidade de cada paciente.
              </p>
            </div>

            <div className={styles.serviceHeroImage}>
              <img
                src={supervisaoImg}
                alt="Supervisão clínica em psicanálise e mentoria para psicólogas"
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.pageContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "var(--color-primary)",
                fontWeight: "500",
                marginBottom: "2rem",
              }}
            >
              Desenvolva uma prática ética, segura e uma carreira sólida
            </p>

            <p>
              Se você é uma psicóloga recém-formada ou está iniciando sua
              atuação clínica, é natural que surjam dúvidas, inseguranças e o
              receio de não estar suficientemente preparada para conduzir um
              atendimento. Muitas profissionais se perguntam: como desenvolver
              segurança clínica, fortalecer a escuta e construir uma carreira
              consistente na Psicologia?
            </p>
            <p>
              A Supervisão Clínica em Psicanálise é um dos pilares fundamentais
              desse processo. Mais do que discutir casos clínicos, ela oferece
              um espaço de reflexão, estudo e elaboração da prática
              profissional, permitindo que a psicóloga desenvolva uma escuta
              ética, sensível e comprometida com a singularidade de cada
              sujeito.
            </p>

            <h3>
              A importância da supervisão clínica na formação da psicóloga
            </h3>
            <p>
              Na Psicanálise, a formação do analista sustenta-se em três
              pilares: análise pessoal, estudo teórico e supervisão clínica.
              Esses elementos caminham juntos e possibilitam que a prática
              clínica seja construída de forma ética, crítica e fundamentada.
            </p>
            <p>
              Durante a supervisão, teoria e experiência se encontram. É nesse
              espaço que os impasses do consultório podem ser elaborados, o
              manejo clínico é aprimorado e a confiança profissional se
              fortalece, favorecendo o desenvolvimento de uma prática clínica
              segura e responsável.
            </p>

            <h3>
              Muito além da discussão de casos: um espaço para construir sua
              identidade clínica
            </h3>
            <p>
              Os primeiros anos da carreira costumam ser marcados por desafios
              como:
            </p>
            <ul className={styles.listItems}>
              <li>Medo de errar durante os atendimentos;</li>
              <li>Insegurança na condução dos casos clínicos;</li>
              <li>Dificuldade em transformar a teoria em prática;</li>
              <li>
                Dúvidas sobre entrevistas iniciais e processo diagnóstico;
              </li>
              <li>Construção da identidade profissional;</li>
              <li>Organização da prática clínica e da carreira.</li>
            </ul>
            <p>
              Por isso, minha proposta vai além da supervisão tradicional.
              Ofereço um acompanhamento individualizado que integra Supervisão
              Clínica em Psicanálise e Mentoria de Carreira para Psicólogas,
              promovendo crescimento técnico, desenvolvimento emocional e
              fortalecimento da identidade profissional.
            </p>

            <h3>
              Supervisão clínica e mentoria: um acompanhamento completo para
              psicólogas
            </h3>
            <p>
              Enquanto a supervisão clínica fortalece o raciocínio clínico, o
              manejo da transferência, da contratransferência e a escuta
              psicanalítica, a mentoria para psicólogas amplia o olhar para os
              desafios da profissão.
            </p>
            <p>
              Juntas, trabalhamos aspectos fundamentais para quem deseja viver
              da clínica com ética e segurança:
            </p>
            <ul className={styles.listItems}>
              <li>Desenvolvimento da identidade clínica;</li>
              <li>Segurança para conduzir atendimentos;</li>
              <li>Discussão de casos clínicos;</li>
              <li>Manejo da transferência e contratransferência;</li>
              <li>Formulação de hipóteses clínicas;</li>
              <li>Processo diagnóstico e entrevistas preliminares;</li>
              <li>Ética profissional;</li>
              <li>Articulação entre teoria e prática;</li>
              <li>Organização da rotina clínica;</li>
              <li>Posicionamento profissional;</li>
              <li>Planejamento e desenvolvimento de carreira;</li>
              <li>Construção de uma prática clínica consistente.</li>
            </ul>

            <h3>Para quem é a supervisão clínica?</h3>
            <p>Este acompanhamento é indicado para:</p>
            <ul className={styles.listItems}>
              <li>Psicólogas recém-formadas;</li>
              <li>Psicólogas em início da prática clínica;</li>
              <li>
                Profissionais que desejam aprofundar sua formação em
                Psicanálise;
              </li>
              <li>
                Psicólogas que buscam mais segurança na condução dos
                atendimentos;
              </li>
              <li>
                Profissionais que desejam desenvolver sua identidade clínica e
                fortalecer sua carreira.
              </li>
            </ul>

            <h3>Por que integrar supervisão clínica e mentoria?</h3>
            <p>
              A formação universitária oferece bases importantes, mas a
              experiência clínica é construída ao longo da prática. Contar com
              uma supervisora e mentora permite reduzir a insegurança,
              desenvolver autonomia e construir uma atuação mais consciente e
              consistente.
            </p>
            <p>
              Meu trabalho une mais de 15 anos de experiência em Psicologia
              Organizacional, desenvolvimento humano e formação de profissionais
              à prática clínica fundamentada na Psicanálise. Esse percurso me
              permite acompanhar psicólogas não apenas no aprimoramento técnico,
              mas também na construção de uma carreira alinhada aos seus
              valores, à ética profissional e à singularidade de sua atuação.
            </p>

            <h3>Fortaleça sua escuta clínica e construa uma carreira sólida</h3>
            <p>
              A prática clínica se desenvolve continuamente. Investir em
              supervisão e mentoria é investir na qualidade do cuidado oferecido
              aos pacientes e no fortalecimento da sua própria trajetória
              profissional.
            </p>
            <p>
              Se você deseja transformar a insegurança do início da carreira em
              confiança, autonomia e desenvolvimento profissional, será um
              prazer caminhar ao seu lado nesse processo.
            </p>

            <div
              className={styles.ctaContainer}
              style={{ borderTop: "none", marginTop: "3rem" }}
            >
              <p>
                Agende uma conversa e conheça a Supervisão Clínica em
                Psicanálise e a Mentoria para Psicólogas.
              </p>
              <a
                href={urlWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Agendar uma conversa inicial
              </a>
            </div>

            {/* Seção de Depoimentos em Fotos (Carrossel) */}
            <h3 style={{ textAlign: "center", marginTop: "4rem" }}>
              O que dizem as psicólogas acompanhadas
            </h3>

            <div className={styles.carouselWrapper}>
              <button
                className={styles.navButton}
                onClick={handlePrevFoto}
                aria-label="Depoimento Anterior"
              >
                <FaChevronLeft />
              </button>

              <div className={styles.carouselContainer}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentFotoIndex}
                    src={depoimentosFotos[currentFotoIndex]}
                    alt={`Depoimento de psicóloga ${currentFotoIndex + 1}`}
                    className={styles.carouselImage}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>

              <button
                className={styles.navButton}
                onClick={handleNextFoto}
                aria-label="Próximo Depoimento"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className={styles.dots}>
              {depoimentosFotos.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${idx === currentFotoIndex ? styles.active : ""}`}
                  onClick={() => setCurrentFotoIndex(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* SANFONA INTERATIVA FAQ (IGUAL À PÁGINA INICIAL) */}
            <div className={styles.faqSection}>
              <h3>Perguntas Frequentes (FAQ)</h3>

              <div className={styles.accordion}>
                {faqSupervisao.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${styles.accordionItem} ${activeFaqIndex === index ? styles.active : ""}`}
                  >
                    <button
                      className={`${styles.accordionHeader} ${activeFaqIndex === index ? styles.activeHeader : ""}`}
                      onClick={() => toggleFaq(index)}
                      aria-expanded={activeFaqIndex === index}
                    >
                      {item.pergunta}
                      <FaChevronDown className={styles.icon} />
                    </button>

                    <AnimatePresence>
                      {activeFaqIndex === index && (
                        <motion.div
                          className={styles.accordionContent}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Supervisao;
