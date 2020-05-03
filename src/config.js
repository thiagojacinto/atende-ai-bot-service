const dotenv = require('dotenv').config();

const ACC_SID = process.env.TWILIO_ACCOUNT_SID;
const TOKEN = process.env.TWILIO_AUTH_TOKEN;
const PORT = process.env.PORT;
const TO_PHONE = process.env.TO_PHONE;
const FROM_PHONE = process.env.FROM_PHONE;
const DB_PWD = process.env.DB_PWD;
const DB_USER = process.env.DB_USER;
const DB_URL = process.env.DB_URL;

module.exports = {
  ACC_SID,
  TOKEN,
  PORT,
  TO_PHONE,
  FROM_PHONE,
  DB_PWD,
  DB_USER,
  DB_URL
}