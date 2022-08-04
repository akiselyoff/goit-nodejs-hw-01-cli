const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');
console.log(contactsPath);

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    return parsedData;
  } catch (error) {
    console.log(error.message);
  }
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
