// requirements

class Employee {
  // constructor function for employee properties
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // method getName() returns name
  getName() {
    return this.name;
  }

  // method getID() returns ID
  getID() {
    return this.id;
  }

  // methhod getEmail() returns email
  getEmail() {
    return this.email;
  }

  // method getRole - returns 'employee'
  getRole() {
    return "employee";
  }
}

// export
module.exports = Employee;
