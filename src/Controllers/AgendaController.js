// const axios = require('axios');
const Agendamento = require("../Models/Agendamento");

module.exports = {
  async index(request, response) {
    const todosAgendamentos = await Agendamento.find();
    return response.json(todosAgendamentos);
  },

  async store(request, response) {
    const { telefone, observacoes, confirmacao, maps } = request.body;

    await Agendamento.findOne(
      { telefone: telefone },
      async (err, duplicata) => {
        if (err) console.error(err);
        if (duplicata) {
          console.log(`Telefone ${telefone} já contem registro.`);
          return response.json({});
        }

        let data = new Date();
        let agend = await Agendamento.create({
          telefone,
          data,
          observacoes,
          confirmacao,
          maps,
        })
          .then(console.log("Agendamento realizado com sucesso."))
          .catch(console.error);

        return response.json(agend);
      }
    );
  },

  async show(request, response) {
    const { telefone } = request.body;

    let result = await Agendamento.findOne({ telefone: telefone })
      .then(response.status(200))
      .catch(console.error);

    return response.json(result);
  },

  async destroy(request, response) {
    const { telefone } = request.body;
    await Agendamento.findOneAndDelete(
      { telefone: telefone },
      (err, removido) => {
        if (err) return response.status(500).send(err);
        return response.status(200).json(removido);
      }
    );
  },

  async toggleConfirmation(request, response) {
    const { telefone } = request.body;
    let agendamento = await Agendamento.findOne({ telefone: telefone }).catch(
      console.error
    );

    // updating information:
    agendamento.confirmacao = !agendamento.confirmacao;
    agendamento.observacoes = agendamento.observacoes.concat(
      `, ${
        agendamento.confirmacao ? "confirmado" : "desmarcado"
      } em ${new Date().toLocaleDateString("pt-BR")}`
    );
    await agendamento
      .save()
      .then(
        response
          .status(200)
          .send(
            `Agendamento ${
              agendamento.confirmacao ? "confirmado" : "desmarcado"
            }.`
          )
      )
      .catch(console.error);

    return response;
  },
};
