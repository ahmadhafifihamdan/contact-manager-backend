const asyncHandler = require("express-async-handler");
// missing services for the controllers

const registerUserHandler = asyncHandler(async (req, res) => {
    return true;
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