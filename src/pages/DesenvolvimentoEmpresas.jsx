import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { informacoes } from '../data/informacoes';
import styles from './PageTemplate.module.scss';

const DesenvolvimentoEmpresas = () => {
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent("Olá, gostaria de conversar sobre palestras e treinamentos para a minha empresa.")}`;

  return (
    <>
      <Helmet>
        <title>Desenvolvimento Humano para Empresas | Michele Gonçalves</title>
        <meta name="description" content="Palestras corporativas e treinamentos para empresas que desenvolvem pessoas, fortalecem lideranças e transformam resultados." />
      </Helmet>

      <section className={styles.pageSection}>
        <div className="container">
          <motion.h1 
            className={styles.pageTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Desenvolvimento Humano para Empresas
          </motion.h1>

          <motion.div 
            className={styles.pageContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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

            <div className={styles.faqSection}>
              <h3>Perguntas Frequentes</h3>
              
              <div className={styles.faqItem}>
                <h4>Como escolher uma palestrante para empresas que realmente gere resultados?</h4>
                <p>
                  A escolha de uma palestrante corporativa vai além de uma apresentação inspiradora. O mais importante é contratar uma profissional que compreenda o comportamento humano, a cultura organizacional e os desafios específicos da sua empresa. O objetivo é gerar mudanças que permaneçam após o evento.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Quais são os temas de palestras corporativas mais procurados?</h4>
                <p>
                  Os temas mais solicitados incluem: Saúde Mental nas Empresas, Saúde Mental e NR-1, Inteligência Emocional, Liderança Humanizada, Comunicação Assertiva, Gestão de Conflitos, Desenvolvimento de Competências Comportamentais, Trabalho em Equipe, Engajamento e Prevenção do Burnout.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>As palestras podem ser personalizadas para a realidade da empresa?</h4>
                <p>
                  Sim. Antes da realização do trabalho, é feita uma análise das necessidades da empresa para que o conteúdo esteja alinhado aos desafios das lideranças, das equipes e às demandas relacionadas à saúde mental no trabalho e NR-1.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DesenvolvimentoEmpresas;
