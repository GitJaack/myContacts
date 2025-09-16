const Contact = require("../models/contactModel");

async function listContacts({ userId }) {
  return Contact.find({ userId });
}

async function createContact({ userId, firstName, lastName, phone }) {
  const existing = await Contact.findOne({ userId, phone });
  if (existing) {
    const err = new Error("Ce numéro existe déjà dans vos contacts");
    err.status = 400;
    throw err;
  }
  const contact = new Contact({ userId, firstName, lastName, phone });
  await contact.save();
  return contact;
}

async function updateContact({ userId, id, updates }) {
  const contact = await Contact.findOneAndUpdate({ _id: id, userId }, updates, {
    new: true,
    runValidators: true,
  });
  if (!contact) {
    const err = new Error("Contact not found");
    err.status = 404;
    throw err;
  }
  return contact;
}

async function deleteContact({ userId, id }) {
  const contact = await Contact.findOneAndDelete({ _id: id, userId });
  if (!contact) {
    const err = new Error("Contact not found");
    err.status = 404;
    throw err;
  }
}

module.exports = {
  listContacts,
  createContact,
  updateContact,
  deleteContact,
};
