const express = require('express');
const { router } = require("./routers");
const { PORT, JWT_SECRET } = require("./config/env.config");

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT );
});