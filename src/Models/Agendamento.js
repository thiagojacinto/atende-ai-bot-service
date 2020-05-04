const mongoose = require("mongoose");

const AgendamentoSchema = new mongoose.Schema({
  telefone: String,
  data: Date,
  observacoes: String,
  confirmacao: Boolean,
  maps: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = mongoose.model("Agendamento", AgendamentoSchema);
