const asyncHandler = require("express-async-handler");
const contactService = require("../services/contact.service");

const createContactHandler = asyncHandler (async (req, res) => {
    const { name, email, phone } = req.body;
    
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Contact name, email and phone number are mandatory");
    }

    const contact = await contactService.createNewContact({ 
        userId: req.user._id, 
        name, 
        email, 
        phone 
    });
    
    res.status(201).json({
        id: contact._id,
        user: contact.user,
        name: contact.name,
        email: contact.email,
        phone: contact.phone
    });    
})

const getAllContactsHandler = asyncHandler (async (req, res) => {
    const allContacts = await contactService.getAllContacts({ userId: req.user._id });
    return res.status(200).json(allContacts);
})

const getSingleContactHandler = asyncHandler (async (req, res) => {
    return true;
})

const deleteContactHandler = asyncHandler (async (req, res) =>{
    return true;
})

const updateContactHandler = asyncHandler(async (req, res) => {
    return true;
})

module.exports = { 
    createContactHandler,
    getAllContactsHandler,
    getSingleContactHandler,
    deleteContactHandler,
    updateContactHandler
};