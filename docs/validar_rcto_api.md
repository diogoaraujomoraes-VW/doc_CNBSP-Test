# Validador — RCTO API

Verifique se o JSON que você pretende enviar para a API da RCTO está de acordo com o manual. A validação roda **localmente no seu navegador** — nada é enviado a nenhum servidor.

**Como usar:**

1. **Cole** o JSON na caixa abaixo **ou** clique em **Anexar arquivo (.json ou .txt)**
2. Clique em **Validar**
3. Veja o resultado logo abaixo: **OK** ou a lista de erros com o caminho exato de cada problema

Para começar rápido, use **Gerar modelo de exemplo** escolhendo o tipo de ato — os atos de revogação (3 e 13) já vêm com o bloco de revogações preenchido.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/material-darker.min.css">
<style>
  .CodeMirror { font-family: "Courier New", monospace; font-size: 13px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; }
  .CodeMirror-gutters { background: var(--md-default-fg-color--lightest); border-right: 1px solid var(--md-default-fg-color--lightest); }
  .CodeMirror-linenumber { color: var(--md-default-fg-color--light); }
  .CodeMirror-cursor { border-left-color: #1B8A7E; }
  .CodeMirror-selected { background: rgba(27,138,126,.2); }
  .cm-string { color: #2ca02c; }
  .cm-number { color: #d62728; }
  .cm-atom { color: #d62728; }
  .cm-property { color: #1f77b4; }
  [data-md-color-scheme="slate"] .CodeMirror { background: #1e1e1e; color: #e0e0e0; }
  [data-md-color-scheme="slate"] .CodeMirror-gutters { background: #2d2d2d; }
  [data-md-color-scheme="slate"] .CodeMirror-linenumber { color: #666; }
  [data-md-color-scheme="slate"] .CodeMirror-selected { background: rgba(27,138,126,.3); }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js"></script>

<div class="validador-container">
  <div class="gerador-modelo">
    <div class="gerador-titulo">Gerar modelo de exemplo</div>
    <div class="gerador-grid">
      <label class="gerador-campo">Tipo de ato
        <select id="selTipoAto">
          <option value="1">Testamento público</option>
          <option value="2">Aditamento</option>
          <option value="3">Revogação</option>
          <option value="4">Testamento cerrado</option>
          <option value="5">Testamento sem conteúdo patrimonial</option>
          <option value="13">Testamento com revogação</option>
        </select>
      </label>
    </div>
    <div class="gerador-grid">
      <label class="gerador-check"><input type="checkbox" id="chkLegado"> Possui legado solidário (doação)</label>
    </div>
    <button id="btnGerar" class="val-btn val-btn-gerar">Gerar modelo</button>
  </div>
  <div class="validador-toolbar">
    <button id="btnValidar" class="val-btn val-btn-primary">✓ Validar</button>
    <label for="fileInput" class="val-btn val-btn-anexar"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>Anexar arquivo (.json ou .txt)</label>
    <input type="file" id="fileInput" accept=".json,.txt,application/json,text/plain" style="display:none;">
    <button id="btnLimpar" class="val-btn">Limpar</button>
  </div>
  <textarea id="jsonInput" class="validador-input" spellcheck="false" placeholder="Cole aqui o JSON do ato RCTO, ou use o botao Anexar arquivo..."></textarea>
  <div id="nomeArquivo" class="validador-arquivo"></div>
  <div id="resultado" class="validador-resultado"></div>
</div>

<script>
(function(){
  const SCHEMA = {"root": [{"name": "tipoInvalidacaoAto", "obrigatorio": false, "tipo": "integer", "tamanho": 2, "formato": "00", "validacao": null, "descricao": "Informa se o ato é válido ou inválido.", "dominio": ["10", "11"], "dominioDesc": {"10": "Válido", "11": "Inválido"}}, {"name": "tipoAto", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00", "validacao": null, "descricao": "Tipo do ato que foi lavrado no cartório.", "dominio": ["1", "2", "3", "4", "5", "13"], "dominioDesc": {"1": "Testamento público", "2": "Aditamento", "3": "Revogação", "4": "Testamento cerrado", "5": "Testamento sem conteúdo patrimonial", "13": "Testamento com revogação"}}, {"name": "dataAto", "obrigatorio": true, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "validacao": null, "descricao": "Data em que o ato foi lavrado.", "dominio": null, "dominioDesc": null}, {"name": "livroInicial", "obrigatorio": true, "tipo": "integer", "tamanho": 4, "formato": "0000", "validacao": null, "descricao": "Número do livro inicial em que o ato foi lavrado.", "dominio": null, "dominioDesc": null}, {"name": "complementoLivroInicial", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "validacao": "Caso o livro não tenha complemento, enviar em branco.", "descricao": "Complemento do livro inicial.", "dominio": null, "dominioDesc": null}, {"name": "livroFinal", "obrigatorio": true, "tipo": "integer", "tamanho": 4, "formato": "0000", "validacao": "Em livro único, igual ao livroInicial.", "descricao": "Número do livro final.", "dominio": null, "dominioDesc": null}, {"name": "complementoLivroFinal", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "validacao": "Caso o livro não tenha complemento, enviar em branco.", "descricao": "Complemento do livro final.", "dominio": null, "dominioDesc": null}, {"name": "folhaInicial", "obrigatorio": true, "tipo": "integer", "tamanho": 3, "formato": "000", "validacao": null, "descricao": "Número da folha inicial.", "dominio": null, "dominioDesc": null}, {"name": "folhaFinal", "obrigatorio": true, "tipo": "integer", "tamanho": 3, "formato": "000", "validacao": "Em folha única, igual ao folhaInicial.", "descricao": "Número da folha final.", "dominio": null, "dominioDesc": null}, {"name": "legadoSolidario", "obrigatorio": true, "tipo": "integer", "tamanho": 1, "formato": "0", "validacao": null, "descricao": "Identificador de doação presente no ato.", "dominio": ["0", "1"], "dominioDesc": {"0": "Não possui", "1": "Possui"}}, {"name": "entidadeBeneficiaria", "obrigatorio": false, "tipo": "string", "tamanho": 100, "formato": "texto livre", "validacao": "Obrigatório quando legadoSolidario = 1.", "descricao": "Nome da instituição beneficiada.", "dominio": null, "dominioDesc": null, "cond": {"tipo": "obrigatorioQuando", "campo": "legadoSolidario", "valores": [1], "rotulo": "legadoSolidario = Possui (1)"}}, {"name": "observacoes", "obrigatorio": false, "tipo": "string", "tamanho": 200, "formato": null, "validacao": null, "descricao": "Observação necessária ao ato praticado.", "dominio": null, "dominioDesc": null}], "lists": {"partes": {"required": true, "fields": [{"name": "cpf", "obrigatorio": false, "tipo": "cpf", "tamanho": 11, "formato": "00000000000", "validacao": "Obrigatório, salvo quando tipoDocumento/numeroDocumento forem informados.", "descricao": "CPF do testador.", "dominio": null, "dominioDesc": null, "cond": {"tipo": "obrigatorioSeAusente", "campo": "tipoDocumento", "rotulo": "não houver tipoDocumento"}}, {"name": "tipoDocumento", "obrigatorio": false, "tipo": "integer", "tamanho": 2, "formato": "00", "validacao": "Obrigatório quando o CPF não for preenchido.", "descricao": "Documento secundário de identificação.", "dominio": ["14", "15", "16", "17"], "dominioDesc": {"14": "CNH", "15": "RG", "16": "RNE", "17": "Passaporte"}, "cond": {"tipo": "obrigatorioSeAusente", "campo": "cpf", "rotulo": "não houver CPF"}}, {"name": "numeroDocumento", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": null, "validacao": "Obrigatório quando tipoDocumento for informado.", "descricao": "Número do documento secundário.", "dominio": null, "dominioDesc": null, "cond": {"tipo": "obrigatorioSeInformado", "campo": "tipoDocumento", "rotulo": "tipoDocumento for informado"}}, {"name": "nomeParte", "obrigatorio": true, "tipo": "string", "tamanho": 100, "formato": null, "validacao": null, "descricao": "Nome do testador.", "dominio": null, "dominioDesc": null}, {"name": "nomeSocialParte", "obrigatorio": false, "tipo": "string", "tamanho": 100, "formato": null, "validacao": null, "descricao": "Nome social utilizado pelo testador.", "dominio": null, "dominioDesc": null}, {"name": "qualificacaoParte", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00", "validacao": "Na RCTO sempre 'Testador'.", "descricao": "Qualificação da parte.", "dominio": ["1"], "dominioDesc": {"1": "Testador"}}, {"name": "filiacoes", "obrigatorio": true, "tipo": "string", "tamanho": 200, "formato": null, "validacao": "Múltiplas separadas por '/'. N/A se não houver.", "descricao": "Filiação do testador.", "dominio": null, "dominioDesc": null}, {"name": "nacionalidadeParte", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0", "validacao": null, "descricao": "Nacionalidade do testador.", "dominio": ["1", "2", "3"], "dominioDesc": {"1": "Brasileiro", "2": "Estrangeiro", "3": "Naturalizado"}}, {"name": "codigoPaisParte", "obrigatorio": false, "tipo": "string", "tamanho": 3, "formato": "XXX", "validacao": "Sigla do país (aba País).", "descricao": "País em que o testador nasceu.", "dominio": ["AFG", "ZAF", "ALB", "DEU", "AND", "AGO", "AIA", "ATG", "SAU", "DZA", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BGD", "BRB", "BHR", "BEL", "BLZ", "BEN", "BMU", "BLR", "BOL", "BES", "BIH", "BWA", "BRA", "BRN", "BGR", "BFA", "BDI", "BTN", "CPV", "CMR", "KHM", "CAN", "KAZ", "QAT", "TCD", "CHL", "CHN", "HKG", "MAC", "CYP", "SGP", "COL", "COM", "COG", "PRK", "KOR", "CIV", "CRI", "HRV", "CUB", "CUW", "DNK", "DJI", "DMA", "EGY", "SLV", "ARE", "ECU", "ERI", "SVK", "SVN", "ESP", "USA", "EST", "ETH", "FJI", "PHL", "FIN", "FRA", "GAB", "GMB", "GHA", "GEO", "GIB", "GRD", "GRC", "GRL", "GUM", "GTM", "GGY", "GUY", "GUF", "GIN", "GNQ", "GNB", "HTI", "NLD", "HND", "HUN", "YEM", "IMN", "GLP", "NFK", "REU", "ALA", "CYM", "COK", "CCK", "FRO", "FLK", "MNP", "MHL", "SLB", "TCA", "VIR", "VGB", "WLF", "IND", "IDN", "IRN", "IRQ", "IRL", "ISL", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KIR", "KWT", "LAO", "LSO", "LVA", "LBN", "LBR", "LBY", "LIE", "LTU", "LUX", "MKD", "MDG", "MYS", "MWI", "MDV", "MLI", "MLT", "MAR", "MTQ", "MUS", "MRT", "MYT", "MEX", "MMR", "FSM", "MOZ", "MDA", "MCO", "MNG", "MNE", "MSR", "NAM", "NRU", "NPL", "NIC", "NER", "NGA", "NIU", "NOR", "NCL", "NZL", "OMN", "PLW", "PSE", "PAN", "PNG", "PAK", "PRY", "PER", "PCN", "PYF", "POL", "PRI", "PRT", "KEN", "KGZ", "GBR", "CAF", "COD", "DOM", "CZE", "ROU", "RWA", "RUS", "ESH", "MAF", "SXM", "SPM", "WSM", "ASM", "SMR", "SHN", "LCA", "BLM", "KNA", "STP", "VCT", "SRK", "SYC", "SEN", "SLE", "SRB", "SYR", "SOM", "LKA", "SWZ", "SDN", "SSD", "SWE", "CHE", "SUR", "SJM", "TJK", "THA", "TZA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TKM", "TUR", "TUV", "UKR", "UGA", "URY", "UZB", "VUT", "VAT", "VEN", "VNM", "ZMB", "ZWE"], "dominioDesc": {"": "Lista de siglas de país (SINTER)"}}, {"name": "dataNascimentoParte", "obrigatorio": true, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "validacao": null, "descricao": "Data de nascimento do testador.", "dominio": null, "dominioDesc": null}, {"name": "estadoCivilParte", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0", "validacao": null, "descricao": "Estado civil do testador.", "dominio": ["1", "2", "3", "4", "5", "6", "7"], "dominioDesc": {"1": "Casado", "2": "Desquitado", "3": "Divorciado", "4": "Separado", "5": "Solteiro", "6": "União Estável", "7": "Viúvo"}}, {"name": "categoriaParte", "obrigatorio": false, "tipo": "integer", "tamanho": 2, "formato": "00", "validacao": "Aba Profissão (Código Área de Atuação).", "descricao": "Área de atuação do testador.", "dominio": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"], "dominioDesc": {"": "Lista de áreas de atuação (SINTER)"}}, {"name": "profissaoParte", "obrigatorio": false, "tipo": "integer", "tamanho": 3, "formato": "000", "validacao": "Aba Profissão (Código Profissão).", "descricao": "Profissão do testador.", "dominio": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134"], "dominioDesc": {"": "Lista de profissões (SINTER)"}}]}, "revogacoes": {"required": false, "fields": [{"name": "numeroCns", "obrigatorio": true, "tipo": "integer", "tamanho": 6, "formato": "000000", "validacao": "Obrigatório para atos de revogação.", "descricao": "CNS da serventia do ato revogado.", "dominio": null, "dominioDesc": null}, {"name": "livroInicial", "obrigatorio": true, "tipo": "integer", "tamanho": 4, "formato": "0000", "validacao": "Obrigatório para atos de revogação.", "descricao": "Livro inicial do ato revogado.", "dominio": null, "dominioDesc": null}, {"name": "complementoLivroInicial", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "validacao": "Em branco se não houver complemento.", "descricao": "Complemento do livro inicial.", "dominio": null, "dominioDesc": null}, {"name": "livroFinal", "obrigatorio": true, "tipo": "integer", "tamanho": 4, "formato": "0000", "validacao": "Obrigatório para atos de revogação.", "descricao": "Livro final do ato revogado.", "dominio": null, "dominioDesc": null}, {"name": "complementoLivroFinal", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "validacao": "Em branco se não houver complemento.", "descricao": "Complemento do livro final.", "dominio": null, "dominioDesc": null}, {"name": "folhaInicial", "obrigatorio": true, "tipo": "integer", "tamanho": 3, "formato": "000", "validacao": "Obrigatório para atos de revogação.", "descricao": "Folha inicial do ato revogado.", "dominio": null, "dominioDesc": null}, {"name": "folhaFinal", "obrigatorio": true, "tipo": "integer", "tamanho": 3, "formato": "000", "validacao": "Obrigatório para atos de revogação.", "descricao": "Folha final do ato revogado.", "dominio": null, "dominioDesc": null}], "cond": {"tipo": "exclusivoQuando", "campo": "tipoAto", "valores": [3, 13], "rotulo": "tipoAto = Revogação (3) ou Testamento com revogação (13)"}}}, "tiposRevogacao": [3, 13]};
  const TOP_LISTS = ["partes", "revogacoes"];
  let cm = null;

  // ---------- CPF ----------
  function validaCPF(v){
    const s = String(v).replace(/\D/g,'');
    if (s.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(s)) return false;
    let soma=0; for(let i=0;i<9;i++) soma+=(+s[i])*(10-i);
    let r=(soma*10)%11; if(r===10) r=0; if(r!==+s[9]) return false;
    soma=0; for(let i=0;i<10;i++) soma+=(+s[i])*(11-i);
    r=(soma*10)%11; if(r===10) r=0; return r===+s[10];
  }

  // ---------- GERADOR DE MODELO ----------
  function parteExemplo(){
    return { qualificacaoParte:1, cpf:"123.456.789-09", nomeParte:"Joao da Silva",
      filiacoes:"Maria da Silva/Jose da Silva", dataNascimentoParte:"10/05/1960",
      nacionalidadeParte:1, codigoPaisParte:"BRA", estadoCivilParte:5 };
  }
  function revogacaoExemplo(){
    return { numeroCns:123456, livroInicial:1, livroFinal:1, folhaInicial:10, folhaFinal:11 };
  }
  function gerarModelo(opts){
    const ato = {
      tipoAto: opts.tipoAto, dataAto:"15/03/2024",
      livroInicial:12, livroFinal:12, folhaInicial:45, folhaFinal:46,
      legadoSolidario: opts.legado ? 1 : 0
    };
    if (opts.legado) ato.entidadeBeneficiaria = "Instituto Exemplo de Caridade";
    ato.partes = [ parteExemplo() ];
    if (opts.tipoAto === 3 || opts.tipoAto === 13){
      ato.revogacoes = [ revogacaoExemplo() ];
    }
    return ato;
  }
  function lerOpcoes(){
    const tipoAto = parseInt(document.getElementById('selTipoAto').value, 10);
    const legado = document.getElementById('chkLegado').checked;
    return { tipoAto, legado };
  }
  function atualizarVisibilidade(){ /* sem campos dependentes do tipo de ato */ }

  // ---------- EDITOR ----------
  function getJson(){ return cm ? cm.getValue() : (document.getElementById('jsonInput')||{}).value || ''; }
  function setJson(v){ if (cm) cm.setValue(v); else { const t=document.getElementById('jsonInput'); if(t) t.value=v; } }
  function temaEscuro(){ return document.body.getAttribute('data-md-color-scheme') === 'slate'; }
  function initEditor(){
    const ta = document.getElementById('jsonInput');
    if (!ta || ta.dataset.cm === '1' || typeof CodeMirror === 'undefined') return;
    ta.dataset.cm = '1';
    cm = CodeMirror.fromTextArea(ta, { mode:{name:'javascript',json:true}, lineNumbers:true,
      theme: temaEscuro() ? 'material-darker' : 'default', tabSize:2, lineWrapping:true, viewportMargin:Infinity });
    cm.setSize('100%', null);
    const obsTema = new MutationObserver(function(){ cm.setOption('theme', temaEscuro() ? 'material-darker' : 'default'); });
    obsTema.observe(document.body, {attributes:true, attributeFilter:['data-md-color-scheme']});
  }
  function tryInitEditor(tries){
    if (typeof CodeMirror !== 'undefined'){ initEditor(); return; }
    if (tries > 0) setTimeout(function(){ tryInitEditor(tries-1); }, 300);
  }

  // ---------- VALIDADOR ----------
  function ausente(v){ return v === undefined || v === null || (typeof v === 'string' && v.trim() === ''); }

  function avaliarCond(cond, objPai, raiz){
    // resolve campo no contexto local, depois na raiz
    let v;
    if (objPai && cond.campo in objPai) v = objPai[cond.campo];
    else if (raiz && cond.campo in raiz) v = raiz[cond.campo];
    if (cond.valores) return cond.valores.map(String).includes(String(v));
    return !ausente(v);
  }

  function validarCampo(valor, campo, caminho, erros, objPai, raiz){
    const path = caminho + campo.name;
    const vazio = ausente(valor);
    if (campo.cond){
      const c = campo.cond;
      if (c.tipo === 'obrigatorioQuando'){
        if (avaliarCond(c, objPai, raiz) && vazio){ erros.push({tipo:'erro', campo:path, msg:'obrigatório quando '+c.rotulo}); return; }
      } else if (c.tipo === 'obrigatorioSeInformado'){
        const alvo = (objPai && c.campo in objPai) ? objPai[c.campo] : (raiz ? raiz[c.campo] : undefined);
        if (!ausente(alvo) && vazio){ erros.push({tipo:'erro', campo:path, msg:'obrigatório quando '+c.rotulo}); return; }
      } else if (c.tipo === 'obrigatorioSeAusente'){
        const alvo = (objPai && c.campo in objPai) ? objPai[c.campo] : (raiz ? raiz[c.campo] : undefined);
        if (ausente(alvo) && vazio){ erros.push({tipo:'erro', campo:path, msg:'obrigatório quando '+c.rotulo}); return; }
      } else if (c.tipo === 'somenteQuando'){
        const condMet = avaliarCond(c, objPai, raiz);
        if (!vazio && !condMet){ erros.push({tipo:'erro', campo:path, msg:'só deve ser informado quando '+c.rotulo}); return; }
        if (vazio){ if (condMet && campo.obrigatorio) erros.push({tipo:'erro', campo:path, msg:'obrigatório quando '+c.rotulo}); return; }
      }
    }
    if (vazio){ if (campo.obrigatorio) erros.push({tipo:'erro', campo:path, msg:'campo obrigatório ausente ou vazio'}); return; }

    if (campo.tipo === 'cpf'){
      if (typeof valor === 'object') { erros.push({tipo:'erro', campo:path, msg:'CPF deve ser texto ou número, não objeto/lista'}); }
      else if (!validaCPF(valor)) erros.push({tipo:'erro', campo:path, msg:'CPF inválido (dígito verificador ou formato)'});
    } else if (campo.tipo === 'integer'){
      // só aceita número primitivo ou string composta apenas de dígitos (sem sinal, sem espaço, sem ponto)
      if (typeof valor === 'boolean' || typeof valor === 'object'){
        erros.push({tipo:'erro', campo:path, msg:'deveria ser um número inteiro (recebido: '+(Array.isArray(valor)?'lista':typeof valor)+')'});
      } else if (typeof valor === 'number'){
        if (!Number.isInteger(valor) || valor < 0)
          erros.push({tipo:'erro', campo:path, msg:'deveria ser um inteiro não-negativo (recebido: '+valor+')'});
        else if (campo.tamanho && String(valor).length > campo.tamanho)
          erros.push({tipo:'erro', campo:path, msg:'excede o tamanho máximo de '+campo.tamanho+' dígitos'});
      } else { // string
        if (!/^\d+$/.test(valor))
          erros.push({tipo:'erro', campo:path, msg:'deveria conter apenas dígitos (recebido: "'+valor+'")'});
        else if (campo.tamanho && valor.length > campo.tamanho)
          erros.push({tipo:'erro', campo:path, msg:'excede o tamanho máximo de '+campo.tamanho+' dígitos'});
      }
    } else if (campo.tipo === 'double'){
      if (typeof valor === 'object' || typeof valor === 'boolean' || isNaN(Number(valor)))
        erros.push({tipo:'erro', campo:path, msg:'deveria ser um número'});
    } else if (campo.tipo === 'string'){
      if (typeof valor !== 'string') erros.push({tipo:'erro', campo:path, msg:'deveria ser texto (recebido: '+(Array.isArray(valor)?'lista':typeof valor)+')'});
      else {
        if (campo.tamanho && valor.length > campo.tamanho)
          erros.push({tipo:'erro', campo:path, msg:'excede o tamanho máximo de '+campo.tamanho+' caracteres'});
        if (campo.formato && /dd\/mm\/aaaa/i.test(campo.formato)){
          if (!/^\d{2}\/\d{2}\/\d{4}$/.test(valor))
            erros.push({tipo:'erro', campo:path, msg:'data deve estar no formato dd/mm/aaaa (ex: 15/03/2024)'});
          else { const [d,m,a]=valor.split('/').map(Number);
            const dt=new Date(a,m-1,d);
            if (m<1||m>12||d<1||d>31||a<1900||a>2100||dt.getDate()!==d||dt.getMonth()!==m-1) erros.push({tipo:'erro', campo:path, msg:'data inexistente ou ano implausível (esperado entre 1900 e 2100)'});
          }
        }
        if (campo.formato && /letra/i.test(campo.formato) && !/^[A-Za-z]$/.test(valor))
          erros.push({tipo:'erro', campo:path, msg:'deve ser uma única letra'});
      }
    } else if (campo.tipo === 'list'){
      if (!Array.isArray(valor)) erros.push({tipo:'erro', campo:path, msg:'deveria ser uma lista (array)'});
    }
    if (campo.dominio && campo.dominio.length && typeof valor !== 'object'){
      if (!campo.dominio.map(String).includes(String(valor))){
        const d = campo.dominio.length > 12 ? '(consulte a tabela de domínio do manual)' : '('+campo.dominio.join(', ')+')';
        erros.push({tipo:'erro', campo:path, msg:'valor "'+valor+'" fora do domínio permitido '+d});
      }
    }
  }

  function validarCampos(obj, campos, caminho, erros, raiz){
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)){
      const alvo = caminho ? caminho.replace(/\.$/,'') : '(raiz)';
      erros.push({tipo:'erro', campo:alvo, msg:'deveria ser um objeto'+(obj===null?' (recebido: null)':Array.isArray(obj)?' (recebido: lista)':' (recebido: '+typeof obj+')')});
      return;
    }
    const r = raiz || obj;
    const nomes = campos.map(c=>c.name);
    campos.forEach(c => validarCampo(obj[c.name], c, caminho, erros, obj, r));
    Object.keys(obj).forEach(k => {
      if (!nomes.includes(k) && !TOP_LISTS.includes(k) && k !== 'revogacoesOutrosCartorios')
        erros.push({tipo:'aviso', campo:caminho+k, msg:'campo não reconhecido no manual (será ignorado pela API)'});
    });
  }

  function validarLista(obj, nome, def, caminho, erros, raiz){
    const val = obj[nome];
    const temItens = Array.isArray(val) && val.length > 0;
    const r = raiz || obj;
    if (def.cond){
      const c = def.cond;
      if (c.tipo === 'exclusivoQuando'){
        const met = avaliarCond(c, obj, r);
        if (!met && temItens){ erros.push({tipo:'erro', campo:caminho+nome, msg:'lista só deve ser enviada quando '+c.rotulo}); return; }
        // obrigatoriedade da revogação é tratada na função validar() (lista OU texto livre)
      }
    }
    if (def.required && !temItens){ erros.push({tipo:'erro', campo:caminho+nome, msg:'lista obrigatória ausente ou vazia'}); return; }
    if (val === undefined || val === null) return;
    if (!Array.isArray(val)){ erros.push({tipo:'erro', campo:caminho+nome, msg:'deveria ser uma lista (array)'}); return; }
    val.forEach((item, idx) => { validarCampos(item, def.fields, caminho+nome+'['+idx+'].', erros, r); });
  }

  function validar(obj){
    const erros = [];
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)){
      erros.push({tipo:'erro', campo:'(raiz)', msg:'o conteúdo deve ser um objeto JSON (ato). Recebido: '+(obj===null?'null':Array.isArray(obj)?'lista':typeof obj)});
      return erros;
    }
    validarCampos(obj, SCHEMA.root, '', erros, obj);
    TOP_LISTS.forEach(nome => { if (SCHEMA.lists[nome]) validarLista(obj, nome, SCHEMA.lists[nome], '', erros, obj); });
    // regra de revogação: tipos 3 e 13 exigem lista revogacoes OU texto revogacoesOutrosCartorios
    const ehRev = SCHEMA.tiposRevogacao.map(String).includes(String(obj.tipoAto));
    const temLista = Array.isArray(obj.revogacoes) && obj.revogacoes.length > 0;
    const temOutros = !ausente(obj.revogacoesOutrosCartorios);
    if (ehRev && !temLista && !temOutros)
      erros.push({tipo:'erro', campo:'revogacoes', msg:'ato de revogação exige a lista "revogacoes" ou o texto "revogacoesOutrosCartorios"'});
    if (!ehRev && temOutros)
      erros.push({tipo:'aviso', campo:'revogacoesOutrosCartorios', msg:'preenchido em ato que não é de revogação'});

    // ----- Coerências entre campos (regras além do manual, habilitadas por decisão de projeto) -----
    function pData(v){ // retorna Date ou null se não for dd/mm/aaaa válida
      if (typeof v !== 'string' || !/^\d{2}\/\d{2}\/\d{4}$/.test(v)) return null;
      const [d,m,a]=v.split('/').map(Number);
      const dt=new Date(a,m-1,d);
      if (dt.getDate()!==d||dt.getMonth()!==m-1||a<1900||a>2100) return null;
      return dt;
    }
    function intOk(v){ return (typeof v==='number'&&Number.isInteger(v)&&v>=0) || (typeof v==='string'&&/^\d+$/.test(v)); }
    function nInt(v){ return typeof v==='number'?v:parseInt(v,10); }

    // 1 e 2: folha/livro final não pode ser menor que inicial
    if (intOk(obj.folhaInicial) && intOk(obj.folhaFinal) && nInt(obj.folhaFinal) < nInt(obj.folhaInicial))
      erros.push({tipo:'erro', campo:'folhaFinal', msg:'folha final ('+nInt(obj.folhaFinal)+') não pode ser menor que a folha inicial ('+nInt(obj.folhaInicial)+')'});
    if (intOk(obj.livroInicial) && intOk(obj.livroFinal) && nInt(obj.livroFinal) < nInt(obj.livroInicial))
      erros.push({tipo:'erro', campo:'livroFinal', msg:'livro final ('+nInt(obj.livroFinal)+') não pode ser menor que o livro inicial ('+nInt(obj.livroInicial)+')'});

    // 4: data do ato no futuro
    const hoje = new Date(); hoje.setHours(23,59,59,999);
    const dAto = pData(obj.dataAto);
    if (dAto && dAto > hoje)
      erros.push({tipo:'erro', campo:'dataAto', msg:'data do ato está no futuro'});

    // 3 e 4: por parte — nascimento no futuro e nascimento posterior ao ato
    if (Array.isArray(obj.partes)){
      obj.partes.forEach((p,i)=>{
        if (!p || typeof p!=='object') return;
        const dNasc = pData(p.dataNascimentoParte);
        if (dNasc && dNasc > hoje)
          erros.push({tipo:'erro', campo:'partes['+i+'].dataNascimentoParte', msg:'data de nascimento está no futuro'});
        if (dNasc && dAto && dNasc > dAto)
          erros.push({tipo:'erro', campo:'partes['+i+'].dataNascimentoParte', msg:'nascimento ('+p.dataNascimentoParte+') é posterior à data do ato ('+obj.dataAto+')'});
      });
    }

    return erros;
  }

  function render(erros){
    const div = document.getElementById('resultado');
    const apenasErros = erros.filter(e=>e.tipo==='erro');
    const avisos = erros.filter(e=>e.tipo==='aviso');
    let html = '';
    if (apenasErros.length === 0)
      html += '<div class="val-ok">✓ JSON válido! Todos os campos obrigatórios e domínios estão de acordo com o manual.</div>';
    else {
      html += '<div class="val-erro-titulo">✗ '+apenasErros.length+' erro(s) encontrado(s):</div><ul class="val-lista">';
      apenasErros.forEach(e => { html += '<li><code>'+e.campo+'</code> — '+e.msg+'</li>'; });
      html += '</ul>';
    }
    if (avisos.length){
      html += '<div class="val-aviso-titulo">⚠ '+avisos.length+' aviso(s):</div><ul class="val-lista val-lista-aviso">';
      avisos.forEach(e => { html += '<li><code>'+e.campo+'</code> — '+e.msg+'</li>'; });
      html += '</ul>';
    }
    div.innerHTML = html; div.style.display = 'block';
  }

  function executarValidacao(){
    const txt = getJson().trim();
    const div = document.getElementById('resultado');
    if (!txt){ div.innerHTML = '<div class="val-erro-titulo">Cole ou anexe um JSON para validar.</div>'; div.style.display='block'; return; }
    let obj;
    try { obj = JSON.parse(txt); }
    catch(e){ div.innerHTML = '<div class="val-erro-titulo">✗ JSON inválido (erro de sintaxe):</div><ul class="val-lista"><li>'+e.message+'</li></ul>'; div.style.display='block'; return; }
    render(validar(obj));
  }

  function init(){
    const btn = document.getElementById('btnValidar');
    if (!btn || btn.dataset.ready === '1') return;
    btn.dataset.ready = '1';
    tryInitEditor(12);
    btn.addEventListener('click', executarValidacao);
    document.getElementById('btnGerar').addEventListener('click', function(){
      setJson(JSON.stringify(gerarModelo(lerOpcoes()), null, 2));
      document.getElementById('nomeArquivo').textContent = '';
      executarValidacao();
    });
    document.getElementById('btnLimpar').addEventListener('click', function(){
      setJson(''); document.getElementById('nomeArquivo').textContent = '';
      const div = document.getElementById('resultado'); div.style.display='none'; div.innerHTML='';
    });
    document.getElementById('fileInput').addEventListener('change', function(ev){
      const file = ev.target.files[0]; if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e){ setJson(e.target.result); document.getElementById('nomeArquivo').textContent = 'Arquivo carregado: ' + file.name; executarValidacao(); };
      reader.readAsText(file); ev.target.value = '';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  const obs = new MutationObserver(()=>setTimeout(init,50));
  const c = document.querySelector('.md-content'); if (c) obs.observe(c, {childList:true});
})();
</script>

