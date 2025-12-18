const { Router } = require("express");
const userRouter = require("./user.router");
const contactRouter = require("./contact.router");

const router = Router();

router.use("/users", userRouter);
router.use("/contacts", contactRouter);

module.exports = { router };