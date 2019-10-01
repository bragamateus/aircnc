const express = require('express');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

//req.query = Acessar query params (para filtros)
//req.paramns = Acessar route params (para edição e delete)
//req.body = acessar corpo da requisição (para criação ou edição de registros)

routes.post('/users', SessionController.store);

module.exports = routes;