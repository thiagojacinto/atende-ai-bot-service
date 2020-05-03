const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
  telefone: String,
  data: Date,
  observacoes: String,
  confirmacao: Boolean,
  maps: String,
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);