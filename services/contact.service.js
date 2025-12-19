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

const getAllContacts = async ({ userId }) => {
    return Contact.find({ user: userId });
}

const getContactById = async (userId, contactId) => {
    return Contact.findOne({ user: userId, _id: contactId });
}

const updateContactById = async (userId, contactId, { name, email, phone }) => {
    return Contact.findOneAndUpdate({ 
        user: userId, 
        _id: contactId 
    }, { 
        name: name.trim(), 
        email: normalizeEmail(email), 
        phone: phone.trim() 
    }, { 
        new: true, 
        runValidators: true 
    }); 
}

const deleteContactById = async (userId, contactId) => {
    return Contact.findOneAndDelete({ user: userId, _id: contactId })
}

module.exports = {
    createNewContact,
    getAllContacts,
    getContactById,
    updateContactById,
    deleteContactById
}