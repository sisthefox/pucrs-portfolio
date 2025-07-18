
# Fibonacci Serverless (Arquitetura em Nuvem)

Este projeto demonstra uma arquitetura serverless com front-end estático consumindo uma função Lambda que calcula a sequência de Fibonacci.

## 🧩 Arquitetura

- **Frontend**: HTML + CSS + JS estáticos (pode ser hospedado no Netlify ou Vercel)
- **Backend (Serverless)**: Uma função Lambda (Netlify/Vercel Functions)

## 🚀 Como funciona

1. O usuário acessa uma página HTML estática
2. Digita um número `N` e clica em "Calcular"
3. O navegador envia uma requisição para a função Lambda
4. A função calcula a sequência de Fibonacci e responde em JSON
5. O front-end exibe o resultado na tela

## 🖼 Diagrama

Usuário → HTML estático → fetch() → Lambda Function → retorna JSON → exibe resultado

## ✅ Benefícios

- Sem servidor fixo
- Custo quase zero
- Escalabilidade automática
- Código desacoplado

## 📦 Deploy

- Suba o front em [Netlify](https://netlify.com) ou [Vercel](https://vercel.com)
- Use a função em `/api/fibonacci.js` (Netlify/Vercel já reconhecem)

Pronto!
