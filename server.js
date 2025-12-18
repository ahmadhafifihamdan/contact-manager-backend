const express = require('express');
const { router } = require("./routers");
const { PORT, JWT_SECRET } = require("./config/env.config");
const connectDB = require('./config/dbConnection.js');

const app = express();

app.use(express.json());
app.use("/api", router);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

startServer();