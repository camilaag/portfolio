(function () {
  var isSubPage = !!window.location.pathname.match(/\/pages\//);
  var base = isSubPage ? '../' : '';
  var homePrefix = isSubPage ? '../index.html' : '';

  var nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML =
    '<div class="nav-inner">' +
      '<a href="' + base + 'index.html" class="nav-logo">' +
        '<img src="' + base + 'images/logo.svg" alt="Camila Gomes" height="28">' +
      '</a>' +
      '<button class="nav-hamburger" aria-label="Abrir menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
      '<ul class="nav-links">' +
        '<li><a href="' + homePrefix + '#sobre"><span data-i18n="nav.about">Sobre</span></a></li>' +
        '<li class="nav-item-has-dropdown">' +
          '<a href="' + homePrefix + '#experiencia"><span data-i18n="nav.exp">Experiência</span></a>' +
          '<ul class="nav-dropdown">' +
            '<li><a href="' + base + 'pages/levva.html"><span data-i18n="nav.exp.levva">levva @ B3</span></a></li>' +
            '<li><a href="' + base + 'pages/boticario.html"><span data-i18n="nav.exp.bot">Grupo Boticário</span></a></li>' +
            '<li><a href="' + base + 'pages/ifood.html"><span data-i18n="nav.exp.ifood">iFood</span></a></li>' +
            '<li><a href="' + base + 'pages/early-career.html"><span data-i18n="nav.exp.early">Engenharia &amp; Pesquisa</span></a></li>' +
          '</ul>' +
        '</li>' +
        '<li><a href="' + homePrefix + '#depoimentos"><span data-i18n="nav.testimonials">Depoimentos</span></a></li>' +
        '<li><a href="' + homePrefix + '#formacao"><span data-i18n="nav.edu">Formação</span></a></li>' +
        '<li><a href="' + homePrefix + '#faq"><span data-i18n="nav.faq">FAQ</span></a></li>' +
        '<li><a href="https://www.linkedin.com/in/camila-a-gomes" target="_blank" rel="noopener"><span data-i18n="nav.contact">Contato</span></a></li>' +
      '</ul>' +
      '<button class="lang-toggle" aria-label="Mudar idioma" data-active="pt">' +
        '<span class="lang-option" data-lang="pt">PT</span>' +
        '<span class="lang-sep">|</span>' +
        '<span class="lang-option" data-lang="en">EN</span>' +
      '</button>' +
    '</div>';

  var placeholder = document.getElementById('nav-placeholder');
  placeholder.parentNode.replaceChild(nav, placeholder);

  /* ── Init lang state ── */
  var savedLang = localStorage.getItem('lang') || 'pt';
  nav.querySelector('.lang-toggle').setAttribute('data-active', savedLang);

  /* ── Hamburger ── */
  var btn = nav.querySelector('.nav-hamburger');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Lang toggle ── */
  nav.querySelector('.lang-toggle').addEventListener('click', function (e) {
    var option = e.target.closest('[data-lang]');
    if (!option) return;
    var lang = option.getAttribute('data-lang');
    if (window.applyLang) {
      window.applyLang(lang);
    } else {
      localStorage.setItem('lang', lang);
      document.querySelectorAll('.lang-toggle').forEach(function (b) {
        b.setAttribute('data-active', lang);
      });
    }
  });
})();
