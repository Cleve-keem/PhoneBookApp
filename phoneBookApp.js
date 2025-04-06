class Contact {
  constructor(firstName, lastName, phoneNo, address = null, email = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = phoneNo;
    this.phoneNo = address;
    this.email = email;
  }

  //   Remove contact label
  toObject() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phoneNo: this.phoneNo,
      email: this.email,
    };
  }
}

class PhoneBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contactData) {
    const newContant = new Contact(contactData);
    this.contacts.push(newContant);
  }

  get listAllContacts() {
    return this.contacts.map((contact) => contact.toObject());
  }
}

const AfeezPhoneBook = new PhoneBook();
AfeezPhoneBook.addContact("Bola", "raheem", "07085660421");
AfeezPhoneBook.addContact("Hakeem", "Bello", "08058249917");
console.log(AfeezPhoneBook.listAllContacts);
