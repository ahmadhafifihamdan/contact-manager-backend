const Contact = require("../models/contact.model");

const normalizeEmail = (email) => {
  if (!email) return undefined;
  return email.toLowerCase().trim();
};

const createNewContact = async ({ userId, name, email, phone }) => {
    return Contact.create({
        user: userId,
        name: name.trim(),
        email: normalizeEmail(email),
        phone: phone.trim()
    });
};

module.exports = {
    createNewContact
}