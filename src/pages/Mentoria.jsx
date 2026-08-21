import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { informacoes } from "../data/informacoes";
import mentoriaImg from "../assets/mentoria-hd.jpg";
import styles from "./PageTemplate.module.scss";

// Import das imagens específicas dos depoimentos da Mentoria
import lucieneMentoria from "../assets/lucieneMentoria.jpg";
import mayaraMentoria from "../assets/mayaraMentoria.jpeg";
import patriciaMentoria from "../assets/patriciaMentoria.jpeg";
import thaisMentoria from "../assets/thaisMentoria.jpg";
import depoMentoria from "../assets/depoMentoria.jpeg";

const faqMentoria = [
  {
    id: 1,
    pergunta: "Para quem é indicada a mentoria de carreira?",
    resposta: "A mentoria de carreira é indicada para mulheres em diferentes momentos profissionais que desejam assumir posições de liderança com segurança, realizar transição de carreira, desenvolver posicionamento profissional firme, melhorar a comunicação corporativa e construir estratégias de crescimento com equilíbrio pessoal."
  },
  {
    id: 2,
    pergunta: "Qual a diferença entre mentoria de carreira e terapia?",
    resposta: "A terapia é um processo clínico voltado para aspectos emocionais, conflitos e sofrimentos psíquicos. Já a mentoria de carreira tem foco no desenvolvimento profissional com objetivos concretos de liderança, posicionamento, tomadas de decisão e competências comportamentais."
  },
  {
    id: 3,
    pergunta: "O que posso esperar ao final da mentoria?",
    resposta: "Ao final do processo, você estará mais preparada para tomar decisões com segurança, comunicar seu valor com confiança, fortalecer sua liderança, posicionar-se estrategicamente e construir um plano de carreira sustentável."
  }
];

const depoimentosFotos = [
  lucieneMentoria,
  mayaraMentoria,
  patriciaMentoria,
  thaisMentoria,
  depoMentoria,
];

const Mentoria = () => {
  const [currentFotoIndex, setCurrentFotoIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFotoIndex((prev) => (prev + 1) % depoimentosFotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent("Olá, gostaria de agendar uma conversa inicial sobre a Mentoria de Carreira.")}`;

  return (
    <>
      <Helmet>
        <title>Mentoria de Carreira para Mulheres | Michele Gonçalves</title>
        <meta
          name="description"
          content="Mentoria de Carreira para Mulheres: Crescimento Profissional com Clareza, Posicionamento e Confiança."
        />
      </Helmet>

      <section className={styles.pageSection}>
        <div className="container">
          
          {/* TOPO: TEXTO DE UM LADO, IMAGEM DO OUTRO */}
          <motion.div 
            className={styles.serviceHeroCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.serviceHeroText}>
              <span className={styles.eyebrow}>Desenvolvimento Profissional</span>
              <h1 className={styles.heroTitle}>Mentoria de Carreira para Mulheres</h1>
              <p>
                Crescimento Profissional com Clareza, Posicionamento e Confiança.
              </p>
              <p>
                Se você sente que chegou o momento de crescer profissionalmente, conquistar uma promoção, assumir uma posição de liderança ou realizar uma transição de carreira, a mentoria oferece a direção estratégica que você procura.
              </p>
            </div>

            <div className={styles.serviceHeroImage}>
              <img src={mentoriaImg} alt="Mentoria de Carreira para Mulheres" />
            </div>
          </motion.div>

          <motion.div
            className={styles.pageContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p>
              Você sente que chegou o momento de crescer profissionalmente,
              conquistar uma promoção, assumir uma posição de liderança ou
              realizar uma transição de carreira, a mentoria de carreira pode
              oferecer a direção estratégica que você procura.
            </p>

            <p>
              Minha mentoria de carreira para mulheres integra mais de 15 anos
              de experiência em Psicologia Organizacional, Gestão de Pessoas,
              Desenvolvimento de Lideranças, Psicologia Clínica e Psicanálise.
              Essa combinação permite compreender que uma carreira de sucesso
              não depende apenas de competências técnicas, mas também de
              autoconhecimento, comunicação, posicionamento profissional,
              inteligência emocional e da forma como cada mulher constrói sua
              identidade no trabalho.
            </p>

            <p>
              Ao longo da carreira, muitas mulheres acumulam experiências,
              qualificações e resultados expressivos, mas ainda enfrentam
              insegurança para assumir novos desafios, dificuldade para
              comunicar seu valor, medo de liderar ou a sensação de estarem
              estagnadas profissionalmente. Esses desafios costumam estar
              relacionados não apenas ao mercado de trabalho, mas também às
              crenças, experiências e padrões que influenciam suas escolhas
              profissionais.
            </p>

            <p>
              A mentoria de carreira é um processo personalizado que une
              estratégia, desenvolvimento profissional e reflexão para ajudar
              mulheres a construírem uma trajetória alinhada à sua história, aos
              seus objetivos e ao momento de vida que estão vivendo.
            </p>

            <p>
              Mais do que planejar os próximos passos, o processo fortalece sua
              capacidade de tomar decisões, ampliar sua confiança, desenvolver
              liderança, comunicar-se com segurança e ocupar espaços
              profissionais de forma autêntica e consistente.
            </p>

            <h3>Para quem é a Mentoria de Carreira?</h3>
            <p>Esta mentoria é indicada para mulheres que desejam:</p>
            <ul className={styles.listItems}>
              <li>crescer profissionalmente com mais segurança e confiança;</li>
              <li>realizar uma transição de carreira;</li>
              <li>conquistar promoções ou assumir cargos de liderança;</li>
              <li>fortalecer o posicionamento profissional;</li>
              <li>
                desenvolver comunicação assertiva no ambiente de trabalho;
              </li>
              <li>
                superar a síndrome da impostora e reconhecer seu próprio valor;
              </li>
              <li>desenvolver competências comportamentais e liderança;</li>
              <li>
                construir uma carreira alinhada aos seus valores, propósito e
                objetivos;
              </li>
              <li>
                contar com uma mentora de carreira que una estratégia,
                Psicologia e experiência em Gestão de Pessoas.
              </li>
            </ul>

            <h3>Como funciona a Mentoria de Carreira?</h3>
            <p>
              Cada processo é individual e personalizado, respeitando a
              história, os objetivos e os desafios profissionais de cada mulher.
            </p>
            <p>
              Durante a mentoria, trabalhamos aspectos essenciais para o
              crescimento profissional, como:
            </p>
            <ul className={styles.listItems}>
              <li>
                definição de objetivos e planejamento estratégico de carreira;
              </li>
              <li>
                desenvolvimento de liderança e competências comportamentais;
              </li>
              <li>
                fortalecimento da comunicação assertiva e do posicionamento
                profissional;
              </li>
              <li>construção da autoconfiança para novos desafios;</li>
              <li>desenvolvimento da inteligência emocional no trabalho;</li>
              <li>
                preparação para promoções, mudanças de cargo ou transição de
                carreira;
              </li>
              <li>tomada de decisão com mais segurança e clareza.</li>
            </ul>
            <p>
              Meu papel não é oferecer respostas prontas, mas conduzir um
              processo de reflexão estratégica que permita identificar
              potencialidades, superar bloqueios e construir uma trajetória
              profissional coerente com quem você é.
            </p>

            <h3>O que você conquista com a Mentoria de Carreira?</h3>
            <p>Ao final do processo, você estará mais preparada para:</p>
            <ul className={styles.listItems}>
              <li>
                posicionar-se com segurança e confiança em diferentes contextos
                profissionais;
              </li>
              <li>comunicar seu valor com clareza e autenticidade;</li>
              <li>
                desenvolver uma postura de liderança, mesmo sem ocupar um cargo
                formal;
              </li>
              <li>tomar decisões profissionais com mais consciência;</li>
              <li>
                ampliar sua visibilidade e reconhecimento no ambiente de
                trabalho;
              </li>
              <li>
                construir um plano de desenvolvimento profissional alinhado aos
                seus objetivos;
              </li>
              <li>assumir o protagonismo da própria carreira.</li>
            </ul>
            <p>
              Mais do que alcançar uma promoção ou uma mudança de cargo, o
              objetivo é que você desenvolva recursos internos para construir
              uma carreira sustentável, coerente com sua identidade e capaz de
              acompanhar as diferentes fases da sua vida.
            </p>

            <h3>Por que escolher minha mentoria?</h3>
            <p>
              Meu trabalho diferencia-se por integrar conhecimentos da
              Psicologia, Psicanálise e Gestão de Pessoas, oferecendo uma
              abordagem que considera tanto as exigências do mercado quanto os
              aspectos emocionais envolvidos no desenvolvimento da carreira.
            </p>
            <p>
              Ao longo de mais de 15 anos de atuação em Psicologia
              Organizacional, desenvolvimento de lideranças e acompanhamento
              clínico, compreendi que o crescimento profissional acontece quando
              estratégia, comportamento e autoconhecimento caminham juntos.
            </p>

            <h3 style={{ textAlign: "center", marginTop: "4rem" }}>
              O que dizem as mentoradas
            </h3>

            {/* Carrossel de Depoimentos em Foto */}
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
                    alt={`Depoimento de mentorada ${currentFotoIndex + 1}`}
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

            {/* Depoimentos em Vídeo (YouTube) */}
            <h4
              style={{
                textAlign: "center",
                marginTop: "3rem",
                marginBottom: "1.5rem",
                fontSize: "1.4rem",
                color: "#6A7B76",
              }}
            >
              Depoimentos em Vídeo
            </h4>

            <div className={styles.videosGrid}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/sayFN5iyO8A"
                  title="Depoimento em Vídeo 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/vxX3zuDSY4w"
                  title="Depoimento em Vídeo 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/7oXVPgNBYWA"
                  title="Depoimento em Vídeo 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/qtYOqsm-jP0"
                  title="Depoimento em Vídeo 4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className={styles.videoWrapper}
                style={{
                  gridColumn: "1 / -1",
                  maxWidth: "600px",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/j5xihp5ZrYg"
                  title="Depoimento em Vídeo 5"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <p style={{ marginTop: "2rem" }}>
              Se você procura uma mentora de carreira para mulheres que ofereça
              um acompanhamento próximo, personalizado e baseado em evidências
              da Psicologia, este pode ser o próximo passo da sua trajetória.
            </p>

            <div
              className={styles.ctaContainer}
              style={{ borderTop: "none", marginTop: "1rem" }}
            >
              <h3>Pronta para crescer profissionalmente?</h3>
              <p>
                Se você deseja desenvolver sua carreira com mais clareza,
                confiança e estratégia, agende uma conversa inicial e descubra
                como a mentoria de carreira pode ajudá-la a conquistar novos
                resultados profissionais.
              </p>
              <a
                href={urlWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Agende sua conversa pelo WhatsApp
              </a>
            </div>

            {/* SANFONA INTERATIVA FAQ (IGUAL À PÁGINA INICIAL) */}
            <div className={styles.faqSection}>
              <h3>Perguntas Frequentes (FAQ)</h3>
              
              <div className={styles.accordion}>
                {faqMentoria.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`${styles.accordionItem} ${activeFaqIndex === index ? styles.active : ''}`}
                  >
                    <button 
                      className={`${styles.accordionHeader} ${activeFaqIndex === index ? styles.activeHeader : ''}`} 
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Mentoria;
