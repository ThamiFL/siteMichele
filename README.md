# Michele Gonçalves — Psicologia & Carreira 🌿

Website institucional e plataforma profissional de **Michele Gonçalves** — Psicóloga, Psicanalista e Especialista em Desenvolvimento Humano, Carreira e Saúde Mental.

O projeto foi desenvolvido com uma arquitetura moderna, design minimalista e totalmente responsivo, oferecendo uma experiência fluida tanto em computadores quanto em dispositivos móveis.

---

## 📦 Estrutura de Páginas e Serviços

O site é organizado em páginas dedicadas para cada frente de atuação profissional:

- **`/` (Início / Home)** — Apresentação geral, destaques dos pilares, resumo profissional e depoimentos.
- **`/sobre` (Sobre Mim)** — Biografia completa, abordagem clínica e trajetória acadêmica/profissional.
- **`/atendimento` (Atendimento Psicológico Online)** — Informações sobre psicoterapia online para mulheres.
- **`/supervisao` (Supervisão Clínica)** — Orientação e mentoria clínica psicanalítica para psicólogas.
- **`/mentoria` (Mentoria • Palestras • Workshops)** — Programas de carreira, eventos e galeria interativa.
- **`/desenvolvimento-empresarial` (Empresas)** — Soluções corporativas, saúde mental nas organizações e treinamentos.
- **`/contato` (Contato)** — Canais diretos de comunicação e agendamento via WhatsApp e e-mail.

---

## ✨ Principais Recursos

1. **Design System Personalizado**:
   - Paleta de cores exclusiva com tons de Azul Marinho (`#172439`), Verde Sábia (`#8ea993`), Creme e Vinho Accent.
   - Componentes responsivos com cartões interativos, sombras suaves e bordas delicadas.

2. **Integração Inteligente com WhatsApp**:
   - Botões de chamada para ação (CTA) com mensagens personalizadas automaticamente de acordo com o serviço visualizado.

3. **Galeria de Eventos Interativa (Lightbox)**:
   - Grade de fotos compacta em 2 colunas para celulares, com modal de visualização em tela cheia ao clicar.

4. **Carrossel de Depoimentos Segmentados**:
   - Exibição de depoimentos em formato de imagens específicas para cada segmento (Mentoria, Supervisão e Empresas).

---

## 📁 Estrutura de Arquivos

```text
psico-carreira-site/
├── public/                # Favicon e ativos estáticos públicos
├── src/
│   ├── assets/            # Imagens da marca, fotos de depoimentos e ilustrações
│   ├── components/        # Componentes reutilizáveis de interface
│   │   ├── Beneficios/    # Seção de benefícios
│   │   ├── Clientes/      # Logotipos de parceiros e clientes
│   │   ├── Contato/       # Formulário e informações de contato
│   │   ├── FAQ/           # Seção de perguntas frequentes
│   │   ├── Footer/        # Rodapé institucional
│   │   ├── Galeria/       # Galeria de fotos com lightbox
│   │   ├── Header/        # Cabeçalho e navegação principal
│   │   ├── Hero/          # Seção principal de capa da Home
│   │   ├── Servicos/      # Cards de apresentação de serviços
│   │   └── Sobre/         # Seção institucional de apresentação
│   ├── data/              # Arquivos de dados (informações de contato, mensagens)
│   ├── pages/             # Páginas da aplicação (Atendimento, Supervisão, Mentoria, etc.)
│   └── styles/            # Variáveis globais SCSS, mixins e resets
├── index.html             # HTML base
├── package.json           # Dependências e scripts do projeto
├── vite.config.js         # Configurações do Vite
└── README.md              # Documentação do projeto
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na versão 18 ou superior.

### 1. Clonar o repositório ou abrir o diretório do projeto

```bash
cd psico-carreira-site
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará acessível em `http://localhost:5173`.

### 4. Gerar o build de produção

```bash
npm run build
```

Os arquivos otimizados para produção serão gerados na pasta `dist/`.

### 5. Testar a versão de produção localmente

```bash
npm run preview
```

### 6. Executar verificação de código (Linting)

```bash
npm run lint
```

---

## 📄 Licença

Este projeto é de propriedade exclusiva de **Michele Gonçalves — Psicologia & Carreira**. Todos os direitos reservados.
