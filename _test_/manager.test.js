const Manager = require("../lib/manager");

describe(`manager`, () => {
  it(`should create a new employee object when initialized`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

  it(`should set properties via the constructor`, () => {
    const manager = new Manager(1, "Sarah", "sarah@email.com", "10");
    expect(manager.name).toBe("Sarah");
    expect(manager.getRole()).toBe("Manager");
    expect(manager.officeNumber).toBe("10");
    expect(manager.getColor()).toBe("primary");
  });
});
