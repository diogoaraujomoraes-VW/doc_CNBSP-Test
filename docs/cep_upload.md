# CEP - Envio por Upload

## Orientações de envio

Formato: **CSV, UTF-8**, campos separados por **ponto-e-vírgula (`;`)**.

1. Baixe o arquivo exemplo no SIGNO

2. Preencha seguindo as orientações deste documento

3. Salve como "CSV separado por vírgulas"

4. Faça o upload no SIGNO


---

## Campos e parâmetros de envio

---

## Dados Básicos do Ato


---

### `TIPOLINHA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Indica se a linha faz referência a um ato, a uma parte,  a um bem e direito ou a um ato de origem. |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


| Código | Descrição |
|--------|-----------|
| AC | Ato Cep |
| PC | Parte Cep |
| BC | Bens e Direitos Cep |
| AO | Ato de Origem Cep |
| IP | Informações dos Precatórios |
| CP | Cessões dos Precatórios |
| PCA | Partes da Cessão Anterior |
| CA | Cessões Anteriores |


---

### `TIPOATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Tipo do ato que foi lavrado no cartório |

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


---

### `NATUREZAATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos numéricos) | Campo queidentifica a natureza quando o tipo de ato é uma escritura. |

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


---

### `OBSERVACAOATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Campo para preenchimento do motivo do status do ato, caso seja inválido ou incompleto |

> **Validação:** Não deve ser preenchido quando o status do ato é "válido".


---

### `DATAATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Data | - | dd/mm/aaaa | Data em que o ato foi lavrado. |

---

### `LIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 8 | 00000000 (8 dígitos numéricos) | Indica a capacidade civil da parte vinculada ao ato |

---

### `COMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


---

### `FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

---

### `FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha inicial. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


---

### `FOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo FOLHAINICIAL. |

> **Validação:** Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor do campo FOLHAINICIAL.


---

### `COMPLEMENTOFOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha final. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


---

### `VALOROPERACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Monetário | - | R$ 0,00 | Informe o valor da escritura, contrato, etc |

> **Validação:** Somente para escritura


---

### `PRAZOPAGAMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Prazo estipulado para o pagamento da escritura, contrato, etc |

> **Validação:** Somente para escritura


| Código | Descrição |
|--------|-----------|
| 1 | À vista |
| 2 | A prazo |
| 3 | Antecipado |


---

### `FORMAPAGAMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Forma de pagamento realizada para quitação da escritura. |

> **Validação:** Somente para escritura


| Código | Descrição |
|--------|-----------|
| 1 | Cheque |
| 2 | Dinheiro |
| 3 | Nota promissória |
| 4 | Permuta |
| 5 | Outras |
| 6 | Transferência Bancária |


---

### `DATACONTRATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Data da última assinatura da escritura, contrato, etc |

---

## Dados Específicos


---

### `EXISTEBEMEDIREITO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Campo indicativo sobre a existência de bem e direito vinculado a parte do ato |

| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| 0 | Não |
| 1 | Sim |


---

### `RESERVADEPODERES`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Indica se o ato tem reserva de poderes |

> **Validação:** Pode ser preenchido somente quando o ato é “Substabelecimento”


| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| 0 | Não |
| 1 | Sim |


---

### `NATUREZALITIGIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos numéricos) | Natureza do Litígio |

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


---

### `ACORDO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Informa se houve ou não acordo |

> **Validação:** Deve ser preenchido somente quando a Natureza do ato é  “ Mediação “ ou “ Conciliação ”


| Código | Descrição |
|--------|-----------|
| 0 | Não |
| 1 | Sim |


---

## Dados Básicos da Parte


---

### `ORDEMPARTEATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | 00 (2 dígitos numéricos) | Campo que indica a posição que contém todas as informações da parte, ele tem vínculo direto com o campo TITULARES |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


---

### `QUALIDADEPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 00 (2 dígitos numéricos) | Campo que indica a qualidade da parte de acordo com o tipo de ato informado |

Consulte a seção **Qualidade da parte** abaixo.


---

### `CPF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 11 | Preferencialmente sem pontos ou traços | Número do CPF da parte  Quando a parte for pessoa jurídica este campo deve aceitar o CNPJ. |

> **Validação:** O campo passará a aceitar obrigatoriamente o CPF ou CNPJ. A nomenclatura por enquanto permanecerá a mesma


---

### `NOMEPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 255 | - | Nome completo da parte vinculada ao ato |

---

### `NOMESOCIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Nome Social da parte vinculada ao ato. Obrigatório quando a parte possuir um nome social. |

> **Validação:** Recomendado o preenchimento quando houver ciência que a parte possuir um nome social.


---

### `TIPODOCUMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | 00 (2 dígitos numéricos) | Documento secundário de identificação da parte vinculada ao ato. |

> **Validação:** Campo obrigatório quando o atributo “Documento” for informado


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


---

### `DOCUMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Número do documento informado, de acordo com o TIPO DOCUMENTO. |

---

### `ORGAOEMISSOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 100 | - | Informa o órgão público emissor do documento secundário. |

| Código | Descrição |
|--------|-----------|
|  | Descrição do órgão emissor, sem caracteres especiais e com letras maiúsculas |


---

### `DATAEMISSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Data de emissão do documento secundário da parte vinculada ao ato |

---

### `DATANASCIMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Data de nascimento da parte vinculada ao ato |

---

### `SEXO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Sexo informado pela parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Feminino |
| 2 | Masculino |


---

### `ESTADOCIVIL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Informa o estado civil da parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Casado |
| 2 | Desquitado |
| 3 | Divorciado |
| 4 | Separado |
| 5 | Solteiro |
| 6 | União Estável |
| 7 | Viúvo |


---

### `NACIONALIDADE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Nacionalidade da parte. |

| Código | Descrição |
|--------|-----------|
| 1 | Brasileiro |
| 2 | Estrangeiro |
| 3 | Naturalizado |


---

### `PAISNASCIMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | País em que a parte vinculada ao ato nasceu |

Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


---

### `AREAATUACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | Lista de códigos do SINTER | Área de atuação profissional da parte vinculada ao ato |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


---

### `PROFISSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | Lista de códigos do SINTER | Profissão da parte vinculada ao ato Esse campo só poderá ficar habilitado em caso de selecionar Uma área de atuação. |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


---

### `CAPACIDADECIVIL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Indica a capacidade civil da parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Capaz |
| 2 | Incapaz |
| 3 | Relativamente Incapaz |


---

### `DATAOBITO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Data de óbito da parte vinculada ao ato |

---

### `FILIACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Informa o nome dos pais separados pelo caractere / (barra) ou / (pipe) |

> **Validação:** Poderá ser preenchido somente quando o atributo “naopossuiFiliacao” for igual a 0


---

### `NAOPOSSUIFILIACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | 0 (1 dígito numérico) | Campo indicativo de que a parte possui ou não filiação |

| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| 0 | Não |
| 1 | Sim |


---

### `INSCRICAOESTADUAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Campo para colocar inscrição estadual. da parte |

> **Validação:** Esse campo só é habilitado quando o tipo do documento for “CNPJ”


---

## Dados Estado Civil - Preenchido somente quando o campo "ESTADO CIVIL" for "CASADO"


---

### `DATACASAMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Campo para informar a data do casamento |

---

### `REGIMEBENS`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Campo indicativo do tipo de regime de bens vigente entre as principais partes do ato. Esse campo só é habilitado quando é inserido qualquer valor no campo ESTADOCIVIL. |

| Código | Descrição |
|--------|-----------|
| 1 | Comunhão Parcial de Bens |
| 2 | Comunhão Universal de Bens |
| 3 | Participação Final nos Aquestos |
| 5 | Regime Específico atribuído em Pacto Antenupcial |
| 7 | Separação de Bens |
| 8 | Separação Obrigatória de Bens |


---

### `CPFCONJUGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 11 | 00000000000 Ou 000.000.000-00 | Informa o cpf do cônjuge da parte vinculada ao ato. Esse campo só é habilitado quando é inserido qualquer valor no campo ESTADOCIVIL. |

---

### `NOMECONJUGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Campo obrigatório caso seja informado o cpfConjuge | Alfanumérico | - | - | Informa o nome do cônjuge da parte vinculada ao ato. Esse campo só é habilitado quando é inserido qualquer valor no campo ESTADOCIVIL. |

> **Validação:** Campo obrigatório caso seja informado o cpfConjuge


---

## Dados Endereço


---

### `CEP`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 8 | 00000000 | Cep do endereço da parte vinculada ao ato |

---

### `RUA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Rua do endereço da parte vinculada ao ato |

---

### `NUMERO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Número do endereço da parte vinculada ao ato |

---

### `COMPLEMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Complemento do endereço da parte vinculada ao ato |

---

### `BAIRRO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Bairro do endereço da parte vinculada ao ato |

---

### `UF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Estado do endereço da parte vinculada ao ato |

Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


---

### `MUNICIPIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 6 | 000000 (6 dígitos) | Município do endereço da parte vinculada ao ato |

Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


---

## Dados Contato


---

### `EMAIL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | E-mail de contato da parte vinculada ao ato |

---

### `TIPOCONTATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | informa o tipo de informação de contato |

| Código | Descrição |
|--------|-----------|
| 1 | Celular |
| 2 | Telefone |


---

### `CONTATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 11 | Somente números, sem traços ou caracteres especiais | Informa o número passado como contato. Campo habilitado somente quando o campo TIPOCONTATO tiver valor. |

| Código | Descrição |
|--------|-----------|
|  | Telefone
(00) 0000-0000 |


---

## Dados Bens e Direitos - (Nenhum campo abaixo deverá ser preenchido se o campo "EXISTEBEMEDIREITO" for FALSO)


---

### `TIPOBEMEDIREITO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Indica o tipo de bem e/ou direito que pertence a parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Imóvel Rural |
| 2 | Imóvel Urbano |
| 3 | Precatório Judicial |


---

### `DESCRICAOBEM`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Descrição do bem pertencente a parte vinculada ao ato |

---

### `Bens - Tipo Precatório  VARAJUDICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Campo para digitar a Vara Judicial do bem informado. Esse campo só é habilitado quando o tipo do bem for “Precatório Judicial” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


---

### `Bens - Tipo Precatório  NUMEROPROCESSO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | - | - | Campo para digitar o número do processo do bem informado. Esse campo só é habilitado quando o tipo do bem for “Precatório Judicial” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


---

### `Bens - Tipo Precatório  NUMEROPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | - | - | Campo para digitar o número do precatório do bem informado. Esse campo só é habilitado quando o tipo do bem for “Precatório Judicial” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


---

### `Bens - Tipo Precatório  VALOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Monetário | - | R$ 0,00 | Campo para digitar o custo do bem informado. |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”valor


---

### `TITULARES`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | - | 1,2,3,4 | De acordo com a posição do campo ORDEMPARTEATO, a posição que inserir nesse campo TITULARES será o titular do bem |

| Código | Descrição |
|--------|-----------|
| Os números é de 
Acordo com o valor
Inserido no campo
ORDEMPARTEATO |  |


---

### `Bens - Tipo Imóvel  CIN`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Código Imobiliário Nacional. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  REFERENCIACADASTRAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Indica o tipo da referencia cadastral do imóvel de bem e direito apontado no registro relativo a parte vinculada ao ato. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Inscrição Municipal |
| 2 | NIRF(Receita Federal) |
| 3 | RIP-Registro Imobiliário Patrimonial (SPU) |
| 4 | SNCR (INCRA) |


---

### `Bens - Tipo Imóvel  NUMEROCADASTRO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | - | - | Número do respectivo tipo de cadastro selecionado. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  TIPOIMOVEL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Tipo do imóvel informado. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só deverá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


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


---

### `Bens - Tipo Imóvel  ACESSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 4 | 0 (1 dígito numérico) | Tipo de acessão. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

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


---

### `Bens - Tipo Imóvel  UNIDADEAREATOTAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área total do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


---

### `Bens - Tipo Imóvel  QUANTIDADEAREATOTAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | - | 0,00 | Valor numérico da quantidade de área total do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  UNIDADEAREACONSTRUIDA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área construída do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


---

### `Bens - Tipo Imóvel  QUANTIDADEAREACONSTRUIDA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | - | 0,00 | Valor numérico da quantidade de área construída do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  VALORIMOVEL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Monetário | - | R$ 0,00 | Valor monetário do imóvel descrito. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  TIPOTRIBUTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo do tributo cobrado pelo imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | IPTU |
| 2 | ITBI |
| 3 | ITCMD |
| 4 | ITR |


---

### `Bens - Tipo Imóvel  VALORFISCAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Monetário | - | R$ 0,00 | Valor fiscal do imóvel no caso de compra e venda. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  CNM`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Código nacional de matricula. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| (Vazio) | CNS + número de ordem da matrícula |


---

### `Bens - Tipo Imóvel  IMOVEL_CEP`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 8 | 00000000 | CEP do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  IMOVEL_RUA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Logradouro do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  IMOVEL_NUMERO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Número do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  IMOVEL_COMPLEMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Complemento do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  IMOVEL_BAIRRO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Bairro do endereço Do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


---

### `Bens - Tipo Imóvel  IMOVEL_UF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Estado do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


---

### `Bens - Tipo Imóvel  IMOVEL_MUNICIPIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 6 | 000000 (6 dígitos) | Município do endereço do imóvel. Esse campo só será habilitado quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano” |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


---

## Atos de Origem - Somente para atos do tipo Renúncia de Procuração (4), Revogação de Procuração (5), Substabelecimento (6) e Escrituras (1) quando a natureza for Revogação (61) ou Rerratificação (35)


---

### `ATOORIGEM_UF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Estado do cartório onde o ato de origem foi lavrado |

> **Validação:** Se torna obrigatório no envio de ato por DIGITAÇÃO como filtro para conseguir preencher o campo "Cartório"


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


---

### `ATOORIGEM_MUNICIPIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 6 | 000000 (6 dígitos) | Município do cartório onde o ato de origem foi lavrado |

> **Validação:** Se torna obrigatório no envio de ato por DIGITAÇÃO como filtro para conseguir preencher o campo "Cartório"


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


---

### `ATOORIGEM_CARTORIOATUAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Caso o ato de origem foi lavrado no mesmo cartório do ato de rerratificação foi lavrado |

> **Validação:** Se torna obrigatório somente no envio de ato por DIGITAÇÃO como facilitador para se conseguir preencher o campo "Cartório"


| Código | Descrição |
|--------|-----------|
| 0 | Ato de origem não foi lavrado no cartório atual |
| 1 | Ato de origem foi lavrado no mesmo cartório onde o ato de rerratificação foi lavrado |


---

### `ATOORIGEM_CARTORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 6 | XXXXXX (CNS que identifica o cartório) | Este campo deve ser preenchido com o (CNS)Número do Código Nacional da Serventia em que consta o ato de origem. O CNS do cartório deve seguir o divulgado pelo CNJ. |

---

### `ATOORIGEM_CARTORIONAOCADASTRADO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Quando o ato de origem foi lavrado em um cartório não cadastrado na base de dados do SIGNO. Esse campo fica desabilitado quando o valor do campo “NATUREZAATO” é do tipo “Revogação” |

> **Validação:** Quando seu valor for "1" este desobriga o preenchimento das informações do cartório.


| Código | Descrição |
|--------|-----------|
| 0 | Não |
| 1 | Sim |


---

### `ATOORIGEM_OBSERVACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Campo para preenchimento dos dados de localização do ato de origem |

---

### `ATOORIGEM_TODOSATOSANTERIORES`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Revoga todos os atos de um cartório cadastrado na base de dados do SIGNO. Esse campo fica habilitado quando o valor do campo “NATUREZAATO” é do tipo “Revogação” |

| Código | Descrição |
|--------|-----------|
| 0 | Não |
| 1 | Sim |


---

### `ATOORIGEM_TIPOATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo do ato que foi lavrado no cartório. |

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


---

### `ATOORIGEM_NATUREZAATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | 00 (2 dígitos numéricos) | Campo de lista de natureza do ato. |

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


| Código | Descrição |
|--------|-----------|
| 11 | Inválido |
| (vazio) | Incompleto |


---

### `ATOORIGEM_LIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 8 | 00000000 (8 dígitos numéricos) | Número do livro inicial em que o ato foi lavrado. |

---

### `ATOORIGEM_COMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


---

### `ATOORIGEM_LIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 8 | 00000000 (8 dígitos numéricos) | Número do livro final em que o ato foi lavrado. |

> **Validação:** Caso o ato tenha sido lavrado em um único livro esse campo deve ser preenchido com o mesmo valor do campo ATOORIGEM_LIVROINICIAL


---

### `ATOORIGEM_COMPLEMENTOLIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro final. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


---

### `ATOORIGEM_FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

---

### `ATOORIGEM_COMPLEMENTOFOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha inicial. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


---

### `ATOORIGEM_FOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo ATOORIGEM_FOLHAINICIAL. |

> **Validação:** Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo ATOORIGEM_FOLHAINICIAL.


---

### `ATOORIGEM_COMPLEMENTOFOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha final. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


---

## Dados do Precatório - Preenchido somente para Natureza "Cessão de Precatórios"


---

### `ORDEMINFORMACAOPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos numéricos) | Campo que indica a posição que contém todas as informações Do precatório, ele tem vínculo direto com o campo INFORMACAOPRECATORIO |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


---

### `DESCRICAOPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Contém a descrição do precatório |

---

### `NUMEROOFICIOREQUISITORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Contém o número do Ofício Requisitório |

---

### `NUMEROPROCESSOPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 20 | - | contém o número do processo do precatório |

---

### `VARAORIGEM`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 255 | - | contém o número da vara de origem |

---

### `TRIBUNAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 5 | - | Contém o código do tribunal |

> **Validação:** Lista na aba "Tribunais" desta planilha


Consulte a tabela de **Tribunais** na página [Domínios Compartilhados](dominios.md).


---

### `VALORGLOBALPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Monetário | - | R$ 0,00 | contém o valor global do precatório |

---

### `BENEFICIARIOS`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | - | 1,2,3,4 | De acordo com a posição do campo ORDEMPARTEATO, a posição que inserir nesse campo BENEFICIARIOS será os beneficiários do precatório |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


| Código | Descrição |
|--------|-----------|
| Os números é de 
Acordo com o valor
Inserido no campo
ORDEMPARTEATO |  |


---

## Cessão de Precatórios - Preenchido somente para Natureza "Cessão de Precatórios"


---

### `ORDEMCESSAOPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos numéricos) | Campo que indica a posição que contém todas as informações da cessão de precatorios, ele tem vínculo direto com o campo CESSAONAOORIGINARIA |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


---

### `INFORMACAOPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | - | 1,2,3,4 | De acordo com a posição do campo ORDEMINFORMACAOPRECATORIO, a posição que inserir nesse campo INFORMACAOPRECATORIO será o precatório da cessão |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


| Código | Descrição |
|--------|-----------|
| Os números é de 
Acordo com o valor
Inserido no campo
ORDEMINFORMACAOPRECATORIO |  |


---

### `ALIENACAOCESSAOPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | - | Porcentagem da alienação |

---

### `PARTESCESSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | - | 1,2,3,4 | De acordo com a posição do campo ORDEMPARTEATO, a posição que inserir nesse campo PARTESCESSAO será as partes da cessãp |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


| Código | Descrição |
|--------|-----------|
| Os números é de 
Acordo com o valor
Inserido no campo
ORDEMPARTEATO |  |


---

## Dados das Cessões Anteriores - Preenchido somente para Natureza "Cessão de Precatórios"


---

### `CESSAONAOORIGINARIA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | - | 1,2,3,4 | De acordo com a posição do campo ORDEMCESSAOPRECATORIO, a posição que inserir nesse campo CESSAONAOORIGINARIA será a cessão não originária dessa cessão anterior |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


| Código | Descrição |
|--------|-----------|
| Os números é de 
Acordo com o valor
Inserido no campo
ORDEMCESSAOPRECATORIO |  |


---

### `TIPOATOCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Informa se a cessão anterior faz referência a um ato público ou privado |

| Código | Descrição |
|--------|-----------|
| 1 | privado |
| 2 | publico |


---

### `UFCARTORIOCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Estado do cartório da cessão anterior |

> **Validação:** Preenchido somente quando a cessão anterior for "pública"


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


---

### `MUNICIPIOCARTORIOCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 6 | 000000 (6 dígitos) | Município do endereço da parte vinculada ao ato |

> **Validação:** Preenchido somente quando a cessão anterior for "pública"


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


---

### `CARTORIOCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 6 | XXXXXX (CNS que identifica o cartório) | Este campo deve ser preenchido com o (CNS)Número do Código Nacional da Serventia em que consta o ato de origem. O CNS do cartório deve seguir o divulgado pelo CNJ. |

> **Validação:** Preenchido somente quando a cessão anterior for "pública"


---

### `LIVROINICIALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Numérico | 8 | 00000000 (8 dígitos numéricos) | Indica a capacidade civil da parte vinculada ao ato |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `COMPLEMENTOLIVROINICIALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `LIVROFINALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 8 | 00000000 (8 dígitos numéricos) | Número do livro final em que o ato foi lavrado. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `COMPLEMENTOLIVROFINALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro final. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `FOLHAINICIALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `COMPLEMENTOFOLHAINICIALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha inicial. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `FOLHAFINALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo FOLHAINICIAL. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `COMPLEMENTOFOLHAFINALCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 – letras) | Complemento alfanumérico referente ao número da folha final. Caso a folha não tenha complemento, esse campo deve ser enviado em branco. |

> **Validação:** Preenchido opcionalmente somente quando a cessão anterior for "pública"


---

### `DATAATOCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | XX/XX/XXXX | Data do ato da Cessão Anterior |

---

### `ALIENACAOCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | - | Porcentagem da alienação |

---

### `ORDEMPARTECESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos numéricos) | Campo que indica a posição que contém todas as informações da parte, ele tem vínculo direto com o campo PARTECESSAOANTERIOR |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


---

### `QUALIFICACAOPARTECESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos numéricos) | Campo que indica a qualidade da parte |

| Código | Descrição |
|--------|-----------|
| 10 | Cedente |
| 11 | Beneficiário |
| 12 | Cessionário |


---

### `NOMEPARTECESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 255 | - | Campo que indica o nome da parte do ato da cessão anterior |

| Código | Descrição |
|--------|-----------|
| - |  |


---

### `CPFCNPJCESSAOANTERIOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 11 Ou 14 | 00000000000 Ou 000.000.000-00 Ou 00000000000000 Ou 00.000.000/0000-00 | Número do CPF/CNPJ da parte do ato da cessão anterior. |

---

### `PARTESCESSAOANTERIORES`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | - | 1,2,3,4 | De acordo com a posição do campo ORDEMPARTECESSAOANTERIOR, a posição que inserir nesse campo PARTESCESSAOANTERIORES será as partes da cessão |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


---

## Natureza do ato

Aplicável somente quando o tipo de ato é **Escritura (1)**.

| código | Descrição |
| --- | --- |
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

---

## Natureza do litígio

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

---

## Qualidade da parte

A qualificação da parte depende do tipo de ato.

### Partes padrão

Aplicável a: Escritura, Procuração, Procuração p/ Fins Previdenciários, Renúncia, Revogação, Ata Notarial.

| Código | Qualidade |
|--------|-----------|
| 1 | Outorgado |
| 2 | Outorgante |
| 3 | Interveniente |
| 4 | Usufruto |

### Substabelecimento (6)

| Código | Qualidade |
|--------|-----------|
| 1 | Outorgado |
| 2 | Outorgante |
| 3 | Interveniente |
| 4 | Usufruto |
| 5 | Mandante |

### Regras específicas por natureza

#### Cessão de Precatório (natureza 77)

| Código | Qualidade |
|--------|-----------|
| 10 | Cedente |
| 11 | Beneficiário |
| 12 | Cessionário |

#### Mediação

| Código | Qualidade |
|--------|-----------|
| 6 | Requerente |
| 7 | Requerido |
| 9 | Mediador |
| 3 | Interveniente |

#### Conciliação

| Código | Qualidade |
|--------|-----------|
| 6 | Requerente |
| 7 | Requerido |
| 8 | Conciliador |
| 3 | Interveniente |

#### Usufruto (Reserva, Instituição, Renúncia)

Obrigatória ao menos uma parte com qualidade **Usufruto (4)**.
