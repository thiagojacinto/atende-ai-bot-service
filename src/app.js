const dotenv = require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const ACC_SID = process.env.TWILIO_ACCOUNT_SID;
const TOKEN = process.env.TWILIO_AUTH_TOKEN;

const cliente = twilio(ACC_SID, TOKEN);
const app = express();

cliente.messages.create({
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+558197248002',
  body: 'Olá! Deseja verificar disponibilidade em minha agenda?'
}).then(console.log);