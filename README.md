# Controle Financeiro

Aplicação web desenvolvida para gerenciamento de pessoas, receitas e despesas, permitindo o acompanhamento do saldo financeiro geral e individual de cada pessoa.

O projeto foi desenvolvido utilizando **ASP.NET Core** no backend e **React + TypeScript** no frontend, com comunicação via API REST.

---

# Tecnologias utilizadas

## Backend

- ASP.NET Core
- Entity Framework Core
- SQL Server
- Swagger

## Frontend

- React
- TypeScript
- Axios
- CSS

---

# Funcionalidades

- Cadastro de Pessoas
- Exclusão de Pessoas
- Cadastro de Receitas
- Cadastro de Despesas
- Exclusão de Transações
- Dashboard Financeiro
- Resumo Geral
- Resumo Financeiro por Pessoa
- Atualização automática dos dados após alterações

---

# Interface

## Dashboard Financeiro

> *(Adicionar imagem posteriormente)*

```
/imagens/dashboard.png
```

## Cadastro de Pessoas

> *(Adicionar imagem posteriormente)*

```
/imagens/pessoas.png
```

## Cadastro de Transações

> *(Adicionar imagem posteriormente)*

```
/imagens/transacoes.png
```

---

# Estrutura do Projeto

```
Backend
│
├── Controllers
├── DTOs
├── Models
├── Services
├── Data
└── ...

Frontend
│
├── Components
├── Interfaces
├── Services
├── Assets
└── ...
```

---

# Como executar o projeto

## Backend

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/controle-financeiro.git
```

Entre na pasta do backend:

```bash
cd Backend
```

Restaure os pacotes:

```bash
dotnet restore
```

Execute:

```bash
dotnet run
```

---

## Frontend

Entre na pasta:

```bash
cd Frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

---

# Objetivo

O foco do projeto foi aplicar boas práticas de desenvolvimento Full Stack, integrando um backend em ASP.NET Core com um frontend em React, utilizando uma arquitetura organizada e uma interface moderna para gerenciamento financeiro:

- Desenvolvimento de API REST
- Consumo de APIs
- Componentização em React
- Hooks
- Organização em camadas
- CRUD completo
- Integração Frontend e Backend
- Dashboard financeiro
- Manipulação de estado
- Tratamento de erros
- Organização de código

---

# Melhorias Futuras

- Autenticação de usuários
- Edição de Pessoas
- Edição de Transações
- Filtros por período
- Gráficos financeiros
- Exportação para PDF
- Exportação para Excel
- Paginação
- Pesquisa por nome

---

# Autor

Desenvolvido por **Felipe André de Castro**