# CESDI - Envio por API

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
| 1 | Separação |
| 2 | Reconciliação |
| 3 | Conversão de Separação em Divórcio |
| 4 | Divórcio Direto |
| 5 | Inventário |
| 6 | Sobrepartilha |
| 7 | Rerratificação |
| 8 | Nomeação de Inventariante |
| 9 | Partilha |


#### `dataAto`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | yyyy-MM-dd | Data em que o ato foi lavrado. |

#### `livroInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 4 | 0000 (4 dígitos numéricos) | Número do livro inicial em que o ato foi lavrado. |

#### `complementoLivroInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

> **Validação:** Valores de 1 a 600


#### `complementoFolhaInicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número da folha inicial. Utilizado para diferenciar quando existem 2 atos no mesmo livro e folha. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. |

> **Validação:** Valores de 1 a 600  Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor do campo FOLHAINICIAL.


#### `complementoFolhaFinal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número da folha final. Utilizado para diferenciar quando existem 2 atos no mesmo livro e folha. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `valorOperacao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | R$ 0,00 | Informe o valor da escritura, contrato, etc |

#### `prazoPagamento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | Prazo estipulado para o pagamento da escritura, contrato, etc |

| Código | Descrição |
|--------|-----------|
| 1 | À vista |
| 2 | A prazo |
| 3 | Antecipado |


#### `formaPagamento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | - | 0 (1 dígito numérico) | Forma de pagamento realizada para quitação da escritura. |

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

### Informações das partes


> **Observação:** Os campos a seguir compõem cada item da lista `partes`. O envio dessa lista é **obrigatório** e o ato pode conter múltiplas partes.


#### `qualificacaoParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 4 | 0000 (4 dígitos numéricos) | Campo que indica a qualidade da parte de acordo com o tipo de ato informado |

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


#### `cpf`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 11 | Sem formatação ou caracteres especiais | Número do CPF da parte  Quando a parte for pessoa jurídica este campo deve aceitar o CNPJ. |

> **Validação:** O campo passará a aceitar obrigatoriamente o CPF ou CNPJ. A nomenclatura por enquanto permanecerá a mesma


| Código | Descrição |
|--------|-----------|
| 1717 | Carteira de Identidade Funcional |
| 1718 | Carteira de Identidade Militar |
| 1719 | Carteira de Trabalho |
| 1720 | Carteira Profissional |
| 1721 | CNH |


#### `tipoDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| - | - | - | - | - |

| Código | Descrição |
|--------|-----------|
| 1722 | Passaporte |
| 1723 | RNE |
| 1724 | RG |
| 1725 | Outro Documento Público |
| 1726 | OAB |


#### `numeroDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | Descrição do documento, sem caracteres especiais | Número do documento informado, de acordo com o tipoDocumento |

#### `orgaoEmissor`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 100 | - | Órgão emissor do documento informado |

| Código | Descrição |
|--------|-----------|
|  | Descrição do órgão emissor, sem caracteres especiais e com letras maiúsculas |


#### `estadoOAB`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 2 | XX (2 dígitos alfanuméricos) | Estado do documento da OAB |

> **Validação:** Deve ser preenchido somente quando a qualidade da parte for advogado


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `dataEmissaoDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | yyyy-MM-dd | Data de emissão do documento secundário da parte vinculada ao ato |

#### `dataNascimentoParte Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | String | - | yyyy-MM-dd | Data de nascimento da parte vinculada ao ato |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


#### `sexo Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Integer | 1 | 0 (1 dígito numérico) | Sexo informado pela parte vinculada ao ato |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


| Código | Descrição |
|--------|-----------|
| 1 | Feminino |
| 2 | Masculino |


#### `nomeParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 255 | - | Nome completo da parte vinculada ao ato |

#### `nomeSocialParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 255 | - | Nome Social da parte vinculada ao ato. |

> **Validação:** Recomendado o preenchimento quando houver ciência que a parte possuir um nome social.


| Código | Descrição |
|--------|-----------|
| (Vazio) | Nome Social da Parte |


#### `nacionalidadeParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Integer | 1 | 0 (1 dígito numérico) | País de nacionalidade da parte. |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"  Caso a parte não tenha uma nacionalidade diferente do país em que nasceu, deverá ser informado o mesmo dado do campo "PAISORIGEM".


| Código | Descrição |
|--------|-----------|
| 1 | Brasileiro |
| 2 | Estrangeiro |
| 3 | Naturalizado |


#### `codigoPaisParte Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | Integer | 3 | 000 (3 dígitos numéricos) | País em que a parte vinculada ao ato nasceu |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


#### `ufOrigem Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | String | 2 | XX (2 dígitos alfanuméricos) | UF de nascimento da parte |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando" e quando "PaisOrigem" for Brasil


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `categoriaParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 2 | Lista de códigos do SINTER | Área de atuação profissional da parte vinculada ao ato |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


#### `profissaoParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | Lista de códigos do SINTER | Profissão da parte vinculada ao ato |

| Código | Descrição |
|--------|-----------|
|  | Lista de documentos do SINTER.
Acesse a aba PROFISSÃO para verificar o código aceito. Esse campo deve ser preenchido com o código existente na coluna CÓDIGO PROFISSÃO. |
| 1 | Capaz |


#### `capacidadeCivil`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| - | - | - | - | - |

| Código | Descrição |
|--------|-----------|
| 2 | Incapaz |
| 3 | Relativamente Incapaz |


#### `dataObito`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | yyyy-MM-dd | Data de óbito da parte |

> **Validação:** Deve ser preenchida somente quando a qualificação da parte vinculada ao ato é "FALECIDO (A)"


#### `responsavelFilhosMenores Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | boolean | 1 | 0 (1 dígito numérico) | Indica se a parte vinculada ao ato é responsável pelos filhos menores, caso existam |

> **Validação:** Obrigatório para atos de "separação", "divórcio" e "conversão de separação em divórcio" quando o campo "QuantidadeFilhosMenores" for maior que zero.  Ao menos uma das partes no ato precisa estar como responsável.


| Código | Descrição |
|--------|-----------|
| True | A parte é responsável pelos filhos menores |
| False | A parte não é responsável pelos filhos menores |
| Nulo | Não informado |


#### `naoPossuiFiliacao`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| - | - | - | - | - |

| Código | Descrição |
|--------|-----------|
| True | Não possui filiação |
| False | Possui filiação |


#### `filiacoes <Lista>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | LISTA / BLOCO | - | Lista de strings | Contém a lista dos nomes da filiação da parte |

> **Validação:** Poderá ser preenchido somente quando o atributo “naopossuiFiliacao” for igual a 0


| Código | Descrição |
|--------|-----------|
| 1 | Casado |
| 2 | Desquitado |
| 3 | Divorciado |


#### `estadoCivilParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| - | - | - | - | - |

| Código | Descrição |
|--------|-----------|
| 4 | Separado |
| 5 | Solteiro |
| 6 | União Estável |
| 7 | Viúvo |


**Dados do Estado Civil**


> **Validação:** Preenchido somente quando o campo "estadoCivilParte" for "CASADO"


#### `dataCasamento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | yyyy-MM-dd | Data do casamento entre as partes. |

> **Validação:** Preenchido OPCIONALMENTE somente nos casos abaixo: Quando o tipo de ato NÃO for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio",  quando o campo "Estado Civil" da parte for preenchida como "CASADA".


#### `cpfConjuge`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 11 | 00000000000 Ou 000.000.000-00 | Informa o cpf do cônjuge da parte vinculada ao ato |

> **Validação:** Preenchido OPCIONALMENTE somente nos casos abaixo: Quando o tipo de ato NÃO for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio", quando o campo "Estado Civil" da parte for preenchida como "CASADA".


#### `nomeConjuge`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Informa o nome do cônjuge da parte vinculada ao ato |

> **Validação:** Preenchido OPCIONALMENTE somente nos casos abaixo: Quando o tipo de ato NÃO for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio", quando o campo "Estado Civil" da parte for preenchida como "CASADA".  Campo obrigatório caso seja informado o cpfConjuge


| Código | Descrição |
|--------|-----------|
| 1 | Comunhão Parcial de Bens |
| 2 | Comunhão Universal de Bens |
| 3 | Participação Final nos Aquestos |


#### `regimeDeBensDireitosDoCasamento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| - | - | - | - | - |

| Código | Descrição |
|--------|-----------|
| 5 | Regime Específico Previsto em Pacto Antenupcial |
| 7 | Separação de Bens |
| 8 | Separação Obrigatória de Bens |


**Dados de Endereço**


#### `cepResidencia`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 8 | 00000000 | Cep do endereço da parte vinculada ao ato |

> **Validação:** sem formatação ou caracteres especiais


#### `logradouroResidencia`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Rua do endereço da parte vinculada ao ato |

#### `numeroResidencia`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Número do endereço da parte vinculada ao ato |

#### `complementoResidencia`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Complemento do endereço da parte vinculada ao ato |

#### `bairroResidencia`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Bairro do endereço da parte vinculada ao ato |

#### `cidadeResidencia Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 6 | 000000 (6 dígitos) | Código do IBGE para o município de residência |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando" e quando "PAISDERESIDENCIA" for Brasil


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `ufResidencia Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 dígitos alfanuméricos) | Código do IBGE para o estado de residência |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando" e quando "PAISDERESIDENCIA" for Brasil


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `codigoPaisResidencia Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 3 | 000 (3 dígitos numéricos) | País em que a parte vinculada ao ato reside atualmente |

> **Validação:** Obrigatório somente quando o tipo de ato for "separação", "divórcio direto" e "conversão de separação em divórcio" e o atributo “qualificacaoParte” for igual a "Separando" ou "Divorciando"


Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


**Dados de Contato**


#### `emailParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | E-mail de contato da parte vinculada ao ato |

> **Validação:** Preenchido somente quando a parte for diferente de falecido


#### `tipoContatoParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Integer | 1 | 0 (1 dígito numérico) | informa o tipo de informação de contato |

> **Validação:** Preenchido somente quando a parte for diferente de falecido


| Código | Descrição |
|--------|-----------|
| 1 | Celular |
| 2 | Telefone |


#### `contatoParte`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 11 | (00) 00000-0000 | Informa o número passado como contato |

> **Validação:** Preenchido somente quando a parte for diferente de falecido


### Dados Específicos


#### `regimeDeBensDireitosDoCasamento Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 1 | 0 (1 dígito numérico) | Campo indicativo do tipo de regime de bens vigente entre as principais partes do ato. |

> **Validação:** Preenchido somente nos casos abaixo: - Obrigatoriamente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio".  - Não deve ser informado para os demais tipos de atos. Neste caso, utilize o campo na seção "Dados Estado Civil" da parte.


| Código | Descrição |
|--------|-----------|
| 1 | Comunhão Parcial de Bens |
| 2 | Comunhão Universal de Bens |
| 3 | Participação Final nos Aquestos |
| 5 | Regime Específico Previsto em Pacto Antenupcial |
| 7 | Separação de Bens |
| 8 | Separação Obrigatória de Bens |


#### `quantidadefilhosMaiores Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 2 | 00 (2 dígitos) | Quantidade de filhos maiores de 18 anos |

> **Validação:** Preenchido somente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio"


#### `quantidadefilhosMenores Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Integer | 2 | 00 (2 dígitos) | Quantidade de filhos menores de 18 anos |

> **Validação:** Preenchido somente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio"


#### `dataCasamento Obrigatório IBGE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | yyyy-MM-dd | Campo para informar a data do casamento |

> **Validação:** Preenchido somente quando o tipo de ato for "Separação", "Divórcio Direto" e "Conversão de Separação em Divórcio"


#### `existeBemEdireitoVinculadoAoAto`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | 0 (1 dígito numérico) | Campo indicativo sobre a existência de bem e direito vinculado a parte do ato |

| Código | Descrição |
|--------|-----------|
| Nulo | Não informado |
| 0 | Não existe |
| 1 | Existe |


### Dados Bens e Direitos


> **Observação:** Os campos a seguir compõem cada item da lista `bensEdireitos`. O envio é obrigatório somente quando existir bem ou direito vinculado ao ato.

> **Validação:** Nenhum campo abaixo deverá ser preenchido se o campo "bensEdireitos" for FALSO


#### `tipoBemEdireito`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Interger | 4 | 0000 (4 dígitos numéricos) | Indica o tipo de bem e direito que pertence a parte vinculada ao ato |

#### `descricaoDoBem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Descrição do bem pertencente a parte vinculada ao ato |

#### `varaJudicial`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Referente ao nome da vara judicial de cadastro do precatório. |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1790.


#### `numeroProcesso`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | - | Referente ao número do processo do precatório |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1790.


#### `numeroPrecatorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | - | Referente ao número do precatório. |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1790.


#### `valorDoBem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | R$ 0,00 | Valor monetário do bem descrito |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1790.


#### `titulares <Lista>`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | LISTA / BLOCO | - | - | Lista de informações dos titulares do bem. Verificar abaixo os itens de campos da lista |

> **Validação:** O envio do bloco de titulares é obrigatório quando existir bem. Cada item dentro da lista possui sua obrigatoriedade de acordo com o detalhamento mais abaixo.


#### `cin`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | - | Código Imobiliário Nacional. |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `referenciaCadastralImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Interger | 1 | 0 (1 dígito numérico) | Indica o tipo da referencia cadastral do imóvel de bem e direito apontado no registro relativo a parte vinculada ao ato |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


| Código | Descrição |
|--------|-----------|
| 1 | Inscrição Municipal |
| 2 | NIRF(Receita Federal) |
| 3 | RIP-Registro Imobiliário Patrimonial (SPU) |
| 4 | SNCR (INCRA) |


#### `numeroCadastroImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | - | - | Número do respectivo tipo de cadastro selecionado |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `tipoImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Interger | 1 | 0 (1 dígito numérico) | Tipo do imóvel informado |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


| Código | Descrição |
|--------|-----------|
| 1 | Cavidade Natural Subterrânea |
| 2 | Espelho d'água |
| 3 | Gleba |
| 4 | Laje |
| 5 | Terreno/Lote |
| 6 | Unidade Autônoma – Apartamento |
| 7 | Unidade Autônoma – Garagem, Box, Outras |
| 8 | Unidade Autônoma – Lote |
| 9 | Unidade Autônoma – Sala/Loja |


#### `acessaoImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Interger | 1 | 0 (1 dígito numérico) | Tipo de acessão. |

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


#### `tipoUnidadeAreaTotal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Interger | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área total do imóvel |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


#### `quantidadeUnidadeAreaTotal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | 0,00 | Valor numérico da quantidade de área total do imóvel |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


#### `tipoUnidadeAreaConstruida`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Interger | 1 | 0 (1 dígito numérico) | Tipo de unidade de área para mensurar a área construída do imóvel |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


| Código | Descrição |
|--------|-----------|
| 1 | Ha (hectare) |
| 2 | Km² (Kilomêtro quadrado) |
| 3 | M² (Mêtro quadrado) |


#### `quantidadeUnidadeAreaConstruida`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | 0,00 | Valor numérico da quantidade de área construída do imóvel |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


#### `valorImovel`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | R$ 0,00 | Valor monetário do imóvel descrito |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `tipoTributo`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Interger | 1 | 0 (1 dígito numérico) | Tipo do tributo cobrado pelo imóvel |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


| Código | Descrição |
|--------|-----------|
| 1 | IPTU |
| 2 | ITBI |
| 3 | ITCMD |
| 4 | ITR |


#### `valorFiscal`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Double | - | R$ 0,00 | Valor fiscal do imóvel no caso de compra e venda |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


#### `cnm`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Código nacional de matricula |

> **Validação:** Obrigatório somente quando o atributo "tipoBemEdireto" for igual a 1765 OU 1766.


| Código | Descrição |
|--------|-----------|
| (Vazio) | CNS + número de ordem da matrícula |


#### `cep`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 8 | 00000-000 | Cep do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `logradouro`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Logradouro do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `numero`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Número do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `complemento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Complemento do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `bairro`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | Bairro do endereço da parte vinculada ao ato |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


#### `cidade`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Interger | 6 | 000000 (6 dígitos) | Município do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `siglaUF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 2 | XX (2 dígitos alfanuméricos) | Sigla do Estado do endereço do imóvel |

> **Validação:** Esse campo só poderá ser preenchido quando o tipo do bem for  “Imóvel Rural” ou “imóvel Urbano”


Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


**Titulares (sublista)**


#### `cpf`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 11 | sem formatação ou caracteres especiais | Número do CPF da parte  Quando a parte for pessoa jurídica este campo deve aceitar o CNPJ. |

> **Validação:** O campo passará a aceitar obrigatoriamente o CPF ou CNPJ. A nomenclatura por enquanto permanecerá a mesma


#### `nomeTitular`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | String | 255 | - | - |

> **Validação:** Contém uma string com o nome da parte


#### `tipoDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | - | - | - | - |

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


#### `numeroDocumento`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | - | - | - |

### Dados do Ato Origem


> **Validação:** Somente para preenchimento em atos de Rerratificação


#### `estadoCartorioAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 2 | XX (2 dígitos alfanuméricos) | UF do cartório onde o ato de origem foi lavrado |

Consulte a tabela de **Estado** na página [Domínios Compartilhados](dominios.md).


#### `municipioCartorioAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 6 | 000000 (6 dígitos) | Município do cartório onde o ato de origem foi lavrado |

Consulte a tabela de **Município** na página [Domínios Compartilhados](dominios.md).


#### `cartorioAtual`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | 0 (1 dígito numérico) | Cartório onde o ato de rerratificação está sendo lavrado |

| Código | Descrição |
|--------|-----------|
| 0 | Ato de origem não foi lavrado no cartório atual |
| 1 | Ato de origem foi lavrado no mesmo cartório onde o ato de rerratificação foi lavrado |


#### `cartorio`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 6 | 000000 (6 digitos numéricos) | Este campo deve ser preenchido com o (CNS)Número do Código Nacional da Serventia em que consta o ato de origem. O CNS do cartório deve seguir o divulgado pelo CNJ. |

#### `cartorioNaoCadastrado`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | 0 (1 dígito numérico) | Informação se o ato de origem foi lavrado em um cartório não cadastrado na base de dados do SIGNO. |

> **Validação:** Quando seu valor for "1" este desobriga o preenchimento das informações do cartório.


| Código | Descrição |
|--------|-----------|
| False | False |
| True | True |


#### `informacoesAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 255 | - | Campo para preenchimento dos dados de localização do ato de origem |

#### `tipoAtoOrigem`

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


#### `livroInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 4 | 0000 (4 dígitos numéricos) | - |

#### `complementoLivroInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| Não | String | 1 | X (letra) | Complemento alfanumérico referente ao número do livro inicial. |

> **Validação:** Caso o livro não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

#### `complementoFolhaInicialAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número da folha inicial. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


#### `folhaFinalAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. |

> **Validação:** Caso o ato tenha sido lavrado em uma única folha esse campo deve ser preenchido com o mesmo valor campo ATOORIGEM_FOLHAINICIAL.


#### `complementoFolhaFinalAtoOrigem`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | String | 1 | X (letra) | Complemento alfanumérico referente ao número da folha final. |

> **Validação:** Caso a folha não tenha complemento, esse campo deve ser enviado em branco.


### Anexos


> **Observação:** Os campos a seguir compõem cada item das listas `anexos` e `anexosEspecificos`. O envio é opcional.

**Anexos Gerais**


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


**Anexos Específicos**


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


### Tipo de bens e direito

| Código | Descrição |
| --- | --- |
| 1765 | Imóvel rural |
| 1766 | Imóvel urbano |
| 1790 | Precatório judicial |

---

### Referência cadastral do imóvel

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