const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern"
  }
  getUnique(){
    return 'school' + this.school;
  }

}

module.exports = Intern;