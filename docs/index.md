# Documentação SIGNO - Envio de Atos 
<center>
  <img src="Signo.jpg" width="400" alt="SIGNO - CNB-SP">
</center>


Documentação dos parâmetros para envio de atos por cartórios no sistema **SIGNO**.

O envio de atos é dividido em **três centrais**, cada uma com campos, regras e domínios específicos. Cada central suporta dois métodos de envio:

- **API** — Integração direta via JSON (método POST)
- **Upload** — Envio por arquivo CSV

---

## Centrais

### CEP - Central de Escrituras e Procurações

- [CEP - Envio por API](cep_api.md) — Campos, natureza do ato, qualidade da parte
- [CEP - Envio por Upload](cep_upload.md) — Campos, natureza do ato, qualidade da parte

### CESDI - Central de Separações, Divórcios e Inventários

- [CESDI - Envio por API](cesdi_api.md) — Campos, qualidade da parte, bens e direitos
- [CESDI - Envio por Upload](cesdi_upload.md) — Campos, qualidade da parte, bens e direitos

### RCTO - Registro Central de Testamento Online

- [RCTO - Envio por API](rcto_api.md) — Campos e parâmetros
- [RCTO - Envio por Upload](rcto_upload.md) — Campos e parâmetros

---

## Domínios compartilhados

- [Tabelas de domínio](dominios.md) — Profissão, País, Estado, Município, Tribunais (compartilhados entre todas as centrais)

---

## Autenticação (API)

Todas as requisições via API exigem autenticação via **Bearer Token**.

```http
Content-Type: application/json
Authorization: Bearer SEU_TOKEN
```

Os cartórios que ainda não utilizam API devem emitir o token para a empresa utiliza-lo.

---

## Versões dos manuais

| Central | API | Upload |
|---------|-----|--------|
| CEP | v3.2 | v3.2 |
| CESDI | v2.5 | v2.5 |
| RCTO | v3.0 | v3.0 |
