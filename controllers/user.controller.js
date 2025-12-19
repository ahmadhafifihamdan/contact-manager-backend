const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.config");

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
    try {
        const user = await userService.createNewUser({ username, hashedPassword, email });
        res.status(201).json({
            username: user.username,
            email: user.email
        });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400);
            throw new Error("User already exists");
        }
        throw err;
    }
})

const loginUserHandler = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Email and password are required");
    }

    const user = await userService.findUserByEmailandPassword({ email });

    if (!user) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    if (!JWT_SECRET) {
        res.status(500);
        throw new Error("JWT_SECRET is missing in env");
    }

    const accessToken = jwt.sign(
        {
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
        },
        JWT_SECRET,
        { expiresIn: "30m" }
    );

    res.status(200).json({ accessToken });
})

const currentUserHandler = asyncHandler(async (req, res) => {
    return true;
})

module.exports = {
    registerUserHandler,
    loginUserHandler,
    currentUserHandler
};