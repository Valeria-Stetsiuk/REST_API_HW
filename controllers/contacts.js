const Contact = require("../models/contacts");

const getAll = async () => {
  return await Contact.find();
};

const getById = async (contactId) => {
  return await Contact.findById(contactId);
};
const addContact = async (body) => {
  return await Contact.create(body);
};
const removeContact = async (contactId) => {
  return await Contact.findByIdAndRemove(contactId);
};
const updateContact = async (contactId, body) => {
  return await Contact.findByIdAndUpdate(contactId, body, { new: true });
};
const updateFavorite = async (contactId, body) => {
  return await Contact.findByIdAndUpdate(contactId, body, { new: true });
};

module.exports = {
  getAll,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
};