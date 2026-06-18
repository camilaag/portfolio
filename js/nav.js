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
        '<li><a href="' + homePrefix + '#sobre">Sobre</a></li>' +
        '<li class="nav-item-has-dropdown">' +
          '<a href="' + homePrefix + '#experiencia">Experiência</a>' +
          '<ul class="nav-dropdown">' +
            '<li><a href="' + base + 'pages/levva.html">levva @ B3</a></li>' +
            '<li><a href="' + base + 'pages/boticario.html">Grupo Boticário</a></li>' +
            '<li><a href="' + base + 'pages/ifood.html">iFood</a></li>' +
            '<li><a href="' + base + 'pages/early-career.html">Engenharia &amp; Pesquisa</a></li>' +
          '</ul>' +
        '</li>' +
        '<li><a href="' + homePrefix + '#formacao">Formação</a></li>' +
        '<li><a href="' + homePrefix + '#faq">FAQ</a></li>' +
        '<li><a href="https://www.linkedin.com/in/camila-a-gomes" target="_blank" rel="noopener">Contato</a></li>' +
      '</ul>' +
    '</div>';

  var placeholder = document.getElementById('nav-placeholder');
  placeholder.parentNode.replaceChild(nav, placeholder);

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
})();
