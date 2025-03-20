const express = require("express");
const router = express.Router();
const { userValidationRules, validate } = require("../validation.js");

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getSingle);

router.post("/", userValidationRules(), validate, contactsController.createContact);

router.put("/:id", userValidationRules(), validate, contactsController.updateContact);

router.delete("/:id", contactsController.deleteContact);

module.exports = router;
