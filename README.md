# AtendeAI
> A simple Bot Service: _**Scheduling done autonomously**_.

Bot application that performs scheduling activities with some of Twilio's APIs

## A que se propõe:

Desenvolvido em resposta ao Desafio MEGAHACK proposto pela Shawee e Sebrae, esta aplicação tem por objetivos:
- [ ] Integrar-se com a plataforma popular de mensagem _WhatsApp_;
- [ ] Utilizar essa integração para responder a pedidos de agendamento;

## Status do MVP

O projeto se baseia em APIs da ***Twilio*** que facilitam duas integrações:
- Uso de mensageria atravéis do WhatsApp ([ref](https://www.twilio.com/whatsapp));
- Plataforma **Autopilot**, que usa inteligência artificial para construir e treinar os Bots ([ref](https://www.twilio.com/autopilot)).

É possível integrar o Autopilot com chamadas a uma API externa, que então interage com banco de dados. Assim, neste repositório ficará a API REST desenvolvida em Node e aliada a um banco de dados MongoDB, cujas funções são:
- [x] [Cadastro de um agendamento](https://github.com/thiagojacinto/atende-ai-bot-service/blob/10f0cc62beba0f17fabe8be378cf2921e4318ff8/src/Controllers/AgendaController.js#L10) a partir de um número de telefone;
- [x] Exibir informações sobre um agendamento [[1]](https://github.com/thiagojacinto/atende-ai-bot-service/blob/10f0cc62beba0f17fabe8be378cf2921e4318ff8/src/Controllers/AgendaController.js#L5), [[2]](https://github.com/thiagojacinto/atende-ai-bot-service/blob/10f0cc62beba0f17fabe8be378cf2921e4318ff8/src/Controllers/AgendaController.js#L38) previamente cadastrado.
- [x] Realizar a [confirmação ou desmarcação](https://github.com/thiagojacinto/atende-ai-bot-service/blob/10f0cc62beba0f17fabe8be378cf2921e4318ff8/src/Controllers/AgendaController.js#L59) do agendamento.

## Como usar

A partir de configuração - do banco de dados MongoDB e da porta selecionada - realizada em um arquivo separado [`config.js`](https://github.com/thiagojacinto/atende-ai-bot-service/blob/master/src/config.js), é somente necessário usar o comando:

```javascript
npm start
```

e então a API estará rodando localmente, cujo teste simples pode ser realizado digitando e esperando um status `200`:

```curl
curl http://localhost:3000/v1/agendamentos
```
