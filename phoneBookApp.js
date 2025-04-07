class Contact {
  constructor(firstName, lastName, phoneNo, email = null, address = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNo = phoneNo;
    this.email = email;
    this.address = address;
  }

  // Remove contact label
  toObject() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNo: this.phoneNo,
      email: this.email,
      address: this.address,
    };
  }
}

class PhoneBook {
  constructor() {
    this.contacts = [];
  }

  // Add new contact
  addContact(firstName, lastName, phoneNo, email, address) {
    const newContact = new Contact(
      firstName,
      lastName,
      phoneNo,
      email,
      address
    );
    this.contacts.push(newContact);
  }

  removeContact(phoneNo) {
    this.contacts = this.contacts.filter(
      (contact) => contact.phoneNo !== phoneNo
    );
    return this.contacts;
  }

  findByPhoneNumber(phoneNo) {
    return this.contacts
      .find((contact) => contact.phoneNo === phoneNo)
      .toObject();
  }

  findByFirstName(firstName) {
    let firstNameResult = this.contacts
      .filter((contact) => contact.firstName === firstName)
      .map((contact) => contact.toObject());

    return firstNameResult;
  }

  findByLastName(lastName) {
    let lastNameResult = this.contacts
      .filter((contact) => contact.lastName === lastName)
      .map((contact) => contact.toObject());

    return lastNameResult;
  }

  editContact(phoneNo, update) {
    let contact = this.contacts.find((contact) => contact.phoneNo === phoneNo);
    if (contact) {
      Object.assign(contact, update);
      return contact.toObject();
    }

    return null;
  }

  // list all contact
  get listAllContacts() {
    return this.contacts.map((contact) => contact?.toObject());
  }
}

const AfeezPhoneBook = new PhoneBook();
AfeezPhoneBook.addContact("Bola", "Raheem", "07085660421");
AfeezPhoneBook.addContact("Hakeem", "Bello", "08058249917");
AfeezPhoneBook.addContact("Hakeem", "Ella", "09128349734");
AfeezPhoneBook.addContact("Hakeem", "Bello", "08058249736"); // Deleted
AfeezPhoneBook.addContact(
  "Hawanah",
  "Saheed",
  "08058973747",
  "SaheedHawanah123@gmail.com"
);
console.log(AfeezPhoneBook.listAllContacts);
AfeezPhoneBook.removeContact("08058249736"); // Removing a contact
console.log("After a contact has been removed!");
console.log(AfeezPhoneBook.listAllContacts);

console.log("Found Result for Number");
console.log(AfeezPhoneBook.findByPhoneNumber("08058249917"));

console.log("Found Result for first Name");
console.log(AfeezPhoneBook.findByFirstName("Hakeem"));

console.log("Result for edit");
console.log(
  AfeezPhoneBook.editContact("08058249917", { email: "HakeemBello@gmail.com" })
);
