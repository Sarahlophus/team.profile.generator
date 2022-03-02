const Engineer = require("../lib/engineer");

describe(`engineer`, () => {
  it(`should create a new employee object when initialized`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });

  it(`should set properties via the constructor`, () => {
    const engineer = new Engineer(1, "Sarah", "sarah@email.com", "Sarahlophus");
    expect(engineer.name).toBe("Sarah");
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.gitHub).toBe("Sarahlophus");
    expect(engineer.getColor()).toBe("info");
  });
});
