const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parsedData = JSON.parse(data);
    parsedData.map(contact => {
      return {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      };
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parsedData = JSON.parse(data);
    const findedContact = parsedData.find(contact => {
      return contact.id === contactId.toString();
    });

    if (!findedContact) {
      console.log(`there is no contact with id: ${contactId}`);
      return;
    }

    return findedContact;
  } catch (error) {
    console.log(error.message);
  }
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
