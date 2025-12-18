const { Router } = require("express");
const { getContactsHandler, createContactHandler, updateContactHandler, deleteContactHandler } = require("../controllers/contact.controller");

const router = Router();

// Private routes
router
    .route("/")
    .get(getContactsHandler)
    .post(createContactHandler);

router
    .route("/:id")
    .get(getContactsHandler)
    .put(updateContactHandler)
    .delete(deleteContactHandler);

module.exports = router;