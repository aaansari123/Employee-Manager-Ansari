const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manger"
  }
  getUnique(){
    return 'office number: ' + this.officeNumber;
  }
}

module.exports = Manager;