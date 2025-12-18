const { Router } = require("express");
const { registerUserHandler, loginUserHandler, currentUserHandler } = require("../controllers/user.controller");

const router = Router();

// Public route
router.post("/register", registerUserHandler);
router.post("/login", loginUserHandler);

// Private route
router.get("/current", currentUserHandler);

module.exports = router;
