const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload =multer(uploadConfig);

//req.query = Acessar query params (para filtros)
//req.paramns = Acessar route params (para edição e delete)
//req.body = acessar corpo da requisição (para criação ou edição de registros)

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;