const express = require('express');
const dotenv = require('dotenv').config();
const { router } = require("./routers");

const app = express();

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

