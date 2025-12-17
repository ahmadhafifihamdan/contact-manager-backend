const { Router } = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/user.controller");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", currentUser);

module.exports = router;
