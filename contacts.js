const fs = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();

  const findedContact = contacts.find(
    contact => contact.id === contactId.toString()
  );

  if (!findedContact) {
    console.log(`there is no contact with id: ${contactId}`);
    return null;
  }

  return findedContact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();

  const idx = contacts.findIndex(
    contact => contact.id === contactId.toString()
  );
  if (idx === -1) {
    console.log(`There is no contact with id: ${contactId}`);
    return null;
  }

  const [deletedContact] = contacts.splice(idx, 1);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return deletedContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const id = nanoid(5);
  const newContacts = JSON.stringify(
    [...contacts, { id, name, email, phone }],
    null,
    2
  );
  await fs.writeFile(contactsPath, newContacts);
  return newContacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
