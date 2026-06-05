# CESDI - Envio por Upload

## Orientações de envio

Formato: **CSV, UTF-8**, campos separados por **ponto-e-vírgula (`;`)**.

1. Baixe o arquivo exemplo no SIGNO
2. Preencha seguindo as orientações deste documento
3. Salve como "CSV separado por vírgulas"
4. Faça o upload no SIGNO


---

## Campos e parâmetros de envio


### Dados básicos do ato


#### `TIPOLINHA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Indica se a linha faz referencia a um ato, a uma parte, a um bem e direito ou ato de origem. |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


| Código | Descrição |
|--------|-----------|
| AC | Ato Cesdi |
| PC | Parte Cesdi |
| BC | Bens e Direitos Cesdi |
| AO | Ato de origem |


#### `TIPOATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Tipo do ato que foi lavrado no cartório |

| Código | Descrição |
|--------|-----------|
| 1 | Separação |
| 2 | Reconciliação |
| 3 | Conversão de Separação em Divórcio |
| 4 | Divórcio Direto |
| 5 | Inventário |
| 6 | Sobrepartilha |
| 7 | Rerratificação |
| 8 | Nomeação de Inventariante |
| 9 | Partilha |


#### `OBSERVACAOATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Campo para preenchimento do motivo do status do ato, caso seja inválido ou incompleto |

> **Validação:** Não deve ser preenchido quando o status do ato é "válido".


#### `DATAATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Data | - | dd/mm/aaaa | Data em que o ato foi lavrado. |

#### `LIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro inicial em que o ato foi lavrado. |

#### `COMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

> **Validação:** Valores de 1 a 600


#### `COMPLEMENTOFOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número da folha inicial. Utilizado para diferenciar quando existem 2 atos no mesmo livro e folha. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `FOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. |

> **Validação:** Valores de 1 a 600  Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor do campo FOLHAINICIAL.


#### `COMPLEMENTOFOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número da folha final. Utilizado para diferenciar quando existem 2 atos no mesmo livro e folha. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `VALOROPERACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Monetário | - | R$ 0,00 | Informe o valor da escritura, contrato, etc |

#### `PRAZOPAGAMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Prazo estipulado para o pagamento da escritura, contrato, etc |

| Código | Descrição |
|--------|-----------|
| 1 | À vista |
| 2 | A prazo |
| 3 | Antecipado |


#### `FORMAPAGAMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Forma de pagamento realizada para quitação da escritura. |

| Código | Descrição |
|--------|-----------|
| 1 | Cheque |
| 2 | Dinheiro |
| 3 | Nota promissória |
| 4 | Permuta |
| 5 | Outras |
| 6 | Transferência Bancária |


#### `DATACONTRATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Data da última assinatura da escritura, contrato, etc |

### Dados das partes


**Dados Básicos da Parte**


#### `ORDEMPARTEATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos numéricos) | Campo que indica a posição que contém todas as informações da parte, ele tem vínculo direto com o campo TITULARES |

> **Validação:** UTILIZADO APENAS NA FORMA DE ENVIO POR UPLOAD


#### `QUALIDADEPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Campo que indica a qualidade da parte de acordo com o tipo de ato informado |

A qualificação da parte depende do tipo de ato. Cada qualificação abaixo indica em quais atos ela pode ser usada:

| Qualificação | Código | Atos |
|--------------|:------:|------|
| Separando(a) | 1 | Separação, Rerratificação |
| Advogado(a) | 2 | Todos os atos |
| Cessionário/Adjudicatários | 3 | Todos os atos |
| Cedente | 4 | Todos os atos |
| Interveniente | 5 | Todos os atos |
| Anuente | 6 | Todos os atos |
| Reconciliando(a) | 7 | Reconciliação |
| Divorciando(a) | 8 | Conversão / Divórcio direto, Sobrepartilha / Partilha, Rerratificação |
| Falecido(a) | 9 | Inventário, Sobrepartilha / Partilha, Rerratificação, Nomeação de inventariante |
| Viúvo(a) | 10 | Inventário, Sobrepartilha / Partilha, Rerratificação, Nomeação de inventariante |
| Herdeiro(a) | 11 | Inventário, Sobrepartilha / Partilha, Rerratificação, Nomeação de inventariante |
| Inventariante | 13 | Inventário, Nomeação de inventariante |

**Requisitos mínimos de partes por ato:**

- **Separação / Reconciliação / Conversão / Divórcio direto:** mínimo 3 partes (1 advogado e 2 separandos/reconciliandos/divorciandos).
- **Inventário:** mínimo 3 partes (1 advogado, 1 falecido e 1 herdeiro).
- **Sobrepartilha / Partilha:** advogado + falecido + herdeiro, ou advogado + divorciando.
- **Rerratificação:** mínimo 1 parte, exceto Advogado e Interveniente.
- **Nomeação de inventariante:** mínimo 2 partes (Inventariante e Falecido).


#### `CPF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 11 | Sem formatação ou caracteres especiais | Número do CPF da parte  Quando a parte for pessoa jurídica este campo deve aceitar o CNPJ. |

> **Validação:** O campo passará a aceitar obrigatoriamente o CPF ou CNPJ. A nomenclatura por enquanto permanecerá a mesma


#### `TIPODOCUMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 4 | 0000 (4 dígitos numéricos) | Documento secundário de identificação da parte vinculada ao ato. |

> **Validação:** Campo obrigatório quando o atributo “Documento” for informado


| Código | Descrição |
|--------|-----------|
| 1717 | Carteira de Identidade Funcional |
| 1718 | Carteira de Identidade Militar |
| 1719 | Carteira de Trabalho |
| 1720 | Carteira Profissional |
| 1721 | CNH |
| 1722 | Passaporte |
| 1723 | RNE |
| 1724 | RG |
| 1725 | Outro Documento Público |
| 1726 | OAB |


#### `DOCUMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | - | - | Descrição do documento, sem caracteres especiais | Número do documento informado, de acordo com o TIPO DOCUMENTO. |

#### `ORGAOEMISSOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 100 | - | Informa o órgão público emissor do documento secundário. |

| Código | Descrição |
|--------|-----------|
|  | Descrição do órgão emissor, sem caracteres especiais e com letras maiúsculas |


#### `ESTADOOAB`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Estado do documento da OAB |

Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `DATAEMISSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Data de emissão do documento secundário da parte vinculada ao ato |

#### `DATANASCIMENTO Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Data | - | dd/mm/aaaa | Data de nascimento da parte vinculada ao ato |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


#### `SEXO Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Numérico | 1 | 0 (1 dígito numérico) | Sexo informado pela parte vinculada ao ato |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


| Código | Descrição |
|--------|-----------|
| 1 | Feminino |
| 2 | Masculino |


#### `NOMEPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 255 | - | Nome completo da parte vinculada ao ato |

#### `NOMESOCIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Nome Social da parte vinculada ao ato. |

> **Validação:** Recomendado o preenchimento quando houver ciência que a parte possuir um nome social.


| Código | Descrição |
|--------|-----------|
| (Vazio) | Nome Social da Parte |


#### `NACIONALIDADE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Numérico | 1 | 0 (1 dígito numérico) | País de nacionalidade da parte. |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"  Caso a parte não tenha uma nacionalidade diferente do país em que nasceu, deverá ser informado o mesmo dado do campo "PAISORIGEM".


| Código | Descrição |
|--------|-----------|
| 1 | Brasileiro |
| 2 | Estrangeiro |
| 3 | Naturalizado |


#### `PAISORIGEM Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Numérico | 3 | 000 (3 dígitos numéricos) | País em que a parte vinculada ao ato nasceu |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


#### `ESTADONASCIMENTO Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | UF de nascimento da parte |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando" e quando "PaisOrigem" for Brasil


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `AREAATUACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | Lista de códigos do SINTER | Área de atuação profissional da parte vinculada ao ato |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


#### `PROFISSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | Lista de códigos do SINTER | Profissão da parte vinculada ao ato |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


#### `CAPACIDADECIVIL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Indica a capacidade civil da parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
| 1 | Capaz |
| 2 | Incapaz |
| 3 | Relativamente Incapaz |


#### `DATAOBITO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Data | - | dd/mm/aaaa | Data de óbito da parte |

> **Validação:** Deve ser preenchida somente quando a qualificação da parte vinculada ao ato é "FALECIDO (A)"


#### `RESPONSAVELFILHOSMENORES Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Indica se a parte vinculada ao ato é responsável pelos filhos menores, caso existam |

> **Validação:** Obrigatório para atos de "separação", "divórcio" e "conversão de separação em divórcio" quando o campo "QuantidadeFilhosMenores" for maior que zero.  Ao menos uma das partes no ato precisa estar como responsável.


| Código | Descrição |
|--------|-----------|
| 0 | Não |
| 1 | Sim |


#### `NAOPOSSUIFILIACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | 0 (1 dígito numérico) | Campo indicativo de que a parte possui ou não filiação |

| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| 0 | Não |
| 1 | Sim |


#### `FILIACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Alfanumérico | - | No envio por upload deve ser utilizado caractere / (barra) ou / (pipe) para separar quando houver mais de uma filiação. | Informa o nome dos pais |

> **Validação:** Poderá ser preenchido somente quando o atributo “naopossuiFiliacao” for igual a 0


#### `ESTADOCIVIL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Informa o estado civil da parte vinculada ao ato |

> **Validação:** Não deve ser preenchido nos casos de "Divórcio Diteto", "Separação" e "Conversão de Separação em Divórcio".


| Código | Descrição |
|--------|-----------|
| 1 | Casado |
| 2 | Desquitado |
| 3 | Divorciado |
| 4 | Separado |
| 5 | Solteiro |
| 6 | União Estável |
| 7 | Viúvo |


**Dados do Estado Civil**


> **Validação:** Preenchido somente quando o campo "ESTADO CIVIL" for "CASADO"


#### `CONJUGES_DATACASAMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Data | - | dd/mm/aaaa | Data do casamento entre as partes. |

> **Validação:** Preenchido OPCIONALMENTE somente nos casos abaixo: Quando o tipo de ato NÃO for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio",  quando o campo "Estado Civil" da parte for preenchida como "CASADA".


#### `CPFCONJUGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 11 | 00000000000 Ou 000.000.000-00 | Informa o cpf do cônjuge da parte vinculada ao ato |

> **Validação:** Preenchido OPCIONALMENTE somente nos casos abaixo: Quando o tipo de ato NÃO for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio", quando o campo "Estado Civil" da parte for preenchida como "CASADA".


#### `NOMECONJUGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Informa o nome do cônjuge da parte vinculada ao ato |

> **Validação:** Preenchido OPCIONALMENTE somente nos casos abaixo: Quando o tipo de ato NÃO for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio", quando o campo "Estado Civil" da parte for preenchida como "CASADA".  Campo obrigatório caso seja informado o cpfConjuge


#### `CONJUGES_REGIMEDEBENS`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Campo indicativo do tipo de regime de bens vigente entre as principais partes do ato. |

> **Validação:** Preenchido OPCIONALMENTE somente nos casos abaixo: Quando o tipo de ato NÃO for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio", quando o campo "Estado Civil" da parte for preenchida como "CASADA".


| Código | Descrição |
|--------|-----------|
| 1 | Comunhão Parcial de Bens |
| 2 | Comunhão Universal de Bens |
| 3 | Participação Final nos Aquestos |
| 5 | Regime Específico atribuído em Pacto Antenupcial |
| 7 | Separação de Bens |
| 8 | Separação Obrigatória de Bens |


**Dados de Endereço**


#### `CEP`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 8 | 00000-000 | Cep do endereço da parte vinculada ao ato |

#### `RUA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Rua do endereço da parte vinculada ao ato |

#### `NUMERO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Número do endereço da parte vinculada ao ato |

#### `COMPLEMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Complemento do endereço da parte vinculada ao ato |

#### `BAIRRO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Bairro do endereço da parte vinculada ao ato |

#### `MUNICIPIO Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 6 | 000000 (6 dígitos) | Código do IBGE para o município de residência |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando" e quando "PAISDERESIDENCIA" for Brasil


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `UF Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | Código do IBGE para o estado de residência |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando" e quando "PAISDERESIDENCIA" for Brasil


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `PAISRESIDENCIA Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | País em que a parte vinculada ao ato reside atualmente |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


**Dados de Contato**


#### `EMAIL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | E-mail de contato da parte vinculada ao ato |

> **Validação:** Preenchido somente quando a parte for diferente de falecido


#### `TIPOCONTATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | informa o tipo de informação de contato |

> **Validação:** Preenchido somente quando a parte for diferente de falecido


| Código | Descrição |
|--------|-----------|
| 1 | Celular |
| 2 | Telefone |


#### `CONTATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 11 | (00) 00000-0000 | Informa o número passado como contato |

> **Validação:** Preenchido somente quando a parte for diferente de falecido


### Dados Específicos


#### `REGIMEBENS Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Campo indicativo do tipo de regime de bens vigente entre as principais partes do ato. |

> **Validação:** Preenchido somente nos casos abaixo: - Obrigatoriamente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio".  - Opcionalmente nos demais atos, quando o campo "Estado Civil" da parte for preenchida como "CASADA".


| Código | Descrição |
|--------|-----------|
| 1 | Comunhão Parcial de Bens |
| 2 | Comunhão Universal de Bens |
| 3 | Participação Final nos Aquestos |
| 5 | Regime Específico Previsto em Pacto Antenupcial |
| 7 | Separação de Bens |
| 8 | Separação Obrigatória de Bens |


#### `FILHOSMAIORES Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos) | Quantidade de filhos maiores de 18 anos |

> **Validação:** Preenchido somente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio"


#### `FILHOSMENORES Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | 00 (2 dígitos) | Quantidade de filhos menores de 18 anos |

> **Validação:** Preenchido somente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio"


#### `DATACASAMENTO Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Data | - | dd/mm/aaaa | Campo para informar a data do casamento |

> **Validação:** Preenchido somente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio"


#### `EXISTEBEMEDIREITO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Campo indicativo sobre a existência de bem e direito vinculado a parte do ato |

| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| 0 | Não existe |
| 1 | Existe |


### Dados Bens e Direitos


> **Validação:** Nenhum campo abaixo deverá ser preenchido se o campo "EXISTEBEMEDIREITO" for FALSO


#### `TIPOBEMEDIREITO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Indica o tipo de bem e direito que pertence a parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
|  | Lista de códigos dos tipos de bens e direitos. Acesse a aba TiposBensEDireitos para verificar o código aceito. O campo deve ser preenchido com a informação existente na coluna CÓDIGO. |


#### `DESCRICAOBEM`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Descrição do bem pertencente a parte vinculada ao ato |

#### `Bem - Tipo precatório  VARAJUDICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Referente ao nome da vara judicial de cadastro do precatório. |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `Bem - Tipo precatório  NUMEROPROCESSO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | - | - | Referente ao número do processo do precatório |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `Bem - Tipo precatório  NUMEROPRECATORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | - | - | Referente ao número do precatório. |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `Bem - Tipo precatório  VALOR`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Monetário | - | R$ 0,00 | Valor monetário do bem descrito |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for “Precatório Judicial”


#### `TITULARES`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | - | 1,2,3,4 | De acordo com a posição do campo ORDEMPARTEATO, a posição que inserir nesse campo TITULARES será o titular do bem |

| Código | Descrição |
|--------|-----------|
| Os números é de 
Acordo com o valor
Inserido no campo
ORDEMPARTEATO |  |


#### `Bem - Tipo imóvel  CIN`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Código Imobiliário Nacional. |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  TIPOREFERENCIACADASTRALIMOVEL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Indica o tipo da referencia cadastral do imóvel de bem e direito apontado no registro relativo a parte vinculada ao ato |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Inscrição Municipal |
| 2 | NIRF(Receita Federal) |
| 3 | RIP-Registro Imobiliário Patrimonial (SPU) |
| 4 | SNCR (INCRA) |


#### `Bem - Tipo imóvel  NUMEROCADASTROIMOVEL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | - | - | Número do respectivo tipo de cadastro selecionado |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  TIPOIMOVEL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo do imóvel informado |

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


#### `Bem - Tipo imóvel  ACESSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo de acessão. |

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


#### `Bem - Tipo imóvel  UNIDADEAREATOTAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área total do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


#### `Bem - Tipo imóvel  QUANTIDADEAREATOTAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | - | 0,00 | Valor numérico da quantidade de área total do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  UNIDADEAREACONSTRUIDA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área construída do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


#### `Bem - Tipo imóvel  QUANTIDADEAREACONSTRUIDA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | - | 0,00 | Valor numérico da quantidade de área construída do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  VALORIMOVEL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Monetário | - | R$ 0,00 | Valor monetário do imóvel descrito |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  TIPOTRIBUTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo do tributo cobrado pelo imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| 1 | IPTU |
| 2 | ITBI |
| 3 | ITCMD |
| 4 | ITR |


#### `Bem - Tipo imóvel  VALORFISCAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Monetário | - | R$ 0,00 | Valor fiscal do imóvel no caso de compra e venda |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  CNM`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Código nacional de matricula |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


| Código | Descrição |
|--------|-----------|
| (Vazio) | CNS + número de ordem da matrícula |


#### `Bem - Tipo imóvel  IMOVEL_CEP`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 8 | 00000-000 | Cep do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  IMOVEL_RUA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Logradouro do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  IMOVEL_NUMERO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Número do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  IMOVEL_COMPLEMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Complemento do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  IMOVEL_BAIRRO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | - | - | Bairro do endereço da parte vinculada ao ato |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `Bem - Tipo imóvel  IMOVEL_MUNICIPIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 6 | 000000 (6 dígitos) | Município do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `Bem - Tipo imóvel  IMOVEL_UF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | UF do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


### Dados do Ato Origem


> **Validação:** Somente para preenchimento em atos de Rerratificação


#### `ATOORIGEM_UF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | UF do cartório onde o ato de origem foi lavrado |

> **Validação:** Se torna obrigatório somente no envio de ato por DIGITAÇÃO como facilitador para se conseguir preencher o campo "Cartório"


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `ATOORIGEM_MUNICIPIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 6 | 000000 (6 dígitos) | Município do cartório onde o ato de origem foi lavrado |

> **Validação:** Se torna obrigatório somente no envio de ato por DIGITAÇÃO como facilitador para se conseguir preencher o campo "Cartório"


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `ATOORIGEM_CARTORIOATUAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Cartório onde o ato de rerratificação está sendo lavrado |

> **Validação:** Se torna obrigatório somente no envio de ato por DIGITAÇÃO como facilitador para se conseguir preencher o campo "Cartório"


| Código | Descrição |
|--------|-----------|
| 0 | Ato de origem não foi lavrado no cartório atual |
| 1 | Ato de origem foi lavrado no mesmo cartório onde o ato de rerratificação foi lavrado |


#### `ATOORIGEM_CARTORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 6 | 000000 (6 digitos numéricos) | Este campo deve ser preenchido com o (CNS)Número do Código Nacional da Serventia em que consta o ato de origem. O CNS do cartório deve seguir o divulgado pelo CNJ. |

#### `ATOORIGEM_CARTORIONAOCADASTRADO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Informação se o ato de origem foi lavrado em um cartório não cadastrado na base de dados do SIGNO. |

> **Validação:** Quando seu valor for "1" este desobriga o preenchimento das informações do cartório.


| Código | Descrição |
|--------|-----------|
| 0 | False |
| 1 | True |


#### `ATOORIGEM_OBSERVACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Campo para preenchimento dos dados de localização do ato de origem |

#### `ATOORIGEM_TIPOATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Tipo do ato que foi lavrado no cartório |

| Código | Descrição |
|--------|-----------|
| 1 | Separação |
| 2 | Reconciliação |
| 3 | Conversão de Separação em Divórcio |
| 4 | Divórcio Direto |
| 5 | Inventário |
| 6 | Sobrepartilha |
| 7 | Rerratificação |
| 8 | Nomeação de Inventariante |
| 9 | Partilha |


#### `ATOORIGEM_LIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 4 | 0000 (4 dígitos numéricos) | - |

#### `ATOORIGEM_COMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `ATOORIGEM_LIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro final em que o ato foi lavrado. |

> **Validação:** Caso o ato tenha sido lavrado em um único livro esse campo deve ser preenchido com o mesmo valor do campo ATOORIGEM_LIVROINICIAL


#### `ATOORIGEM_COMPLEMENTOLIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número do livro final. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `ATOORIGEM_FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

#### `ATOORIGEM_COMPLEMENTOFOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número da folha inicial. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `ATOORIGEM_FOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. |

> **Validação:** Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo ATOORIGEM_FOLHAINICIAL.


#### `ATOORIGEM_COMPLEMENTOFOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (letra) | Complemento alfanumérico referente ao número da folha final. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


## Tipo de bens e direito

| Código | Descrição |
| --- | --- |
| 1765 | Imóvel rural |
| 1766 | Imóvel urbano |
| 1790 | Precatório judicial |

---

## Referência cadastral do imóvel

| Código | Descrição |
| --- | --- |
| 1800 | CAFEN - Cadastro Ferroviário Nacional |
| 1801 | CC - Conta Corrente (Banco/Agência/Nº da Conta) |
| 1802 | CIN - Código Imobiliário Nacional |
| 1803 | CNM - Código Nacional de Matrícula |
| 1804 | Inscrição de Embarcação |
| 1805 | Inscrição Municipal |
| 1806 | NIRF - Número do Imóvel Rural na Receita Federal |
| 1807 | Número de Série |
| 1808 | Placa |
| 1809 | Precatório |
| 1810 | RAB - Aeronave |
| 1811 | Registro Animal |
| 1812 | RIP - Registro Imobiliário Patrimonial (SPU) |
| 1813 | SNCR - Sistema Nacional de Cadastro Rural (INCRA) |