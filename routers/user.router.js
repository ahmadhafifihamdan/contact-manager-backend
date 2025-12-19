const { Router } = require("express");
const { registerUserHandler, loginUserHandler, currentUserHandler } = require("../controllers/user.controller");
const { protect } = require("../middleware/authMiddleware");

const router = Router();

router.get("/me-test", protect, (req, res) => {
  res.status(200).json({
    message: "You are authenticated",
    user: req.user,
  });
});

// Public route
router.post("/register", registerUserHandler);
router.post("/login", loginUserHandler);

// Private route
router.get("/current", currentUserHandler);

module.exports = router;
