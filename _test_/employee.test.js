const Employee = require("../lib/employee");

describe(`employee`, () => {
  it(`should create a new employee object when initialized`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  it(`should set properties via the constructor`, () => {
    const employee = new Employee(1, "Sarah", "sarah@email.com");
    expect(employee.name).toBe("Sarah");
    expect(employee.getRole()).toBe("employee");
  });
});
