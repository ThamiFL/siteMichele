import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { informacoes } from '../../data/informacoes';
import styles from './Sobre.module.scss';

const Sobre = ({ isResumo = false }) => {
  return (
    <section className={styles.sobreSection} id="sobre">
      <div className={`container ${styles.sobreContainer}`}>
        
        {/* LADO ESQUERDO: FOTO */}
        <motion.div 
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            {/* Se você já tem sua foto, troque a URL abaixo por: src={perfil} e importe ela lá no topo */}
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Michele Gonçalves" />
            <div className={styles.experienceBadge}>
              <span>+15</span>
              <p>Anos de<br/>Experiência</p>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO: TEXTO INICIAL */}
        <motion.div 
          className={styles.textColumn}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Sobre <span>Michele Gonçalves</span></h2>
          <h3 className={styles.subtitle}>PSICÓLOGA | PSICANALISTA | ESPECIALISTA EM DESENVOLVIMENTO HUMANO, CARREIRA E SAÚDE MENTAL</h3>
          
          <div className={styles.quoteBox}>
            "Acredito que compreender a própria história é o primeiro passo para construir uma vida mais consciente, relações mais saudáveis e uma carreira alinhada aos próprios valores."
          </div>

          <div className={styles.content}>
            <p>
              Sou Michele Gonçalves, Psicóloga, Psicanalista e especialista em Desenvolvimento Humano, com mais de 15 anos de experiência atuando no desenvolvimento de pessoas, lideranças e organizações. Minha prática integra Psicologia Clínica, Psicanálise, Psicologia Organizacional e Gestão Estratégica de Pessoas, oferecendo soluções fundamentadas cientificamente para mulheres, psicólogas e empresas.
            </p>
            <p>
              Ao longo da minha trajetória, acompanhei centenas de pessoas em processos de autoconhecimento, desenvolvimento profissional, transição de carreira, fortalecimento emocional e construção de novos projetos de vida. Também desenvolvi programas voltados ao desenvolvimento de lideranças, saúde mental nas empresas, fortalecimento de equipes e desenvolvimento organizacional.
            </p>
          </div>
          
          {isResumo && (
            <Link to="/sobre" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
              Leia o meu perfil completo
            </Link>
          )}
        </motion.div>
      </div>

      {/* NOVO BLOCO FULL WIDTH PARA O RESTANTE DO CONTEÚDO (SÓ APARECE SE NÃO FOR RESUMO) */}
      {!isResumo && (
        <div className={`container ${styles.fullWidthContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Hoje concentro minha atuação em quatro áreas complementares:</h3>
            <ul className={styles.bulletList}>
              <li>Atendimento Psicológico Online para Mulheres, fundamentado na Psicanálise;</li>
              <li>Mentoria de Carreira e Desenvolvimento Profissional para Mulheres;</li>
              <li>Supervisão Clínica e Mentoria para Psicólogas, unindo teoria, prática clínica e ética profissional;</li>
              <li>Consultoria, Treinamentos e Palestras Corporativas, voltadas para saúde mental, desenvolvimento de lideranças e fortalecimento da cultura organizacional.</li>
            </ul>
            <p>
              Essa integração entre clínica e organizações permite compreender o sujeito em toda a sua complexidade, considerando sua história, relações, trabalho, desejos e desafios contemporâneos.
            </p>

            <h3>Uma trajetória construída entre pessoas, organizações e desenvolvimento humano</h3>
            <p>
              Minha experiência profissional teve início em 2007, na área de Recursos Humanos, atuando em empresas de médio e grande porte e em consultorias especializadas.
            </p>
            <p>Ao longo dessa trajetória participei de projetos relacionados a:</p>
            
            <div className={styles.gridList}>
              <ul className={styles.bulletList}>
                <li>Gestão Estratégica de Pessoas;</li>
                <li>Desenvolvimento Organizacional;</li>
                <li>Recrutamento e Seleção;</li>
                <li>Desenvolvimento de Competências;</li>
                <li>Treinamento e Desenvolvimento;</li>
              </ul>
              <ul className={styles.bulletList}>
                <li>Avaliação de Desempenho;</li>
                <li>Desenvolvimento de Lideranças;</li>
                <li>Gestão de Conflitos;</li>
                <li>Saúde Mental no Trabalho;</li>
                <li>Programas de Desenvolvimento Humano.</li>
              </ul>
            </div>

            <p>Atuei em organizações dos segmentos de:</p>
            <ul className={styles.bulletList}>
              <li>Engenharia; Facilities; Telecomunicações; Construção Civil; Varejo; Saúde Hospitalar; Consultoria em Recursos Humanos.</li>
            </ul>

            <p>
              Essa vivência me permitiu compreender profundamente os impactos que o trabalho exerce sobre a saúde mental, a identidade, os relacionamentos e a qualidade de vida das pessoas. Foi justamente dessa experiência que nasceu uma prática profissional que integra o olhar clínico ao desenvolvimento humano.
            </p>

            <h3>Psicologia & Carreira: uma atuação que integra ciência, escuta e estratégia</h3>
            <p>
              Em 2017, fundei a Psicologia & Carreira, um projeto criado para integrar minha experiência em Psicologia Organizacional, Desenvolvimento Humano e Psicanálise. O propósito sempre foi oferecer processos de desenvolvimento que fossem além da orientação profissional tradicional.
            </p>
            <p>Toda minha atuação é construída sobre três pilares fundamentais:</p>
            
            <div className={styles.gridList} style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div className={styles.pillarCard}>
                <h4>Autoconhecimento</h4>
                <p>Compreender a própria história, reconhecer padrões emocionais, fortalecer a identidade e ampliar a consciência sobre desejos, potencialidades e desafios.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Planejamento</h4>
                <p>Transformar objetivos em estratégias possíveis, respeitando o momento de vida, os recursos disponíveis e a singularidade de cada pessoa.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Estratégia</h4>
                <p>Construir decisões conscientes que favoreçam desenvolvimento pessoal, crescimento profissional, fortalecimento da liderança e qualidade nas relações.</p>
              </div>
            </div>
            <p>
              Esses pilares orientam tanto os atendimentos clínicos quanto as mentorias, supervisões e projetos desenvolvidos nas organizações.
            </p>

            <h3>Minha atuação</h3>
            <p>Meu trabalho reúne diferentes frentes de atuação, todas fundamentadas na Psicologia e na Psicanálise.</p>
            
            <h4>Atendimento Psicológico Online para Mulheres</h4>
            <p>Processos terapêuticos voltados para mulheres que desejam compreender sua história, fortalecer sua saúde emocional, desenvolver autoestima, enfrentar ansiedade, conflitos relacionais, questões de carreira e construir uma vida mais coerente com seus valores.</p>

            <h4>Mentoria de Carreira para Mulheres</h4>
            <p>Desenvolvimento profissional para mulheres que desejam reposicionamento de carreira, fortalecimento da liderança, tomada de decisão, desenvolvimento de competências e crescimento profissional.</p>

            <h4>Supervisão Clínica para Psicólogas</h4>
            <p>Acompanhamento destinado a psicólogas recém-formadas ou profissionais que desejam aprofundar sua prática clínica, integrar teoria e prática e fortalecer uma atuação ética e segura.</p>

            <h4>Desenvolvimento Humano para Empresas</h4>
            <p>Consultoria em Psicologia Organizacional, desenvolvimento de lideranças, programas de saúde mental, treinamentos corporativos, palestras, mediação de conflitos e fortalecimento da cultura organizacional.</p>

            <h3>Minha missão</h3>
            <p>Promover o desenvolvimento humano por meio da Psicologia e da Psicanálise, criando espaços de escuta, reflexão e aprendizagem que favoreçam escolhas mais conscientes, relações mais saudáveis e trajetórias pessoais, profissionais e organizacionais mais consistentes.</p>
            <p>Meu compromisso é contribuir para que mulheres, psicólogas, líderes e organizações desenvolvam competências emocionais, fortaleçam sua saúde mental e construam relações mais éticas, humanas e sustentáveis.</p>

            <h3>Valores</h3>
            <p>Minha atuação é sustentada por princípios que orientam cada atendimento, supervisão, mentoria, consultoria e projeto desenvolvido.</p>
            <div className={styles.gridList}>
              <ul className={styles.bulletList}>
                <li>Ética profissional</li>
                <li>Respeito à singularidade</li>
                <li>Escuta qualificada</li>
                <li>Responsabilidade técnica</li>
                <li>Empatia</li>
              </ul>
              <ul className={styles.bulletList}>
                <li>Comprometimento</li>
                <li>Desenvolvimento contínuo</li>
                <li>Produção de conhecimento</li>
                <li>Contribuição para a saúde mental e o desenvolvimento humano</li>
              </ul>
            </div>

            <h3>Formação Acadêmica</h3>
            <p>Minha formação reúne conhecimentos em Psicologia Clínica, Psicanálise, Gestão Estratégica de Pessoas, Educação e Desenvolvimento Humano, permitindo integrar ciência, experiência prática e atuação interdisciplinar.</p>
            <ul className={styles.bulletList}>
              <li>Graduação em Psicologia — Faculdade Integrada Maria Thereza (FAMATH) – Niterói/RJ.</li>
              <li>MBA em Desenvolvimento Gerencial Avançado com ênfase em Gestão de Pessoas — Universidade Federal Fluminense (UFF).</li>
              <li>Psicopedagogia Institucional — Universidade Vez do Mestre.</li>
              <li>Pós-graduação em Fundamentos da Clínica Psicanalítica — Faculdade Integrada Maria Thereza (FAMATH).</li>
              <li>Docência do Ensino Superior — Faculdade de Minas.</li>
              <li>Formação em Psicanálise — Corpo Freudiano RJ.</li>
            </ul>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Sobre;
