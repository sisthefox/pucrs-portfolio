# Webservices - REST API - Fibonacci e Gerenciamento de Tarefas
# Autora: Josiane Tarasconi
# Data: Julho - 2025


Este projeto implementa uma API REST simples em Node.js + Express. A API possui dois conjuntos principais de funcionalidades:
- Cálculo da sequência de Fibonacci
- CRUD de tarefas (Create, Read, Update, Delete)
- Desenvolvido em Node.js, Express e Nodemon


## COMO USAR

1. Navegue até o diretório api-rest e instale as dependências
```bash
npm install
```

2. Inicie o servidor
```bash
npm start
```

O servidor pode ser acessado em `http://localhost:3000`.

## Endpoints das APIs

# Fibonacci
- `GET /api/fibonacci/:n`  
  Retorna os `n` primeiros números da sequência de Fibonacci.

📌 **Exemplo**:  
`GET http://localhost:3000/api/fibonacci/7`  
Resposta:
```json
[0, 1, 1, 2, 3, 5, 8]
```

# Tarefas (Tasks)

# Listar todas as tarefas
- `GET /api/tasks`

# Criar uma nova tarefa
- `POST /api/tasks`  
  Enviar no body (JSON):
```json
{
  "title": "Estudar para prova",
  "done": false
}
```

# Atualizar uma tarefa
- `PUT /api/tasks/:id`  
  Exemplo: `PUT /api/tasks/1752921373031`  
  Body:
```json
{
  "title": "Estudar para prova de Webservices",
  "done": true
}
```

# Deletar uma tarefa
- `DELETE /api/tasks/:id`


## Testando com Postman

Para facilitar, criei uma collection pronta para importação no Postman. Para isso:

1. Abra o Postman
2. Clique em Import
3. Escolha a opção de arquivo e import o arquivo postman_collection


**Importante:** o campo `id` das tarefas é gerado automaticamente com base em `Date.now()`, exemplo: `1752921373031`.
