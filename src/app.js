const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT, DB_URL } = require('./config');
const rotas = require('./rotas');

const app = express();

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(rotas);

app.listen(PORT, () => console.log(`Applicacao rodando na porta: ${PORT}`));