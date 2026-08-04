import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { informacoes } from '../data/informacoes';
import styles from './PageTemplate.module.scss';

// IMPORT AS IMAGENS DOS DEPOIMENTOS AQUI, QUANDO COLOCAR NA PASTA ASSETS
// import dep1 from '../assets/depoimento1.png';
// import dep2 from '../assets/depoimento2.png';
// import dep3 from '../assets/depoimento3.png';
// import dep4 from '../assets/depoimento4.png';

const Mentoria = () => {
  const urlWhatsApp = `https://wa.me/${informacoes.whatsapp}?text=${encodeURIComponent("Olá, gostaria de agendar uma conversa inicial sobre a Mentoria de Carreira.")}`;

  return (
    <>
      <Helmet>
        <title>Mentoria de Carreira para Mulheres | Michele Gonçalves</title>
        <meta name="description" content="Mentoria de Carreira para Mulheres: Crescimento Profissional com Clareza, Posicionamento e Confiança." />
      </Helmet>

      <section className={styles.pageSection}>
        <div className="container">
          <motion.h1 
            className={styles.pageTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Mentoria de Carreira para Mulheres
          </motion.h1>
          <h2 style={{ textAlign: 'center', color: '#6A7B76', fontSize: '1.5rem', marginBottom: '3rem' }}>
            Crescimento Profissional com Clareza, Posicionamento e Confiança
          </h2>

          <motion.div 
            className={styles.pageContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Você sente que chegou o momento de crescer profissionalmente, conquistar uma promoção, assumir uma posição de liderança ou realizar uma transição de carreira, a mentoria de carreira pode oferecer a direção estratégica que você procura.
            </p>
            
            <p>
              Minha mentoria de carreira para mulheres integra mais de 15 anos de experiência em Psicologia Organizacional, Gestão de Pessoas, Desenvolvimento de Lideranças, Psicologia Clínica e Psicanálise. Essa combinação permite compreender que uma carreira de sucesso não depende apenas de competências técnicas, mas também de autoconhecimento, comunicação, posicionamento profissional, inteligência emocional e da forma como cada mulher constrói sua identidade no trabalho.
            </p>

            <p>
              Ao longo da carreira, muitas mulheres acumulam experiências, qualificações e resultados expressivos, mas ainda enfrentam insegurança para assumir novos desafios, dificuldade para comunicar seu valor, medo de liderar ou a sensação de estarem estagnadas profissionalmente. Esses desafios costumam estar relacionados não apenas ao mercado de trabalho, mas também às crenças, experiências e padrões que influenciam suas escolhas profissionais.
            </p>

            <p>
              A mentoria de carreira é um processo personalizado que une estratégia, desenvolvimento profissional e reflexão para ajudar mulheres a construírem uma trajetória alinhada à sua história, aos seus objetivos e ao momento de vida que estão vivendo.
            </p>

            <p>
              Mais do que planejar os próximos passos, o processo fortalece sua capacidade de tomar decisões, ampliar sua confiança, desenvolver liderança, comunicar-se com segurança e ocupar espaços profissionais de forma autêntica e consistente.
            </p>

            <div className={styles.photoPlaceholder} style={{ margin: '3rem 0' }}>
              <span>Insira uma FOTO sua aqui (Mentoria)</span>
            </div>

            <h3>Para quem é a Mentoria de Carreira?</h3>
            <p>Esta mentoria é indicada para mulheres que desejam:</p>
            <ul className={styles.listItems}>
              <li>crescer profissionalmente com mais segurança e confiança;</li>
              <li>realizar uma transição de carreira;</li>
              <li>conquistar promoções ou assumir cargos de liderança;</li>
              <li>fortalecer o posicionamento profissional;</li>
              <li>desenvolver comunicação assertiva no ambiente de trabalho;</li>
              <li>superar a síndrome da impostora e reconhecer seu próprio valor;</li>
              <li>desenvolver competências comportamentais e liderança;</li>
              <li>construir uma carreira alinhada aos seus valores, propósito e objetivos;</li>
              <li>contar com uma mentora de carreira que una estratégia, Psicologia e experiência em Gestão de Pessoas.</li>
            </ul>

            <h3>Como funciona a Mentoria de Carreira?</h3>
            <p>
              Cada processo é individual e personalizado, respeitando a história, os objetivos e os desafios profissionais de cada mulher.
            </p>
            <p>Durante a mentoria, trabalhamos aspectos essenciais para o crescimento profissional, como:</p>
            <ul className={styles.listItems}>
              <li>definição de objetivos e planejamento estratégico de carreira;</li>
              <li>desenvolvimento de liderança e competências comportamentais;</li>
              <li>fortalecimento da comunicação assertiva e do posicionamento profissional;</li>
              <li>construção da autoconfiança para novos desafios;</li>
              <li>desenvolvimento da inteligência emocional no trabalho;</li>
              <li>preparação para promoções, mudanças de cargo ou transição de carreira;</li>
              <li>tomada de decisão com mais segurança e clareza.</li>
            </ul>
            <p>
              Meu papel não é oferecer respostas prontas, mas conduzir um processo de reflexão estratégica que permita identificar potencialidades, superar bloqueios e construir uma trajetória profissional coerente com quem você é.
            </p>

            <h3>O que você conquista com a Mentoria de Carreira?</h3>
            <p>Ao final do processo, você estará mais preparada para:</p>
            <ul className={styles.listItems}>
              <li>posicionar-se com segurança e confiança em diferentes contextos profissionais;</li>
              <li>comunicar seu valor com clareza e autenticidade;</li>
              <li>desenvolver uma postura de liderança, mesmo sem ocupar um cargo formal;</li>
              <li>tomar decisões profissionais com mais consciência;</li>
              <li>ampliar sua visibilidade e reconhecimento no ambiente de trabalho;</li>
              <li>construir um plano de desenvolvimento profissional alinhado aos seus objetivos;</li>
              <li>assumir o protagonismo da própria carreira.</li>
            </ul>
            <p>
              Mais do que alcançar uma promoção ou uma mudança de cargo, o objetivo é que você desenvolva recursos internos para construir uma carreira sustentável, coerente com sua identidade e capaz de acompanhar as diferentes fases da sua vida.
            </p>

            <h3>Por que escolher minha mentoria?</h3>
            <p>
              Meu trabalho diferencia-se por integrar conhecimentos da Psicologia, Psicanálise e Gestão de Pessoas, oferecendo uma abordagem que considera tanto as exigências do mercado quanto os aspectos emocionais envolvidos no desenvolvimento da carreira.
            </p>
            <p>
              Ao longo de mais de 15 anos de atuação em Psicologia Organizacional, desenvolvimento de lideranças e acompanhamento clínico, compreendi que o crescimento profissional acontece quando estratégia, comportamento e autoconhecimento caminham juntos.
            </p>

            <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>O que dizem as mentoradas</h3>
            <div className={styles.testimonialsGrid}>
              <div className={styles.photoPlaceholder} style={{ height: 'auto', padding: '2rem' }}>
                Falta Imagem:<br/>Depoimento 1
              </div>
              <div className={styles.photoPlaceholder} style={{ height: 'auto', padding: '2rem' }}>
                Falta Imagem:<br/>Depoimento 2
              </div>
              <div className={styles.photoPlaceholder} style={{ height: 'auto', padding: '2rem' }}>
                Falta Imagem:<br/>Depoimento 3
              </div>
              <div className={styles.photoPlaceholder} style={{ height: 'auto', padding: '2rem' }}>
                Falta Imagem:<br/>Depoimento 4
              </div>
            </div>

            <p style={{ marginTop: '2rem' }}>
              Se você procura uma mentora de carreira para mulheres que ofereça um acompanhamento próximo, personalizado e baseado em evidências da Psicologia, este pode ser o próximo passo da sua trajetória.
            </p>

            <div className={styles.ctaContainer} style={{ borderTop: 'none', marginTop: '1rem' }}>
              <h3>Pronta para crescer profissionalmente?</h3>
              <p>
                Se você deseja desenvolver sua carreira com mais clareza, confiança e estratégia, agende uma conversa inicial e descubra como a mentoria de carreira pode ajudá-la a conquistar novos resultados profissionais.
              </p>
              <a href={urlWhatsApp} target="_blank" rel="noreferrer" className="btn-primary">
                Agende sua conversa pelo WhatsApp
              </a>
            </div>

            <div className={styles.faqSection}>
              <h3>Perguntas Frequentes sobre Mentoria de Carreira</h3>
              
              <div className={styles.faqItem}>
                <h4>1. Como saber se preciso de uma mentoria de carreira?</h4>
                <p>
                  Você não precisa esperar estar insatisfeita com o trabalho para buscar uma mentoria de carreira. Muitas mulheres procuram esse acompanhamento quando desejam crescer profissionalmente, assumir uma posição de liderança, mudar de área ou desenvolver mais segurança para tomar decisões importantes.
                </p>
                <p>
                  Também é comum sentir que possui competência e experiência, mas ainda enfrentar dificuldades para comunicar seu valor, conquistar reconhecimento ou dar o próximo passo na carreira. A mentoria oferece um espaço estratégico de reflexão e planejamento para que você desenvolva clareza, fortaleça seu posicionamento profissional e construa uma trajetória alinhada aos seus objetivos e à sua identidade.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>2. Qual a diferença entre mentoria de carreira e terapia?</h4>
                <p>
                  Embora ambas contribuam para o desenvolvimento pessoal e profissional, elas possuem objetivos diferentes.
                </p>
                <p>
                  A terapia é um processo clínico voltado para compreender aspectos emocionais, conflitos, sofrimentos psíquicos e padrões que influenciam a forma como você vive e se relaciona.
                </p>
                <p>
                  Já a mentoria de carreira tem foco no desenvolvimento profissional. Trabalhamos objetivos concretos relacionados ao crescimento na carreira, comunicação, liderança, posicionamento, tomada de decisões, planejamento e desenvolvimento de competências comportamentais.
                </p>
                <p>
                  Como psicóloga, minha experiência permite compreender que emoções e carreira caminham juntas. Por isso, a mentoria considera os fatores humanos que impactam sua trajetória profissional, sem perder o foco estratégico do desenvolvimento da carreira.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>3. O que posso esperar ao final da mentoria?</h4>
                <p>
                  Ao longo da mentoria, o objetivo não é apenas ajudar você a conquistar uma promoção ou mudar de emprego, mas desenvolver recursos que continuarão fazendo diferença em toda a sua trajetória profissional.
                </p>
                <p>
                  Ao final do processo, você estará mais preparada para tomar decisões com segurança, comunicar seu valor com confiança, fortalecer sua liderança, posicionar-se de forma mais estratégica e construir um plano de desenvolvimento coerente com seus objetivos.
                </p>
                <p>
                  Mais do que encontrar respostas prontas, você desenvolverá autonomia para conduzir sua carreira com clareza, autenticidade e confiança, independentemente dos desafios que surgirem ao longo do caminho.
                </p>
              </div>
            </div>

            <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>Conheça meu trabalho</h3>
            <div className={styles.videoContainer}>
              <iframe 
                src="https://www.youtube.com/embed/ScMzIvxBSi4?si=0T3rK8rYg7Q0oKqT" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Mentoria;
