export class Contact {
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
