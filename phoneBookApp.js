class Contact {
  constructor(firstName, lastName, phoneNo, address = null, email = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = phoneNo;
    this.phoneNo = address;
    this.email = email;
  }

  // Remove contact label
  updateDetails(updateObj) {
    Object.assign(this, updateObj);
  }

  // Remove "Contact" label
  toObject() {
    return { ...this };
  }
}

class PhoneBook {
  constructor() {
    this.contacts = []; // Contact List
  }

  // Add New Contact
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

  upadeContact(phoneNo, update) {
    let contact = this.contacts.find((contact) => contact.phoneNo === phoneNo);
    if (contact) {
      contact.updateDetails(update);
      return contact.toObject();
    }

    return null;
  }

  // list all contact
  get allContacts() {
    return this.contacts.map((contact) => contact?.toObject());
  }

  // validators/contactValidator.js
  isValidPhone(phone) {
    return /^0[789][01]\d{8}$/.test(phone); // Nigerian format (example)
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
  AfeezPhoneBook.upadeContact("08058249917", { email: "HakeemBello@gmail.com" })
);
