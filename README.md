<h1 align="center">Cars E-Commerce</h1>
<p align="center">Este projeto é uma aplicação web full-stack idealizado como entrega final de curso, com o intuito de colocar em prática (quase) tudo o que aprendemos até o momento, com um ano de estudos dentro da Kenzie Academy Brasil, tanto seu back-end quanto seu front-end foram planejados, criados e implementados pelos alunos, que receberam ao longo de cada sprint, as tarefas necessárias para sua conclusão.</p>

## Objetivo

<br/>

O objetivo da aplicação, foi o de criar um e-commerce para usuários comprarem e venderem seus carros. <br/>
Tendo dois tipos de usuários (anunciante e comprador) que possuem acesso a nossas rotas de anúncios.
<br/>
<br/>
<br/>
## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). <br/> 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Front End 

```bash
# Clone este repositório
$ git clone <git@github.com:Projeto-Full-Stack/Projeto-FullStack-Grupo11.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd frontend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn run:dev

# O servidor inciará na porta:3001 - acesse <http://localhost:3000>
```

### 🎲 Rodando o Back End (Servidor) 

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd backend

# Instale as dependências
$ yarn

# Crie um arquivo chamado .env e modifique seus itens de acordo com seu banco de dados/usuário (utilize o arquivo .env.example)

# Após a criação do .env, rode o comando para criar as demais tabelas em seu banco de dados
$ yarn prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ yarn run start:dev

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>

# Todas as rotas tem o prefixo de http://localhost:3001

# Acesse a rota /api para ter acesso a todas as rotas e seus respectivos requisitos do servidor

```
### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
<h4>Backend:</h4>
<p>Database: PostgreSQL</p>	

- [Nest.js](https://docs.nestjs.com)
- [Node.js](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/docs/getting-started)
<h4>Fronted:</h4>

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/docs)
- [Tailwind](https://v2.tailwindcss.com/docs)

## Links Úteis:

- [Figma](https://www.figma.com/file/KX3C3fIi8zmCRpNipxIYYF/M6---E-Commerce-Filter?type=design&node-id=45-2&mode=design&t=JxsFniec9pmnH3Jd-0)
- [DER](https://imgur.com/rWQe2x0)

## Criadores:
[Edmilson Junior](https://www.linkedin.com/in/malaiobol/),
[Elias Jin](https://www.linkedin.com/in/elias-park-45427b246/),
[João Vicente](https://www.linkedin.com/in/jo%C3%A3o-vicente-araujo-horst-2ab8a21bb/),
[Mayza Santos](https://www.linkedin.com/in/mayza-santos-839943171).
