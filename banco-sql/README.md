# Gerenciamento de Tarefas – Modelo Relacional - Banco de Dados
# Autora: Josiane Tarasconi
# Data: Julho - 2025

Este projeto é um esquema completo de banco de dados relacional para um sistema de gerenciamento de tarefas, incluindo usuários, tarefas, tags e seus relacionamentos. Projetado para MySQL ou MariaDB, com scripts SQL e diagrama ER incluídos.

Este projeto inclui:

- `users`: armazena informações básicas dos usuários
- `tasks`: armazena tarefas vinculadas aos usuários
- `tags`: armazena etiquetas personalizadas
- `task_tags`: tabela de junção para relação muitos-para-muitos entre tarefas e etiquetas

## Arquivos Inclusos
- `create_tables_melhorado.sql`: Script SQL para criação do banco seguindo o schema criado
- `insert_data.sql`: Dados de exemplo para teste e desenvolvimento
- `diagrama_er.png`:  Diagrama ER (imagem PNG)
- `README.md`: Este arquivo de documentação

## COMO USAR

1. Importe o arquivo `create_tables.sql` na sua instância MySQL/MariaDB.
2. (Opcional) Execute `insert_data.sql` para popular com dados de teste.
3. Use qualquer cliente SQL ou ferramenta como [DB Fiddle](https://www.db-fiddle.com/) para testar consultas.
