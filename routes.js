const express = require('express');
const routes = express.Router();
const Usuario = require('./controller/controllerUsuario');

routes.get('/usuario',Usuario.ListarTodos);
routes.post('/usuario',Usuario.Create);
routes.get('/usuario/:id',Usuario.Listar_detalhes);
routes.put('/usuario/:id',Usuario.Atualizacao);
routes.delete('/usuario/:id',Usuario.Delete);



module.exports =routes;