const User = require("../models/user.model");

// Normalize email to lower case and trim excess. Learnt to always return something in case of TypeError
const normalizeEmail = (email) => {
  if (!email) return undefined;
  return email.toLowerCase().trim();
};

const findUserByEmail = async ({ email }) => {
    return User.findOne({ email: normalizeEmail(email)})
}

// For login
const findUserByEmailandPassword = async ({ email }) => {
    return User.findOne({ email: normalizeEmail(email) }).select("+password"); // select here is used because password is select: false in model
}

const createNewUser = async ({ username, email, hashedPassword }) => {
    return User.create({
        username: username.trim(),
        email: normalizeEmail(email),
        password: hashedPassword
    });
};

module.exports = {
    createNewUser,
    findUserByEmail,
    findUserByEmailandPassword
}