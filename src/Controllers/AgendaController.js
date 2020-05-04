// const axios = require('axios');
const Agendamento = require('../Models/Agendamento');

module.exports = {

  async index(request, response) {
    const todosAgendamentos = await Agendamento.find();
    return response.json(todosAgendamentos);
  },

  async store(request, response) {
    console.log(`Body element: ${request.body}`); // DEBUG
    const { telefone, observacoes, confirmacao, maps } = request.body;

    let data = new Date();

    let agend = await Agendamento.create({
      telefone,
      data,
      observacoes,
      confirmacao,
      maps
    })
      .then(console.log('Agendamento realizado com sucesso.'))
      .catch(console.error);
      
    return response.json(agend);
  },

  async confirmar(request, response) {
    const { telefone } = request.body;

    // most recent = min(Date() - updated_at)

    // const query = await Agendamento.find({ 'telefone': telefone })
    //   .where('confirmacao').equals(false)
    //   .limit(1)
    //   .exec( (confirmacao, err) => {
    //     if (err) return err;
    //   });

    // query[0].confirmacao = true;
    
    return response.json(query);
  }
}