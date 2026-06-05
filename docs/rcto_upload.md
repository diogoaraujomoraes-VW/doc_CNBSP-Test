# RCTO - Envio por Upload

## Orientações de envio

Formato: **CSV, UTF-8**, campos separados por **ponto-e-vírgula (`;`)**.

1. Baixe o arquivo exemplo no SIGNO
2. Preencha seguindo as orientações deste documento
3. Salve como "CSV separado por vírgulas"
4. Faça o upload no SIGNO


---

## Campos e parâmetros de envio


### Informações do ato


#### `TIPOTESTAMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | - | Tipo do ato que foi lavrado no cartório |

| Código | Descrição |
|--------|-----------|
| 1 | Testamento público |
| 2 | Aditamento |
| 3 | Revogação |
| 4 | Testamento cerrado |
| 5 | Testamento sem conteúdo patrimonial |
| 13 | Testamento com revogação |


#### `DATAATO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Data | - | dd/mm/aaaa | Data em que o ato foi lavrado. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `LIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro em que o ato foi lavrado. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `COMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Complemento alfanumérico referente ao número do livro. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `COMPLEMENTOFOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Complemento referente ao numero da FOLHAINICIAL |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `FOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma uníca folha esse campo deve ser preenchido com o mesmo valor campo FOLHAINICIAL. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `COMPLEMENTOFOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Complemento referente ao numero da FOLHAFINAL |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `LEGADOSOLIDARIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | - | Identificador de doação presente no ato lavrado. |

| Código | Descrição |
|--------|-----------|
| 0 | Não possui |
| 1 | Possui |


#### `DESCRICAOLEGADOSOLIDARIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| CONDICIONAL | Alfanumérico | 100 | texto livre | Caso o ato de testamento preveja a doação de bens para uma entidade beneficiente, deve ser informado nesse campo o nome da instituição Beneficiada. Campo obrigatório quando o campo LEGADOSOLIDARIO for preenchido com 1. |

| Código | Descrição |
|--------|-----------|
| - |  |


### Informações da parte


#### `CPFCNPJ`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 11 | 00000000000 | Número do CPF do testador. |

#### `TIPODOCUMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | - | Documento secundário de identificação do testador. Obrigatório quando o campo CPF não for preenchido. |

| Código | Descrição |
|--------|-----------|
| 14 | CNH |
| 15 | RG |
| 16 | RNE |
| 17 | Passaporte |


#### `DESCRICAODOCUMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | - | - | Descrição do documento, sem caracteres especiais | Número do documento informado, de acordo com o TIPO DOCUMENTO. Obrigatório quando o campo TIPODOCUMENTO for preenchido. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `NOME`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 100 | - | Nome do testador. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `NOMESOCIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | - | - | - | Nome social utilizado pelo testador. Em caso houver o documento com um nome e o testador utilizar outro nome socialmente. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `FILIAÇÃO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 200 | Caso mais de uma filiação, incluir '/' ou '/' para separar os nomes. | Nomes referentes a filiação do testador. Obrigatório ao menos uma filiação. Quando for declarado mais de uma filiação os nomes devem ser enviados separados por barra (/) ou pipe (/). Quando o testador não possuir filiação deve ser informada a sigla N/A. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `NACIONALIDADE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | Lista de códigos do SINTER | País de nacionalidade do testador. Caso o testador não tenha uma nacioalidade diferente do país em que nasceu, deverá ser informado o mesmo dado do campo "PAISORIGEM". |

| Código | Descrição |
|--------|-----------|
| 1 | Brasileiro |
| 2 | Estrangeiro |
| 3 | Naturalizado |


#### `PAISORIGEM`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 3 | XXX (3 dígitos alfanuméricos) | País em que o testador nasceu. |

Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


#### `DATANASCIMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Data | - | dd/mm/aaaa | Data de nascimento do testador. |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `ESTADOCIVIL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | - | Estado civil do testador. |

| Código | Descrição |
|--------|-----------|
| 1 | Casado |
| 2 | Desquitado |
| 3 | Divorciado |
| 4 | Separado |
| 5 | Solteiro |
| 6 | União Estável |
| 7 | Viúvo |


#### `AREADEATUACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | - | Área de atuação profissional do testador. |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


#### `PROFISSAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | - | Profissão do testador. |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


### Revogações


**Atos a Revogar**


> **Validação:** PREENCHIDOS SOMENTE PARA ATOS DE REVOGAÇÃO


#### `REVOGACAOCARTORIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 6 | 000000 (6 digitos numéricos) | Número do Código Nacional da Serventia (CNS) em que conta o ato a ser revogado. O CNS do cartório deve seguir o divulgado pelo CNJ. Campo obrigatório para atos com REVOGAÇÃO. |

| Código | Descrição |
|--------|-----------|
| - | 000000 (CNS que identifica o cartório) |


#### `REVOGACAOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro inicial em que consta o ato a ser revogado. Campo obrigatório para atos com REVOGAÇÃO. |

| Código | Descrição |
|--------|-----------|
| - | 0000 (4 dígitos numéricos) |


#### `REVOGACAOCOMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Número do complemente alfanumérico referente ao livro inicial em que consta o ato a ser revogado. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

| Código | Descrição |
|--------|-----------|
| - | X (Letra) |


#### `REVOGACAOFOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que consta o ato a ser revogado. Campo obrigatório para atos com REVOGAÇÃO. |

| Código | Descrição |
|--------|-----------|
| - | 000 (Permite até 3 dígitos numéricos) |


#### `REVOGACAOCOMPLEMENTOFOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Complemento referente ao numero da FOLHAINICIAL |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `REVOGACAOFOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que consta o ato a ser revogado. Campo obrigatório para atos com REVOGAÇÃO. Caso o ato tenha sido lavrado em uma uníca folha esse campo deve ser preenchido com o mesmo valor campo REVOGACAOFOLHAFINAL. |

| Código | Descrição |
|--------|-----------|
| - | 000 (Permite até 3 dígitos numéricos) |


#### `REVOGACAOCOMPLEMENTOFOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Complemento referente ao numero da FOLHAFINAL |

| Código | Descrição |
|--------|-----------|
| - |  |


#### `REVOGACAOOBSERVACAO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 200 | - | Campo livre para preenchimento de qualquer observação. Quando o ato a ser revogado não tiver sido lavrado em um cartório ou ainda se o cartório lavrando a revogação não tiver os dados referentes ao ato a ser revogado, este campo deve ser preenchido com os dados existentes. Esse campo é obrigatório caso os demais campos de revogações não tenham sido preenchidos. |

| Código | Descrição |
|--------|-----------|
| - | Inclui observação sobre a revogação, caso necessário. |
