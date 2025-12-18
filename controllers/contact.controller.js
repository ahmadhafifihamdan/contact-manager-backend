const asyncHandler = require("express-async-handler");
// missing services for the controllers

const createContactHandler = asyncHandler (async (req, res) => {
    return true;
})

const getContactsHandler = asyncHandler (async (req, res) => {
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
    getContactsHandler,
    deleteContactHandler,
    updateContactHandler
};