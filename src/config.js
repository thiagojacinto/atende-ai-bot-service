const dotenv = require('dotenv').config();

const ACC_SID = process.env.TWILIO_ACCOUNT_SID;
const TOKEN = process.env.TWILIO_AUTH_TOKEN;
const PORT = process.env.PORT;
const TO_PHONE = process.env.TO_PHONE;
const FROM_PHONE = process.env.FROM_PHONE;

module.exports = {
  ACC_SID,
  TOKEN,
  PORT,
  TO_PHONE,
  FROM_PHONE
}