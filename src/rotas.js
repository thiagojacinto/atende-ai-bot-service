const { Router } = require('express');
const config = require('./config');
const twilio = require('twilio');


const rotas = Router();

rotas.post('/v1/agendar', );
rotas.get('/v1/agendamentos', ); 


// Rotas manuais
const cliente = twilio(config.ACC_SID, config.TOKEN);
const messagingResponse = twilio.twiml.MessagingResponse;

rotas.get('/saudar', (request, response) => {

  cliente.messages.create({
    from: config.FROM_PHONE,
    to: config.TO_PHONE,
    body: 'Olá! Deseja verificar disponibilidade em minha agenda?'
  }).then(console.log);
});

rotas.post('/resposta', (request, response) => {
  const msgRecebida = request.body.Body;
  const msgResposta = new messagingResponse();
  
  msgResposta.message(`Certo, você digitou '${msgRecebida}'. Aguarde enquanto acerto alguns detalhes ...`);
  response.send(msgResposta.toString());
});

module.exports = rotas;