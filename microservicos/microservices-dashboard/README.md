# Microservices - Microservices Dashboard - Node.js 
# Autora: Josiane Tarasconi
# Data: Julho - 2025


Este projeto foi criado para simular uma arquitetura de microserviços simples com três serviços:

- `user-service`: Retorna usuários fictícios
- `order-service`: Retorna pedidos aleatorios feitos por usuários
- `notification-service`: Simula o envio de notificações

Há também um `frontend` que conecta e exibe os dados.

Sobre o projeto:
- Desenolvido em Node.js, Express, CORS, HTML
- Mostra dados pré definidos
- Interface interativa para mostrar o fetch de cada serviço

## COMO USAR

1. Abra três terminais (VSCode ou Linux), um para cada serviço:
## User Service (porta 3001):
```bash
cd user-service
npm install
npm install cors
npm start
```

## Order Service (porta 3002):
```bash
cd order-service
npm install
npm install cors
npm start
```

## Notification Service (porta 3003):
```bash
cd notification-service
npm install
npm install cors
npm start
```
2. Abra o `index.html` no navegador e selecione a informação que deseja visualizar
3. Você tambem pode visualizar os dados diretamente acessando:
http://localhost:3001/users
http://localhost:3002/orders
http://localhost:3003/notify

