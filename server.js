const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const orderRoutes = require('./routes/orderRoutes');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// 1️⃣ Criar a app primeiro
const app = express();

// 2️⃣ Conectar no MongoDB
connectDB();

// 3️⃣ Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 4️⃣ Configuração do Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Jitterbit",
            version: "1.0.0",
            description: "API para gerenciamento de pedidos"
        },
        servers: [{ url: "http://localhost:3000" }]
    },
    apis: ["./routes/*.js"] // ajuste para ./src/routes/*.js se necessário
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// 5️⃣ Rotas da API
app.use('/', orderRoutes);

// 6️⃣ Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Swagger docs em http://localhost:${PORT}/api-docs`);
});