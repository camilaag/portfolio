(function () {

  var T = {
    pt: {
      /* ── Nav ── */
      'nav.about':        'Sobre',
      'nav.exp':          'Experiência',
      'nav.exp.levva':    'levva @ B3',
      'nav.exp.bot':      'Grupo Boticário',
      'nav.exp.ifood':    'iFood',
      'nav.exp.early':    'Engenharia & Pesquisa',
      'nav.testimonials': 'Depoimentos',
      'nav.edu':          'Formação',
      'nav.faq':          'FAQ',
      'nav.contact':      'Contato',

      /* ── Hero ── */
      'hero.tagline': 'Construo produtos digitais escaláveis unindo <strong>visão de negócio</strong> e <strong>base técnica</strong>. Guiada por dados, autonomia e muito trabalho em equipe.',
      'hero.intent':  'Sempre aberta a boas conversas.',
      'hero.stat.years':   'Anos como PM',
      'hero.stat.users':   'Usuários impactados',
      'hero.stat.current': 'Atual',
      'hero.cta.exp':      'Ver experiências',

      /* ── About ── */
      'about.label': 'Descrição',
      'about.title': 'Sobre mim',
      'about.p1': 'Comecei a carreira como engenheira de software. A transição para produto foi intencional: sempre fui muito curiosa, <strong>early bird de tecnologia e novos produtos</strong>, e alguém que gosta do desafio de entrar em setores novos do zero. A engenharia me dava o técnico, mas queria o todo. Quando descobri que PM era exatamente isso, não havia dúvida.',
      'about.p2': 'O que eu trago de diferente é <strong>empatia real com todas as áreas</strong>: engenharia, negócio, operações, stakeholders. Não finjo entender, ouço até entender de verdade. Nesses cinco anos passei por marketplaces com 350 mil usuários, varejo de beleza e mercado financeiro. E sou mão na massa: se não conheço algo, aprendo. No momento isso significa usar IA de verdade no meu próprio trabalho: em discoveries, na prototipação e na colaboração com design e dados. Só recomendo quando sei o que estou indicando.',
      'about.p3': 'Sou do Rio, casada com o Caio, e tenho dois cachorros: um salsicha e uma vira-lata. Fora do trabalho, provavelmente estou lendo um thriller, assistindo uma sitcom ou tomando café.',

      /* ── Experience ── */
      'exp.label':    'Trajetória',
      'exp.title':    'Experiências',
      'exp.subtitle': 'Clique em um card para ver mais detalhes.',
      'exp.cta':      'Ver detalhes',

      'exp.levva.role':   'Product Manager Senior',
      'exp.levva.period': 'Abril de 2026 – Presente',
      'exp.levva.hook':   'Estratégia de canais digitais no maior mercado financeiro da América Latina, em ambiente altamente regulado.',
      'exp.levva.hi1':    'PM consultora na B3 — Bolsa de Valores do Brasil',
      'exp.levva.hi2':    'Estratégia de Canais Digitais em ambiente altamente regulado',
      'exp.levva.hi3':    'Discovery e alinhamento com stakeholders de negócio, tech e ops',
      'exp.levva.tag1': 'Consultoria', 'exp.levva.tag2': 'Canais Digitais', 'exp.levva.tag3': 'Discovery', 'exp.levva.tag4': 'Ambiente Regulado', 'exp.levva.tag5': 'Stakeholders',

      'exp.bot.role':   'Product Manager Especialista',
      'exp.bot.period': 'Setembro de 2024 – Abril de 2026 · 1 ano 8 meses',
      'exp.bot.hook':   'Quando prever errado significa produto faltando na prateleira — discovery em ambiente de alto risco.',
      'exp.bot.hi1':    'Previsão de Sellout e Gestão de Demandas',
      'exp.bot.hi2':    'Novos Canais B2B — discovery e definição de MVP',
      'exp.bot.hi3':    'Mapeamento de jornadas e alinhamento técnico/operacional',
      'exp.bot.tag1': 'Indústria', 'exp.bot.tag2': 'Discovery', 'exp.bot.tag3': 'B2B', 'exp.bot.tag4': 'Previsão de Demanda', 'exp.bot.tag5': 'Alto Risco',

      'exp.ifood.period': 'Janeiro de 2020 – Maio de 2024 · 4 anos 5 meses',
      'exp.ifood.hook':   'De engenheira a PM Senior — 4 anos, 6 squads e 350 mil restaurantes.',
      'exp.ifood.hi1':    'CSAT do Portal de Parceiros: de 52 → 79 em 5 meses',
      'exp.ifood.hi2':    'Checkout e conversão do iFood Shop',
      'exp.ifood.hi3':    'Marketplace B2B para +350 mil restaurantes',
      'exp.ifood.tag1': 'Scale-up', 'exp.ifood.tag2': 'Marketplace', 'exp.ifood.tag3': 'B2B', 'exp.ifood.tag4': 'Conversão', 'exp.ifood.tag5': 'CSAT',

      'exp.early.role':   'Desenvolvedora · Pesquisadora',
      'exp.early.period': '2015 – 2020 · 5 anos',
      'exp.early.hook':   'Antes do produto, o código: como a engenharia moldou tudo que veio depois.',
      'exp.early.hi1':    '+250 mil estudantes impactados com o Trilha do Enem (Cogna)',
      'exp.early.hi2':    'Pesquisa em redes neurais para reconhecimento de imagens (CNPq)',
      'exp.early.tag1': 'Edtech', 'exp.early.tag2': 'Eng. de Software', 'exp.early.tag3': 'Pesquisa', 'exp.early.tag4': 'Dados',

      /* ── Testimonials ── */
      'testimonials.label': 'Depoimentos',
      'testimonials.title': 'Quem trabalhou junto',

      /* ── Education ── */
      'edu.label':    'Formação',
      'edu.title':    'Educação & Certificações',
      'edu.academic': 'Formação Acadêmica',
      'edu.certs':    'Certificações',
      'edu.deg1':     'Bacharelado em Engenharia Mecânica',
      'edu.deg2':     'Intercâmbio · Engenharia Mecânica · Itália',
      'edu.deg3':     'Técnico em Informática',

      /* ── FAQ ── */
      'faq.label': 'Dúvidas frequentes',
      'faq.q1': 'Você está aberta a novas oportunidades?',
      'faq.a1': 'Sempre aberta a boas conversas. Se você está construindo algo interessante e acha que posso contribuir, me chama. Adoro trocar ideias sobre produto, mesmo que o timing não seja o ideal.',
      'faq.tag1': 'Oportunidades',
      'faq.q2': 'Como você usa IA no seu trabalho?',
      'faq.a2': 'IA já faz parte do meu dia a dia. Uso para tarefas operacionais como user stories, PRDs e documentações com agentes automatizados; para acelerar discoveries com benchmarks e compilados de dados; e para prototipação, incluindo código. Esse portfólio e o deufit.com foram construídos com IA. Gosto de testar novas ferramentas e acompanho esse espaço de perto.',
      'faq.tag2': 'Ferramentas',
      'faq.q3': 'Você atua em setores específicos?',
      'faq.a3': 'Não. Já trabalhei em marketplace, fintech, B2B, varejo e mercado financeiro. Recebo frequentemente o feedback de que tenho curva de aprendizado rápida e consigo entrar em novos negócios com agilidade. O que me importa é o problema a resolver, não o setor.',
      'faq.tag3': 'Setor',
      'faq.q4': 'O que você busca em uma posição?',
      'faq.a4': 'Autonomia para fazer discovery de verdade — entender o problema antes de construir. Gosto de trabalhar próxima a design, dados e engenharia, com voz na estratégia, não só na entrega. Não me identifico com papéis de PO operacionais onde o espaço é só de gestão de backlog.',
      'faq.tag4': 'Fit',
      'faq.q5': 'Qual modelo de trabalho você prefere?',
      'faq.a5': 'Remoto ou híbrido. Estou baseada no Rio de Janeiro e prefiro oportunidades que funcionem nesse modelo.',
      'faq.tag5': 'Modelo',
      'faq.q6': 'Como faço para entrar em contato?',
      'faq.a6': 'Pelo <a href="https://www.linkedin.com/in/camila-a-gomes/" target="_blank" rel="noopener">LinkedIn</a> é o melhor caminho. Me manda uma mensagem contando um pouco sobre o contexto e o que você está construindo.',
      'faq.tag6': 'Contato',

      /* ── Footer ── */
      'footer.tagline': 'Senior Product Manager · Brasil',
    },

    en: {
      /* ── Nav ── */
      'nav.about':        'About',
      'nav.exp':          'Experience',
      'nav.exp.levva':    'levva @ B3',
      'nav.exp.bot':      'Grupo Boticário',
      'nav.exp.ifood':    'iFood',
      'nav.exp.early':    'Engineering & Research',
      'nav.testimonials': 'Testimonials',
      'nav.edu':          'Education',
      'nav.faq':          'FAQ',
      'nav.contact':      'Contact',

      /* ── Hero ── */
      'hero.tagline': 'I build scalable digital products that bridge <strong>business vision</strong> and <strong>technical depth</strong>. Driven by data, ownership, and teamwork.',
      'hero.intent':  'Don\'t be a stranger.',
      'hero.stat.years':   'Years as PM',
      'hero.stat.users':   'Users impacted',
      'hero.stat.current': 'Current',
      'hero.cta.exp':      'View experience',

      /* ── About ── */
      'about.label': 'About',
      'about.title': 'About me',
      'about.p1': 'I started my career as a software engineer. The move into product was intentional: I\'ve always been deeply curious, an <strong>early adopter of technology and new products</strong>, and someone who thrives on entering new domains from scratch. Engineering gave me the technical foundation, but I wanted the full picture. When I discovered PM was exactly that, there was no hesitation.',
      'about.p2': 'What I bring is <strong>genuine empathy across all areas</strong>: engineering, business, operations, and stakeholders. I don\'t pretend to understand — I listen until I actually do. Over five years I\'ve worked across a 350k-user marketplace, beauty retail, and financial markets. I\'m hands-on: if I don\'t know something, I learn it. Right now that means actually using AI in my own work — in discovery, prototyping, and collaboration with design and data. I only recommend what I\'ve tested myself.',
      'about.p3': 'I\'m from Rio de Janeiro, married to Caio, and we have two dogs — a dachshund and a mutt. Outside of work, I\'m probably reading a thriller, watching a sitcom, or drinking coffee.',

      /* ── Experience ── */
      'exp.label':    'Career',
      'exp.title':    'Experience',
      'exp.subtitle': 'Click on a card to see more details.',
      'exp.cta':      'See details',

      'exp.levva.role':   'Senior Product Manager',
      'exp.levva.period': 'April 2026 – Present',
      'exp.levva.hook':   'Digital channel strategy at Latin America\'s largest financial exchange, in a highly regulated environment.',
      'exp.levva.hi1':    'Consultant PM at B3 — Brazil\'s Stock Exchange',
      'exp.levva.hi2':    'Digital Channel Strategy in a highly regulated environment',
      'exp.levva.hi3':    'Discovery and alignment with business, tech, and ops stakeholders',
      'exp.levva.tag1': 'Consulting', 'exp.levva.tag2': 'Digital Channels', 'exp.levva.tag3': 'Discovery', 'exp.levva.tag4': 'Regulated Environment', 'exp.levva.tag5': 'Stakeholders',

      'exp.bot.role':   'Staff Product Manager',
      'exp.bot.period': 'September 2024 – April 2026 · 1 year 8 months',
      'exp.bot.hook':   'When a wrong forecast means empty shelves — discovery in a high-stakes environment.',
      'exp.bot.hi1':    'Sellout Forecasting and Demand Management',
      'exp.bot.hi2':    'New B2B Channels — discovery and MVP definition',
      'exp.bot.hi3':    'Journey mapping and technical/operational alignment',
      'exp.bot.tag1': 'Industry', 'exp.bot.tag2': 'Discovery', 'exp.bot.tag3': 'B2B', 'exp.bot.tag4': 'Demand Forecasting', 'exp.bot.tag5': 'High-Stakes',

      'exp.ifood.period': 'January 2020 – May 2024 · 4 years 5 months',
      'exp.ifood.hook':   'From engineer to Senior PM — 4 years, 6 squads, and 350k restaurants.',
      'exp.ifood.hi1':    'Partner Portal CSAT: from 52 → 79 in 5 months',
      'exp.ifood.hi2':    'iFood Shop checkout and conversion',
      'exp.ifood.hi3':    'B2B marketplace for +350k restaurants',
      'exp.ifood.tag1': 'Scale-up', 'exp.ifood.tag2': 'Marketplace', 'exp.ifood.tag3': 'B2B', 'exp.ifood.tag4': 'Conversion', 'exp.ifood.tag5': 'CSAT',

      'exp.early.role':   'Software Developer · Researcher',
      'exp.early.period': '2015 – 2020 · 5 years',
      'exp.early.hook':   'Before product, code: how engineering shaped everything that came after.',
      'exp.early.hi1':    '+250k students reached through Trilha do Enem (Cogna)',
      'exp.early.hi2':    'Neural network research for image recognition (CNPq)',
      'exp.early.tag1': 'Edtech', 'exp.early.tag2': 'Software Eng.', 'exp.early.tag3': 'Research', 'exp.early.tag4': 'Data',

      /* ── Testimonials ── */
      'testimonials.label': 'Testimonials',
      'testimonials.title': 'People who worked with me',

      /* ── Education ── */
      'edu.label':    'Education',
      'edu.title':    'Education & Certifications',
      'edu.academic': 'Academic Background',
      'edu.certs':    'Certifications',
      'edu.deg1':     'Bachelor\'s in Mechanical Engineering',
      'edu.deg2':     'Exchange Program · Mechanical Engineering · Italy',
      'edu.deg3':     'Technical Degree in Computer Science',

      /* ── FAQ ── */
      'faq.label': 'Common questions',
      'faq.q1': 'Are you open to new opportunities?',
      'faq.a1': 'Always open to great conversations. If you\'re building something interesting and think I could contribute, reach out. I love exchanging ideas about product, even if the timing isn\'t perfect.',
      'faq.tag1': 'Opportunities',
      'faq.q2': 'How do you use AI in your work?',
      'faq.a2': 'AI is already part of my daily workflow. I use it for operational tasks like user stories, PRDs, and documentation with automated agents; to speed up discovery with benchmarks and data analysis; and for prototyping, including code. This portfolio and deufit.com were built with AI. I enjoy testing new tools and closely follow this space.',
      'faq.tag2': 'Tools',
      'faq.q3': 'Do you focus on specific industries?',
      'faq.a3': 'No. I\'ve worked across marketplace, fintech, B2B, retail, and financial markets. I often receive feedback that I have a fast learning curve and can quickly ramp up in new domains. What matters to me is the problem to solve, not the sector.',
      'faq.tag3': 'Industry',
      'faq.q4': 'What are you looking for in a role?',
      'faq.a4': 'Autonomy to do real discovery — understanding the problem before building. I like working closely with design, data, and engineering, with a voice in strategy, not just delivery. I don\'t see myself in operational PO roles where the scope is limited to backlog management.',
      'faq.tag4': 'Fit',
      'faq.q5': 'What\'s your preferred work model?',
      'faq.a5': 'Remote or hybrid. I\'m based in Rio de Janeiro and prefer opportunities that work within that setup.',
      'faq.tag5': 'Model',
      'faq.q6': 'How can I get in touch?',
      'faq.a6': '<a href="https://www.linkedin.com/in/camila-a-gomes/" target="_blank" rel="noopener">LinkedIn</a> is the best way to reach me. Send a message with a bit of context about what you\'re building.',
      'faq.tag6': 'Contact',

      /* ── Footer ── */
      'footer.tagline': 'Senior Product Manager · Brazil',
    }
  };

  function applyLang(lang) {
    var l = T[lang] || T['pt'];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (l[key] !== undefined) el.textContent = l[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (l[key] !== undefined) el.innerHTML = l[key];
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    localStorage.setItem('lang', lang);

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.setAttribute('data-active', lang);
    });
  }

  window.applyLang = applyLang;
  window.getLangTranslations = function () { return T; };

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('lang') || 'pt';
    applyLang(saved);
  });

})();
