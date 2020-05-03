const { Router } = require('express');
const config = require('./config');
const twilio = require('twilio');

const rotas = Router();
const ManualController = require('./Controllers/ManualController');

rotas.post('/v1/agendar', );
rotas.get('/v1/agendamentos', ); 

// Rotas manuais

rotas.get('/alpha/saudar', ManualController.enviarMensagem(req, res, null));

rotas.post('/alpha/resposta', ManualController.responderAposProvocacao(req, res));

module.exports = rotas;