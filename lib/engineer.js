// requirements
const Employee = require("./Employee");

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
}

// export
module.exports = Engineer;
