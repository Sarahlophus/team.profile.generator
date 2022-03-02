const Intern = require("../lib/intern");

describe(`intern`, () => {
  it(`should create a new employee object when initialized`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });

  it(`should set properties via the constructor`, () => {
    const intern = new Intern(1, "Sarah", "sarah@email.com", "Trilogy");
    expect(intern.name).toBe("Sarah");
    expect(intern.getRole()).toBe("Intern");
    expect(intern.school).toBe("Trilogy");
    expect(intern.getColor()).toBe("warning");
  });
});
