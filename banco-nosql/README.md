# API REST NoSQL - Fibonacci e Tarefas (MongoDB)
# Autor(a): Josiane Tarasconi
# Data: Julho - 2025
# As APIs usadas nesse projeto são as mesmas usadas e criadas no projeto de webservices - API Rest
# Apenas adaptei para o exemplo com MongoDB


Este projeto é uma API RESTful simples construída com Node.js, Express e MongoDB. 

Sobre o projeto:
- Desenvolvido em Node.js, Express, MongoDB com Mongoose, Morgan e CORS.
- Calcula sequência de Fibonacci para qualquer número N
- Criar, visualizar, atualizar e exclui tarefas (CRUD)
- Estrutura modular com rotas, controladores, modelos e middlewares
- Suporte a CORS e registro de requisições
- Possuí uma coleção do Postman para testes práticos da API

## Pacotes Necessários

Para instalar todas as dependências, execute:

```bash
npm install express mongoose cors dotenv morgan
```

## ⚙️ Configuração do `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
MONGODB_URI=mongodb+srv://api-user:<sua_senha>@cluster0.fwz4sqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

Substitua `<sua_senha>` pela senha descrita no memorial na seção 2. Organização do Porfolio

## COMO USAR

1. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor:
```bash
npm start
```
3. O servidor estará disponivel em:  http://localhost:3000


## Testes com Postman

Uma coleção do Postman está disponível junto aos arquivos para testar todas as rotas:
- Fibonacci (GET)
- Tarefas (CRUD)

Você pode importar o arquivo `.json` no Postman e visualizar as requisições diretamente.

