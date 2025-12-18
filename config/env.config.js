require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  CONNECTION_STRING: process.env.CONNECTION_STRING,
};
