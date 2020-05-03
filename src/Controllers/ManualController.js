const twilio = require('twilio');
const config = require('../config');
const cliente = twilio(config.ACC_SID, config.TOKEN);
const messagingResponse = twilio.twiml.MessagingResponse;

module.exports = {

  async enviarMensagem(request, response, mensagem) {

    cliente.messages.create({

      from: config.FROM_PHONE,
      to: config.TO_PHONE,
      body: mensagem || 'Olá! Deseja verificar disponibilidade em minha agenda?'

    }).then(console.log);
  },

  async responderAposProvocacao(request, response) {
    const msgRecebida = request.body.Body;
    const msgResposta = new messagingResponse();
    
    msgResposta.message(`Certo, você digitou '${msgRecebida}'. Aguarde enquanto acerto alguns detalhes ...`);
    response.send(msgResposta.toString());
  }

}