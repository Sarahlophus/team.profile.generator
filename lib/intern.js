// requirements
const Employee = require("./employee");

// 'Intern' class extends 'Employee' class
class Intern extends Employee {
  // constructor adds 'school' to employee properties'
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }

  // method getRole() overwrites 'Employee' and returns 'Intern'
  getRole() {
    return "Intern";
  }
}

// export
module.exports = Intern;
