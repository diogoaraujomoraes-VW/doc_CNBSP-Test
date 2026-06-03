# Endpoints

## POST /envios

Cria um novo envio.

### Headers

Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

### Request Body

```json
{
  "destinatario": "João Silva",
  "endereco": "Rua das Flores 123",
  "cidade": "São Paulo",
  "cep": "01000-000",
  "valor": 99.90
}
```

### Response (Sucesso - 201)

```json
{
  "id": "ship_123456",
  "status": "pendente",
  "data_criacao": "2024-01-15T10:30:00Z",
  "rastreamento": "BR123456789BR"
}
```

### Status Codes

| Código | Descrição |
|--------|-----------|
| 201 | Envio criado com sucesso |
| 400 | Dados inválidos |
| 401 | Token inválido |
| 500 | Erro no servidor |

---

## GET /envios/{id}

Recupera informações de um envio específico.

### Request