const { Router } = require("express");
const { getAllContactsHandler, getSingleContactHandler, createContactHandler, updateContactHandler, deleteContactHandler } = require("../controllers/contact.controller");
const { protect } = require("../middleware/authMiddleware");

const router = Router();

// Private routes
router
    .route("/")
    .get(protect, getAllContactsHandler)
    .post(protect, createContactHandler);

router
    .route("/:id")
    .get(protect, getSingleContactHandler)
    .put(protect, updateContactHandler)
    .delete(protect, deleteContactHandler);

module.exports = router;