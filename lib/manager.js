// requirements
const Employee = require("./employee");

// 'Manager' class extends 'Employee' class
class Manager extends Employee {
  // constructor adds 'officeNumber' to employee properties'
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  // method getRole() overwrites 'Employee' and returns 'Manager'
  getRole() {
    return "Manager";
  }
}

// export
module.exports = Manager;
