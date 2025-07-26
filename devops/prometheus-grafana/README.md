# DevOps - Fibonacci API com MongoDB, Docker, Prometheus, e GitHub Actions
# Autor(a): Josiane Tarasconi
# Data: Julho - 2025
# As APIs usadas nesse projeto são as mesmas usadas e criadas no projeto de webservices - API Rest
# Apenas adaptei para poder usar o Grafana e Prometheus juntos baseados nessas APIs

Este projeto é uma API REST em Node.js construída com Express e MongoDB que realiza cálculos da sequência de Fibonacci.  
Ela está conteinerizada com Docker, possui monitoramento com Prometheus e Grafana, e inclui uma pipeline de CI utilizando GitHub Actions.

## Funcionalidades

- API REST para calcular sequências de Fibonacci
- MongoDB para persistência de dados
- Endpoint Prometheus para métricas (`/metrics`)
- Dockerfile + Docker Compose para orquestração
- Dashboard básico no Grafana
- Pipeline de CI com GitHub Actions

## Primeiros Passos

### Requisitos

- Docker + Docker Compose
- Node.js (apenas se rodar localmente sem containers)

### Executando com Docker Compose

```bash
docker-compose up --build
```

- API: `http://localhost:3000`
- MongoDB: disponível em `localhost:27017`  
- Prometheus: `http://localhost:9090`
- Grafana: `http://localhost:3001`


## Monitoramento

O Prometheus está configurado para coletar métricas do endpoint `/metrics` da API.

Para acessar as métricas manualmente:

```bash
curl http://localhost:3000/metrics
```

## Grafana
O Grafana está disponível em `http://localhost:3001` e pode ser conectado ao Prometheus.

- Login no Grafana: 
- Usuário: `admin`
- Senha: `admin`

## Importando o Dashboard

1. Acesse [http://localhost:3001](http://localhost:3001)
2. Menu lateral - Dashboards - Import
3. Clique em "Upload JSON file" ou cole o conteúdo do JSON
4. Use o arquivo: `fibonacci-grafana-dashboard.json`
5. Quando solicitado, selecione a fonte de dados Prometheus
6. Caso o Grafana não conecte usando o http://localhost:9090, troque para http://prometheus:9090






