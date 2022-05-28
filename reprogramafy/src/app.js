// Centralizando o conteúdo da aplicação
// Rota raiz

const express = require('express') // Importando o express

const app = express() // Executando o express

app.use(express.json()) // Fazendo o body parser

const podRotas = require('./routes/podcastsRoutes') // Importe da continuação de rotas podcasts
app.use("/podcast", podRotas) // Rota raiz


module.export = app // Exportando para usar o server.js