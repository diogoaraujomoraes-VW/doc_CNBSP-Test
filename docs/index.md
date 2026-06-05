# Documentação SIGNO - Envio de Atos

<div style="text-align: center; margin: 30px 0;">
    <img src="assets/Signo.jpg" alt="SIGNO | Colégio Notarial do Brasil - Seção de São Paulo" width="400">
</div>

Esta documentação reúne os parâmetros para envio de atos por cartórios no sistema **SIGNO**. Use o menu lateral para navegar até a central e o método de envio desejados.

## As três centrais

O envio de atos é dividido em três centrais, cada uma com campos, regras e domínios próprios:

**CEP — Central de Escrituras e Procurações**
Atos de escrituras, procurações, substabelecimentos, revogações, atas notariais e atos relacionados a precatórios.

**CESDI — Central de Separações, Divórcios e Inventários**
Atos de separação, reconciliação, divórcio, inventário, partilha, sobrepartilha, rerratificação e nomeação de inventariante.

**RCTO — Registro Central de Testamento Online**
Atos de testamento (público, cerrado, aditamento, revogação) e seus registros.

## Métodos de envio

Cada central aceita dois métodos. Escolha conforme o volume e a forma de integração do cartório:

**API (JSON)**
Integração direta entre o sistema do cartório e o SIGNO, via requisição `POST` com corpo em JSON. Indicado para envio automatizado e em tempo real. Requer autenticação por token.

**Upload (CSV)**
Envio manual de um arquivo CSV (UTF-8, separado por ponto-e-vírgula) preenchido a partir do modelo disponibilizado no SIGNO. Indicado para envio em lote sem necessidade de integração programática.

## Autenticação (API)

As requisições via API exigem um token no cabeçalho:

```http
Content-Type: application/json
Authorization: Bearer SEU_TOKEN
```

Cartórios que ainda não utilizam nenhuma API do sistema devem realizar a emissão do token dentro do sistema SIGNO e encaminhar ao desenvolvedor.

## Domínios compartilhados

Algumas tabelas de código (Profissão, País, Estado, Município, Tribunais) são comuns a todas as centrais e estão reunidas na página **Domínios Compartilhados**.

## Versões dos manuais

| Central | API | Upload |
|---------|-----|--------|
| CEP | v3.2 | v3.2 |
| CESDI | v2.5 | v2.5 |
| RCTO | v3.0 | v3.0 |
