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