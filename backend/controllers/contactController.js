const {
  listContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../services/contactService");

async function getContacts(req, res) {
  try {
    const contacts = await listContacts({ userId: req.user.id });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
}

async function postContact(req, res) {
  try {
    const { firstName, lastName, phone } = req.body;
    const contact = await createContact({
      userId: req.user.id,
      firstName,
      lastName,
      phone,
    });
    res.status(201).json(contact);
  } catch (err) {
    res
      .status(err.status || 400)
      .json({ message: err.message || "Erreur de validation" });
  }
}

async function patchContact(req, res) {
  try {
    const contact = await updateContact({
      userId: req.user.id,
      id: req.params.id,
      updates: req.body,
    });
    res.json(contact);
  } catch (err) {
    res
      .status(err.status || 400)
      .json({ message: err.message || "Erreur de validation" });
  }
}

async function removeContact(req, res) {
  try {
    await deleteContact({ userId: req.user.id, id: req.params.id });
    res.json({ message: "Contact supprimé" });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
}

module.exports = {
  getContacts,
  postContact,
  patchContact,
  removeContact,
};
