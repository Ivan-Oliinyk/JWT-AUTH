require("dotenv").config();
const routers = require("./routers");
const smtp = require("./smtp");

const config = {
  PORT: process.env.PORT,
  API_URL: process.env.API_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  MONGO_URL: process.env.MONGO_URL,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  ROUTERS: routers,
  SMTP: smtp,
};

module.exports = config;
