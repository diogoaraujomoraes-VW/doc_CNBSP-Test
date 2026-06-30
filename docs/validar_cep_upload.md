# Validador — CEP Upload

Verifique se o arquivo de **Upload** (planilha) do CEP está de acordo com o manual. A validação roda **localmente no seu navegador** — nada é enviado a nenhum servidor.

O arquivo de Upload é multi-linha: cada linha começa com **TIPOLINHA** (AC = Ato, PC = Parte, BC = Bem/Direito, AO = Ato de Origem, IP/CP/CA = Precatórios), e cada tipo de linha preenche suas próprias colunas.

**Como usar:**

1. Gere um modelo no painel abaixo **ou** anexe seu arquivo (.csv UTF-8 ou .xlsx)
2. Edite as células diretamente na tabela se precisar
3. Clique em **Validar** para conferir e em **Baixar CSV** para exportar

!!! note "Formato do arquivo"
    O SIGNO espera o arquivo no formato **CSV, UTF-8, separado por ponto-e-vírgula (`;`)** — é nesse formato que o botão "Baixar CSV" exporta. O upload de `.xlsx` é aceito aqui apenas como conveniência (a página converte para CSV durante a leitura).

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

<div class="validador-container">
  <div class="gerador-modelo">
    <div class="gerador-titulo">Gerar modelo de exemplo (Excel)</div>
    <div class="gerador-grid">
      <label class="gerador-campo">Tipo de ato
        <select id="selTipoAto">
          <option value="1">Escritura</option>
          <option value="2">Procuração</option>
          <option value="3">Procuração para Fins Previdenciários</option>
          <option value="4">Renúncia de Procuração</option>
          <option value="5">Revogação de Procuração</option>
          <option value="6">Substabelecimento</option>
          <option value="7">Ata Notarial</option>
          <option value="8">Procuração sem valor econômico</option>
        </select>
      </label>
      <label class="gerador-campo" id="lblNatureza">Natureza do ato
        <select id="selNatureza">
          <option value="1">Comum (compra e venda, etc.)</option>
          <option value="75">Conciliação</option>
          <option value="76">Mediação</option>
          <option value="77">Cessão de Precatórios</option>
        </select>
      </label>
    </div>
    <div class="gerador-grid">
      <label class="gerador-check"><input type="checkbox" id="chkBem"> Possui bens e direitos</label>
      <label class="gerador-campo" id="lblTipoBem" style="display:none;">Tipo do bem
        <select id="selTipoBem">
          <option value="2">Imóvel Urbano</option>
          <option value="1">Imóvel Rural</option>
          <option value="3">Precatório Judicial</option>
        </select>
      </label>
    </div>
    <button id="btnGerar" class="val-btn val-btn-gerar">Gerar modelo</button>
  </div>

  <div class="validador-toolbar">
    <label for="fileInput" class="val-btn val-btn-anexar"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>Anexar planilha (.xlsx ou .csv)</label>
    <input type="file" id="fileInput" accept=".xlsx,.xls,.csv" style="display:none;">
    <button id="btnValidar" class="val-btn val-btn-validar">Validar</button>
    <button id="btnBaixar" class="val-btn">Baixar CSV</button>
    <button id="btnLimpar" class="val-btn">Limpar</button>
  </div>
  <div id="nomeArquivo" class="validador-arquivo"></div>
  <div id="gridWrap" class="grid-wrap" style="display:none;">
    <div id="gridInfo" class="grid-info"></div>
    <div class="grid-scroll"><table id="gridTabela" class="grid-tabela"></table></div>
  </div>
  <div id="resultado" class="validador-resultado"></div>
</div>

<script>
(function(){
  const SCHEMA = {"header": ["TIPOLINHA", "TIPOATO", "NATUREZAATO", "STATUS", "OBSERVACAOATO", "DATAATO", "LIVROINICIAL", "COMPLEMENTOLIVROINICIAL", "LIVROFINAL", "COMPLEMENTOLIVROFINAL", "FOLHAINICIAL", "COMPLEMENTOFOLHAINICIAL", "FOLHAFINAL", "COMPLEMENTOFOLHAFINAL", "VALOROPERACAO", "PRAZOPAGAMENTO", "FORMAPAGAMENTO", "DATACONTRATO", "EXISTEBEMEDIREITO", "RESERVADEPODERES", "NATUREZALITIGIO", "ACORDO", "ORDEMPARTEATO", "QUALIDADEPARTE", "CPF", "NOMEPARTE", "NOMESOCIAL", "TIPODOCUMENTO", "DOCUMENTO", "ORGAOEMISSOR", "DATAEMISSAO", "DATANASCIMENTO", "GENERO", "ESTADOCIVIL", "NACIONALIDADE", "PAISNASCIMENTO", "AREAATUACAO", "PROFISSAO", "CAPACIDADECIVIL", "DATAOBITO", "FILIACAO", "NAOPOSSUIFILIACAO", "INSCRICAOESTADUAL", "DATACASAMENTO", "REGIMEBENS", "CPFCONJUGE", "NOMECONJUGE", "CEP", "RUA", "NUMERO", "COMPLEMENTO", "BAIRRO", "UF", "MUNICIPIO", "EMAIL", "TIPOCONTATO", "CONTATO", "TIPOBEMEDIREITO", "DESCRICAOBEM", "VARAJUDICIAL", "NUMEROPROCESSO", "NUMEROPRECATORIO", "VALOR", "TITULARES", "CIN", "REFERENCIACADASTRAL", "NUMEROCADASTRO", "TIPOIMOVEL", "ACESSAO", "UNIDADEAREATOTAL", "QUANTIDADEAREATOTAL", "UNIDADEAREACONSTRUIDA", "QUANTIDADEAREACONSTRUIDA", "VALORIMOVEL", "TIPOTRIBUTO", "VALORFISCAL", "CNM", "IMOVEL_CEP", "IMOVEL_RUA", "IMOVEL_NUMERO", "IMOVEL_COMPLEMENTO", "IMOVEL_BAIRRO", "IMOVEL_UF", "IMOVEL_MUNICIPIO", "ATOORIGEM_UF", "ATOORIGEM_MUNICIPIO", "ATOORIGEM_CARTORIOATUAL", "ATOORIGEM_CARTORIO", "ATOORIGEM_CARTORIONAOCADASTRADO", "ATOORIGEM_OBSERVACAO", "ATOORIGEM_TODOSATOSANTERIORES", "ATOORIGEM_TIPOATO", "ATOORIGEM_NATUREZAATO", "ATOORIGEM_LIVROINICIAL", "ATOORIGEM_COMPLEMENTOLIVROINICIAL", "ATOORIGEM_LIVROFINAL", "ATOORIGEM_COMPLEMENTOLIVROFINAL", "ATOORIGEM_FOLHAINICIAL", "ATOORIGEM_COMPLEMENTOFOLHAINICIAL", "ATOORIGEM_FOLHAFINAL", "ATOORIGEM_COMPLEMENTOFOLHAFINAL", "ORDEMINFORMACAOPRECATORIO", "DESCRICAOPRECATORIO", "NUMEROOFICIOREQUISITORIO", "NUMEROPROCESSOPRECATORIO", "VARAORIGEM", "TRIBUNAL", "VALORGLOBALPRECATORIO", "BENEFICIARIOS", "ORDEMCESSAOPRECATORIO", "INFORMACAOPRECATORIO", "ALIENACAOCESSAOPRECATORIO", "PARTESCESSAO", "CESSAONAOORIGINARIA", "TIPOATOCESSAOANTERIOR", "UFCARTORIOCESSAOANTERIOR", "MUNICIPIOCARTORIOCESSAOANTERIOR", "CARTORIOCESSAOANTERIOR", "LIVROINICIALCESSAOANTERIOR", "COMPLEMENTOLIVROINICIALCESSAOANTERIOR", "LIVROFINALCESSAOANTERIOR", "COMPLEMENTOLIVROFINALCESSAOANTERIOR", "FOLHAINICIALCESSAOANTERIOR", "COMPLEMENTOFOLHAINICIALCESSAOANTERIOR", "FOLHAFINALCESSAOANTERIOR", "COMPLEMENTOFOLHAFINALCESSAOANTERIOR", "DATAATOCESSAOANTERIOR", "ALIENACAOCESSAOANTERIOR", "ORDEMPARTECESSAOANTERIOR", "QUALIFICACAOPARTECESSAOANTERIOR", "NOMEPARTECESSAOANTERIOR", "CPFCNPJCESSAOANTERIOR", "PARTESCESSAOANTERIORES", ""], "ranges": {"AC": [0, 21], "PC": [22, 56], "BC": [57, 83], "AO": [84, 100], "IP": [101, 108], "CP": [109, 113], "CA": [114, 132]}, "columns": [{"idx": 0, "name": "TIPOLINHA", "lineType": "AC", "obrigatorio": true, "tipo": "string", "tamanho": 3, "dominio": ["AC", "PC", "BC", "AO", "IP", "CP", "PCA", "CA"], "skip": false}, {"idx": 1, "name": "TIPOATO", "lineType": "AC", "obrigatorio": true, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4", "5", "6", "7", "8"], "validacao": "-", "skip": false}, {"idx": 2, "name": "NATUREZAATO", "lineType": "AC", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": ["1", "4", "26", "5", "63", "6", "48", "56", "10", "74", "58", "14", "15", "17", "52", "55", "20", "21", "53", "22", "23", "59", "60", "54", "24", "25", "28", "57", "30", "49", "31", "33", "34", "36", "38", "39", "62", "35", "61", "43", "45", "50", "51", "46", "70", "71", "72", "75", "76", "77", "78", "79", "80", "81", "82", "83"], "validacao": "Campo habilitado somente quando o ato é “Escritura”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOATO", "valores": [1], "rotulo": "TIPOATO = Escritura (1)"}}, {"idx": 3, "name": "STATUS", "lineType": "AC", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "-", "dominio": ["10"], "validacao": null, "skip": true}, {"idx": 4, "name": "OBSERVACAOATO", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "Não deve ser preenchido quando o status do ato é \"válido\".", "skip": true}, {"idx": 5, "name": "DATAATO", "lineType": "AC", "obrigatorio": true, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "dominio": null, "validacao": "-", "skip": false}, {"idx": 6, "name": "LIVROINICIAL", "lineType": "AC", "obrigatorio": true, "tipo": "integer", "tamanho": 8, "formato": "00000000 (8 dígitos numéricos)", "dominio": null, "validacao": "-", "skip": false}, {"idx": 7, "name": "COMPLEMENTOLIVROINICIAL", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "dominio": null, "validacao": "Caso o livro não tenha complemento, esse campo deve ser enviado em branco.", "skip": false}, {"idx": 8, "name": "LIVROFINAL", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": null, "dominio": null, "skip": false, "naoMapeado": true}, {"idx": 9, "name": "COMPLEMENTOLIVROFINAL", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": null, "dominio": null, "skip": false, "naoMapeado": true}, {"idx": 10, "name": "FOLHAINICIAL", "lineType": "AC", "obrigatorio": false, "tipo": "integer", "tamanho": 6, "formato": "XX (2 – letras)", "dominio": null, "validacao": "Caso a folha não tenha complemento, esse campo deve ser enviado em branco.", "skip": false}, {"idx": 11, "name": "COMPLEMENTOFOLHAINICIAL", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": null, "dominio": null, "skip": false, "naoMapeado": true}, {"idx": 12, "name": "FOLHAFINAL", "lineType": "AC", "obrigatorio": true, "tipo": "integer", "tamanho": 6, "formato": "000 (3 dígitos numéricos)", "dominio": null, "validacao": "Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor do campo FOLHAINICIAL.", "skip": false}, {"idx": 13, "name": "COMPLEMENTOFOLHAFINAL", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 – letras)", "dominio": null, "validacao": "Caso a folha não tenha complemento, esse campo deve ser enviado em branco.", "skip": false}, {"idx": 14, "name": "VALOROPERACAO", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "R$ 0,00", "dominio": null, "validacao": "Somente para escritura", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOATO", "valores": [1], "rotulo": "TIPOATO = Escritura (1)"}}, {"idx": 15, "name": "PRAZOPAGAMENTO", "lineType": "AC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3"], "validacao": "Somente para escritura", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOATO", "valores": [1], "rotulo": "TIPOATO = Escritura (1)"}}, {"idx": 16, "name": "FORMAPAGAMENTO", "lineType": "AC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4", "5", "6"], "validacao": "Somente para escritura", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOATO", "valores": [1], "rotulo": "TIPOATO = Escritura (1)"}}, {"idx": 17, "name": "DATACONTRATO", "lineType": "AC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "dominio": null, "validacao": "=", "skip": false}, {"idx": 18, "name": "EXISTEBEMEDIREITO", "lineType": "AC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["0", "1"], "validacao": "-", "skip": false}, {"idx": 19, "name": "RESERVADEPODERES", "lineType": "AC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["0", "1"], "validacao": "Pode ser preenchido somente quando o ato é “Substabelecimento”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOATO", "valores": [6], "rotulo": "TIPOATO = Substabelecimento (6)"}}, {"idx": 20, "name": "NATUREZALITIGIO", "lineType": "AC", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"], "validacao": "Deve ser preenchido somente quando a Natureza do ato é \n“ Mediação “ ou “ Conciliação ”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "NATUREZAATO", "valores": [75, 76], "rotulo": "NATUREZAATO = Conciliação (75) ou Mediação (76)"}}, {"idx": 21, "name": "ACORDO", "lineType": "AC", "obrigatorio": true, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["0", "1"], "validacao": "Deve ser preenchido somente quando a Natureza do ato é \n“ Mediação “ ou “ Conciliação ”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "NATUREZAATO", "valores": [75, 76], "rotulo": "NATUREZAATO = Conciliação (75) ou Mediação (76)"}}, {"idx": 22, "name": "ORDEMPARTEATO", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 23, "name": "QUALIDADEPARTE", "lineType": "PC", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": null, "validacao": "-", "skip": false}, {"idx": 24, "name": "CPF", "lineType": "PC", "obrigatorio": true, "tipo": "integer", "tamanho": 14, "formato": "Preferencialmente sem pontos ou traços", "dominio": null, "validacao": "O campo passará a aceitar obrigatoriamente o CPF ou CNPJ. A nomenclatura por enquanto permanecerá a mesma", "skip": false}, {"idx": 25, "name": "NOMEPARTE", "lineType": "PC", "obrigatorio": true, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 26, "name": "NOMESOCIAL", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "Recomendado o preenchimento quando houver ciência que a parte possuir um nome social.", "skip": false}, {"idx": 27, "name": "TIPODOCUMENTO", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": ["1", "2", "3", "4", "5", "6", "7", "8", "9"], "validacao": "Campo obrigatório quando o atributo\n“Documento” for informado", "skip": false, "cond": {"tipo": "obrigatorioSeInformado", "campo": "DOCUMENTO", "rotulo": "DOCUMENTO for informado"}}, {"idx": 28, "name": "DOCUMENTO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 29, "name": "ORGAOEMISSOR", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": 100, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 30, "name": "DATAEMISSAO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "dominio": null, "validacao": "-", "skip": false}, {"idx": 31, "name": "DATANASCIMENTO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "dominio": null, "validacao": "-", "skip": false}, {"idx": 32, "name": "GENERO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "dominio": null, "skip": false, "naoMapeado": false}, {"idx": 33, "name": "ESTADOCIVIL", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4", "5", "6", "7"], "validacao": "-", "skip": false}, {"idx": 34, "name": "NACIONALIDADE", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": null, "validacao": null, "skip": false}, {"idx": 35, "name": "PAISNASCIMENTO", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 3, "formato": "000 (3 dígitos numéricos)", "dominio": null, "validacao": "-", "skip": false}, {"idx": 36, "name": "AREAATUACAO", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 2, "formato": "Lista de códigos do SINTER", "dominio": null, "validacao": "-", "skip": false}, {"idx": 37, "name": "PROFISSAO", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 3, "formato": "Lista de códigos do SINTER", "dominio": null, "validacao": "-", "skip": false}, {"idx": 38, "name": "CAPACIDADECIVIL", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3"], "validacao": "-", "skip": false}, {"idx": 39, "name": "DATAOBITO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "dominio": null, "validacao": null, "skip": false}, {"idx": 40, "name": "FILIACAO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Poderá ser preenchido somente quando o atributo “naopossuiFiliacao” for igual a 0", "skip": false}, {"idx": 41, "name": "NAOPOSSUIFILIACAO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["0", "1"], "validacao": "-", "skip": false}, {"idx": 42, "name": "INSCRICAOESTADUAL", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "Esse campo só é habilitado quando o tipo do documento for “CNPJ”", "skip": false}, {"idx": 43, "name": "DATACASAMENTO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "dd/mm/aaaa", "dominio": null, "validacao": "-", "skip": false}, {"idx": 44, "name": "REGIMEBENS", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "5", "7", "8"], "validacao": "-", "skip": false}, {"idx": 45, "name": "CPFCONJUGE", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 14, "formato": "00000000000\nOu\n000.000.000-00", "dominio": null, "validacao": "-", "skip": false}, {"idx": 46, "name": "NOMECONJUGE", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Campo obrigatório caso seja informado o cpfConjuge", "skip": false, "cond": {"tipo": "obrigatorioSeInformado", "campo": "CPFCONJUGE", "rotulo": "CPFCONJUGE for informado"}}, {"idx": 47, "name": "CEP", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 8, "formato": "00000000", "dominio": null, "validacao": "-", "skip": false}, {"idx": 48, "name": "RUA", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 49, "name": "NUMERO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 50, "name": "COMPLEMENTO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 51, "name": "BAIRRO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 52, "name": "UF", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 dígitos alfanuméricos)", "dominio": null, "validacao": "-", "skip": false}, {"idx": 53, "name": "MUNICIPIO", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 6, "formato": "000000 (6 dígitos)", "dominio": null, "validacao": "-", "skip": false}, {"idx": 54, "name": "EMAIL", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": null, "skip": false}, {"idx": 55, "name": "TIPOCONTATO", "lineType": "PC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2"], "validacao": "-", "skip": false}, {"idx": 56, "name": "CONTATO", "lineType": "PC", "obrigatorio": false, "tipo": "string", "tamanho": 100, "formato": "Somente números, sem traços ou caracteres especiais", "dominio": null, "validacao": "-", "skip": false}, {"idx": 57, "name": "TIPOBEMEDIREITO", "lineType": "BC", "obrigatorio": true, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3"], "validacao": "-", "skip": false}, {"idx": 58, "name": "DESCRICAOBEM", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 59, "name": "VARAJUDICIAL", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [3], "rotulo": "TIPOBEMEDIREITO = Precatório Judicial (3)"}}, {"idx": 60, "name": "NUMEROPROCESSO", "lineType": "BC", "obrigatorio": true, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [3], "rotulo": "TIPOBEMEDIREITO = Precatório Judicial (3)"}}, {"idx": 61, "name": "NUMEROPRECATORIO", "lineType": "BC", "obrigatorio": true, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [3], "rotulo": "TIPOBEMEDIREITO = Precatório Judicial (3)"}}, {"idx": 62, "name": "VALOR", "lineType": "BC", "obrigatorio": true, "tipo": "string", "tamanho": null, "formato": "R$ 0,00", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”valor", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [3], "rotulo": "TIPOBEMEDIREITO = Precatório Judicial (3)"}}, {"idx": 63, "name": "TITULARES", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "1,2,3,4", "dominio": null, "validacao": "-", "skip": false}, {"idx": 64, "name": "CIN", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 65, "name": "REFERENCIACADASTRAL", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4"], "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 66, "name": "NUMEROCADASTRO", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 67, "name": "TIPOIMOVEL", "lineType": "BC", "obrigatorio": true, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4", "5", "6", "7", "8", "9"], "validacao": "Esse campo só deverá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 68, "name": "ACESSAO", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": 4, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4", "5", "6", "7", "8"], "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 69, "name": "UNIDADEAREATOTAL", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3"], "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 70, "name": "QUANTIDADEAREATOTAL", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": null, "formato": "0,00", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 71, "name": "UNIDADEAREACONSTRUIDA", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3"], "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 72, "name": "QUANTIDADEAREACONSTRUIDA", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": null, "formato": "0,00", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 73, "name": "VALORIMOVEL", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "R$ 0,00", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 74, "name": "TIPOTRIBUTO", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4"], "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 75, "name": "VALORFISCAL", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "R$ 0,00", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 76, "name": "CNM", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 77, "name": "IMOVEL_CEP", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": 8, "formato": "00000000", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 78, "name": "IMOVEL_RUA", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 79, "name": "IMOVEL_NUMERO", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 80, "name": "IMOVEL_COMPLEMENTO", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 81, "name": "IMOVEL_BAIRRO", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "-", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 82, "name": "IMOVEL_UF", "lineType": "BC", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 dígitos alfanuméricos)", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 83, "name": "IMOVEL_MUNICIPIO", "lineType": "BC", "obrigatorio": false, "tipo": "integer", "tamanho": 6, "formato": "000000 (6 dígitos)", "dominio": null, "validacao": "Esse campo só poderá ser preenchido quando o tipo do bem for \n“Imóvel Rural” ou “imóvel Urbano”", "skip": false, "cond": {"tipo": "somenteQuando", "campo": "TIPOBEMEDIREITO", "valores": [1, 2], "rotulo": "TIPOBEMEDIREITO = Imóvel Rural (1) ou Urbano (2)"}}, {"idx": 84, "name": "ATOORIGEM_UF", "lineType": "AO", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 dígitos alfanuméricos)", "dominio": null, "validacao": "Se torna obrigatório no envio de ato por DIGITAÇÃO como filtro para conseguir preencher o campo \"Cartório\"", "skip": false}, {"idx": 85, "name": "ATOORIGEM_MUNICIPIO", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 6, "formato": "000000 (6 dígitos)", "dominio": null, "validacao": "Se torna obrigatório no envio de ato por DIGITAÇÃO como filtro para conseguir preencher o campo \"Cartório\"", "skip": false}, {"idx": 86, "name": "ATOORIGEM_CARTORIOATUAL", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["0", "1"], "validacao": "Se torna obrigatório somente no envio de ato por DIGITAÇÃO como facilitador para se conseguir preencher o campo \"Cartório\"", "skip": false}, {"idx": 87, "name": "ATOORIGEM_CARTORIO", "lineType": "AO", "obrigatorio": false, "tipo": "string", "tamanho": 6, "formato": "XXXXXX (CNS que identifica o cartório)", "dominio": null, "validacao": null, "skip": false}, {"idx": 88, "name": "ATOORIGEM_CARTORIONAOCADASTRADO", "lineType": "AO", "obrigatorio": true, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["0", "1"], "validacao": "Quando seu valor for \"1\" este desobriga o preenchimento das informações do cartório.", "skip": false}, {"idx": 89, "name": "ATOORIGEM_OBSERVACAO", "lineType": "AO", "obrigatorio": false, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 90, "name": "ATOORIGEM_TODOSATOSANTERIORES", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["0", "1"], "validacao": "-", "skip": false}, {"idx": 91, "name": "ATOORIGEM_TIPOATO", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2", "3", "4", "5", "6", "7"], "validacao": "Esse campo é desabilitado se o valor do campo\n “ATOORIGEM_TODOSATOSANTERIORES” for “Sim”", "skip": false}, {"idx": 92, "name": "ATOORIGEM_NATUREZAATO", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": ["11"], "validacao": "Preenchido somente quando o ato é “Escritura”\n\nEsse campo é desabilitado se o valor do campo\n “ATOORIGEM_TODOSATOSANTERIORES” for “Sim”", "skip": false}, {"idx": 93, "name": "ATOORIGEM_LIVROINICIAL", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 8, "formato": "00000000 (8 dígitos numéricos)", "dominio": null, "validacao": "-", "skip": false}, {"idx": 94, "name": "ATOORIGEM_COMPLEMENTOLIVROINICIAL", "lineType": "AO", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "dominio": null, "validacao": "Caso o livro não tenha complemento, esse campo deve ser enviado em branco.", "skip": false}, {"idx": 95, "name": "ATOORIGEM_LIVROFINAL", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 8, "formato": "00000000 (8 dígitos numéricos)", "dominio": null, "validacao": "Caso o ato tenha sido lavrado em um único livro esse campo deve ser preenchido com o mesmo valor do campo ATOORIGEM_LIVROINICIAL", "skip": false}, {"idx": 96, "name": "ATOORIGEM_COMPLEMENTOLIVROFINAL", "lineType": "AO", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "dominio": null, "validacao": "Caso o livro não tenha complemento, esse campo deve ser enviado em branco.", "skip": false}, {"idx": 97, "name": "ATOORIGEM_FOLHAINICIAL", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 3, "formato": "000 (3 dígitos numéricos)", "dominio": null, "validacao": "-", "skip": false}, {"idx": 98, "name": "ATOORIGEM_COMPLEMENTOFOLHAINICIAL", "lineType": "AO", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 – letras)", "dominio": null, "validacao": "Caso a folha não tenha complemento, esse campo deve ser enviado em branco.", "skip": false}, {"idx": 99, "name": "ATOORIGEM_FOLHAFINAL", "lineType": "AO", "obrigatorio": false, "tipo": "integer", "tamanho": 3, "formato": "000 (3 dígitos numéricos)", "dominio": null, "validacao": "Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo ATOORIGEM_FOLHAINICIAL.", "skip": false}, {"idx": 100, "name": "ATOORIGEM_COMPLEMENTOFOLHAFINAL", "lineType": "AO", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 – letras)", "dominio": null, "validacao": "Caso a folha não tenha complemento, esse campo deve ser enviado em branco.", "skip": false}, {"idx": 101, "name": "ORDEMINFORMACAOPRECATORIO", "lineType": "IP", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 102, "name": "DESCRICAOPRECATORIO", "lineType": "IP", "obrigatorio": false, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 103, "name": "NUMEROOFICIOREQUISITORIO", "lineType": "IP", "obrigatorio": false, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 104, "name": "NUMEROPROCESSOPRECATORIO", "lineType": "IP", "obrigatorio": true, "tipo": "string", "tamanho": 20, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 105, "name": "VARAORIGEM", "lineType": "IP", "obrigatorio": true, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 106, "name": "TRIBUNAL", "lineType": "IP", "obrigatorio": true, "tipo": "string", "tamanho": 5, "formato": "-", "dominio": null, "validacao": "Lista na aba \"Tribunais\" desta planilha", "skip": false}, {"idx": 107, "name": "VALORGLOBALPRECATORIO", "lineType": "IP", "obrigatorio": true, "tipo": "string", "tamanho": null, "formato": "R$ 0,00", "dominio": null, "validacao": "-", "skip": false}, {"idx": 108, "name": "BENEFICIARIOS", "lineType": "IP", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "1,2,3,4", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 109, "name": "ORDEMCESSAOPRECATORIO", "lineType": "CP", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 110, "name": "INFORMACAOPRECATORIO", "lineType": "CP", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "1,2,3,4", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 111, "name": "ALIENACAOCESSAOPRECATORIO", "lineType": "CP", "obrigatorio": true, "tipo": "integer", "tamanho": 3, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 112, "name": "PARTESCESSAO", "lineType": "CP", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "1,2,3,4", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 113, "name": "CESSAONAOORIGINARIA", "lineType": "CP", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "1,2,3,4", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 114, "name": "TIPOATOCESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "integer", "tamanho": 1, "formato": "0 (1 dígito numérico)", "dominio": ["1", "2"], "validacao": "-", "skip": false}, {"idx": 115, "name": "UFCARTORIOCESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "string", "tamanho": 2, "formato": "XX (2 dígitos alfanuméricos)", "dominio": null, "validacao": "Preenchido somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 116, "name": "MUNICIPIOCARTORIOCESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "integer", "tamanho": 6, "formato": "000000 (6 dígitos)", "dominio": null, "validacao": "Preenchido somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 117, "name": "CARTORIOCESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "string", "tamanho": 6, "formato": "XXXXXX (CNS que identifica o cartório)", "dominio": null, "validacao": "Preenchido somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 118, "name": "LIVROINICIALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "integer", "tamanho": 8, "formato": "00000000 (8 dígitos numéricos)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 119, "name": "COMPLEMENTOLIVROINICIALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 120, "name": "LIVROFINALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "integer", "tamanho": 8, "formato": "00000000 (8 dígitos numéricos)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 121, "name": "COMPLEMENTOLIVROFINALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "string", "tamanho": 1, "formato": "X (letra)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 122, "name": "FOLHAINICIALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "integer", "tamanho": 6, "formato": "000 (3 dígitos numéricos)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 123, "name": "COMPLEMENTOFOLHAINICIALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 – letras)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 124, "name": "FOLHAFINALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "integer", "tamanho": 3, "formato": "000 (3 dígitos numéricos)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 125, "name": "COMPLEMENTOFOLHAFINALCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "string", "tamanho": 2, "formato": "XX (2 – letras)", "dominio": null, "validacao": "Preenchido opcionalmente somente quando a cessão anterior for \"pública\"", "skip": false}, {"idx": 126, "name": "DATAATOCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "XX/XX/XXXX", "dominio": null, "validacao": "-", "skip": false}, {"idx": 127, "name": "ALIENACAOCESSAOANTERIOR", "lineType": "CA", "obrigatorio": false, "tipo": "integer", "tamanho": 3, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 128, "name": "ORDEMPARTECESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}, {"idx": 129, "name": "QUALIFICACAOPARTECESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "integer", "tamanho": 2, "formato": "00 (2 dígitos numéricos)", "dominio": ["10", "11", "12"], "validacao": "-", "skip": false}, {"idx": 130, "name": "NOMEPARTECESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "string", "tamanho": 255, "formato": "-", "dominio": null, "validacao": "-", "skip": false}, {"idx": 131, "name": "CPFCNPJCESSAOANTERIOR", "lineType": "CA", "obrigatorio": true, "tipo": "integer", "tamanho": 14, "formato": "00000000000\nOu\n000.000.000-00\nOu\n00000000000000\nOu\n00.000.000/0000-00", "dominio": null, "validacao": "-", "skip": false}, {"idx": 132, "name": "PARTESCESSAOANTERIORES", "lineType": "CA", "obrigatorio": false, "tipo": "string", "tamanho": null, "formato": "1,2,3,4", "dominio": null, "validacao": "UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD", "skip": false}]};
  const RANGES = SCHEMA.ranges;
  const HEADER = SCHEMA.header;

  function ausente(v){ return v === undefined || v === null || String(v).trim() === ""; }
  function headerIdx(){ const m={}; HEADER.forEach((h,i)=>{ const k=String(h).trim().toUpperCase(); if(!(k in m)) m[k]=i; }); return m; }

  // ---------- VALORES DE EXEMPLO ----------
  const VALORES_CUSTOM = {
    DATAATO:"15/03/2026", DATACONTRATO:"15/03/2026", DATANASCIMENTO:"01/01/1980",
    CPF:"12345678901", NOMEPARTE:"Maria Souza Lima",
    LIVROINICIAL:"250", FOLHAINICIAL:"120", FOLHAFINAL:"122",
    VALOROPERACAO:"350000", VALOR:"50000", VALORGLOBALPRECATORIO:"50000",
    NUMEROPROCESSO:"0001234-56.2025.8.26.0100", NUMEROPRECATORIO:"12345",
    VARAJUDICIAL:"1a Vara Civel", DESCRICAOBEM:"Bem de exemplo",
    TITULARES:"12345678901", ORDEMPARTEATO:"1"
  };
  function valorExemplo(col){
    const nm = col.name.toUpperCase();
    if (VALORES_CUSTOM[nm] !== undefined) return VALORES_CUSTOM[nm];
    if (col.dominio && col.dominio.length){ const d=col.dominio[0]; return /^\d+$/.test(d)?d:d; }
    if (col.tipo==='integer') return "1";
    if (col.tipo==='double') return "100";
    if (col.tipo==='string'){ if(col.formato && /dd\/mm\/aaaa/i.test(col.formato)) return "15/03/2026"; return col.tamanho ? "ex".slice(0,col.tamanho) : "exemplo"; }
    return "exemplo";
  }

  // ---------- GERADOR ----------
  function condMetCtx(cond, row, idx){
    const i = idx[cond.campo.toUpperCase()];
    const v = i===undefined ? '' : row[i];
    if (cond.valores) return cond.valores.map(String).includes(String(v).trim());
    return !ausente(v);
  }
  function deveIncluir(col, row, idx){
    if (col.cond){
      const c=col.cond;
      if (c.tipo==='somenteQuando') return col.obrigatorio && condMetCtx(c,row,idx);
      if (c.tipo==='obrigatorioQuando') return condMetCtx(c,row,idx);
      if (c.tipo==='obrigatorioSeInformado') return false;
    }
    return !!col.obrigatorio;
  }

  function gerarLinhas(opts){
    const idx = headerIdx();
    const n = HEADER.length;
    const acDrivers = { TIPOLINHA:'AC', TIPOATO:opts.tipoAto, EXISTEBEMEDIREITO: opts.temBem?1:0 };
    if (opts.tipoAto===1) acDrivers.NATUREZAATO = opts.naturezaAto;

    function montar(lineType, drivers){
      const row = new Array(n).fill('');
      row[idx['TIPOLINHA']] = lineType;
      for (const k in drivers){ const i=idx[k.toUpperCase()]; if(i!==undefined) row[i]=drivers[k]; }
      SCHEMA.columns.forEach(col=>{
        if (col.lineType !== lineType || col.skip) return;
        const ci = idx[col.name.toUpperCase()];
        if (row[ci] !== '') return;
        if (deveIncluir(col, row, idx)) row[ci] = valorExemplo(col);
      });
      return row;
    }

    const acRow = montar('AC', acDrivers);
    const linhas = [acRow];

    // PC: partes mínimas conforme tipo de ato/natureza
    function partesMinimas(o){
      const t=o.tipoAto, n=o.naturezaAto;
      const P=(q,nome,cpf)=>({QUALIDADEPARTE:q,NOMEPARTE:nome,CPF:cpf});
      if (t===1 && n===76) return [P(6,"Joao Requerente","11111111111"),P(7,"Maria Requerida","22222222222"),P(9,"Carlos Mediador","33333333333")];
      if (t===1 && n===75) return [P(6,"Joao Requerente","11111111111"),P(7,"Maria Requerida","22222222222"),P(8,"Carlos Conciliador","33333333333")];
      if (t===1 && n===77) return [P(10,"Empresa Cedente Ltda","11111111111111"),P(11,"Maria Beneficiaria","22222222222"),P(12,"Joao Cessionario","33333333333")];
      if (t===6) return [P(5,"Ana Mandante","11111111111"),P(2,"Maria Outorgante","22222222222"),P(1,"Joao Outorgado","33333333333")];
      return [P(2,"Maria Souza Lima","12345678901"),P(1,"Joao Carlos Pereira","98765432100")];
    }
    const partes = partesMinimas(opts).map((p,i)=>Object.assign({ORDEMPARTEATO:i+1}, p));
    partes.forEach(p=>{
      const r = acRow.slice();
      r[idx['TIPOLINHA']] = 'PC';
      // preenche obrigatórios de PC
      SCHEMA.columns.forEach(col=>{
        if (col.lineType!=='PC' || col.skip) return;
        const ci=idx[col.name.toUpperCase()];
        if (deveIncluir(col,r,idx) && r[ci]==='') r[ci]=valorExemplo(col);
      });
      for (const k in p){ const i=idx[k.toUpperCase()]; if(i!==undefined) r[i]=p[k]; }
      linhas.push(r);
    });

    // BC
    if (opts.temBem){
      const r = acRow.slice();
      r[idx['TIPOLINHA']] = 'BC';
      r[idx['TIPOBEMEDIREITO']] = opts.tipoBem;
      SCHEMA.columns.forEach(col=>{
        if (col.lineType!=='BC' || col.skip) return;
        const ci=idx[col.name.toUpperCase()];
        if (deveIncluir(col,r,idx) && r[ci]==='') r[ci]=valorExemplo(col);
      });
      linhas.push(r);
    }
    // IP: informações do precatório (somente Cessão de Precatórios, nat 77)
    if (opts.tipoAto===1 && opts.naturezaAto===77){
      const r = acRow.slice();
      r[idx['TIPOLINHA']] = 'IP';
      SCHEMA.columns.forEach(col=>{
        if (col.lineType!=='IP' || col.skip) return;
        const ci=idx[col.name.toUpperCase()];
        if (deveIncluir(col,r,idx) && r[ci]==='') r[ci]=valorExemplo(col);
      });
      linhas.push(r);
    }
    return [HEADER].concat(linhas);
  }

  // ---------- VALIDAÇÃO ----------
  function valorCol(row, idx, nome){ const i=idx[nome.toUpperCase()]; return i===undefined?undefined:row[i]; }
  function avaliarCond(cond, row, idx){
    const v = valorCol(row, idx, cond.campo);
    if (cond.valores) return cond.valores.map(String).includes(String(v==null?'':v).trim());
    return !ausente(v);
  }

  function validarCelula(valor, col, row, idx, linha, lt, erros){
    const v = (valor==null)?'':String(valor).trim();
    const vazio = v==='';
    if (col.cond){
      const c=col.cond;
      if (c.tipo==='obrigatorioSeInformado'){
        if (!ausente(valorCol(row,idx,c.campo)) && vazio){ erros.push({linha,lt,campo:col.name,msg:'obrigatório quando '+c.rotulo}); return; }
      } else if (c.tipo==='somenteQuando'){
        const cm = avaliarCond(c,row,idx);
        if (!vazio && !cm){ erros.push({linha,lt,campo:col.name,msg:'só deve ser preenchido quando '+c.rotulo}); return; }
        if (vazio){ if (cm && col.obrigatorio) erros.push({linha,lt,campo:col.name,msg:'obrigatório quando '+c.rotulo}); return; }
      }
    }
    if (vazio){ if (col.obrigatorio) erros.push({linha,lt,campo:col.name,msg:'campo obrigatório vazio'}); return; }
    if (col.tipo==='integer'){
      if (!/^-?\d+$/.test(v)) erros.push({linha,lt,campo:col.name,msg:'deveria ser número inteiro (recebido "'+v+'")'});
      else if (col.tamanho && v.replace('-','').length>col.tamanho) erros.push({linha,lt,campo:col.name,msg:'excede '+col.tamanho+' dígitos'});
    } else if (col.tipo==='double'){
      if (isNaN(Number(v.replace(',','.')))) erros.push({linha,lt,campo:col.name,msg:'deveria ser número'});
    } else if (col.tipo==='string'){
      if (col.tamanho && v.length>col.tamanho) erros.push({linha,lt,campo:col.name,msg:'excede '+col.tamanho+' caracteres'});
      if (col.formato && /dd\/mm\/aaaa/i.test(col.formato) && !/^\d{2}\/\d{2}\/\d{4}$/.test(v)) erros.push({linha,lt,campo:col.name,msg:'data deve estar no formato dd/mm/aaaa'});
    }
    if (col.dominio && col.dominio.length && !col.dominio.map(String).includes(v))
      erros.push({linha,lt,campo:col.name,msg:'valor "'+v+'" fora do domínio ('+col.dominio.join(', ')+')'});
  }

  function requisitosQualif(tipoAto, naturezaAto){
    const t = parseInt(tipoAto,10), n = parseInt(naturezaAto,10);
    const NOMES = {1:'Outorgado',2:'Outorgante',3:'Interveniente',4:'Usufruto',5:'Mandante',6:'Requerente',7:'Requerido',8:'Conciliador',9:'Mediador',10:'Cedente',11:'Beneficiário',12:'Cessionário'};
    const R = q => ({qual:q, min:1, nome:NOMES[q]});
    if (t===6) return [R(5)];
    if (t===1 && n===46) return [R(4)];
    if (t===1 && n===76) return [R(6),R(7),R(9)];
    if (t===1 && n===75) return [R(6),R(7),R(8)];
    if (t===1 && n===77) return [R(10),R(11),R(12)];
    return [];
  }

  function validar(rows){
    const erros = [];
    if (!rows || rows.length < 2) return [{linha:0,lt:'',campo:'',msg:'Arquivo vazio ou sem linhas de dados'}];
    const head = rows[0].map(h=>String(h).trim().toUpperCase());
    const idx = {}; head.forEach((h,i)=>{ if(!(h in idx)) idx[h]=i; });
    if (idx['TIPOLINHA']===undefined) return [{linha:1,lt:'',campo:'',msg:'Cabeçalho sem a coluna TIPOLINHA — confira se é o modelo correto do CEP Upload'}];

    let grupoAtual = null; const grupos = [];
    for (let r=1; r<rows.length; r++){
      const row = rows[r];
      if (!row || row.every(c=>String(c).trim()==='')) continue;
      const lt = String(row[idx['TIPOLINHA']]||'').trim().toUpperCase();
      if (!lt) continue;
      const valido = RANGES[lt] || lt==='PCA';
      if (!valido){ erros.push({linha:r+1,lt,campo:'TIPOLINHA',msg:'tipo de linha desconhecido: "'+lt+'"'}); continue; }
      // valida colunas do tipo
      SCHEMA.columns.forEach(col=>{
        if (col.skip) return;
        if (col.name.toUpperCase()!=='TIPOLINHA' && col.lineType!==lt) return;
        const ci = idx[col.name.toUpperCase()];
        if (ci===undefined) return;
        validarCelula(row[ci], col, row, idx, r+1, lt, erros);
      });
      // agrupar por ato
      if (lt==='AC'){ grupoAtual = {linha:r+1, row, filhos:{}, quals:{}}; grupos.push(grupoAtual); }
      else if (grupoAtual){
        grupoAtual.filhos[lt]=(grupoAtual.filhos[lt]||0)+1;
        if (lt==='PC'){ const q=String(row[idx['QUALIDADEPARTE']]||'').trim(); if(q) grupoAtual.quals[q]=(grupoAtual.quals[q]||0)+1; }
      }
    }
    // checagens de grupo
    grupos.forEach(g=>{
      if (!g.filhos['PC']) erros.push({linha:g.linha,lt:'AC',campo:'(grupo)',msg:'todo ato (AC) precisa de pelo menos uma parte (linha PC)'});
      const existeBem = String(g.row[idx['EXISTEBEMEDIREITO']]||'').trim();
      if (existeBem==='1' && !g.filhos['BC']) erros.push({linha:g.linha,lt:'AC',campo:'(grupo)',msg:'EXISTEBEMEDIREITO=1 exige pelo menos uma linha de bem (BC)'});
      const reqs = requisitosQualif(g.row[idx['TIPOATO']], g.row[idx['NATUREZAATO']]);
      reqs.forEach(req=>{
        if ((g.quals[String(req.qual)]||0) < req.min)
          erros.push({linha:g.linha,lt:'AC',campo:'(partes)',msg:'o ato exige ao menos '+req.min+' parte com qualificação "'+req.nome+'" (QUALIDADEPARTE = '+req.qual+')'});
      });
      // Cessão de Precatórios (nat 77): exige linha IP; IP/CP/CA não devem aparecer fora de Cessão
      const tipoAtoG = String(g.row[idx['TIPOATO']]||'').trim();
      const natG = String(g.row[idx['NATUREZAATO']]||'').trim();
      const ehCessao = (tipoAtoG==='1' && natG==='77');
      if (ehCessao && !g.filhos['IP'])
        erros.push({linha:g.linha,lt:'AC',campo:'(precatório)',msg:'Cessão de Precatórios (natureza 77) exige ao menos uma linha de informação do precatório (IP)'});
      if (!ehCessao){
        ['IP','CP','CA','PCA'].forEach(t=>{
          if (g.filhos[t]) erros.push({linha:g.linha,lt:'AC',campo:'(precatório)',msg:'linha '+t+' só deve ser usada em Cessão de Precatórios (natureza 77)'});
        });
      }
    });
    return erros;
  }

  // ---------- LEITURA DE ARQUIVO ----------
  function lerArquivo(file, cb){
    const nome = file.name.toLowerCase();
    const reader = new FileReader();
    if (nome.endsWith('.csv')){
      reader.onload = e => {
        const txt = e.target.result;
        const linhas = txt.split(/\r?\n/).filter(l=>l.length);
        const sep = (linhas[0].split(';').length > linhas[0].split(',').length) ? ';' : ',';
        const rows = linhas.map(l => l.split(sep).map(c=>c.replace(/^"|"$/g,'').trim()));
        cb(rows);
      };
      reader.readAsText(file, 'UTF-8');
    } else {
      reader.onload = e => {
        const wb = XLSX.read(new Uint8Array(e.target.result), {type:'array'});
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, {header:1, defval:'', raw:false});
        cb(rows);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  // ---------- RENDER ----------
  function render(erros){
    const div = document.getElementById('resultado');
    const er = erros.filter(e=>e.msg);
    let html='';
    if (er.length===0){
      html = '<div class="val-ok">✓ Arquivo válido! Todas as linhas seguem as regras do manual.</div>';
    } else {
      html = '<div class="val-erro-titulo">✗ '+er.length+' erro(s) encontrado(s):</div><ul class="val-lista">';
      er.slice(0,300).forEach(e=>{
        const loc = e.linha ? ('Linha '+e.linha+(e.lt?' ('+e.lt+')':'')+' · ') : '';
        html += '<li>'+loc+'<code>'+e.campo+'</code> — '+e.msg+'</li>';
      });
      html += '</ul>';
      if (er.length>300) html += '<p>... e mais '+(er.length-300)+' erro(s).</p>';
    }
    div.innerHTML = html; div.style.display='block';
  }

  function mostrar(el, vis){ if(el) el.style.setProperty('display', vis ? 'flex' : 'none', 'important'); }
  function atualizarVisibilidade(){
    const tipoAto = parseInt(document.getElementById('selTipoAto').value,10);
    mostrar(document.getElementById('lblNatureza'), tipoAto===1);
    mostrar(document.getElementById('lblTipoBem'), document.getElementById('chkBem').checked);
  }

  // ---------- GRADE ESTILO EXCEL ----------
  let dados = [];
  const GRID_CAP = 200;
  function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function renderGrid(){
    const wrap=document.getElementById('gridWrap'), tabela=document.getElementById('gridTabela'), info=document.getElementById('gridInfo');
    if (!dados || dados.length<1){ wrap.style.display='none'; return; }
    const header=dados[0], total=dados.length-1, mostradas=Math.min(total, GRID_CAP);
    let h='<thead><tr><th class="grid-num">#</th>';
    header.forEach(c=> h+='<th>'+escapeHtml(c)+'</th>');
    h+='</tr></thead><tbody>';
    for (let r=1; r<=mostradas; r++){
      const row=dados[r]||[]; const lt=String(row[0]||'').trim().toUpperCase();
      h+='<tr data-row="'+r+'" class="grid-lt grid-lt-'+lt+'"><td class="grid-num">'+r+'</td>';
      for (let c=0;c<header.length;c++){ h+='<td contenteditable="true" data-col="'+c+'">'+escapeHtml(row[c]==null?'':row[c])+'</td>'; }
      h+='</tr>';
    }
    h+='</tbody>'; tabela.innerHTML=h;
    info.textContent = total>GRID_CAP ? ('Mostrando as primeiras '+GRID_CAP+' de '+total+' linhas — edite e clique em Validar (todas as linhas são validadas).') : (total+' linha(s) — edite as células e clique em Validar.');
    wrap.style.display='block';
  }

  function lerGrid(){
    const tabela=document.getElementById('gridTabela');
    if (!tabela) return;
    tabela.querySelectorAll('tbody tr').forEach(tr=>{
      const r=parseInt(tr.getAttribute('data-row'),10);
      tr.querySelectorAll('td[contenteditable]').forEach(td=>{
        const c=parseInt(td.getAttribute('data-col'),10);
        if (dados[r]) dados[r][c]=td.textContent.trim();
      });
    });
  }

  function exportarCSV(){
    if (!dados.length){ alert('Nada para exportar — gere um modelo ou anexe um arquivo primeiro.'); return; }
    lerGrid();
    // CSV UTF-8 com BOM, separador ;, células com ; " ou quebra de linha entre aspas
    const linhas = dados.map(row => row.map(c => {
      const v = c==null ? '' : String(c);
      return /[;"\r\n]/.test(v) ? '"'+v.replace(/"/g,'""')+'"' : v;
    }).join(';'));
    const csv = '\ufeff' + linhas.join('\r\n');
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='cep_upload.csv';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
  }

  function init(){
    const btnGerar = document.getElementById('btnGerar');
    if (!btnGerar || btnGerar.dataset.ready==='1') return;
    btnGerar.dataset.ready='1';

    const selTipoAto=document.getElementById('selTipoAto'), chkBem=document.getElementById('chkBem');
    selTipoAto.addEventListener('change', atualizarVisibilidade);
    chkBem.addEventListener('change', atualizarVisibilidade);
    atualizarVisibilidade();

    btnGerar.addEventListener('click', function(){
      const opts = {
        tipoAto: parseInt(selTipoAto.value,10),
        naturezaAto: parseInt(document.getElementById('selNatureza').value,10),
        temBem: chkBem.checked,
        tipoBem: parseInt(document.getElementById('selTipoBem').value,10)
      };
      dados = gerarLinhas(opts);
      document.getElementById('nomeArquivo').textContent = 'Modelo gerado — edite na tabela abaixo se quiser.';
      renderGrid();
      render(validar(dados));
    });

    document.getElementById('fileInput').addEventListener('change', function(ev){
      const file = ev.target.files[0]; if(!file) return;
      document.getElementById('nomeArquivo').textContent = 'Arquivo: '+file.name;
      lerArquivo(file, function(rows){ dados = rows; renderGrid(); render(validar(dados)); });
      ev.target.value='';
    });
    document.getElementById('btnValidar').addEventListener('click', function(){
      if (!dados.length){ alert('Gere um modelo ou anexe um arquivo primeiro.'); return; }
      lerGrid(); render(validar(dados));
    });
    document.getElementById('btnBaixar').addEventListener('click', exportarCSV);
    document.getElementById('btnLimpar').addEventListener('click', function(){
      dados=[]; document.getElementById('nomeArquivo').textContent='';
      document.getElementById('gridWrap').style.display='none';
      document.getElementById('gridTabela').innerHTML='';
      const div=document.getElementById('resultado'); div.style.display='none'; div.innerHTML='';
    });
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  const obs=new MutationObserver(()=>setTimeout(init,50));
  const c=document.querySelector('.md-content'); if(c) obs.observe(c,{childList:true});
})();
</script>
