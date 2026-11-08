(function () {
  'use strict';
  var current = (navigator.language || 'en').toLowerCase().indexOf('sw') === 0 ? 'sw' : 'en';
  var $ = function (id) { return document.getElementById(id); };

  // Security: only textContent / createElement are used. No innerHTML anywhere.
  function el(tag, text, cls) {
    var n = document.createElement(tag);
    if (text !== undefined) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  function render() {
    var t = CONTENT[current];
    document.documentElement.lang = current;
    document.title = t.title;
    ['title', 'tagline', 'privacy', 'disclaimer'].forEach(function (k) { $(k).textContent = t[k]; });
    $('h-signs').textContent = t.h.signs;   $('signs-intro').textContent = t.signsIntro;
    $('h-apps').textContent = t.h.apps;     $('h-controls').textContent = t.h.controls;
    $('h-check').textContent = t.h.check;   $('h-act').textContent = t.h.act;
    $('h-help').textContent = t.h.help;

    var signs = $('signs'); clear(signs);
    t.signs.forEach(function (s) { var li = el('li'); li.appendChild(el('b', s[0])); li.appendChild(el('span', s[1])); signs.appendChild(li); });

    var apps = $('apps'); clear(apps);
    APPS.forEach(function (a) {
      var c = el('article', undefined, 'card'); c.appendChild(el('h3', a.name));
      c.appendChild(el('p', a[current].risk)); c.appendChild(el('p', a[current].tip));
      apps.appendChild(c);
    });

    var ctr = $('controls'); clear(ctr);
    t.controls.forEach(function (x) {
      var c = el('article', undefined, 'card'); c.appendChild(el('h3', x.name));
      var ol = el('ol'); x.steps.forEach(function (s) { ol.appendChild(el('li', s)); });
      c.appendChild(ol); ctr.appendChild(c);
    });

    var list = $('checklist'); clear(list);
    t.checklist.forEach(function (txt) {
      var li = el('li'), lab = el('label'), cb = document.createElement('input');
      cb.type = 'checkbox'; cb.addEventListener('change', progress);
      lab.appendChild(cb); lab.appendChild(el('span', txt)); li.appendChild(lab); list.appendChild(li);
    });
    progress();

    var act = $('act'); clear(act); t.act.forEach(function (s) { act.appendChild(el('li', s)); });
    var help = $('help'); clear(help);
    t.help.forEach(function (h) { var li = el('li'); li.appendChild(el('b', h[0])); li.appendChild(el('span', h[1])); help.appendChild(li); });

    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === current));
    });
  }

  function progress() {
    var boxes = document.querySelectorAll('#checklist input');
    var done = document.querySelectorAll('#checklist input:checked').length;
    $('progress').textContent = CONTENT[current].progress.replace('{n}', done).replace('{t}', boxes.length);
  }

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { current = b.getAttribute('data-lang'); render(); });
  });
  render();
})();
