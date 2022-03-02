// requirements
const Employee = require("./employee");

// 'Engineer' class extends 'Employee' class
class Engineer extends Employee {
  // constructor adds 'gitHub' to employee properties'
  constructor(id, name, email, gitHub) {
    super(id, name, email);
    this.gitHub = gitHub;
  }

  // method getRole() overwrites 'Employee' and returns 'Engineer'
  getRole() {
    return "Engineer";
  }

  // method getGithub() returns user's github profile name
  getGithub() {
    return this.gitHub;
  }

  // method getColor() returns color-code for role type (info = engineer)
  getColor() {
    return "info";
  }
}

// export
module.exports = Engineer;
