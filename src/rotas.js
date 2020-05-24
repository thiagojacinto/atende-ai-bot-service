const { Router } = require("express");
const config = require("./config");
const twilio = require("twilio");

const rotas = Router();
const ManualController = require("./Controllers/ManualController");
const AgendaController = require("./Controllers/AgendaController");

rotas.post("/v1/agendar", AgendaController.store);
rotas.get("/v1/agendamentos", AgendaController.index);
rotas.post("/v1/agendamento", AgendaController.show);
rotas.delete("/v1/agendamento", AgendaController.destroy);
rotas.post("/v1/confirmacao", AgendaController.toggleConfirmation);

// Rotas manuais

rotas.get("/alpha/saudar", ManualController.enviarMensagem);
rotas.post("/alpha/resposta", ManualController.responderAposProvocacao);

module.exports = rotas;
