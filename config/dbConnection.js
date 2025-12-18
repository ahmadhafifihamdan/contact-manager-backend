const mongoose = require("mongoose");
const { CONNECTION_STRING } = require("./env.config");

const connectDB = async () => {
  if (!CONNECTION_STRING) {
    throw new Error("Missing CONNECTION_STRING in environment variables");
  }

  const conn = await mongoose.connect(CONNECTION_STRING);

  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
