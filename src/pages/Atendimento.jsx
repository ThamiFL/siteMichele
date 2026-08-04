import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { informacoes } from '../data/informacoes';
import styles from './PageTemplate.module.scss';

const Atendimento = () => {
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent("Olá, gostaria de agendar um Atendimento Psicológico Online.")}`;

  return (
    <>
      <Helmet>
        <title>Atendimento Psicológico Online | Michele Gonçalves</title>
        <meta name="description" content="Atendimento psicológico online para mulheres: espaço de escuta para fortalecer sua identidade e construir uma vida coerente com seus desejos." />
      </Helmet>

      <section className={styles.pageSection}>
        <div className="container">
          <motion.h1 
            className={styles.pageTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Atendimento Psicológico Online para Mulheres
          </motion.h1>

          <motion.div 
            className={styles.pageContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Ofereço espaço seguro de escuta, acolhimento e reflexão para mulheres que querem compreender sua história, fortalecer sua identidade e construir uma vida e uma carreira coerentes com seus desejos. A terapia online ajuda mulheres que enfrentam ansiedade, sobrecarga emocional, dificuldades nos relacionamentos, desafios profissionais e conflitos relacionados à autoestima e ao posicionamento.
            </p>
            <p>
              A rotina da mulher contemporânea é marcada por múltiplas responsabilidades como carreira, a maternidade, os relacionamentos e os cuidados com a família, muitas mulheres convivem com ansiedade, autocobrança, culpa e sobrecarga emocional. A terapia oferece um espaço para compreender esses conflitos e fortalecer a saúde mental.
            </p>
            <p>
              Minha prática clínica é fundamentada na Psicologia e na Psicanálise, oferecendo atendimento psicológico online para mulheres que desejam compreender os significados de seus conflitos emocionais, sua história, suas relações e como suas experiências influenciam suas escolhas, seus afetos e sua forma de estar no mundo.
            </p>
            <p>
              Meu trabalho é voltado para mulheres que desejam refletir sobre sua trajetória, fortalecer seu posicionamento, compreender seus conflitos e construir caminhos mais coerentes com quem são, sem respostas prontas ou fórmulas de sucesso.
            </p>
            <p>
              A clínica é um espaço de elaboração, onde cada história é acolhida em sua singularidade, considerando também os atravessamentos sociais, culturais e de gênero que fazem parte da experiência feminina. Porque compreender a si mesma é também compreender o lugar que ocupamos nas relações, na família, no trabalho e na sociedade.
            </p>

            <h3>Para Quem é Indicado</h3>
            <p>O Atendimento psicológico online é indicado para mulheres que desejam:</p>
            <ul className={styles.listItems}>
              <li>compreender padrões que se repetem em suas relações;</li>
              <li>lidar com a sobrecarga emocional e a autocobrança;</li>
              <li>refletir sobre carreira, identidade e projetos de vida;</li>
              <li>enfrentar momentos de transição pessoal ou profissional;</li>
              <li>fortalecer seu posicionamento nas relações afetivas e no trabalho;</li>
              <li>encontrar um espaço de escuta para falar de si, para além dos papéis que desempenham.</li>
            </ul>

            <h3>Como a Terapia Pode Ajudar</h3>
            <ul className={styles.listItems}>
              <li><strong>Elaboração de culpas e expectativas:</strong> Entender o que é seu e o que foi imposto sobre a maternidade e a feminilidade.</li>
              <li><strong>Construção de limites e posicionamento:</strong> Aprender a ocupar espaços e expressar seus desejos sem culpa ou medo do julgamento.</li>
              <li><strong>Acolhimento da exaustão:</strong> Ter um refúgio para desacelerar e processar a sobrecarga da carreira e da rotina.</li>
              <li><strong>Reconexão com a sua identidade:</strong> Resgatar quem você é para além dos papéis de mãe, profissional, parceira ou filha.</li>
            </ul>

            <h3>Benefícios do Atendimento Psicológico Online</h3>
            <ul className={styles.listItems}>
              <li>Fortalecimento da autoestima feminina</li>
              <li>Desenvolvimento do autoconhecimento</li>
              <li>Redução dos sintomas de ansiedade</li>
              <li>Construção de limites saudáveis</li>
              <li>Desenvolvimento do posicionamento profissional</li>
              <li>Relações mais conscientes</li>
              <li>Compreensão da própria história</li>
            </ul>

            <h3>Minha Abordagem Clínica</h3>
            <p>
              Através de sessões online para todo o Brasil, ofereço uma escuta ética, singular e atenta à história de cada mulher, embasada nos princípios da Psicologia e da Psicanálise.
            </p>
            <p>
              A experiência clínica também é atravessada por uma compreensão das questões que permeiam a vida das mulheres na contemporaneidade como desigualdades, exigências sociais, sobrecarga de cuidados, maternidade, carreira e construção da identidade, reconhecendo que essas dimensões influenciam o sofrimento psíquico feminino.
            </p>

            <div className={styles.ctaContainer} style={{ borderTop: 'none', marginTop: '3rem' }}>
              <h3>Agende seu Atendimento Psicológico Online</h3>
              <p>
                Se você busca uma psicóloga para mulheres que acolha sua história com ética, escuta e profundidade, será um prazer acompanhar seu processo terapêutico.
              </p>
              <a href={urlWhatsApp} target="_blank" rel="noreferrer" className="btn-primary">
                Agendar Atendimento
              </a>
            </div>

            <div className={styles.faqSection}>
              <h3>Perguntas frequentes (FAQ)</h3>
              
              <div className={styles.faqItem}>
                <h4>Como funciona o atendimento psicológico online?</h4>
                <p>
                  As sessões ocorrem semanalmente com horário pré-agendado por videochamada através do Google Meeting, para o atendimento, você precisa de uma conexão estável de internet, um dispositivo com câmera e microfone (celular ou computador) e um local privativo, onde se sinta confortável e à vontade para falar livremente.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Como funciona a abordagem psicanalítica?</h4>
                <p>
                  A Psicanálise é uma abordagem que oferece espaço seguro de escuta, acolhimento e reflexão para mulheres que desejam compreender sua história... Diferente de abordagens focadas apenas no alívio imediato dos sintomas, a Psicanálise busca compreender as causas profundas do sofrimento psíquico e os padrões inconscientes que influenciam escolhas, emoções e formas de se relacionar. A partir dessa compreensão, torna-se possível construir novos caminhos, fortalecer a identidade, ampliar o autoconhecimento e desenvolver formas mais conscientes de lidar com os conflitos da vida.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>A terapia online é eficaz e sigilosa?</h4>
                <p>
                  Sim, absolutamente. A eficácia da terapia online é reconhecida pelo Conselho Federal de Psicologia (CFP) e respaldada por diversos estudos científicos. O vínculo terapêutico e a profundidade do trabalho se mantêm idênticos ao formato presencial. Quanto ao sigilo, ele é ético e inegociável. Todas as sessões são protegidas pelo Código de Ética Profissional e realizadas em ambiente criptografado.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Os atendimentos são por plano de saúde?</h4>
                <p>
                  Não, os atendimentos são realizados exclusivamente na modalidade particular, todas as sessões acompanham a emissão de Nota Fiscal, que você pode utilizar para a dedução do Imposto de Renda ou solicitar o reembolso junto ao seu convênio, caso o seu plano ofereça essa opção.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Atendimento;
