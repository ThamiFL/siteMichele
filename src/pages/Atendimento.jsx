import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { informacoes } from "../data/informacoes";
import atendimentoImg from "../assets/atendimento-hd.jpg";
import styles from "./PageTemplate.module.scss";

// Import das fotos dos depoimentos do Atendimento
import depoPsi1 from "../assets/depoPsi.jpeg";
import depoPsi2 from "../assets/depoPsi2.jpeg";
import depoPsi3 from "../assets/depoPci3.jpeg";
import depoPsi5 from "../assets/depoPsi5.jpeg";
import depoPsi6 from "../assets/depo6.jpeg";

const depoimentosFotos = [depoPsi1, depoPsi2, depoPsi3, depoPsi5, depoPsi6];

const faqAtendimento = [
  {
    id: 1,
    pergunta: "Como funciona a primeira sessão de psicoterapia?",
    resposta:
      "A primeira sessão é um momento para nos conhecermos. Você poderá falar sobre o que te trouxe até aqui, e eu explicarei como funciona meu método de trabalho. Não há pressão, é apenas uma conversa inicial para entendermos se sou a profissional certa para o seu caso.",
  },
  {
    id: 2,
    pergunta: "Qual a duração das sessões?",
    resposta:
      "Cada sessão tem a duração entre 35 e 45 minutos e geralmente, ocorre uma vez por semana, mas a frequência pode ser ajustada de acordo com a sua necessidade.",
  },
  {
    id: 3,
    pergunta: "Como funciona o atendimento psicológico online?",
    resposta:
      "As sessões ocorrem semanalmente com horário pré-agendado por videochamada através do Google Meeting. Para o atendimento, você precisa de uma conexão estável de internet, um dispositivo com câmera e microfone (celular ou computador) e um local privativo onde se sinta confortável e à vontade para falar livremente.",
  },
  {
    id: 4,
    pergunta: "Como funciona a abordagem psicanalítica?",
    resposta:
      "A Psicanálise oferece um espaço seguro de escuta, acolhimento e reflexão para mulheres que desejam compreender sua história. Diferente de abordagens focadas apenas no alívio imediato dos sintomas, a Psicanálise busca compreender as causas profundas do sofrimento psíquico e os padrões inconscientes que influenciam escolhas, emoções e formas de se relacionar.",
  },
  {
    id: 5,
    pergunta: "A terapia online é eficaz e sigilosa?",
    resposta:
      "Sim, absolutamente. A eficácia da terapia online é reconhecida pelo Conselho Federal de Psicologia (CFP) e respaldada por diversos estudos científicos. O vínculo terapêutico e a profundidade do trabalho se mantêm idênticos ao formato presencial. Quanto ao sigilo, ele é ético e inegociável, protegido pelo Código de Ética Profissional em ambiente criptografado.",
  },
  {
    id: 6,
    pergunta: "Os atendimentos são por plano de saúde?",
    resposta:
      "Não, os atendimentos são realizados exclusivamente na modalidade particular. Todas as sessões acompanham a emissão de Nota Fiscal, que você pode utilizar para a dedução do Imposto de Renda ou solicitar o reembolso junto ao seu convênio, caso o seu plano ofereça essa opção.",
  },
];

const Atendimento = () => {
  const [currentFotoIndex, setCurrentFotoIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent("Olá, gostaria de agendar um Atendimento Psicológico Online.")}`;

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
        <title>Atendimento Psicológico Online | Michele Gonçalves</title>
        <meta
          name="description"
          content="Atendimento psicológico online para mulheres: espaço de escuta para fortalecer sua identidade e construir uma vida coerente com seus desejos."
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
              <span className={styles.eyebrow}>Psicoterapia online</span>
              <h1 className={styles.heroTitle}>
                Atendimento psicológico online para mulheres
              </h1>
              <p>
                Ofereço espaço seguro de escuta, acolhimento e reflexão para
                mulheres que querem compreender sua história, fortalecer sua
                identidade e construir uma vida e uma carreira coerentes com
                seus desejos.
              </p>
              <p>
                A rotina da mulher contemporânea é marcada por múltiplas
                responsabilidades. A terapia oferece um refúgio para compreender
                os conflitos emocionais, lidar com a sobrecarga e fortalecer a
                saúde mental.
              </p>
            </div>

            <div className={styles.serviceHeroImage}>
              <img
                src={atendimentoImg}
                alt="Atendimento psicológico online para mulheres"
              />
            </div>
          </motion.div>

          {/* CONTEÚDO COMPLEMENTAR EM CARD BRANCO ELEGANTE */}
          <motion.div
            className={styles.pageContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p>
              Minha prática clínica é fundamentada na Psicologia e na
              Psicanálise, oferecendo atendimento psicológico online para
              mulheres que desejam compreender os significados de seus conflitos
              emocionais, sua história, suas relações e como suas experiências
              influenciam suas escolhas, seus afetos e sua forma de estar no
              mundo.
            </p>
            <p>
              A clínica é um espaço de elaboração, onde cada história é acolhida
              em sua singularidade, considerando também os atravessamentos
              sociais, culturais e de gênero que fazem parte da experiência
              feminina. Porque compreender a si mesma é também compreender o
              lugar que ocupamos nas relações, na família, no trabalho e na
              sociedade.
            </p>

            <h3>Para quem é indicado</h3>
            <p>
              O Atendimento psicológico online é indicado para mulheres que
              desejam:
            </p>
            <ul className={styles.listItems}>
              <li>compreender padrões que se repetem em suas relações;</li>
              <li>lidar com a sobrecarga emocional e a autocobrança;</li>
              <li>refletir sobre carreira, identidade e projetos de vida;</li>
              <li>enfrentar momentos de transição pessoal ou profissional;</li>
              <li>
                fortalecer seu posicionamento nas relações afetivas e no
                trabalho;
              </li>
              <li>
                encontrar um espaço de escuta para falar de si, para além dos
                papéis que desempenham.
              </li>
            </ul>

            <h3>Como a terapia pode ajudar</h3>
            <ul className={styles.listItems}>
              <li>
                <strong>Elaboração de culpas e expectativas:</strong> Entender o
                que é seu e o que foi imposto sobre a maternidade e a
                feminilidade.
              </li>
              <li>
                <strong>Construção de limites e posicionamento:</strong>{" "}
                Aprender a ocupar espaços e expressar seus desejos sem culpa ou
                medo do julgamento.
              </li>
              <li>
                <strong>Acolhimento da exaustão:</strong> Ter um refúgio para
                desacelerar e processar a sobrecarga da carreira e da rotina.
              </li>
              <li>
                <strong>Reconexão com a sua identidade:</strong> Resgatar quem
                você é para além dos papéis de mãe, profissional, parceira ou
                filha.
              </li>
            </ul>

            <h3>Benefícios do atendimento psicológico online</h3>
            <ul className={styles.listItems}>
              <li>Fortalecimento da autoestima feminina</li>
              <li>Desenvolvimento do autoconhecimento</li>
              <li>Redução dos sintomas de ansiedade</li>
              <li>Construção de limites saudáveis</li>
              <li>Desenvolvimento do posicionamento profissional</li>
              <li>Relações mais conscientes</li>
              <li>Compreensão da própria história</li>
            </ul>

            <h3>Minha abordagem clínica</h3>
            <p>
              Através de sessões online para todo o Brasil, ofereço uma escuta
              ética, singular e atenta à história de cada mulher, embasada nos
              princípios da Psicologia e da Psicanálise.
            </p>
            <p>
              A experiência clínica também é atravessada por uma compreensão das
              questões que permeiam a vida das mulheres na contemporaneidade
              como desigualdades, exigências sociais, sobrecarga de cuidados,
              maternidade, carreira e construção da identidade.
            </p>

            {/* CAIXA CTA DE AGENDAMENTO */}
            <div className={styles.ctaContainer}>
              <h3>Agende seu atendimento psicológico online</h3>
              <p>
                Se você busca uma psicóloga para mulheres que acolha sua
                história com ética, escuta e profundidade, será um prazer
                acompanhar seu processo terapêutico.
              </p>
              <a
                href={urlWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Agendar Atendimento
              </a>
            </div>

            {/* SEÇÃO DE DEPOIMENTOS EM FOTOS (CARROSSEL MANUAL) */}
            <h3 style={{ textAlign: "center", marginTop: "4rem" }}>
              O que dizem as clientes atendidas
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
                    alt={`Depoimento de atendimento ${currentFotoIndex + 1}`}
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

            {/* SANFONA INTERATIVA FAQ */}
            <div className={styles.faqSection}>
              <h3>Perguntas frequentes (FAQ)</h3>

              <div className={styles.accordion}>
                {faqAtendimento.map((item, index) => (
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

export default Atendimento;
