// requirements
const Employee = require("./employee");

// 'Intern' class extends 'Employee' class
class Intern extends Employee {
  // constructor adds 'school' to employee properties'
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }

  // method getSchool() returns school
  getSchool() {
    return this.school;
  }

  // method getRole() overwrites 'Employee' and returns 'Intern'
  getRole() {
    return "Intern";
  }

  // method getColor() returns color-code for role type (info = engineer)
  getColor() {
    return "warning";
  }
}

// export
module.exports = Intern;
