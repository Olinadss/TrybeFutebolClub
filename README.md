O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

Neste projeto eu desenvolvi uma API e também integrei *- através do docker-compose -* as aplicações para que funcionem consumindo um banco de dados.

Nesse projeto, eu construi **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Nesse projeto **minha API é capaz de ser consumida por um front-end já provido nesse projeto**. Fui capaz de:

 - Realizar a dockerização dos apps, network, volume e compose;
 - Modelei dados com **MySQL** através do **Sequelize**;
 - Criei e associei tabelas usando `models` do `sequelize`;
 - Construi uma **API REST** com endpoints para consumir os models criados;
 - Fiz um `CRUD` utilizando `ORM`;
 
 ![Exemplo app front](./front-example.png)

# Instruções para entregar seu projeto:

### Antes de começar a desenvolver

1. Clone o repositório
  * `git clone git@github.com:Olinadss/TrybeFutebolClub.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd TrybeFutebolClub`

2. Instale as dependências [**Caso existam**]
  * `npm install`

---

## Antes de começar:

### ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

#### ⚠️ **Inicie seu `docker-compose` antes!** ⚠️

- Garanta que as aplicações, tanto do back, quanto do front-end, possuem arquivos `Dockerfile` válidos;
- Utilize os scripts de apoio `npm run compose:up` / `npm run compose:down`, para facilitar a execução do seu *compose*.

#### Variáveis de ambiente

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`TrybeFutebolClub/app/backend/src/database/config/database.ts`

```
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: TRYBE_FUTEBOL_CLUBE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
};

```

**(Neste arquivo é obrigatório deixar o nome do database como `"database": 'TRYBE_FUTEBOL_CLUBE'`)**

**É essencial usar essas 3 variáveis no arquivo acima:**

#### Variáveis:

`host: process.env.DB_HOST`

`user: process.env.DB_USER`

`password: process.env.DB_PASS`

**Com elas que iremos conseguir conectar ao banco do avaliador automático**

#### Chave JWT e criptografia de senhas:

⚠️ A sua chave `JWT` deve ser inserida em `app/backend/jwt.evaluation.key` e pode ser carregada no backend com o uso da biblioteca `fs`.

⚠️ A biblioteca utilizada para criptografar a senha no banco de dados é a `bcryptjs` [bcryptjs npm](https://www.npmjs.com/package/bcryptjs). Utilize essa biblioteca, ela pode ser colocada como dependência em `app/backend/package.json` para depois instalar todos os pacotes. ⚠️

Para rodar testes de cobertura no seu back-end, utilize o comando: `npm run test:coverage`

---
