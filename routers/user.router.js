const { Router } = require("express");
const { registerUserHandler, loginUserHandler, currentUserHandler } = require("../controllers/user.controller");

const router = Router();

// Public route
router.post("/register", registerUserHandler);
router.post("/login", loginUserHandler);

// Private route
router.get("/current", currentUserHandler);

// Test route
// router.get("/test", (req, res) => {
//   res.status(200).json({ message: "User route works" });
// });

module.exports = router;
