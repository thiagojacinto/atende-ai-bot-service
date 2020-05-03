const axios = require('axios');
const Agendamento = require('../Models/Agendamento');

module.exports = {

  async index(request, response) {
    const todosAgendamentos = await Agendamento.find();
    return response.json(todosAgendamentos);
  },

}