const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.config");
const User = require("../models/user.model");


const protect =  async (req, res, next) => {
    try {
        // get authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({ message: "User is not authorized"});
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "User is not authorized"});
        }

        // verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded?.user?.id;
        if(!userId) {
            return res.status(401).json({ message: "User is not authorized, invalid token"});
        }

        // fetch user without password
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "User not found. Not authorized."});
        }

        // attach user to request
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Not authorized, token failed." });
    }
}

module.exports = { protect };
