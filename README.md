# API Jitterbit

API para gerenciamento de pedidos, construída com **Node.js**, **Express** e **MongoDB**.
Inclui **Swagger** para documentação interativa das rotas, e suporte a **CORS**.

Esta API foi desenvolvida para demonstração de habilidades de backend e boas práticas, sendo ideal para portfólio ou candidatura a vaga de Desenvolvedor Júnior.

---

## 🔧 Tecnologias Utilizadas

- Node.js v20
- Express.js
- MongoDB
- Swagger (swagger-ui-express + swagger-jsdoc)
- Body-parser (substituído por express.json())
- CORS

---

## 📂 Estrutura do Projeto

```
projeto-API-Jitterbit/
│
├── config/
│   └── db.js               # Configuração da conexão MongoDB
├── controllers/
│   └── orderController.js  # Funções CRUD de pedidos
├── routes/
│   └── orderRoutes.js      # Rotas da API
├── server.js               # Arquivo principal da API
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚀 Instalação e Execução Local

1️⃣ Clone o projeto:

```bash
git clone https://github.com/alemao1305/projeto-API-Jitterbit.git
cd projeto-API-Jitterbit
```

2️⃣ Instale as dependências:

```bash
npm install
```

3️⃣ Configure o MongoDB (padrão local `mongodb://127.0.0.1:27017/pedidos`).

4️⃣ Inicie a API:

```bash
npm start
```

A API estará disponível em:  
`http://localhost:3000`

---

## 🐳 Rodando com Docker

### 1️⃣ Dockerfile

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### 2️⃣ Docker Compose

```yaml
version: "3"

services:
  api:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo
    environment:
      - MONGO_URL=mongodb://mongo:27017/pedidos

  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

### 3️⃣ Comando

```bash
docker-compose up --build
```

- A API estará em `http://localhost:3000`  
- MongoDB em `mongodb://localhost:27017`

---

## 📑 Swagger (Documentação da API)

Swagger foi configurado para documentação interativa.

- URL Swagger:  
`http://localhost:3000/api-docs`

- Permite **testar todas as rotas** diretamente do navegador.

---

## 🔗 Endpoints da API

| Método | Endpoint           | Função                         |
|--------|------------------|--------------------------------|
| POST   | `/order`          | Criar novo pedido             |
| GET    | `/order/:id`      | Buscar pedido por ID          |
| GET    | `/order/list`     | Listar todos os pedidos       |
| PUT    | `/order/:id`      | Atualizar pedido por ID       |
| DELETE | `/order/:id`      | Deletar pedido por ID         |

> Todos os endpoints aceitam e retornam **JSON**.

---

## 💡 Observações

- Estrutura de pastas organizada (`controllers / routes / config`) seguindo padrões de mercado.  
- Swagger configurado para facilitar testes e documentação.  
- Permite integração com front-end via **CORS**.  
- Ideal para portfólio e testes de habilidades de backend Node.js + MongoDB.

---

## 📌 Próximas melhorias sugeridas

- Adicionar **autenticação JWT**.  
- Validação de dados com **Joi**.  
- Integração com MongoDB Atlas para produção.  
- Testes unitários e de integração (Jest/Mocha).

---

## 📞 Contato

Desenvolvido por **Olinto de Mello**  
GitHub: [https://github.com/alemao1305](https://github.com/alemao1305)

