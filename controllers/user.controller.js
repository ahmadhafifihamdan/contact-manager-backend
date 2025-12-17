const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
    return true;
})

const loginUser = asyncHandler(async (req, res) => {
    return true;
})

const currentUser = asyncHandler(async (req, res) => {
    return true;
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
};