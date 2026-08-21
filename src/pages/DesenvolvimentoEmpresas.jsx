import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { informacoes } from '../data/informacoes';
import desenvolvimentoImg from '../assets/desenvolvimento-hd.jpg';
import styles from './PageTemplate.module.scss';

// Import das imagens de depoimentos empresariais
import depoEmpresarial from '../assets/DepoEmpresarial.jpeg';
import depoEmpresarial2 from '../assets/DepoEmpresarial2.jpeg';

const faqEmpresas = [
  {
    id: 1,
    pergunta: "Como escolher uma palestrante para empresas que realmente gere resultados?",
    resposta: "A escolha de uma palestrante corporativa vai além de uma apresentação inspiradora. É essencial contratar uma profissional que compreenda o comportamento humano, a cultura organizacional e os desafios específicos da sua empresa, gerando transformações permanentes."
  },
  {
    id: 2,
    pergunta: "Quais são os temas de palestras corporativas mais procurados?",
    resposta: "Os temas mais solicitados incluem: Saúde Mental nas Empresas, NR-1 e Riscos Psicossociais, Inteligência Emocional, Liderança Humanizada, Comunicação Assertiva, Gestão de Conflitos, Trabalho em Equipe e Prevenção do Burnout."
  },
  {
    id: 3,
    pergunta: "As palestras podem ser personalizadas para a realidade da empresa?",
    resposta: "Sim! Antes do evento, realizamos um alinhamento das necessidades da empresa para adaptar o conteúdo aos desafios estratégicos das lideranças, equipes e exigências de saúde mental no trabalho."
  }
];

const depoimentosFotos = [depoEmpresarial, depoEmpresarial2];

const DesenvolvimentoEmpresas = () => {
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
    setCurrentFotoIndex((prev) => (prev - 1 + depoimentosFotos.length) % depoimentosFotos.length);
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent("Olá, gostaria de conversar sobre palestras e treinamentos para a minha empresa.")}`;

  return (
    <>
      <Helmet>
        <title>Desenvolvimento Humano para Empresas | Michele Gonçalves</title>
        <meta name="description" content="Palestras corporativas e treinamentos para empresas que desenvolvem pessoas, fortalecem lideranças e transformam resultados." />
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
              <span className={styles.eyebrow}>Soluções Corporativas</span>
              <h1 className={styles.heroTitle}>Desenvolvimento Humano para Empresas</h1>
              <p>
                Palestras Corporativas e Treinamentos para Empresas que Desenvolvem Pessoas, Fortalecem Lideranças e Transformam Resultados.
              </p>
              <p>
                Como psicóloga organizacional e especialista em comportamento humano, desenvolvo programas e palestras que unem a Psicologia ao ambiente corporativo.
              </p>
            </div>

            <div className={styles.serviceHeroImage}>
              <img src={desenvolvimentoImg} alt="Desenvolvimento Humano para Empresas" />
            </div>
          </motion.div>

          <motion.div 
            className={styles.pageContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: '500', marginBottom: '2rem' }}>
              Palestras Corporativas para Empresas que Desenvolvem Pessoas, Fortalecem Lideranças e Transformam Resultados
            </p>

            <p>
              As empresas são feitas de pessoas. Quando colaboradores e líderes encontram um ambiente emocionalmente saudável, com comunicação eficiente e relações de confiança, toda a organização evolui. O resultado aparece no engajamento, na produtividade, no fortalecimento da cultura organizacional e na retenção de talentos.
            </p>
            <p>
              Como psicóloga organizacional, palestrante corporativa e especialista em desenvolvimento humano, desenvolvo palestras corporativas, treinamentos para empresas e programas de desenvolvimento que unem Psicologia, comportamento organizacional e estratégias práticas para fortalecer equipes, desenvolver lideranças e promover ambientes de trabalho mais saudáveis.
            </p>
            <p>
              Com mais de 15 anos de experiência em Psicologia Organizacional, Gestão de Pessoas, Desenvolvimento de Lideranças e Psicologia Clínica, ofereço soluções personalizadas para empresas que desejam investir no crescimento das pessoas e alcançar resultados sustentáveis.
            </p>

            <h3>Palestras e Treinamentos Corporativos com Aplicação Prática</h3>
            <p>
              Mais do que transmitir conteúdo, minhas palestras corporativas proporcionam experiências que geram reflexão, aprendizado e transformação comportamental. Cada encontro é planejado de acordo com os desafios da organização, tornando o conteúdo aplicável ao dia a dia das equipes e alinhado aos objetivos estratégicos da empresa.
            </p>
            <p>Os treinamentos são dinâmicos, participativos e desenvolvidos para:</p>
            <ul className={styles.listItems}>
              <li>fortalecer equipes de alta performance;</li>
              <li>desenvolver lideranças mais humanizadas;</li>
              <li>melhorar a comunicação entre colaboradores;</li>
              <li>aumentar o engajamento das equipes;</li>
              <li>desenvolver inteligência emocional;</li>
              <li>reduzir conflitos internos;</li>
              <li>fortalecer a cultura organizacional;</li>
              <li>promover saúde mental no trabalho;</li>
              <li>estimular comportamentos alinhados aos valores da empresa.</li>
            </ul>

            <h3>Desenvolvimento Humano para Empresas</h3>
            <p>
              Empresas que investem no desenvolvimento humano fortalecem a cultura organizacional, reduzem o absenteísmo, aumentam o comprometimento das equipes e desenvolvem líderes preparados para enfrentar os desafios atuais do mercado.
            </p>
            <p>
              Cada projeto é construído considerando: cultura organizacional, objetivos estratégicos, perfil das equipes, desafios da liderança, clima organizacional, desenvolvimento comportamental, saúde mental nas empresas, exigências relacionadas aos riscos psicossociais e à NR-1.
            </p>

            <h3>Temas de Palestras Corporativas e Treinamentos</h3>
            <ul className={styles.listItems}>
              <li><strong>Saúde Mental nas Empresas:</strong> Promova uma cultura organizacional que valoriza o bem-estar, a prevenção do adoecimento emocional, a redução do estresse ocupacional, a prevenção do burnout e o fortalecimento das relações de trabalho.</li>
              <li><strong>Saúde Mental e NR-1 | Riscos Psicossociais:</strong> Treinamentos voltados à identificação dos riscos psicossociais, fortalecimento das práticas preventivas e desenvolvimento de ambientes emocionalmente seguros.</li>
              <li><strong>Liderança Humanizada & Inteligência Emocional:</strong> Desenvolvimento de líderes capazes de inspirar pessoas e gerar resultados sustentáveis por meio da inteligência emocional, da comunicação assertiva e da gestão humanizada.</li>
              <li><strong>Comunicação Assertiva e Trabalho em Equipe:</strong> Treinamentos focados em escuta ativa, feedback, gestão de conflitos, cooperação, integração entre áreas e desenvolvimento de equipes de alta performance.</li>
            </ul>

            <h3>Formatos de Atendimento</h3>
            <ul className={styles.listItems}>
              <li><strong>Palestras Corporativas:</strong> Apresentações inspiradoras para SIPAT, encontros corporativos, campanhas de saúde (Duração: 1h a 1h30).</li>
              <li><strong>Workshops e Treinamentos Corporativos:</strong> Encontros práticos com metodologias participativas (Duração: 3 a 8 horas).</li>
              <li><strong>Rodas de Conversa e Facilitação:</strong> Espaços seguros para diálogo sobre saúde mental, clima organizacional (Duração: 1h30 a 2 horas).</li>
            </ul>

            <div className={styles.ctaContainer} style={{ borderTop: 'none', marginTop: '3rem' }}>
              <h3>Vamos conversar sobre a sua empresa?</h3>
              <p>
                Entre em contato para desenharmos uma palestra ou treinamento sob medida para as necessidades do seu time e da sua organização.
              </p>
              <a href={urlWhatsApp} target="_blank" rel="noreferrer" className="btn-primary">
                Falar com a palestrante
              </a>
            </div>

            {/* Seção de Depoimentos Corporativos em Fotos */}
            <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
              O que as empresas e parceiros dizem
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
                    alt={`Depoimento empresarial ${currentFotoIndex + 1}`}
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
                  className={`${styles.dot} ${idx === currentFotoIndex ? styles.active : ''}`}
                  onClick={() => setCurrentFotoIndex(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* SANFONA INTERATIVA FAQ (IGUAL À PÁGINA INICIAL) */}
            <div className={styles.faqSection}>
              <h3>Perguntas Frequentes (FAQ)</h3>
              
              <div className={styles.accordion}>
                {faqEmpresas.map((item, index) => (
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

export default DesenvolvimentoEmpresas;
