const dotenv = require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const ACC_SID = process.env.TWILIO_ACCOUNT_SID;
const TOKEN = process.env.TWILIO_AUTH_TOKEN;
const PORT = process.env.PORT;
const TO_PHONE = process.env.TO_PHONE;
const FROM_PHONE = process.env.FROM_PHONE;

const cliente = twilio(ACC_SID, TOKEN);
const messagingResponse = twilio.twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/saudar', (request, response) => {

  cliente.messages.create({
    from: FROM_PHONE,
    to: TO_PHONE,
    body: 'Olá! Deseja verificar disponibilidade em minha agenda?'
  }).then(console.log);
});

app.post('/resposta', (request, response) => {
  const msgRecebida = request.body.Body;
  const msgResposta = new messagingResponse();
  
  msgResposta.message(`Certo, você digitou '${msgRecebida}'. Aguarde enquanto acerto alguns detalhes ...`);
  response.send(msgResposta.toString());
});


app.listen(PORT, () => console.log(`Applicacao rodando na porta: ${PORT}`));