# RCTO - Envio por API

## Endpoints

```
https://backend.signo.org.br/api/ato/
```

```
https://backend.signo.org.br/api/ato/retificacao
```

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


#### `TIPOATO`

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

#### `LIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro inicial em que o ato foi lavrado. |

#### `COMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Complemento alfanumérico referente ao número do livro inicial. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

#### `LIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro final em que o ato foi lavrado. Quando o ato for lavrado em único livro, esse campo deve ser preenchido com o mesmo valor do campo "LIVROINICIAL". |

#### `COMPLEMENTOLIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 1 | X (Letra) | Complemento alfanumérico referente ao número do livro final. Quando o ato for lavrado em único livro, esse campo deve ser preenchido com o mesmo valor do campo "COMPLEMENTOLIVROINICIAL". Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

#### `FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que o ato foi lavrado. |

#### `FOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que o ato foi lavrado. Caso o ato tenha sido lavrado em uma uníca folha esse campo deve ser preenchido com o mesmo valor campo FOLHAINICIAL. |

#### `LEGADOSOLIDARIO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 1 | - | Identificador de doação presente no ato lavrado. |

| Código | Descrição |
|--------|-----------|
| 0 | Não possui |
| 1 | Possui |


#### `ENTIDADEBENEFICIARIA`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 100 | texto livre | Caso o ato de testamento preveja a doação de bens para uma entidade beneficiente, deve ser informado nesse campo o nome da instituição Beneficiada. Campo obrigatório quando o campo LEGADOSOLIDARIO for preenchido com 1. |

#### `OBSERVACOES`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 200 | - | Campo para preenchimento de alguma observação necessária ao ato praticado. |


### Informações da parte


#### `CPF`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 11 | 00000000000 | Número do CPF do testador. Caso o testador não possua CPF esse campo deve ficar em branco e os campo TIPODOCUMENTO e DESCRICAODOCUMENTO devem ser preenchidos. |

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


#### `NUMERODOCUMENTO`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | - | - | - | Número do documento informado, de acordo com o TIPO DOCUMENTO. Obrigatório quando o campo TIPODOCUMENTO for preenchido. |

#### `NOMEPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 100 | - | Nome do testador. |

#### `NOMESOCIALPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | - | - | - | Nome social utilizado pelo testador. Em caso de houver o documento com um nome e o testador utilizar outro nome socialmente. |

| Código | Descrição |
|--------|-----------|
| (Vazio) | Nome Social da Parte |


#### `QUALIFICACAOPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 2 | - | Qualificação da parte. No caso dos atos da RCTO sempre será "Testador". |

| Código | Descrição |
|--------|-----------|
| 1 | Lista de documentos do SINTER |


#### `FILIACOES`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 200 | - | Nomes referentes a filiação do testador. Obrigatório ao menos uma filiação. Quando for declarado mais de uma filiação os nomes devem ser enviados separados por barra (/). Quando o testador não possuir filiação deve ser informada a sigla N/A. |

#### `NACIONALIDADEPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | Lista de códigos do SINTER | País de nacionalidade do testador. Caso o testador não tenha uma nacioalidade diferente do país em que nasceu, deverá ser informado o mesmo dado do campo "PAISORIGEM". |

| Código | Descrição |
|--------|-----------|
| 1 | Brasileiro |
| 2 | Estrangeiro |
| 3 | Naturalizado |


#### `CODIGOPAISPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Alfanumérico | 3 | XXX (3 dígitos alfanuméricos) | País em que o testador nasceu. |

Consulte a tabela de **País** na página [Domínios Compartilhados](dominios.md).


#### `DATANASCIMENTOPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Data | - | dd/mm/aaaa | Data de nascimento do testador. |

#### `ESTADOCIVILPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 1 | Lista de códigos do SINTER | Estado civil do testador. |

| Código | Descrição |
|--------|-----------|
| 1 | Casado |
| 2 | Desquitado |
| 3 | Divorciado |
| 4 | Separado |
| 5 | Solteiro |
| 6 | União Estável |
| 7 | Viúvo |


#### `CATEGORIAPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 2 | Lista de códigos do SINTER | Área de atuação profissional do testador. |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


#### `PROFISSAOPARTE`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| NÃO | Numérico | 3 | Lista de códigos do SINTER | Profissão do testador. |

Consulte a tabela de **Profissão** na página [Domínios Compartilhados](dominios.md).


### Revogações


> **Observação:** Os campos a seguir compõem a lista `REVOGACOES`, enviada quando o ato for de revogação. Pode conter múltiplos atos a revogar.

**Atos a Revogar**


> **Validação:** REVOGACOES (Campos obrigatórios para atos com REVOGAÇÃO.


#### `NUMEROCNS`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 6 | 000000 (6 digitos numéricos) | (CNS)Número do Código Nacional da Serventia em que conta o ato a ser revogado. O CNS do cartório deve seguir o divulgado pelo CNJ. Campo obrigatório para atos com REVOGAÇÃO. |

#### `LIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro inicial em que consta o ato a ser revogado. Campo obrigatório para atos com REVOGAÇÃO. |

| Código | Descrição |
|--------|-----------|
| (Vazio) | 0000 (4 dígitos numéricos) |


#### `COMPLEMENTOLIVROINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 1 | X (Letra) | Número do complemente alfanumérico referente ao livro inicial em que consta o ato a ser revogado. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

#### `LIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 4 | 0000 (4 dígitos numéricos) | Número do livro final em que consta o ato a ser revogado. Quando o ato lavrado tiver todas as folhas no mesmo livro, esse campo deve ser informado igual ao REVOGACAOLIVROINICIAL. Campo obrigatório para atos com REVOGAÇÃO. |

| Código | Descrição |
|--------|-----------|
| (Vazio) | 0000 (4 dígitos numéricos) |


#### `COMPLEMENTOLIVROFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 1 | X (Letra) | Número do complemente alfanumérico referente ao livro final em que consta o ato a ser revogado. Quando o ato lavrado tiver todas as folhas no mesmo livro, esse campo deve ser informado igual ao REVOGACAOCOMPLEMENTOLIVROINICIAL. Caso o livro não tenha complemento, esse campo deve ser enviado em branco. |

#### `FOLHAINICIAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha inicial em que consta o ato a ser revogado. Campo obrigatório para atos com REVOGAÇÃO. |

| Código | Descrição |
|--------|-----------|
| (Vazio) | 000 (Permite até 3 dígitos numéricos) |


#### `FOLHAFINAL`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Numérico | 3 | 000 (3 dígitos numéricos) | Número da folha final em que consta o ato a ser revogado. Campo obrigatório para atos com REVOGAÇÃO. Caso o ato tenha sido lavrado em uma uníca folha esse campo deve ser preenchido com o mesmo valor campo REVOGACAOFOLHAFINAL. |

| Código | Descrição |
|--------|-----------|
| (Vazio) | 000 (Permite até 3 dígitos numéricos) |


**Revogações em Outros Cartórios**


> **Validação:** REVOGACOESOUTROSCARTORIOS (Esse campo é obrigatório caso os demais campos de revogações não tenham sido preenchidos.


#### `REVOGACOESOUTROSCARTORIOS`

| Obrigatório | Tipo | Tamanho | Formato | Descrição |
|:-----------:|:----:|:-------:|:-------:|-----------|
| SIM | Alfanumérico | 200 | - | Campo livre para preenchimento de qualquer observação. Quando o ato a ser revogado não tiver sido lavrado em um cartório ou ainda se o cartório lavrando a revogação não tiver os dados referentes ao ato a ser revogado, este campo deve ser preenchido com os dados existentes. Esse campo é obrigatório caso os demais campos de revogações não tenham sido preenchidos. |