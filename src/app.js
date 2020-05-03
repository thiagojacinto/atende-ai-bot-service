const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config');
const { rotas } = require('./rotas');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(rotas);

app.listen(PORT, () => console.log(`Applicacao rodando na porta: ${PORT}`));