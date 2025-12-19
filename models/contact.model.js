const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }
        name: {
            type: String,
            required: [true, "Please add the contact name"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Please add the contact email address"],
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            required: [true, "Please add the contact phone number"],
            trim: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);