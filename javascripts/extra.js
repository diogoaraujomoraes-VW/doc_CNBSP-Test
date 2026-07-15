// ============================================================
// 1. TÍTULO DO HEADER COM "CENTRAL - PÁGINA"
// ============================================================
function getTituloCentral() {
    var path = window.location.pathname;
    var mapa = {
        'cep_api': 'CEP - API',
        'cep_upload': 'CEP - Upload',
        'cesdi_api': 'CESDI - API',
        'cesdi_upload': 'CESDI - Upload',
        'rcto_api': 'RCTO - API',
        'rcto_upload': 'RCTO - Upload',
        'dominios': 'Domínios Compartilhados'
    };
    for (var chave in mapa) {
        if (path.indexOf(chave) !== -1) return mapa[chave];
    }
    return 'Documentação SIGNO';
}
 
function atualizarTodosTitulos() {
    var titulo = getTituloCentral();
    if (!titulo) return;
    var spans = document.querySelectorAll('.md-header .md-header__topic .md-ellipsis');
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].textContent !== titulo) {
            spans[i].textContent = titulo;
        }
    }
}
 
// Observer do header — criado UMA VEZ
var headerObserverCriado = false;
function iniciarHeaderObserver() {
    if (headerObserverCriado) {
        atualizarTodosTitulos();
        return;
    }
    var header = document.querySelector('.md-header');
    if (!header) {
        setTimeout(iniciarHeaderObserver, 200);
        return;
    }
    atualizarTodosTitulos();
    var obs = new MutationObserver(atualizarTodosTitulos);
    obs.observe(header, { childList: true, characterData: true, subtree: true });
    headerObserverCriado = true;
}
 
// ============================================================
// 2. SUMÁRIO COLAPSÁVEL (direita) — inicia recolhido
// ============================================================
function tornarSumarioColapsavel() {
    var itens = document.querySelectorAll(
        '.md-sidebar--secondary .md-nav__list .md-nav__list > .md-nav__item'
    );
 
    for (var i = 0; i < itens.length; i++) {
        var item = itens[i];
        var link = item.querySelector(':scope > .md-nav__link');
        var subnav = item.querySelector(':scope > .md-nav');
        if (!link || !subnav) continue;
 
        // Remove toggle anterior (re-init por navegação instantânea)
        var oldToggle = link.querySelector('.toc-toggle');
        if (oldToggle) oldToggle.remove();
 
        var toggle = document.createElement('span');
        toggle.className = 'toc-toggle';
        toggle.textContent = '▾';
        toggle.style.cssText = 'cursor:pointer;margin-right:6px;display:inline-block;transition:transform 0.2s ease;font-size:0.7em;user-select:none;transform:rotate(-90deg);';
        link.prepend(toggle);
 
        // Inicia COLAPSADO
        subnav.style.display = 'none';
 
        // Closure para manter referência
        (function(t, s) {
            var expanded = false;
            t.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                expanded = !expanded;
                s.style.display = expanded ? '' : 'none';
                t.style.transform = expanded ? 'rotate(0deg)' : 'rotate(-90deg)';
            });
        })(toggle, subnav);
    }
}
 
// ============================================================
// 3. FEEDBACK "ESTA PÁGINA FOI ÚTIL?"
// ============================================================
function adicionarFeedback() {
    var path = window.location.pathname;
    var ehHome = (path === '/' || path === '');
    if (!ehHome && /\/$/.test(path) && !/cep|cesdi|rcto|dominios/.test(path)) {
        ehHome = true;
    }
    if (ehHome) return;
 
    var content = document.querySelector('.md-content__inner');
    if (!content) return;
    if (content.querySelector('.feedback-widget')) return;
 
    var pageId = path.replace(/[^a-z0-9]/gi, '_') || 'home';
    var storageKey = 'feedback_' + pageId;
    var jaVotou = localStorage.getItem(storageKey);
 
    var widget = document.createElement('div');
    widget.className = 'feedback-widget';
    widget.innerHTML = '<hr><div class="feedback-box"><p class="feedback-pergunta">Esta página foi útil?</p><div class="feedback-botoes"><button class="feedback-btn feedback-sim" data-voto="sim">👍 Sim</button><button class="feedback-btn feedback-nao" data-voto="nao">👎 Não</button></div><p class="feedback-mensagem" style="display:none;"></p></div>';
    content.appendChild(widget);
 
    var mensagem = widget.querySelector('.feedback-mensagem');
    var botoes = widget.querySelector('.feedback-botoes');
 
    function mostrarVoto(voto) {
        botoes.style.display = 'none';
        mensagem.style.display = 'block';
        mensagem.textContent = voto === 'sim'
            ? '✓ Obrigado pelo feedback!'
            : 'Obrigado pelo feedback. Vamos trabalhar para melhorar esta página.';
    }
 
    if (jaVotou) {
        mostrarVoto(jaVotou);
    } else {
        var btns = widget.querySelectorAll('.feedback-btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function() {
                var voto = this.getAttribute('data-voto');
                localStorage.setItem(storageKey, voto);
                localStorage.setItem(storageKey + '_data', new Date().toISOString());
                mostrarVoto(voto);
            });
        }
    }
}
 
// ============================================================
// INICIALIZAÇÃO
// ============================================================
function inicializar() {
    iniciarHeaderObserver();
    tornarSumarioColapsavel();
    adicionarFeedback();
}
 
// Roda quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}
 
// Detecta navegação instantânea do Material (troca de página sem reload)
var contentObserverCriado = false;
function observarConteudo() {
    if (contentObserverCriado) return;
    var content = document.querySelector('.md-content');
    if (!content) {
        setTimeout(observarConteudo, 200);
        return;
    }
    var obs = new MutationObserver(function() {
        setTimeout(function() {
            atualizarTodosTitulos();
            tornarSumarioColapsavel();
            adicionarFeedback();
        }, 50);
    });
    obs.observe(content, { childList: true });
    contentObserverCriado = true;
}
observarConteudo();
// ============================================================
// 4. PARALLAX GEOMÉTRICO DE FUNDO (cíclico — cobre páginas longas)
// Cria formas atrás do conteúdo e as move em velocidades diferentes pelo scroll.
// O deslocamento é cíclico (módulo da altura da faixa), então sempre há formas
// visíveis por mais que a página seja longa.
// ============================================================
(function () {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    // tipo, largura, altura, top%, left%, opacidade, velocidade, rotação
    var SHAPES = [
        ['circle', 220, 220, 12, 8,  0.55, 0.15, 0],
        ['disc',   340, 340, 40, 70, 0.70, 0.30, 0],
        ['tri',    160, 160, 75, 15, 0.55, 0.22, 0],
        ['circle', 120, 120, 65, 50, 0.50, 0.40, 0],
        ['disc',   200, 200, 20, 82, 0.60, 0.12, 0],
        ['line',   300, 2,   55, 5,  0.65, 0.50, 0],
        ['tri',    100, 100, 8,  45, 0.45, 0.35, 180],
        ['circle', 90,  90,  88, 78, 0.55, 0.28, 0],
        ['line',   240, 2,   33, 60, 0.55, 0.20, 0]
    ];

    var shapeEls = [];
    var cycle = 1; // altura do ciclo (recalculada no resize)

    function criarParallax() {
        if (document.querySelector('.signo-parallax')) {
            shapeEls = [].slice.call(document.querySelectorAll('.signo-parallax .shape'));
            return;
        }
        var layer = document.createElement('div');
        layer.className = 'signo-parallax';
        layer.setAttribute('aria-hidden', 'true');
        shapeEls = [];
        for (var i = 0; i < SHAPES.length; i++) {
            var s = SHAPES[i];
            var el = document.createElement('div');
            el.className = 'shape ' + s[0];
            el.style.width = s[1] + 'px';
            el.style.height = s[2] + 'px';
            el.style.top = s[3] + '%';
            el.style.left = s[4] + '%';
            el.style.setProperty('--o', s[5]);
            el.dataset.speed = s[6];
            el.dataset.rot = s[7];
            layer.appendChild(el);
            shapeEls.push(el);
        }
        document.body.insertBefore(layer, document.body.firstChild);
    }

    function recalcCiclo() {
        // ciclo = altura visível + folga, para a forma sumir e reentrar suave
        cycle = (window.innerHeight || 800) + 400;
    }

    var ticking = false;
    function aplicar() {
        var y = window.scrollY || window.pageYOffset || 0;
        for (var i = 0; i < shapeEls.length; i++) {
            var el = shapeEls[i];
            var sp = parseFloat(el.dataset.speed);
            var rot = parseFloat(el.dataset.rot);
            // deslocamento cíclico: mantém a forma sempre dentro de uma faixa,
            // reentrando pelo lado oposto (efeito de repetição infinita)
            var raw = y * sp;
            var mod = ((raw % cycle) + cycle) % cycle;   // 0..cycle
            var shift = mod - 200;                        // -200..cycle-200
            var t = 'translate3d(0,' + shift + 'px,0)';
            if (rot) t += ' rotate(' + rot + 'deg)';
            el.style.transform = t;
        }
        ticking = false;
    }
    function onScroll() {
        if (!ticking) { window.requestAnimationFrame(aplicar); ticking = true; }
    }

    function iniciar() {
        if (!document.body) { setTimeout(iniciar, 100); return; }
        criarParallax();
        recalcCiclo();
        aplicar();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', function () { recalcCiclo(); aplicar(); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }
})();
