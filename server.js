const express = require('express');
const { router } = require("./routers/index.router.js");
const { PORT } = require("./config/env.config");
const { errorHandler } = require("./middleware/errorMiddleware");
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

app.use((req, res) => {
  res.status(404).json({message: "Route not found."});
});

app.use(errorHandler);

startServer();