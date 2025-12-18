const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const userService = require("../services/user.service");

const registerUserHandler = asyncHandler(async (req, res) => {
    const { username, password, email } = req.body;
    
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Username, email and password are required");
    }

    const existing = await userService.findUserByEmail(email);
    if (existing) {
        res.status(400);
        throw new Error("User with this email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createNewUser({ username, hashedPassword, email });
    res.status(201).json({
        username: user.username,
        email: user.email
    });
})

const loginUserHandler = asyncHandler(async (req, res) => {
    return true;
})

const currentUserHandler = asyncHandler(async (req, res) => {
    return true;
})

module.exports = {
    registerUserHandler,
    loginUserHandler,
    currentUserHandler
};