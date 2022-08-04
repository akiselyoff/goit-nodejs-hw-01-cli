const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const getListContacts = await listContacts();

    const findedContact = getListContacts.find(
      contact => contact.id === contactId.toString()
    );

    if (!findedContact) {
      console.log(`there is no contact with id: ${contactId}`);
      return;
    }

    return findedContact;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const getListContacts = listContacts();
    const filteredContacts = getListContacts.filter(
      contact => contact.id !== contactId.toString()
    );
    // if (filteredContacts.length === parsedData.length) {
    //   console.log('Remove nothing!');
    //   return;
    // }
    const stringifyContacts = JSON.stringify(filteredContacts);
    await fs.writeFile(contactsPath, stringifyContacts);
    // return filteredContacts;
  } catch (error) {
    console.log(error.message);
  }
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
