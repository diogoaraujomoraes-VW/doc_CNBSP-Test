# CEP - Envio por API

## Informações do recurso

| Propriedade | Valor |
|-------------|-------|
| Formato de entrada | JSON |
| Método | POST |
| Formato de resposta | JSON |
| Requer autenticação | SIM |

## Respostas da API

| Código | Descrição |
|--------|-----------|
| 200 | Ato cadastrado com sucesso |
| 201 | Created |
| 401 | Token inválido |
| 403 | Erro na validação dos dados |
| 404 | Not found |
| 500 | Erro no servidor |

---

## Campos e parâmetros de envio


### Informações do ato


#### `tipoAto`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 1 | 0 (1 dígito numérico) | Tipo do ato que foi lavrado no cartório |

| Código | Descrição |
|--------|-----------|
| 1 | Escritura |
| 2 | Procuração |
| 3 | Procuração para Fins Previdenciários |
| 4 | Renúncia de Procuração |
| 5 | Revogação de Procuração |
| 6 | Substabelecimento |
| 7 | Ata Notarial |
| 8 | Procuração sem valor econômico |


#### `naturezaAto`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 2 | 00 (2 dígitos numéricos) | Campo de lista de natureza do ato. |

> **Validação:** Campo habilitado somente quando o ato é “Escritura”


| Código | Descrição |
|--------|-----------|
| 1 | ACORDO EXTRAJUDICIAL |
| 4 | ALIENAÇÃO FIDUCIÁRIA |
| 26 | BEM DE FAMÍLIA |
| 5 | CESSÃO |
| 63 | COMODATO/MÚTUO |
| 6 | COMPRA E VENDA |
| 48 | CONDOMÍNIO |
| 56 | CONFERÊNCIA DE BENS |
| 10 | CONFISSÃO DE DÍVIDA |
| 74 | CONTRATO DE NAMORO |
| 58 | OUTRAS GARANTIAS |
| 14 | DECLARAÇÃO |
| 15 | DECLARATÓRIA DE UNIÃO ESTÁVEL |
| 17 | DESAPROPRIAÇÃO |
| 52 | DIREITO DE USO OU SUPERFÍCIE |
| 55 | DIRETIVAS ANTECIPADAS DE VONTADE (testamento vital) |
| 20 | DISSOLUÇÃO DE UNIÃO ESTÁVEL |
| 21 | DISTRATO |
| 53 | DIVISÃO AMIGÁVEL |
| 22 | DOAÇÃO |
| 23 | EMANCIPAÇÃO |
| 59 | EMISSÃO DE CÉDULA |
| 60 | EMISSÃO DE DEBÊNTURES |
| 54 | FIANÇA |
| 24 | HIPOTECA |
| 25 | INCORPORAÇÃO |
| 28 | LOCAÇÃO |
| 57 | NOVAÇÃO |
| 30 | PACTO ANTENUPCIAL |
| 49 | PARCELAMENTO |
| 31 | PENHOR |
| 33 | PROMESSAS |
| 34 | QUITAÇÃO |
| 36 | RECONHECIMENTO DE PATERNIDADE |
| 38 | REGISTRO DE CHANCELA MECÂNICA |
| 39 | REMISSÃO DE FORO E LAUDÊMIOS |
| 62 | RENÚNCIA DE DIREITOS HEREDITÁRIOS |
| 35 | RERRATIFICAÇÃO |
| 61 | REVOGAÇÃO |
| 43 | SEM VALOR DECLARADO |
| 45 | SERVIDÃO |
| 50 | SOCIEDADE E FUNDAÇÕES |
| 51 | TRANSAÇÃO |
| 46 | USUFRUTO (reserva, instituição e renúncia) |
| 70 | PRESTAÇÃO DE SERVIÇOS |
| 71 | ARRENDAMENTO MERCANTIL (LEASING) |
| 72 | CONCESSÃO DE DOMÍNIO |
| 75 | CONCILIAÇÃO |
| 76 | MEDIAÇÃO |
| 77 | CESSÃO DE PRECATÓRIOS |
| 78 | CESSÃO DE DIREITOS HEREDITÁRIOS |
| 79 | DAÇÃO EM PAGAMENTO |
| 80 | CESSÃO DE POSSE |
| 81 | OUTROS NEGÓCIOS JURÍDICOS COM VALOR ECONÔMICO |
| 82 | CESSÃO DE CONTRATOS |
| 83 | CESSÃO DE DIREITO CREDITÓRIO |


#### `dataAto`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | yyyy-MM-dd | Data em que o ato foi lavrado. |

#### `livroInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 8 | 00000000 (8 dígitos numéricos) | Número do livro inicial em que o ato foi lavrado. |

#### `complementoLivroInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

#### `complementoFolhaInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha inicial. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo FOLHAINICIAL. |

> **Validação:** Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor do campo FOLHAINICIAL.


#### `complementoFolhaFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha final. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `valorOperacao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | 0,00 | Informe o valor da escritura, contrato, etc |

> **Validação:** Somente para escritura


#### `prazoPagamento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Prazo estipulado para o pagamento da escritura, contrato, etc |

> **Validação:** Somente para escritura


| Código | Descrição |
|--------|-----------|
| 1 | À vista |
| 2 | A prazo |
| 3 | Antecipado |


#### `formaPagamento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Forma de pagamento realizada para quitação da escritura. |

> **Validação:** Somente para escritura


| Código | Descrição |
|--------|-----------|
| 1 | Cheque |
| 2 | Dinheiro |
| 3 | Nota promissória |
| 4 | Permuta |
| 5 | Outras |
| 6 | Transferência Bancária |


#### `dataContrato`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | yyyy-MM-dd | Data da última assinatura da escritura, contrato, etc |

### Informações das Partes


> **Observação:** Os campos a seguir compõem cada item da lista `partes`. O envio dessa lista é **obrigatório** e o ato pode conter múltiplas partes.

#### `qualificacaoParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 1 | 00 (2 dígitos numéricos) | Campo que indica a qualidade da parte de acordo com o tipo de ato informado |

A qualificação da parte depende do tipo de ato. Cada qualificação abaixo indica em quais atos ela pode ser usada:

| Qualificação | Código | Atos |
|--------------|:------:|------|
| Outorgado | 1 | Atos padrão¹, Substabelecimento |
| Outorgante | 2 | Atos padrão¹, Substabelecimento |
| Interveniente | 3 | Atos padrão¹, Substabelecimento, Mediação, Conciliação |
| Usufruto | 4 | Atos padrão¹, Substabelecimento |
| Mandante | 5 | Substabelecimento |
| Requerente | 6 | Mediação, Conciliação |
| Requerido | 7 | Mediação, Conciliação |
| Conciliador | 8 | Conciliação |
| Mediador | 9 | Mediação |
| Cedente | 10 | Cessão de Precatório |
| Beneficiário | 11 | Cessão de Precatório |
| Cessionário | 12 | Cessão de Precatório |

¹ **Atos padrão:** Escritura, Procuração, Procuração p/ Fins Previdenciários, Renúncia de Procuração, Revogação de Procuração, Ata Notarial.

> Para Usufruto (Reserva, Instituição ou Renúncia) é obrigatória ao menos uma parte com qualidade **Usufruto (4)**.


#### `cpf`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 11 | Sem pontos ou traços | Número do CPF da parte  Quando a parte for pessoa jurídica este campo deve aceitar o CNPJ. |

> **Validação:** O campo passará a aceitar obrigatoriamente o CPF ou CNPJ. A nomenclatura por enquanto permanecerá a mesma


#### `nomeParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 255 | - | Nome completo da parte vinculada ao ato |

#### `nomeSocial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 255 | - | Nome Social da parte vinculada ao ato. Obrigatório quando a parte possuir um nome social. |

> **Validação:** Recomendado o preenchimento quando houver ciência que a parte possuir um nome social.


#### `tipoDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 2 | 00 (2 dígitos numéricos) | Documento secundário de identificação da parte vinculada ao ato. |

> **Validação:** Obrigatório caso o campo "DOCUMENTO" seja informado


| Código | Descrição |
|--------|-----------|
| 1 | Carteira de Identidade Funcional |
| 2 | Carteira de Identidade Militar |
| 3 | Carteira de Trabalho |
| 4 | Carteira Profissional |
| 5 | CNH |
| 6 | Passaporte |
| 7 | RNE |
| 8 | RG |
| 9 | Outro Documento Público |


#### `documento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Número do documento informado, de acordo com o TIPO DOCUMENTO. |

#### `orgaoEmissor`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 100 | - | Informa o órgão público emissor do documento secundário. Sem caracteres especiais e com letras maiúsculas |


#### `dataEmissao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | yyyy-MM-dd | Data de emissão do documento secundário da parte vinculada ao ato |

#### `dataNascimento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | yyyy-MM-dd | Data de nascimento da parte vinculada ao ato |

#### `sexo`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Sexo informado pela parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Feminino |
| 2 | Masculino |


#### `estadoCivil`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Informa o estado civil da parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Casado |
| 2 | Desquitado |
| 3 | Divorciado |
| 4 | Separado |
| 5 | Solteiro |
| 6 | União Estável |
| 7 | Viúvo |


#### `nacionalidade`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | País de nacionalidade da parte. |

> **Validação:** Caso a parte não tenha uma nacionalidade diferente do país em que nasceu, deverá ser informado o mesmo dado do campo "PAISNASCIMENTO".


| Código | Descrição |
|--------|-----------|
| 1 | Brasileiro |
| 2 | Estrangeiro |
| 3 | Naturalizado |


#### `paisOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | 000 (3 dígitos numéricos) | País em que a parte vinculada ao ato nasceu |

Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


#### `areaAtuacao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 2 | Lista de códigos na aba Profissão | Área de atuação profissional da parte vinculada ao ato |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


#### `profissao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | Lista de códigos na aba Profissão | Profissão da parte vinculada ao ato Esse campo só poderá ficar habilitado em caso de selecionar Uma área de atuação. |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


#### `capacidadeCivil`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Indica a capacidade civil da parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Capaz |
| 2 | Incapaz |
| 3 | Relativamente Incapaz |


#### `dataObito`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | yyyy-MM-dd | Data de óbito da parte vinculada ao ato |

#### `filiacoes <LISTA>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | LISTA / BLOCO | - | Lista de String | Informa o nome dos pais da parte |

> **Validação:** Poderá ser preenchido somente quando o atributo “semFiliacoes” for igual a False


#### `semFiliacoes`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Boolean | - | - | Campo indicativo de que a parte possui ou não filiação |

| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| False | Possui Filiação |
| True | Não Possui Filiação |


#### `inscricaoEstadual`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 255 | - | Campo para colocar inscrição estadual. da parte quando pessoa jurídica |

> **Validação:** Esse campo só é habilitado quando o tipo do documento for “CNPJ”

#### `dataCasamento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | yyyy-MM-dd | Campo para informar a data do casamento |

> **Validação:** Preenchido somente quando o campo "ESTADO CIVIL" for "CASADO"

#### `regimeBens`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Campo indicativo do tipo de regime de bens vigente entre as principais partes do ato. Esse campo só é habilitado quando é inserido qualquer valor no campo ESTADOCIVIL. |

| Código | Descrição |
|--------|-----------|
| 1 | Comunhão Parcial de Bens |
| 2 | Comunhão Universal de Bens |
| 3 | Participação Final nos Aquestos |
| 5 | Regime Específico atribuído em Pacto Antenupcial |
| 7 | Separação de Bens |
| 8 | Separação Obrigatória de Bens |

> **Validação:** Preenchido somente quando o campo "ESTADO CIVIL" for "CASADO"

#### `cpfConjuge`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 11 | 00000000000 Ou 000.000.000-00 | Informa o cpf do cônjuge da parte vinculada ao ato. Esse campo só é habilitado quando é inserido qualquer valor no campo ESTADOCIVIL. |

> **Validação:** Preenchido somente quando o campo "ESTADO CIVIL" for "CASADO"

#### `nomeConjuge`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Informa o nome do cônjuge da parte vinculada ao ato. Esse campo só é habilitado quando é inserido qualquer valor no campo ESTADOCIVIL. |

> **Validação:** Campo obrigatório caso seja informado o cpfConjuge. Este campo deve ser preenchido somente quando o campo "ESTADO CIVIL" for "CASADO"

#### `cep`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 8 | 00000000 (8 caracteres numéricos) | Cep do endereço da parte vinculada ao ato |

#### `logradouro`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Rua do endereço da parte vinculada ao ato |

#### `numero`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Número do endereço da parte vinculada ao ato |

#### `complemento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Complemento do endereço da parte vinculada ao ato |

#### `bairro`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Bairro do endereço da parte vinculada ao ato |

#### `uf`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 dígitos alfanuméricos) | Estado do endereço da parte vinculada ao ato |

Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `municipio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 6 | 000000 (6 dígitos) | Município do endereço da parte vinculada ao ato |

Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `email`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | E-mail de contato da parte vinculada ao ato |

#### `tipoContato`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | informa o tipo de informação de contato |

| Código | Descrição |
|--------|-----------|
| 1 | Celular |
| 2 | Telefone |


#### `contato`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 11 | Somente números, sem traços ou caracteres especiais | Informa o número passado como contato. Campo habilitado somente quando o campo TIPOCONTATO tiver valor. |


### Dados Específicos


#### `existeBemEdireito`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Campo indicativo sobre a existência de bem e direito vinculado a parte do ato |

| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| 0 | Não |
| 1 | Sim |


#### `reservaDePoderes`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Boolean | - | - | Indica se o ato tem reserva de poderes |

> **Validação:** Pode ser preenchido somente quando o ato é “Substabelecimento”


| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| False | Não Existe |
| True | Existe |


#### `naturezaLitigio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 2 | 00 (2 dígitos numéricos) | Natureza do Litígio |

> **Validação:** Deve ser preenchido somente quando a Natureza do ato é  “ Mediação “ ou “ Conciliação ”


| Código | Descrição |
|--------|-----------|
| 1 | Bancário |
| 2 | Concessionária de Água |
| 3 | Concessionária de Gás |
| 4 | Concessionária de Luz |
| 5 | Consumidor |
| 6 | Contrato |
| 7 | Empresarial |
| 8 | Família |
| 9 | Locação |
| 10 | Mobiliário |
| 11 | Previdência |
| 12 | Saúde |
| 13 | Seguro |
| 14 | Serviço Público |
| 15 | Sucessões |
| 16 | Telefonia |
| 17 | Transporte |
| 18 | Transporte - Avião |
| 19 | Transporte - Barco |
| 20 | Transporte - Metrô |
| 21 | Transporte - Ônibus |


#### `acordo`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 1 | 0 (1 dígito numérico) | Informa se houve ou não acordo |

> **Validação:** Deve ser preenchido somente quando a Natureza do ato é  “ Mediação “ ou “ Conciliação ”


| Código | Descrição |
|--------|-----------|
| 0 | Não |
| 1 | Sim |


### Bens e Direitos


> **Observação:** Os campos a seguir compõem cada item da lista `bensEdireitos`. O envio é obrigatório somente quando existir bem ou direito vinculado ao ato.

> **Validação:** Nenhum campo abaixo dessa aba deve ser preenchido se o campo "EXISTEBEMEDIREITO" for FALSO ou NULO


#### `qualificacaodeBens`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 1 | 0 (1 dígito numérico) | Indica o tipo de bem e/ou direito que pertence a parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Imóvel Rural |
| 2 | Imóvel Urbano |
| 3 | Precatório Judicial |


#### `descricaoBenseDireitos`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Descrição do bem pertencente a parte vinculada ao ato |

#### `varaJudicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Campo para digitar a Vara Judicial do bem informado. Esse campo só é habilitado quando o tipo do bem for “Precatório Judicial” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `numeroProcesso`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | - | Campo para digitar o número do processo do bem informado. Esse campo só é habilitado quando o tipo do bem for “Precatório Judicial” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `numeroPrecatorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | - | Campo para digitar o número do precatório do bem informado. Esse campo só é habilitado quando o tipo do bem for “Precatório Judicial” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `valor`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Double | - | 0,00 | Campo para digitar o custo do bem informado. |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `titulares <LISTA>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Lista / Bloco | - | - | Lista de informações dos titulares do bem. Verificar abaixo os itens de campos da lista |

> **Validação:** O envio do bloco de titulares é obrigatório quando existir bem. Cada item dentro da lista possui sua obrigatoriedade de acordo com o detalhamento mais abaixo.


#### `cin`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Código Imobiliário Nacional. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `referenciaCadastralImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Indica o tipo da referencia cadastral do imóvel de bem e direito apontado no registro relativo a parte vinculada ao ato. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Inscrição Municipal |
| 2 | NIRF(Receita Federal) |
| 3 | RIP-Registro Imobiliário Patrimonial (SPU) |
| 4 | SNCR (INCRA) |


#### `numeroCadastralImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | - | - | Número do respectivo tipo de cadastro selecionado. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `tipoImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 1 | 0 (1 dígito numérico) | Tipo do imóvel informado. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Cavidade Natural Subterrânea |
| 2 | Espelho dágua |
| 3 | Gleba |
| 4 | Laje |
| 5 | Terreno/Lote |
| 6 | Unidade Autônoma – Apartamento |
| 7 | Unidade Autônoma – Garagem, Box, Outras |
| 8 | Unidade Autônoma – Lote |
| 9 | Unidade Autônoma – Sala/Loja |


#### `acessao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 4 | 0 (1 dígito numérico) | Tipo de acessão. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Aeroporto |
| 2 | Edificação Atípica/Obra de Arte |
| 3 | Edificação Multipavimentos |
| 4 | Edificação Térrea |
| 5 | Estádio / Arena / Ginásio |
| 6 | Templo Religioso |
| 7 | Terminal Ferroviário / Marítimo / Rodoviário |
| 8 | Usina de geração de energia |


#### `unidadeAreaTotal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área total do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


#### `quantidadeAreaTotal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | 0,00 | Valor numérico da quantidade de área total do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `unidadeAreaConstruida`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área construída do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


#### `quantidadeAreaConstruida`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | 0,00 | Valor numérico da quantidade de área construída do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `valorImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | R$ 0,00 | Valor monetário do imóvel descrito. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `tipoTributo`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Tipo do tributo cobrado pelo imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | IPTU |
| 2 | ITBI |
| 3 | ITCMD |
| 4 | ITR |


#### `valorFiscal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | R$ 0,00 | Valor fiscal do imóvel no caso de compra e venda. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `cnm`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Código nacional de matricula. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| (Vazio) | CNS + número de ordem da matrícula |


#### `cep`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 8 | 00000000 (8 caracteres numéricos) | CEP do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `logradouro`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Logradouro do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `numero`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Número do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `complemento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Complemento do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `bairro`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Bairro do endereço Do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `idEstado`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 dígitos alfanuméricos) | Estado do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
|  | Sigla do Estado |


#### `idCidade`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 6 | 000000 (6 dígitos) | Município do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


**Titulares (sublista)**


#### `cpf`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 11 | Sem caracteres especiais | Número do CPF da parte  Quando a parte for pessoa jurídica este campo deve aceitar o CNPJ. |

#### `nomeTitular`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 255 | - | Contém o uma string com o nome da parte |

#### `numeroDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | Sem caracteres especiais | Número do documento informado, de acordo com o TIPO DOCUMENTO. |

#### `tipoDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 2 | 00 (2 dígitos numéricos) | Documento secundário de identificação da parte vinculada ao ato. |

| Código | Descrição |
|--------|-----------|
|  | Código do documento:

1:Carteira de Identificação Funcional
2:Carteira de Identificação Militar
3:Carteira de Trabalho
4:Carteira Profissional
5:CNH
6:Passaporte
7:RNE
8:RG
9:Outro Documento Público |


###Ato Origem


> **Validação:** Somente para atos do tipo Renúncia de Procuração (4), Revogação de Procuração (5), Substabelecimento (6) e Escrituras (1) quando a natureza for Revogação (61) ou Rerratificação (35


#### `idEstadoCartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 dígitos alfanuméricos) | Estado do cartório onde o ato de origem foi lavrado |

| Código | Descrição |
|--------|-----------|
|  | Sigla do Estado |


#### `idMunicipioCartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 6 | 000000 (6 dígitos) | Município do cartório onde o ato de origem foi lavrado |

Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `cartorioAtual`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Boolean | - | - | Caso o ato de origem foi lavrado no mesmo cartório do ato de rerratificação foi lavrado |

| Código | Descrição |
|--------|-----------|
| False | Ato de origem não foi lavrado no cartório atual |
| True | Ato de origem foi lavrado no mesmo cartório onde o ato de rerratificação foi lavrado |


#### `numeroCns`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 6 | XXXXXX (CNS que identifica o cartório) | Este campo deve ser preenchido com o (CNS)Número do Código Nacional da Serventia em que consta o ato de origem. O CNS do cartório deve seguir o divulgado pelo CNJ. |

#### `outroCartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Boolean | - | - | Quando o ato de origem foi lavrado em um cartório não cadastrado na base de dados do SIGNO. Esse campo fica desabilitado quando o valor do campo “NATUREZAATO” é do tipo “Revogação” |

> **Validação:** Quando seu valor for "1" este desobriga o preenchimento das informações do cartório.


| Código | Descrição |
|--------|-----------|
| False | Se o ato a ser rerratificado pertence a um cartório da base de dados do signo. |
| True | Se o ato a ser rerratificado não pertence a um cartório da base de dados do signo. |


#### `observacoesOutroCartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 255 | - | Campo para preenchimento dos dados de localização do ato de origem |

#### `atosAnteriores`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Boolean | - | - | Revoga todos os atos de um cartório cadastrado na base de dados do SIGNO. Esse campo fica habilitado quando o valor do campo “NATUREZAATO” é do tipo “Revogação” |

| Código | Descrição |
|--------|-----------|
| False | Não |
| True | Sim |


#### `tipoAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Tipo do ato que foi lavrado no cartório. |

> **Validação:** Esse campo é desabilitado se o valor do campo  “ATOORIGEM_TODOSATOSANTERIORES” for “Sim”


| Código | Descrição |
|--------|-----------|
| 1 | Escritura |
| 2 | Procuração |
| 3 | Procuração para Fins Previdenciários |
| 4 | Renúncia de Procuração |
| 5 | Revogação de Procuração |
| 6 | Substabelecimento |
| 7 | Ata Notarial |


#### `naturezaAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 2 | 00 (2 dígitos numéricos) | Campo de lista de natureza do ato. |

> **Validação:** Preenchido somente quando o ato é “Escritura”  Esse campo é desabilitado se o valor do campo  “ATOORIGEM_TODOSATOSANTERIORES” for “Sim”


| Código | Descrição |
|--------|-----------|
| 1 | ACORDO EXTRAJUDICIAL |
| 4 | ALIENAÇÃO FIDUCIÁRIA |
| 26 | BEM DE FAMÍLIA |
| 5 | CESSÃO |
| 63 | COMODATO/MÚTUO |
| 6 | COMPRA E VENDA |
| 48 | CONDOMÍNIO |
| 56 | CONFERÊNCIA DE BENS |
| 10 | CONFISSÃO DE DÍVIDA |
| 74 | CONTRATO DE NAMORO |
| 58 | OUTRAS GARANTIAS |
| 14 | DECLARAÇÃO |
| 15 | DECLARATÓRIA DE UNIÃO ESTÁVEL |
| 17 | DESAPROPRIAÇÃO |
| 52 | DIREITO DE USO OU SUPERFÍCIE |
| 55 | DIRETIVAS ANTECIPADAS DE VONTADE (testamento vital) |
| 20 | DISSOLUÇÃO DE UNIÃO ESTÁVEL |
| 21 | DISTRATO |
| 53 | DIVISÃO AMIGÁVEL |
| 22 | DOAÇÃO |
| 23 | EMANCIPAÇÃO |
| 59 | EMISSÃO DE CÉDULA |
| 60 | EMISSÃO DE DEBÊNTURES |
| 54 | FIANÇA |
| 24 | HIPOTECA |
| 25 | INCORPORAÇÃO |
| 28 | LOCAÇÃO |
| 57 | NOVAÇÃO |
| 30 | PACTO ANTENUPCIAL |
| 49 | PARCELAMENTO |
| 31 | PENHOR |
| 33 | PROMESSAS |
| 34 | QUITAÇÃO |
| 36 | RECONHECIMENTO DE PATERNIDADE |
| 38 | REGISTRO DE CHANCELA MECÂNICA |
| 39 | REMISSÃO DE FORO E LAUDÊMIOS |
| 62 | RENÚNCIA DE DIREITOS HEREDITÁRIOS |
| 35 | RERRATIFICAÇÃO |
| 61 | REVOGAÇÃO |
| 43 | SEM VALOR DECLARADO |
| 45 | SERVIDÃO |
| 50 | SOCIEDADE E FUNDAÇÕES |
| 51 | TRANSAÇÃO |
| 46 | USUFRUTO (reserva, instituição e renúncia) |
| 70 | PRESTAÇÃO DE SERVIÇOS |
| 71 | ARRENDAMENTO MERCANTIL (LEASING) |
| 72 | CONCESSÃO DE DOMÍNIO |
| 75 | CONCILIAÇÃO |
| 76 | MEDIAÇÃO |
| 77 | CESSÃO DE PRECATÓRIOS |
| 78 | CESSÃO DE DIREITOS HEREDITÁRIOS |
| 79 | DAÇÃO EM PAGAMENTO |
| 80 | CESSÃO DE POSSE |
| 81 | OUTROS NEGÓCIOS JURÍDICOS COM VALOR ECONÔMICO |
| 82 | CESSÃO DE CONTRATOS |
| 83 | CESSÃO DE DIREITO CREDITÓRIO |


#### `livroInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 8 | 00000000 (8 dígitos numéricos) | Número do livro inicial em que o ato foi lavrado. |

#### `complementoLivroInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `livroFinalAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 8 | 00000000 (8 dígitos numéricos) | Número do livro final em que o ato foi lavrado. |

> **Validação:** Caso o ato tenha sido lavrado em um único livro esse campo deve ser preenchido com o mesmo valor do campo ATOORIGEM_LIVROINICIAL


#### `complementoLivroFinalAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número do livro final. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

#### `complementoFolhaInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha inicial. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaFinalAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo ATOORIGEM_FOLHAINICIAL. |

> **Validação:** Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo ATOORIGEM_FOLHAINICIAL.


#### `complementoFolhaFinalAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha final. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


### Dados Precatórios


> **Observação:** Os campos a seguir compõem as listas de precatórios (`informacoesPrecatorios`, `cessoesPrecatorios`, `cessoesAnteriores`), enviadas somente para atos de natureza "Cessão de Precatórios".

**Informações dos Precatórios**


> **Validação:** contida na lista "cessoesPrecatorios"


#### `descricaoPrecatorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 255 | - | Contém a descrição do precatório |

#### `numeroOficioRequisitorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 255 | - | Contém o número do Ofício Requisitório |

#### `numeroProcesso`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 20 | - | Contém o número do processo do precatório |

#### `varaOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 255 | - | Contém a vara de origem do precatório |

#### `tribunalPrecatorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 5 | - | Contém o código do tribunal |

> **Validação:** Lista na aba "Tribunais" desta planilha


Consulte a tabela de **Tribunais** na página [Domínios Compartilhados](dominios.md).


#### `valorGlobalPrecatorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Double | - | 0,00 | Contém o valor global do precatório |

#### `beneficiarios <LISTA>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Lista / Bloco | - | - | Lista de informações dos beneficiários do precatório. Verificar abaixo os itens de campos da lista |

> **Validação:** O envio do bloco de beneficiários é obrigatório quando o ato for uma cessão de precatório. Cada item dentro da lista possui sua obrigatoriedade de acordo com o detalhamento mais abaixo.


**Cessão de Precatórios**


> **Validação:** Preenchido somente para Natureza "Cessão de Precatórios"


#### `alienacao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 3 | - | Porcentagem da alienação |

#### `informacaoPrecatorio <LISTA>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Lista / Bloco | - | - | Lista com as informações do precatório relacionado à cessão. Verificar os itens da lista. |

> **Validação:** Cada item dentro da lista possui sua obrigatoriedade de acordo com o detalhamento mais abaixo.


| Código | Descrição |
|--------|-----------|
| - |  |


#### `partesDaCessao <LISTA>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Lista / Bloco | - | - | Lista de partes da cessão do precatório com a qualificação de “Cedente” ou “Cessionário”. Verificar os itens da lista. |

| Código | Descrição |
|--------|-----------|
| - |  |


**Cessões Anteriores**


> **Validação:** Preenchido somente para Natureza "Cessão de Precatórios", QUANDO HOUVER OU QUANDO DE CONHECIMENTO


#### `cessaoNaoOriginaria <LISTA>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Lista / Bloco | - | - | Informações da cessão informada na lista "CessaoPrecatorio" a qual essa cessão Anterior faz referência |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `tipoAto`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 1 | 0 (1 dígito numérico) | Informa se a cessão anterior faz referência a um ato público ou privado |

| Código | Descrição |
|--------|-----------|
| 1 | privado |
| 2 | publico |


#### `ufCartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 2 | XX (2 dígitos alfanuméricos) | Estado do cartório da cessão anterior |

> **Validação:** Preenchido somente quando a cessão anterior for "pública"


| Código | Descrição |
|--------|-----------|
|  | Sigla do Estado |


#### `municipioCartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 6 | 000000 (6 dígitos) | Município do endereço da parte vinculada ao ato |

> **Validação:** Preenchido somente quando a cessão anterior for "pública"


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `cnsCartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 6 | XXXXXX (CNS que identifica o cartório) | Este campo deve ser preenchido com o (CNS)Número do Código Nacional da Serventia em que consta o ato de origem. O CNS do cartório deve seguir o divulgado pelo CNJ. |

> **Validação:** Preenchido somente quando a cessão anterior for "pública"


#### `livroInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Integer | 8 | 00000000 (8 dígitos numéricos) | Indica a capacidade civil da parte vinculada ao ato |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `complementoLivroInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `livroFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 8 | 00000000 (8 dígitos numéricos) | Número do livro final em que o ato foi lavrado. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `complementoLivroFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número do livro final. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `folhaInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `complementoFolhaInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha inicial. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `folhaFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo FOLHAINICIAL. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `complementoFolhaFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha final. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


#### `dataAtoAnterior`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | XX/XX/XXXX | Data do ato da Cessão Anterior |

#### `alienacao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | - | Porcentagem da alienação |

#### `partesCessao <LISTA>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Lista / Bloco | - | - | Lista de partes da cessão anterior com a qualificação de “Cedente” ou “Cessionário”. Verificar os itens da lista. |

**Beneficiários e Partes da Cessão**


> **Validação:** contida na lista "InformacoesPrecatorios"), sublista "PARTESDACESSAO" (contida na lista "cessoesPrecatorios") e sublista "PARTESCESSAO (contida na lista "cessoesAnteriores"


#### `cpfParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 11 | Sem caracteres especiais | Número do CPF da parte  Quando a parte for pessoa jurídica este campo deve aceitar o CNPJ. |

#### `nomeParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 255 | - | Contém o uma string com o nome da parte |

#### `documento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | Sem caracteres especiais | Número do documento informado, de acordo com o TIPO DOCUMENTO. |

#### `tipoDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 2 | 00 (2 dígitos numéricos) | Documento secundário de identificação da parte vinculada ao ato. |

| Código | Descrição |
|--------|-----------|
|  | Código do documento:

1:Carteira de Identificação Funcional
2:Carteira de Identificação Militar
3:Carteira de Trabalho
4:Carteira Profissional
5:CNH
6:Passaporte
7:RNE
8:RG
9:Outro Documento Público |


#### `qualificacaoParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| - | Integer | 2 | 00 (2 dígitos numéricos) | Contém o código da qualificação da parte. Valores possíveis: |

> **Validação:** Deve ser cadastrado somente a qualificação "11: Beneficiário" na lista BENEFICIARIOS. Deve ser cadastrado somente os itens "10: Cedente" ou "12: Cessionário " para listas PARTESDACESSAO E PARTESCESSAO


| Código | Descrição |
|--------|-----------|
|  | "11: Beneficiário"
"10: Cedente"
"12: Cessionário " |


### Anexos


> **Observação:** Os campos a seguir compõem cada item da lista `attachments`. O envio é opcional.

#### `base64Content`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 11 | Arquivo codificado para a base64 | Arquivo codificado para a base64 |

#### `extensaoArquivo`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | Somente serão aceitas as seguintes extensões: | Extensão do anexo |

> **Validação:** É obrigatório caso seja	informado	o atributo “base64Content”


| Código | Descrição |
|--------|-----------|
| “.jpg” |  |
| “.pdf” |  |
| “.png” |  |


#### `nome`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Nome do arquivo |

> **Validação:** É obrigatório caso seja	informado	o atributo “base64Content”


### Natureza do litígio

Aplicável somente quando a natureza do ato é **Mediação** ou **Conciliação**.

| Código | Descrição |
| --- | --- |
| 1 | Bancário |
| 2 | Concessionária de Água |
| 3 | Concessionária de Gás |
| 4 | Concessionária de Luz |
| 5 | Consumidor |
| 6 | Contrato |
| 7 | Empresarial |
| 8 | Família |
| 9 | Locação |
| 10 | Mobiliário |
| 11 | Previdência |
| 12 | Saúde |
| 13 | Seguro |
| 14 | Serviço Público |
| 15 | Sucessões |
| 16 | Telefonia |
| 17 | Transporte |
| 18 | Transporte - Avião |
| 19 | Transporte - Barco |
| 20 | Transporte - Metrô |
| 21 | Transporte - Ônibus |
